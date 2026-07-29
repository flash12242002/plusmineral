/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crystal } from '../types';
import GemRenderer from './GemRenderer';
import ChakraRadarChart from './ChakraRadarChart';
import { useApp } from '../context/AppContext';
import { playSingingBowl } from '../utils/audio';
import { 
  X, ShieldAlert, Sparkles, BookOpen, Compass, 
  HelpCircle, Volume2, RefreshCw, Heart, Instagram, ExternalLink
} from 'lucide-react';

interface CrystalDetailModalProps {
  crystal: Crystal | null;
  onClose: () => void;
  onRequireAuth?: (message: string) => void;
}

export default function CrystalDetailModal({ crystal, onClose, onRequireAuth }: CrystalDetailModalProps) {
  const [cleansingActive, setCleansingActive] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const { user, isFavorite, toggleFavorite } = useApp();

  if (!crystal) return null;

  const favorited = isFavorite(crystal.id);

  const handleFavoriteClick = async () => {
    if (!user) {
      if (onRequireAuth) {
        onRequireAuth('請先登入，即可將喜愛的水晶加入您的能量收藏夾中');
      }
      return;
    }
    try {
      await toggleFavorite(crystal.id);
    } catch (err) {
      console.error('Error toggling favorite:', err);
    }
  };

  // Handles the magical crystal/mental cleansing chime simulation
  const handleCleansingGong = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Play the high-fidelity synthesizer chime
    playSingingBowl();

    // 2. Set active state
    setCleansingActive(true);

    // 3. Spawn a ripple at the click location or center
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };

    setRipples((prev) => [...prev, newRipple]);

    // Resets ripple active banner after 4.5 seconds
    setTimeout(() => {
      setCleansingActive(false);
    }, 4500);

    // Fade specific ripple out of array
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 2000);
  };

  const energyLabels = [
    { key: 'calm', name: '靜心冥想 · Calm' },
    { key: 'love', name: '情感人緣 · Connection' },
    { key: 'fortune', name: '豐盛財富 · Abundance' },
    { key: 'protect', name: '避邪安定 · Grounding' },
    { key: 'focus', name: '專注靈感 · Clarity' }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden select-none">
        {/* Semi-transparent Backdrop overlay */}
        <motion.div
          id="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#33302C] mix-blend-multiply"
        />

        {/* Sliding Panel Container */}
        <motion.div
          id="modal-panel"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          className="relative w-full max-w-2xl h-full bg-white border-l border-[#EBE7E1] shadow-2xl flex flex-col z-10 overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 px-6 py-4 border-b border-[#F2EDE6] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#937C70] bg-[#F1EBE2] px-2.5 py-0.5 rounded-full">
                水晶檔案 · Archive
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleFavoriteClick}
                className={`px-3 py-1 bg-stone-50 hover:bg-stone-100 text-[#8E735B] rounded-full flex items-center gap-1.5 border border-[#ECE6DD] text-xs font-serif shadow-xs transition-all duration-300 active:scale-95 cursor-pointer`}
              >
                <Heart 
                  size={12} 
                  className={`transition-colors duration-300 ${favorited ? 'fill-rose-500 stroke-rose-500' : 'stroke-slate-500'}`} 
                />
                <span className="text-[11px] text-slate-600">{favorited ? '已收藏' : '收藏'}</span>
              </button>
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-[#F2ECE4] text-slate-400 hover:text-slate-700 transition-all duration-200"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Core Content */}
          <div className="p-6 md:p-8 flex-grow space-y-8">
            {/* 1. Hero Presentational Grid (Morandi-colored slate with Floating Crystal) */}
            <div 
              className="rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden shadow-inner border border-[#ECE6DD]"
              style={{ backgroundColor: crystal.morandiBg }}
            >
              {/* Absorbant dynamic radial background glow */}
              <div 
                className="absolute w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-35 -bottom-20 -left-10" 
                style={{ backgroundColor: crystal.gradientColors[1] }}
              />

              {/* Vector gem render with pulsing ground halo */}
              <div className="relative w-36 h-36 flex items-center justify-center flex-shrink-0 animate-bounce" style={{ animationDuration: '4s' }}>
                <div 
                  className="absolute w-24 h-4 rounded-full bg-slate-900/5 blur-sm bottom-0 left-6 animate-pulse scale-90"
                  style={{ animationDuration: '2s' }}
                />
                <div className="scale-125">
                  <GemRenderer color={crystal.gradientColors[1]} id={crystal.id} />
                </div>
              </div>

              {/* Basic metadata */}
              <div className="text-center md:text-left z-10 space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block">
                  {crystal.englishName}
                </span>
                <h1 className="text-3xl font-serif font-semibold text-slate-800 tracking-wide">
                  {crystal.name}
                </h1>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-1.5 font-mono text-xs text-slate-500">
                  {crystal.chemicalFormula && (
                    <span className="bg-white/80 border border-white/20 px-2.5 py-0.5 rounded-md shadow-sm">
                      化學式: <b className="text-slate-700">{crystal.chemicalFormula}</b>
                    </span>
                  )}
                  {crystal.hardness && (
                    <span className="bg-white/80 border border-white/20 px-2.5 py-0.5 rounded-md shadow-sm">
                      硬度: <b className="text-slate-700">{crystal.hardness} Mhos</b>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Poetic description introduction */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B5A595] flex items-center gap-1">
                <BookOpen size={12} className="opacity-75" /> 能量絮語 · Prose
              </span>
              <p className="text-[#514D49] leading-relaxed text-sm font-serif indent-6">
                {crystal.description}
              </p>
            </div>

            {/* 2. Slate Matrix (Energy Spectrum & 7-Chakra Resonance Radar) */}
            <div className="bg-[#FAF6F2] rounded-2xl p-6 border border-[#ECE5DD] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EDE6DE] pb-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#8C7A6B] flex items-center gap-1.5">
                  <Sparkles size={13} /> 能量維度與七脈輪光譜 · Energy & Chakra Spectrum
                </h3>
                <span className="text-[10px] font-mono text-[#A89886] bg-white/80 px-2 py-0.5 rounded-md border border-[#EDE6DE] w-fit">
                  七脈輪雷達共振圖
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left Column: 5 Energy Dimensions */}
                <div className="space-y-3">
                  <span className="text-[11px] font-serif text-[#6E645A] font-semibold block">
                    五大核心能量指數
                  </span>
                  <div className="space-y-3">
                    {energyLabels.map((item) => {
                      const score = crystal.energyIndex[item.key as keyof typeof crystal.energyIndex];
                      return (
                        <div key={item.key} className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-[#6E645A]">{item.name}</span>
                            <span className="font-mono font-semibold text-[#A89886]">{score} / 10</span>
                          </div>
                          <div className="h-1.5 w-full bg-[#EDE6DE] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${score * 10}%` }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: crystal.morandiText }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: 7 Chakras Radar Chart */}
                <div className="bg-white/70 rounded-xl p-4 border border-[#ECE5DD] flex flex-col items-center">
                  <span className="text-[11px] font-serif text-[#6E645A] font-semibold mb-1 block text-center">
                    七大脈輪能量對應 (Chakra Resonance)
                  </span>
                  <ChakraRadarChart crystal={crystal} />
                </div>
              </div>
            </div>

            {/* 3. Cleansing ritual with audio bell trigger */}
            <div className="rounded-2xl p-6 border border-[#E9E4DC] bg-[#FAF8F5] relative overflow-hidden flex flex-col justify-between">
              
              <div className="space-y-2 mb-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#8C7A6B] flex items-center gap-1.5">
                  <RefreshCw size={13} className="animate-spin" style={{ animationDuration: '8s' }} /> 消磁淨化 · Cleansing Guidance
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  水晶具有記憶與共振效應，定期進行心靈消磁能排出微細的濁氣。將此礦石放置於案頭，點擊按鈕來進行磬音共鳴：
                </p>
              </div>

              {/* Sound Bowl Area */}
              <div className="relative h-24 bg-white/70 border border-[#F2ECE2] rounded-xl flex flex-col items-center justify-center overflow-hidden">
                {/* Visual ripple generators */}
                {ripples.map((rip) => (
                  <span
                    key={rip.id}
                    className="absolute rounded-full border border-amber-600/30 scale-150 animate-ping"
                    style={{
                      left: rip.x - 20,
                      top: rip.y - 20,
                      width: '40px',
                      height: '40px',
                      animationDuration: '2s',
                    }}
                  />
                ))}

                <button
                  id="sound-bowl-trigger"
                  onClick={handleCleansingGong}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7D6652] hover:bg-[#685341] text-xs font-serif text-white tracking-widest font-normal hover:shadow-md transition-all duration-300 z-10 outline-none active:scale-[0.98]"
                >
                  <Volume2 size={14} className={cleansingActive ? 'animate-bounce' : ''} />
                  敲擊震盪消磁 (磬音 & 頌缽)
                </button>

                {cleansingActive ? (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] text-amber-800 font-serif tracking-widest mt-1.5"
                  >
                    Resonance in progress... 金屬磬音淨化共鳴中
                  </motion.p>
                ) : (
                  <p className="text-[10px] text-slate-400 font-mono tracking-wider mt-1.5">
                    Click to resonate Web Audio wave
                  </p>
                )}
              </div>

              {/* Detailed schedule notes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs">
                <div className="bg-white/40 rounded-lg p-3 border border-[#EBE6DE] space-y-1">
                  <span className="font-semibold text-slate-700 block">推薦配戴與淨化週期</span>
                  <p className="text-[#6E645A] leading-relaxed select-text">{crystal.cleansing.cycle}</p>
                </div>
                {crystal.cleansing.forbidden && (
                  <div className="bg-[#FAF2EE] rounded-lg p-3 border border-[#F2E4DF] space-y-1">
                    <span className="font-semibold text-red-800 flex items-center gap-1">
                      <ShieldAlert size={12} /> 淨化與日常禁忌
                    </span>
                    <p className="text-red-700/80 leading-relaxed select-text">{crystal.cleansing.forbidden}</p>
                  </div>
                )}
              </div>
            </div>

            {/* 4. Practical Instructions (Wearing rules & matching) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#8C7A6B] flex items-center gap-1">
                  <Compass size={13} /> 佩戴指引與手則
                </h4>
                <div className="bg-white rounded-xl p-4 border border-[#ECE5DD] text-xs text-[#514D49] leading-relaxed select-text">
                  {crystal.wearingRules}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#8C7A6B] flex items-center gap-1">
                  <Sparkles size={13} /> 能量互補搭配建議
                </h4>
                <div className="bg-white rounded-xl p-4 border border-[#ECE5DD] text-xs text-[#514D49] leading-relaxed select-text">
                  {crystal.matchTips}
                </div>
              </div>
            </div>

            {/* 5. Mystical Legend / Cultural Story */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#8C7A6B] flex items-center gap-1">
                📔 水晶印記與傳說 · Lore
              </h4>
              <p className="text-xs text-[#736A60] leading-relaxed font-serif indent-6 select-text whitespace-pre-line bg-stone-50 border border-[#F2ECE1] p-4 rounded-xl">
                {crystal.story}
              </p>
            </div>

            {/* 6. Instagram Real Picture Showcase Section */}
            <div className="space-y-3 pt-4 border-t border-[#F2ECE4]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#8C7A6B] flex items-center gap-1.5">
                <Instagram size={13} className="text-[#E1306C]" /> 水晶圖片 · Picture Showcase
              </h4>
              <div className="flex flex-col items-center bg-[#FAF8F5] border border-[#E9E4DC] rounded-2xl p-5 space-y-4 w-full">
                <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-serif font-medium text-slate-700 block">
                      官方 Instagram 水晶圖片
                    </span>
                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-md">
                      天然水晶在不同光線下皆有獨特而澄澈的折射美感。您可以透過下方視窗或點擊連結，觀看此水晶真實的晶體樣貌與影片。
                    </p>
                  </div>
                  {crystal.instagramUrl && (
                    <div className="flex-shrink-0">
                      <a
                        href={crystal.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#8a3ab9] via-[#e95950] to-[#fccc63] text-white rounded-xl text-xs font-serif hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer text-center justify-center decoration-none"
                      >
                        <Instagram size={9} />
                        <span>點我前往 IG 觀看圖片</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Embedded Instagram Iframe Post */}
                {crystal.instagramUrl ? (
                  <div className="relative rounded-xl flex justify-center w-full md:w-[320px] border border-[#F0EAE1] overflow-hidden bg-white shadow-xs ">
                    <iframe
                      src={`https://www.instagram.com/p/${crystal.instagramUrl.match(/\/p\/([a-zA-Z0-9_-]+)/)?.[1] || "DS8V-y8lFOg"}/embed`}
                      className="w-full md:w-[300px] border-0 rounded-xl"
                      style={{ minHeight: '440px' }}
                      scrolling='no'
                      allow="encrypted-media"
                    />
                  </div>
                ) : (
                  <div className="relative rounded-xl flex flex-col items-center justify-center w-full min-h-[160px] border border-dashed border-[#E5DEC3]/60 bg-[#FCFAF7] p-8 text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#8C7A6B]">
                      <Instagram size={18} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-serif font-medium text-[#7A6A5E]">實體照片正在陸續準備中</p>
                      <p className="text-[10px] text-slate-400 leading-relaxed max-w-xs mx-auto">
                        此水晶的專屬 Instagram 貼文連結目前尚未設定。
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="sticky bottom-0 bg-white border-t border-[#F2EDE6] p-4 text-center">
            <span className="text-[10px] font-mono text-slate-400">
              © 水晶能量誌 · 靜心呼吸，找回內在平靜的片刻
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
