/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
}

/**
 * Synthesizes a beautiful, rich Tibetan Singing Bowl / Temples Bell (磬音 / 頌缽) resonant tone.
 * Blends multiple harmonics and a subtle vibrato for an organic, relaxing sound.
 */
export function playSingingBowl(): void {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    
    // Core fundamental frequency: 220Hz (A3, soft heart warming) or 292Hz (D4, serene)
    const baseFreq = 220; 
    
    // We create multiple sine oscillators for the harmonics to simulate metal resonance
    // The coefficients represent a typical rich copper bowl resonance spectrum
    const components = [
      { ratio: 1.0,  gain: 0.4,   detune: 0,   decay: 5.0 }, // Fundamental
      { ratio: 1.95, gain: 0.15,  detune: 3,   decay: 4.5 }, // Near octave
      { ratio: 2.76, gain: 0.1,   detune: -2,  decay: 3.5 }, // Non-harmonic metal chime
      { ratio: 3.14, gain: 0.08,  detune: 4,   decay: 2.5 }, // High shimmer
      { ratio: 4.22, gain: 0.05,  detune: -5,  decay: 1.8 }, // Sparkling high tone
      { ratio: 5.51, gain: 0.03,  detune: 2,   decay: 1.0 }  // Extreme edge chime
    ];

    // Master bus gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(0.8, now + 0.1); // Quick attack
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + 6.0); // Smooth exponential decay over 6 seconds
    masterGain.connect(ctx.destination);

    // Create a slow low-frequency oscillator (LFO) for the beautiful "wa-wa-wa" singing bowl shimmer
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(3.8, now); // 3.8 Hz vibrato
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(15, now); // vibrato depth
    lfo.connect(lfoGain);
    lfo.start(now);

    const activeNodes: (OscillatorNode | GainNode)[] = [lfo, lfoGain, masterGain];

    components.forEach((comp) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * comp.ratio, now);
      osc.detune.setValueAtTime(comp.detune, now);
      
      // Connect LFO vibrato to the fundamental and low harmonics only for rich warm movement
      if (comp.ratio < 3.0) {
        lfoGain.connect(osc.frequency);
      }

      // Individual gain node for each harmonic to shape its decay
      oscGain.gain.setValueAtTime(0, now);
      oscGain.gain.linearRampToValueAtTime(comp.gain, now + 0.08);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + comp.decay);

      osc.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start(now);
      
      // Clean up sound after play completes
      osc.stop(now + 6.5);
      
      activeNodes.push(osc, oscGain);
    });

    // Stop LFO and disconnect nodes to avoid memory leakage
    setTimeout(() => {
      try {
        activeNodes.forEach(node => {
          node.disconnect();
        });
      } catch (err) {
        // Ignored
      }
    }, 7000);

  } catch (error) {
    console.warn('Web Audio is blocked or not supported on this browser context', error);
  }
}
