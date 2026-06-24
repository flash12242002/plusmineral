/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crystal } from '../types';
import { CRYSTALS } from '../data/crystals';
import GemRenderer from './GemRenderer';
import { Sparkles, Heart, Compass, Clipboard, Calendar, HelpCircle, RefreshCcw } from 'lucide-react';

interface EnergyAssessorProps {
  onSelectCrystal: (crystal: Crystal) => void;
}

interface Question {
  id: string;
  category: string; // 'calm' | 'love' | 'wealth' | 'protection' | 'focus' | 'communication'
  text: string;
}

const ASSESSMENT_QUESTIONS: Question[] = [
  { id: 'q1', category: 'calm', text: '近期覺得生活節奏太快，經常感到莫名緊繃或心中浮躁。' },
  { id: 'q2', category: 'love', text: '希望能敞開心胸，滋養溫柔的自我，並建立和諧溫和的親密人脈。' },
  { id: 'q3', category: 'wealth', text: '正處於事業或新創要隘，渴望喚醒內在富足本能，吸引幸運商機。' },
  { id: 'q4', category: 'protection', text: '需要進出成分複雜的環境（如醫院或老舊空間），或覺得容易受他人負能量干擾。' },
  { id: 'q5', category: 'focus', text: '近期面臨重要大考、專案研發或深度創作，常常卡關缺乏條理與靈感。' },
  { id: 'q6', category: 'communication', text: '經常面臨公開演說、業務面試，或有些隱隱積壓的心事難以溫和吐露。' },
];

export default function EnergyAssessor({ onSelectCrystal }: EnergyAssessorProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [assessmentResult, setAssessmentResult] = useState<{
    auraColor: string;
    dominantNeed: string;
    crystals: Crystal[];
    pros: string;
    mantra: string;
  } | null>(null);

  const toggleAnswer = (id: string) => {
    setSelectedAnswers((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRunAssessment = () => {
    if (selectedAnswers.length === 0) return;

    // Count categories representing user's highest density needs
    const counts: Record<string, number> = {
      calm: 0,
      love: 0,
      wealth: 0,
      protection: 0,
      focus: 0,
      communication: 0,
    };

    selectedAnswers.forEach((ansId) => {
      const ques = ASSESSMENT_QUESTIONS.find((q) => q.id === ansId);
      if (ques) {
        counts[ques.category] += 1;
      }
    });

    // Find highest category
    let maxCategory = 'calm';
    let maxVal = -1;
    Object.entries(counts).forEach(([cat, val]) => {
      if (val > maxVal) {
        maxVal = val;
        maxCategory = cat;
      }
    });

    // Map highest category to specific customized recipes
    let auraColor = '';
    let dominantNeed = '';
    let crystalKeys: string[] = [];
    let pros = '';
    let mantra = '';

    switch (maxCategory) {
      case 'calm':
        auraColor = '松霜霧綠 & 柔光青月 (Sage Mist & Pearl White)';
        dominantNeed = '內在療癒與靜心';
        crystalKeys = ['moonstone', 'clear-quartz', 'amethyst'];
        pros = '您當下的能量氣場偏向緊繃、期盼卸下心防的霧灰色。生活帶給您的超載雜訊迫切需要「大自然白噪音式的放空」來和解。';
        mantra = '「在一吐一吸間，容許自己溫柔擱淺；大地與明月會穩穩承托我的疲憊。」';
        break;
      case 'love':
        auraColor = '櫻花粉霞 & 柔乳白暈 (Rose Coral & Alabaster)';
        dominantNeed = '敞開心房與親密人情';
        crystalKeys = ['rose-quartz', 'moonstone', 'aquamarine'];
        pros = '您當前在人際鏈結與伴侶關係中尋找安定的溫床。相較於激烈追求，您首先需要療癒自我，讓內在自愛、包和的力量如漣漪般徐徐散開。';
        mantra = '「我有足夠的溫柔容納風雨，也值得收穫這世界最誠實的善意與相待。」';
        break;
      case 'wealth':
        auraColor = '輝煌流金 & 溫潤琥珀 (Royal Citrine & Amber Gold)';
        dominantNeed = '喚醒富貴商機與自信魄力';
        crystalKeys = ['citrine', 'rutilated-quartz', 'tigers-eye'];
        pros = '您正站在開疆闢土的決策風口上。您的氣場迫切渴望被陽光與火焰的頻率激活，驅散做事拖延、遲疑不決的迷茫，開拓物質豐饒的實體成果。';
        mantra = '「豐盛財運本就與我的實幹心念和合；我有膽識，並穩穩跨出開創第一步。」';
        break;
      case 'protection':
        auraColor = '深淵黑曜 & 寂白護界 (Abyssal Obsidian & Astral Silver)';
        dominantNeed = '建立守護防禦氣場';
        crystalKeys = ['black-obsidian', 'tigers-eye', 'clear-quartz'];
        pros = '周遭稠密的負能量干擾和人情瑣碎可能正在透支您的天線。您當下的靈魂渴望穿戴上一套乾淨、厚實的「黑磁棱鏡護甲」，將任何偏見惡意轉化為清涼的沉默。';
        mantra = '「我是我靈魂唯一的守護結界。我所立足的大地無比堅硬，濁物不侵。」';
        break;
      case 'focus':
        auraColor = '晨霧紫藤 & 靛青群星 (藤紫與深靛色 - Indigo & Fluorite Violet)';
        dominantNeed = '梳理混沌心智與激發靈感';
        crystalKeys = ['fluorite', 'amethyst', 'clear-quartz'];
        pros = '思緒過度繁雜引致腦部運作超載，如同散落一桌的書籍急需分類梳理。天才螢石與紫水晶的光譜能引導您進行腦葉放鬆，重構邏輯與靈性的無縫銜接。';
        mantra = '「紊亂終有停息的一刻。當湖水平靜之時，大智慧的天空便會清晰倒映。」';
        break;
      case 'communication':
        auraColor = '蔚藍海洋 & 清冷碧冰 (Cyan Sea & Ice Aquamarine)';
        dominantNeed = '順暢溝通與真實自陳';
        crystalKeys = ['aquamarine', 'lapis-lazuli', 'clear-quartz'];
        pros = '想說出的話在喉頭打結，或者為了迎合外界而做出無效的假性附和。此時海藍寶的深洋共鳴能溫柔支持您，無懼爭執、用最誠懇、最條理的頻率吐露誠實心意。';
        mantra = '「我真實的聲音具有重量。我能平和、優雅且不可動搖地道出我的洞見。」';
        break;
      default:
        auraColor = '全光譜白光 (All-spectrum Clear)';
        dominantNeed = '全面性氣場微調';
        crystalKeys = ['clear-quartz', 'amethyst', 'rose-quartz'];
        pros = '您的能量架構總體處於相對流動平衡期，可以進行基本的全方位白水晶光波加強，維持生活元氣。';
        mantra = '「我是澄亮的水體，澄澈、理智、且接納萬物的頻率。」';
    }

    // Convert keys to crystal list
    const recommendedCrystals = CRYSTALS.filter((c) => crystalKeys.includes(c.id));

    setAssessmentResult({
      auraColor,
      dominantNeed,
      crystals: recommendedCrystals,
      pros,
      mantra
    });
  };

  const handleReset = () => {
    setSelectedAnswers([]);
    setAssessmentResult(null);
  };

  return (
    <div id="plus-mineral-assessor-root" className="bg-white rounded-3xl p-6 md:p-8 border border-[#EBE7E1] shadow-sm space-y-6">
      
      {/* Intro Header */}
      <div className="space-y-1.5 text-center sm:text-left">
        <h3 className="text-xl font-serif font-semibold text-slate-800 tracking-wide flex items-center justify-center sm:justify-start gap-2">
          <Sparkles className="text-[#A38E7E] animate-pulse" size={20} />
          有點礦晶石工坊 · Plus Mineral
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
          依據您當前的直覺、情緒波瀾和身體本能，勾選符合您現在的感受。水晶指南將調配出一份專屬的「水晶配方箋」，指引您重回心靈沉澱之境。
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!assessmentResult ? (
          // QUESTION SELECTION STATE
          <motion.div
            key="questions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            {/* Question Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {ASSESSMENT_QUESTIONS.map((q) => {
                const isSelected = selectedAnswers.includes(q.id);
                return (
                  <button
                    key={q.id}
                    id={`assessor-question-${q.id}`}
                    onClick={() => toggleAnswer(q.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3 select-none outline-none ${
                      isSelected
                        ? 'bg-[#FAF4EE] border-[#D9C4B0] shadow-sm'
                        : 'bg-white hover:bg-stone-50 border-[#EDE8E2]'
                    }`}
                  >
                    {/* Tick box circle */}
                    <div className={`mt-0.5 w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors duration-200 ${
                      isSelected ? 'border-[#8E735B] bg-[#8E735B]' : 'border-stone-300 bg-white'
                    }`}>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className="text-xs text-slate-600 leading-relaxed">
                      {q.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Run Button */}
            <div className="pt-4 flex justify-center sm:justify-end">
              <button
                id="run-assessment-btn"
                onClick={handleRunAssessment}
                disabled={selectedAnswers.length === 0}
                className={`px-8 py-3 rounded-xl font-serif tracking-widest text-xs transition-all duration-300 shadow-sm ${
                  selectedAnswers.length > 0
                    ? 'bg-[#8E735B] hover:bg-[#78604B] text-white cursor-pointer active:scale-[0.98]'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                解鎖我的水晶處方箋 →
              </button>
            </div>
          </motion.div>
        ) : (
          // RESULT PRESENTATION STATE
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="border border-[#E2DCD3] rounded-2xl bg-white p-6 md:p-8 shadow-sm space-y-6"
          >
            {/* Header Result Badge */}
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 border-b border-[#F2ECE4] pb-4">
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#B3937A] uppercase bg-[#FAF2EC] px-2.5 py-0.5 rounded-full">
                  能量診斷結果 · Assessment Card
                </span>
                <h4 className="text-xl font-serif text-slate-700 tracking-wide mt-1.5">
                  推薦搭配需求：<b>{assessmentResult.dominantNeed}</b>
                </h4>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block font-mono">預估能量光譜 (Estimated Energy Spectrum)</span>
                <span className="text-xs text-[#8E735B] font-medium font-sans bg-stone-50 px-3 py-1 rounded-md border border-stone-100 inline-block mt-1">
                  {assessmentResult.auraColor}
                </span>
              </div>
            </div>

            {/* Diagnose Prose Paragraph */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase">
                📖 能量解說與分析 · Oracle Analytics
              </span>
              <p className="text-xs text-[#514D49] leading-relaxed select-text font-serif bg-white p-4 rounded-xl border border-[#F2EFE8]">
                {assessmentResult.pros}
              </p>
            </div>

            {/* Recoded Crystals Cluster */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase">
                💍 您的水晶配方 · Recommended Geodes
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {assessmentResult.crystals.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => onSelectCrystal(c)}
                    className="p-4 rounded-xl border border-[#ECE5DD] bg-white hover:bg-stone-50 cursor-pointer transition-all duration-300 flex items-center gap-3 select-none"
                  >
                    {/* Small preview of gem */}
                    <div className="w-10 h-10 flex-shrink-0" style={{ backgroundColor: c.morandiBg, borderRadius: '50%' }}>
                      <div className="scale-75 -translate-y-1">
                        <GemRenderer color={c.gradientColors[1]} id={c.id} />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs font-serif font-medium text-slate-700">{c.name}</h5>
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">{c.englishName}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mantra Ritual card */}
            <div className="bg-[#FAF6F1] border border-[#ECDCCB] rounded-xl p-5 text-center space-y-2">
              <span className="text-[10px] font-mono text-[#A89886] tracking-widest block">每日冥想定靜心咒 · Daily Mantra</span>
              <p className="text-sm font-serif italic text-[#7D6652] tracking-wider select-text">
                {assessmentResult.mantra}
              </p>
            </div>

            {/* Action Bottom */}
            <div className="flex justify-between items-center pt-3 border-t border-[#F2ECE4]">
              <span className="text-[10px] font-mono text-slate-400">
                建議：可將此建議之水晶配戴於相應手腕處，並進行磐音調息。
              </span>
              <button
                id="reset-assessor-btn"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-amber-900/60 hover:text-amber-900 transition-colors duration-200 font-serif"
              >
                <RefreshCcw size={12} />
                重新檢測能量
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
