/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crystal } from '../types';
import { CRYSTALS } from '../data/crystals';
import GemRenderer from './GemRenderer';
import { playCrystalChime } from '../utils/audio';
import { Sparkles, Heart, Compass, Clipboard, Calendar, HelpCircle, RefreshCcw, Hash, BookOpen } from 'lucide-react';

interface EnergyAssessorProps {
  onSelectCrystal: (crystal: Crystal) => void;
}

interface Question {
  id: string;
  category: string; // 'calm' | 'love' | 'wealth' | 'protection' | 'focus' | 'communication'
  text: string;
}

interface NumerologyProfile {
  number: number;
  name: string;
  moniker: string;
  traits: string;
  lesson: string;
  crystals: string[]; // crystal IDs
}

const NUMEROLOGY_PROFILES: Record<number, NumerologyProfile> = {
  1: {
    number: 1,
    name: '1號人',
    moniker: '獨立與開創的先鋒 (The Leader)',
    traits: '具備天生的領袖氣質、極強的開創精神與獨立意志。做事果斷、自信滿滿，常能自主開闢新路徑。然而，也容易流於急躁、過度以自我為中心，或在人群中隱隱感到孤立無援。',
    lesson: '學會傾聽他人的聲音，在堅定自我的同時，注入溫柔的包容與和解，讓意志更加圓融。',
    crystals: ['red-agate', 'Southern-red-agate', 'citrine', 'tigers-eye', 'Smoky-quartz']
  },
  2: {
    number: 2,
    name: '2號人',
    moniker: '溫柔與合作的傾聽者 (The Diplomat)',
    traits: '心思極為細膩、善解人意，天生具備強大的傾聽同理心與協調能力，是完美的合作夥伴。但也因為過於敏感、重視和諧，容易陷入猶豫不決、委曲求全，或容易受他人情緒和環境雜音干擾。',
    lesson: '學習堅定自己的底線與主見，溫柔地表達真實看法，不被外界隨意左右。',
    crystals: ['moonstone', 'aquamarine', 'rose-quartz']
  },
  3: {
    number: 3,
    name: '3號人',
    moniker: '靈感與創意的藝術家 (The Creator)',
    traits: '熱情洋溢、天性樂觀、極富想像力與藝術美感，在言語或創作表達上非常有感染力。然而，也容易因為思緒太過活躍而缺乏條理、做事三分鐘熱度、或在熱情退去後感到迷茫與空虛。',
    lesson: '尋求心靈的深度沉澱，專注於當下的實踐，將漫無邊際的靈感轉化為真實的創作成果。',
    crystals: ['strawberry-quartz', 'amethyst', 'Kyanite', 'Lolite']
  },
  4: {
    number: 4,
    name: '4號人',
    moniker: '務實與守護的實踐者 (The Builder)',
    traits: '踏實穩健、做事有條不紊、極度注重秩序與安全感，是讓人無比信賴的中流砥柱。但是，也容易因為過度追求穩固而顯得保守固執，或因突如其來的變動而感到緊繃焦慮。',
    lesson: '放開緊繃的掌控欲，擁抱生活中的不確定性，讓靈魂在流動中體會真正的安全感。',
    crystals: ['black-obsidian', 'green-phantom-quartz', 'tigers-eye', 'Smoky-quartz']
  },
  5: {
    number: 5,
    name: '5號人',
    moniker: '自由與變革的冒險家 (The Explorer)',
    traits: '熱愛自由、適應力極強、多才多藝，隨時準備探索未知。具有極強的實踐力與求知欲。但容易因為過於追求新奇而缺乏耐心、節奏過快、或在日常繁瑣中感到極度壓抑。',
    lesson: '在自由奔放的旅途中，為自己尋找一處安定的錨點，學會重整核心焦點並享受深度的靜心。',
    crystals: ['clear-quartz', 'Southern-red-agate', 'green-phantom-quartz', 'Kyanite']
  },
  6: {
    number: 6,
    name: '6號人',
    moniker: '愛與奉獻的療癒者 (The Nurturer)',
    traits: '富有極強的慈悲心與責任感，樂於奉獻、照顧他人，注重家庭與人際的和諧。但極易陷入「過度操心、強加期許」的漩渦，甚至忽視了自己的內在療癒。',
    lesson: '在照顧他人前先全然地接納、擁抱自己，懂得「退一步」的無私，讓愛以健康的頻率流動。',
    crystals: ['rose-quartz', 'moonstone', 'strawberry-quartz', 'Lolite']
  },
  7: {
    number: 7,
    name: '7號人',
    moniker: '智慧與求真的哲學家 (The Seeker)',
    traits: '具備極強的邏輯分析力與觀察力，喜歡鑽研事物背後的真相與真理，精神層面極深。但容易流於思慮過度、疑心過重，或因看透太多而產生與世界脫節的孤寂感。',
    lesson: '將理智的探求與內在的靈性直覺融合，放下大腦的打轉，使大腦重獲清明與平靜。',
    crystals: ['fluorite', 'amethyst', 'Kyanite', 'Lolite']
  },
  8: {
    number: 8,
    name: '8號人',
    moniker: '豐盛與權威的掌舵者 (The Achiever)',
    traits: '天生極具商業思維、執行力、遠大抱負與高效的組織能力，是追求豐盛卓越的行動派。但在高壓環境下，容易因過度追求掌控、執著物質回報而感到筋疲力盡、心力交瘁。',
    lesson: '學會連結內在真正的精神豐盛，在物質與心靈、掌控與臣服之間取得完美平衡。',
    crystals: ['rutilated-quartz', 'Southern-red-agate', 'citrine', 'black-obsidian', 'Smoky-quartz']
  },
  9: {
    number: 9,
    name: '9號人',
    moniker: '大愛與靈性的夢想家 (The Philanthropist)',
    traits: '慈悲為懷、樂善好施、靈性感知力極高，是無私的理想主義者。但也容易因為過度敏感而像海綿一樣吸收周遭雜氣、陷入不切實際的空想、或對現實世界感到悲觀失望。',
    lesson: '做好個人能量防護，將高遠的夢想「接地氣」地實踐在物質世俗中，穩定自身頻率。',
    crystals: ['clear-quartz', 'amethyst', 'lapis-lazuli', 'Lolite']
  }
};

const ASSESSMENT_QUESTIONS: Question[] = [
  { id: 'q1', category: 'calm', text: '近期覺得生活節奏太快，經常感到莫名緊繃或心中浮躁。' },
  { id: 'q2', category: 'love', text: '希望能敞開心胸，滋養溫柔的自我，並建立和諧溫和的親密人脈。' },
  { id: 'q3', category: 'wealth', text: '正處於事業或新創要隘，渴望喚醒內在富足本能，吸引幸運商機。' },
  { id: 'q4', category: 'protection', text: '需要進出成分複雜的環境（如醫院或老舊空間），或覺得容易受他人負能量干擾。' },
  { id: 'q5', category: 'focus', text: '近期面臨重要大考、專案研發或深度創作，常常卡關缺乏條理與靈感。' },
  { id: 'q6', category: 'communication', text: '經常面臨公開演說、業務面試，或有些隱隱積壓的心事難以溫和吐露。' },
];

export default function EnergyAssessor({ onSelectCrystal }: EnergyAssessorProps) {
  const [subTab, setSubTab] = useState<'prescription' | 'numerology'>('prescription');
  
  // Birth state variables
  const [birthYear, setBirthYear] = useState('1995');
  const [birthMonth, setBirthMonth] = useState('10');
  const [birthDay, setBirthDay] = useState('25');
  const [numerologyResult, setNumerologyResult] = useState<{
    lifePathNumber: number;
    steps: { formula: string; result: number }[];
  } | null>(null);

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [assessmentResult, setAssessmentResult] = useState<{
    auraColor: string;
    dominantNeed: string;
    crystals: Crystal[];
    pros: string;
    mantra: string;
  } | null>(null);

  // Life Path Number Calculator algorithm
  const calculateLifePath = (year: string, month: string, day: string) => {
    const cleanMonth = month.padStart(2, '0');
    const cleanDay = day.padStart(2, '0');
    const fullString = `${year}${cleanMonth}${cleanDay}`;
    
    // Step 1: Sum all digits
    const digits = fullString.split('').map(Number);
    const step1Formula = digits.join(' + ');
    const step1Sum = digits.reduce((a, b) => a + b, 0);
    
    const steps: { formula: string; result: number }[] = [
      { formula: step1Formula, result: step1Sum }
    ];
    
    let currentVal = step1Sum;
    while (currentVal > 9) {
      const nextDigits = currentVal.toString().split('').map(Number);
      const nextFormula = nextDigits.join(' + ');
      const nextSum = nextDigits.reduce((a, b) => a + b, 0);
      steps.push({ formula: nextFormula, result: nextSum });
      currentVal = nextSum;
    }
    
    return {
      lifePathNumber: currentVal,
      steps
    };
  };

  const handleCalculateNumerology = () => {
    const res = calculateLifePath(birthYear, birthMonth, birthDay);
    setNumerologyResult(res);
  };

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

  const yearsList = Array.from({ length: 80 }, (_, i) => (2026 - i).toString());
  const monthsList = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const daysList = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const numWords = ['一', '二', '三', '四', '五'];

  return (
    <div id="plus-mineral-assessor-root" className="bg-white rounded-3xl p-6 md:p-8 border border-[#EBE7E1] shadow-sm space-y-6">
      
      {/* Intro Header */}
      <div className="space-y-1.5 text-center sm:text-left">
        <h3 className="text-xl font-serif font-semibold text-slate-800 tracking-wide flex items-center justify-center sm:justify-start gap-2">
          <Sparkles className="text-[#A38E7E] animate-pulse" size={20} />
          有點礦晶石工坊 · Plus Mineral
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed max-w-xs md:max-w-none">
          {subTab === 'prescription' 
            ? '依據您當前的直覺、情緒波瀾和身體本能，勾選符合您現在的感受。水晶指南將調配出一份專屬的「水晶配方箋」，指引您重回心靈沉澱之境。'
            : '輸入西元出生年月日，透過希臘神秘學的生命數字演算，解開您的靈魂天賦密碼，並指引最契合您的天生守護水晶。'
          }
        </p>
      </div>

      {/* 2. Sub-tab switcher bar */}
      <div className="flex border-b border-[#F2ECE4] pb-1 gap-6">
        <button
          onClick={() => { setSubTab('prescription'); playCrystalChime(); }}
          className={`pb-2.5 px-1 text-xs font-serif font-medium tracking-wide border-b-2 transition-all duration-300 relative cursor-pointer ${
            subTab === 'prescription'
              ? 'border-[#8E735B] text-[#8E735B]'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          🔮 水晶處方箋
        </button>
        <button
          onClick={() => { setSubTab('numerology'); playCrystalChime(); }}
          className={`pb-2.5 px-1 text-xs font-serif font-medium tracking-wide border-b-2 transition-all duration-300 relative cursor-pointer ${
            subTab === 'numerology'
              ? 'border-[#8E735B] text-[#8E735B]'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          🔢 生命靈數分析
        </button>
      </div>

      <AnimatePresence mode="wait">
        {subTab === 'prescription' ? (
          // A. CRYSTAL PRESCRIPTION (Original flow)
          <div key="prescription-tab">
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
                          onClick={() => { toggleAnswer(q.id); playCrystalChime(); }}
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
                      onClick={() => { handleRunAssessment(); playCrystalChime(); }}
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
                          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center overflow-hidden" style={{ backgroundColor: c.morandiBg, borderRadius: '50%' }}>
                            <GemRenderer color={c.gradientColors[1]} id={c.id} size="xs" />
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
                      onClick={() => { handleReset(); playCrystalChime(); }}
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
        ) : (
          // B. LIFE PATH NUMBER (Numerology Flow)
          <div key="numerology-tab" className="space-y-4">
            <AnimatePresence mode="wait">
              {!numerologyResult ? (
                // 1. INPUT FORM STATE
                <motion.div
                  key="numerology-inputs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-5 bg-stone-50/50 border border-[#ECE6DD] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 border-b border-[#F2ECE4] pb-3 mb-2">
                    <Calendar className="text-[#8E735B]" size={16} />
                    <h4 className="text-xs font-serif font-semibold tracking-wider text-slate-700">
                      輸入您的西元出生年月日 · Birth Date Selection
                    </h4>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* Year select */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 block uppercase">西元年 (Year)</label>
                      <select
                        value={birthYear}
                        onChange={(e) => setBirthYear(e.target.value)}
                        className="w-full bg-white border border-[#E1DCD3] rounded-xl px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-[#8E735B] transition-colors"
                      >
                        {yearsList.map(y => (
                          <option key={y} value={y}>{y} 年</option>
                        ))}
                      </select>
                    </div>

                    {/* Month select */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 block uppercase">月份 (Month)</label>
                      <select
                        value={birthMonth}
                        onChange={(e) => setBirthMonth(e.target.value)}
                        className="w-full bg-white border border-[#E1DCD3] rounded-xl px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-[#8E735B] transition-colors"
                      >
                        {monthsList.map(m => (
                          <option key={m} value={m}>{m} 月</option>
                        ))}
                      </select>
                    </div>

                    {/* Day select */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 block uppercase">日期 (Day)</label>
                      <select
                        value={birthDay}
                        onChange={(e) => setBirthDay(e.target.value)}
                        className="w-full bg-white border border-[#E1DCD3] rounded-xl px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-[#8E735B] transition-colors"
                      >
                        {daysList.map(d => (
                          <option key={d} value={d}>{d} 日</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Run button */}
                  <div className="pt-4 flex justify-center sm:justify-end">
                    <button
                      onClick={() => { handleCalculateNumerology(); playCrystalChime(); }}
                      className="px-8 py-3 bg-[#8E735B] hover:bg-[#78604B] text-white rounded-xl font-serif tracking-widest text-xs transition-all duration-300 shadow-sm cursor-pointer active:scale-[0.98]"
                    >
                      計算我的生命靈數 →
                    </button>
                  </div>
                </motion.div>
              ) : (
                // 2. REPORT RESULT STATE
                <motion.div
                  key="numerology-report"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="border border-[#E2DCD3] rounded-2xl bg-white p-6 md:p-8 shadow-sm space-y-6"
                >
                  {/* Result Header */}
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 border-b border-[#F2ECE4] pb-4">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-[#B3937A] uppercase bg-[#FAF2EC] px-2.5 py-0.5 rounded-full">
                        生命靈數診斷結果 · Numerology Oracle
                      </span>
                      <h4 className="text-xl font-serif text-slate-700 tracking-wide mt-1.5">
                        您的靈魂密碼：<b className="text-[#8E735B] text-2xl ml-1">{numerologyResult.lifePathNumber} 號人</b>
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block font-mono">出生年月日 (Birth Date)</span>
                      <span className="text-xs text-slate-600 font-medium font-serif bg-stone-50 px-3 py-1 rounded-md border border-stone-100 inline-block mt-1">
                        {birthYear} 年 {birthMonth} 月 {birthDay} 日
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Math Calculation Breakdown (Matching user's image style exactly) */}
                  <div className="bg-[#FAF6F1] border border-[#ECDCCB] rounded-xl p-5 space-y-3">
                    <span className="text-[10px] font-mono text-[#A89886] tracking-widest block flex items-center gap-1.5">
                      <Hash size={12} /> 希臘神秘學生命靈數計算式
                    </span>
                    <div className="space-y-2">
                      {numerologyResult.steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs text-slate-600 font-serif">
                          <span className="font-semibold text-[#8E735B]">
                            步驟{numWords[idx] || (idx + 1)}：
                          </span>
                          <span className="font-mono text-slate-500 tracking-wider">
                            {step.formula}
                          </span>
                          <span className="hidden sm:inline text-slate-300">|</span>
                          <span className="text-slate-700 font-semibold font-sans">
                            得到二位數 = {step.result}
                          </span>
                        </div>
                      ))}
                      <div className="border-t border-[#ECDCCB]/60 pt-2.5 mt-2 flex items-center gap-2 text-xs text-slate-700 font-serif">
                        <span className="font-semibold text-[#8E735B]">最終結果：</span>
                        <span>恭喜！您就是代表生命的 <b>{numerologyResult.lifePathNumber} 號人</b>！</span>
                      </div>
                    </div>
                  </div>

                  {/* Character Moniker & Traits */}
                  {(() => {
                    const profile = NUMEROLOGY_PROFILES[numerologyResult.lifePathNumber];
                    if (!profile) return null;
                    
                    // Match the calculated crystals list from CRYSTALS data
                    const recCrystals = profile.crystals
                      .map(id => CRYSTALS.find(c => c.id === id))
                      .filter((c): c is Crystal => !!c);

                    return (
                      <div className="space-y-5">
                        {/* Core Moniker Bar */}
                        <div className="border-l-4 border-[#8E735B] pl-4 space-y-1">
                          <span className="text-[10px] font-mono tracking-widest text-[#B3937A] block uppercase">靈魂定位 · Archetype Moniker</span>
                          <h5 className="text-lg font-serif font-medium text-slate-800">
                            {profile.moniker}
                          </h5>
                        </div>

                        {/* Traits text */}
                        <div className="space-y-2 select-text">
                          <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase flex items-center gap-1">
                            <BookOpen size={11} /> 靈魂真實性格特徵 · Core Personality Traits
                          </span>
                          <p className="text-xs text-[#514D49] leading-relaxed font-serif bg-stone-50 p-4 rounded-xl border border-stone-100">
                            {profile.traits}
                          </p>
                        </div>

                        {/* Life lesson */}
                        <div className="space-y-2 select-text">
                          <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase flex items-center gap-1">
                            <Compass size={11} /> 靈魂今生修煉課題 · Life Lessons & Challenges
                          </span>
                          <p className="text-xs text-[#514D49] leading-relaxed font-serif bg-stone-50 p-4 rounded-xl border border-stone-100">
                            {profile.lesson}
                          </p>
                        </div>

                        {/* Suitable crystals list with actual detailed view toggle */}
                        <div className="space-y-3">
                          <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase flex items-center gap-1">
                            <Sparkles size={11} /> 專屬天生守護水晶推薦 · Guardian Crystals
                          </span>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {recCrystals.map((c) => (
                              <div
                                key={c.id}
                                onClick={() => onSelectCrystal(c)}
                                className="p-4 rounded-xl border border-[#ECE5DD] bg-white hover:bg-stone-50 cursor-pointer transition-all duration-300 flex items-center gap-3 select-none"
                              >
                                {/* Small preview of gem */}
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center overflow-hidden" style={{ backgroundColor: c.morandiBg, borderRadius: '50%' }}>
                                  <GemRenderer color={c.gradientColors[1]} id={c.id} size="xs" />
                                </div>
                                <div>
                                  <h5 className="text-xs font-serif font-medium text-slate-700">{c.name}</h5>
                                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">{c.englishName}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Reset action footer */}
                  <div className="flex justify-between items-center pt-3 border-t border-[#F2ECE4]">
                    <span className="text-[10px] font-mono text-slate-400">
                      提示：點擊上方水晶卡片可查看其完整化學公式、保養禁忌與消磁守則。
                    </span>
                    <button
                      onClick={() => { setNumerologyResult(null); playCrystalChime(); }}
                      className="inline-flex items-center gap-1.5 text-xs text-amber-900/60 hover:text-amber-900 transition-colors duration-200 font-serif cursor-pointer"
                    >
                      <RefreshCcw size={12} />
                      重新計算生命靈數
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
