import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crystal } from '../types';
import { 
  X, Sparkles, Heart, Calendar, User, Compass, 
  Smile, ShieldAlert, Award, Star, ArrowRight 
} from 'lucide-react';
import { playCrystalChime } from '../utils/audio';

interface MemberProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  favorites: string[];
  crystals: Crystal[];
}

export default function MemberProfileModal({ 
  isOpen, 
  onClose, 
  user, 
  favorites, 
  crystals 
}: MemberProfileModalProps) {
  const [dailyCard, setDailyCard] = useState<Crystal | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  if (!isOpen) return null;

  // 1. Format join date beautifully
  const joinDateStr = useMemo(() => {
    if (!user || !user.metadata || !user.metadata.creationTime) {
      return '流光歲月之中';
    }
    try {
      const date = new Date(user.metadata.creationTime);
      return `${date.getFullYear()} 年 ${String(date.getMonth() + 1).padStart(2, '0')} 月 ${String(date.getDate()).padStart(2, '0')} 日`;
    } catch (e) {
      return '流光歲月之中';
    }
  }, [user]);

  // 2. Map favorites to crystal objects
  const favoriteCrystals = useMemo(() => {
    return crystals.filter(c => favorites.includes(c.id));
  }, [favorites, crystals]);

  // 3. Calculate dominant energy statistics from favorites
  const energyInsights = useMemo(() => {
    if (favoriteCrystals.length === 0) {
      return null;
    }

    const chakraCounts: Record<string, number> = {};
    let totalCalm = 0;
    let totalLove = 0;
    let totalFortune = 0;
    let totalProtect = 0;
    let totalFocus = 0;

    favoriteCrystals.forEach(c => {
      // Chakra distribution
      c.chakras.forEach(ch => {
        chakraCounts[ch] = (chakraCounts[ch] || 0) + 1;
      });

      // Energy index sums
      totalCalm += c.energyIndex.calm;
      totalLove += c.energyIndex.love;
      totalFortune += c.energyIndex.fortune;
      totalProtect += c.energyIndex.protect;
      totalFocus += c.energyIndex.focus;
    });

    // Find dominant chakra
    let dominantChakra = '';
    let maxChakraCount = 0;
    Object.entries(chakraCounts).forEach(([chk, count]) => {
      if (count > maxChakraCount) {
        maxChakraCount = count;
        dominantChakra = chk;
      }
    });

    // Find highest energy index average
    const counts = favoriteCrystals.length;
    const avgEnergy = {
      calm: totalCalm / counts,
      love: totalLove / counts,
      fortune: totalFortune / counts,
      protect: totalProtect / counts,
      focus: totalFocus / counts
    };

    let dominantCategory = 'calm';
    let maxAvg = 0;
    Object.entries(avgEnergy).forEach(([cat, val]) => {
      if (val > maxAvg) {
        maxAvg = val;
        dominantCategory = cat;
      }
    });

    const categoryNames: Record<string, string> = {
      calm: '內在靜心冥想',
      love: '深層情感與人緣',
      fortune: '豐盛財富引力',
      protect: '避邪護身定心',
      focus: '專注啟發與靈感'
    };

    const chakraTips: Record<string, string> = {
      '頂輪': '您正處於高維覺知與思考的共鳴中。建議配戴白水晶或拉長石，能協助您沉澱思緒，安定靈性思維。',
      '眉心輪': '您的直覺力與第六感極為敏銳。配戴紫水晶、瑩石或藍晶石，有助於洞察真實自我，激發創意思維。',
      '喉輪': '您展現出渴望表達與溝通平衡的和諧狀態。配戴海藍寶或藍晶石，能活絡聲音與文字表達的純淨能量。',
      '心輪': '您內心流動著溫柔的同理心與愛的能量。配戴粉晶、草莓晶或綠幽靈，有助於療癒內在，擁抱幸福。',
      '太陽輪': '您正渴望建立自信與強大的意志實踐力。黃水晶或虎眼石能為您注入耀眼的光芒，加強執行力。',
      '臍輪': '您正尋求感性情緒的和諧與生命熱情的流淌。配戴紅條紋瑪瑙或南紅瑪瑙，能平衡情感，激發熱忱。',
      '海底輪': '您十分注重生活的安全感與紮實的接地力量。配戴黑曜石或煙水晶，能驅散濁氣，建立穩固的內在結界。'
    };

    return {
      dominantChakra,
      dominantCategory: categoryNames[dominantCategory] || '身心靈平衡',
      chakraTip: chakraTips[dominantChakra] || '您的能量場呈現多重脈輪的和諧流動。請持續傾聽內在直覺，維持純淨覺知。',
      avgEnergy
    };
  }, [favoriteCrystals]);

  // 4. Draw a random crystal for guidance
  const handleDrawCard = () => {
    if (isDrawing || crystals.length === 0) return;
    playCrystalChime();
    setIsDrawing(true);
    setIsFlipped(false);
    
    // Animate drawing
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * crystals.length);
      setDailyCard(crystals[randomIndex]);
      setIsDrawing(false);
      setIsFlipped(true);
    }, 900);
  };

  const handleResetDraw = () => {
    playCrystalChime();
    setIsFlipped(false);
    setTimeout(() => {
      setDailyCard(null);
    }, 300);
  };

  const memberRank = user?.isAnonymous 
    ? { title: '心靈淨化訪客 · Wanderer', desc: '訪客體驗' } 
    : { title: '水晶探索大師 · Discovery Guru', desc: '探索大師' };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
      />

      {/* Main Modal container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative bg-white border border-[#ECE6DD] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col font-serif"
      >
        {/* Soft elegant decorative header bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#8E735B] via-[#7E8B83] to-[#917E8B]" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors z-20 outline-none p-1.5 rounded-full hover:bg-stone-50"
        >
          <X size={18} />
        </button>

        {/* Header Title */}
        <div className="p-6 border-b border-[#FAF6EE] flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FAF6EE] rounded-full flex items-center justify-center">
            <User className="text-[#8E735B]" size={16} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-800">
              會員檔案 · Member Profile
            </h3>
            <p className="text-[10px] text-slate-400 font-sans tracking-wide">
              您的專屬水晶能量與共振
            </p>
          </div>
        </div>

        {/* Content Section (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 select-text">
          {/* Card 1: User Profile Details */}
          <div className="bg-[#FCFAF7] border border-[#F2EDE5] rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute right-[-2%] bottom-[-5%] text-[#EDE5DC] opacity-30 select-none pointer-events-none">
              <Award size={100} strokeWidth={0.5} />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest text-white bg-[#8E735B]/90">
                  {memberRank.title}
                </span>
                
                <h4 className="text-base font-semibold text-slate-800 font-sans break-all">
                  {user?.isAnonymous ? '訪客體驗帳號' : user?.email}
                </h4>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-sans">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-slate-300" />
                    探索水晶啟程時間：{joinDateStr}
                  </span>
                </div>
              </div>

              {user?.isAnonymous && (
                <div className="bg-amber-500/5 border border-amber-500/15 p-3 rounded-xl max-w-xs space-y-1 text-left sm:text-right">
                  <div className="text-[10px] text-amber-800 font-sans font-semibold flex items-center gap-1 sm:justify-end">
                    <ShieldAlert size={12} />
                    目前為訪客帳號
                  </div>
                  <p className="text-[9px] text-slate-400 font-serif leading-relaxed">
                    此帳號的收藏資料僅儲存於本瀏覽器快取中。註冊信箱即可永久保存您的水晶收藏！
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Interactive Statistics & Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box A: Favorites summary */}
            <div className="border border-[#E9E4DC] rounded-2xl p-5 space-y-4 bg-white flex flex-col justify-between">
              <div className="space-y-2">
                <h5 className="text-xs font-semibold text-slate-800 flex items-center gap-1.5 border-b border-[#FAF6EE] pb-2">
                  <Heart className="text-[#8E735B] fill-[#8E735B]" size={13} />
                  收藏您喜愛的水晶
                </h5>
                <div className="py-2">
                  <span className="text-3xl font-sans font-bold text-[#8E735B]">
                    {favorites.length}
                  </span>
                  <span className="text-xs text-slate-400 font-sans ml-1">
                    個以收藏水晶
                  </span>
                </div>
              </div>

              {favoriteCrystals.length > 0 ? (
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#9C8F84] uppercase block">
                    當前收藏的水晶
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {favoriteCrystals.slice(0, 6).map(c => (
                      <span 
                        key={c.id}
                        className="px-2 py-0.5 rounded bg-stone-50 border border-[#E9E4DC] text-[9px] text-slate-600"
                      >
                        {c.name}
                      </span>
                    ))}
                    {favoriteCrystals.length > 6 && (
                      <span className="px-1.5 py-0.5 text-[9px] text-slate-400 font-sans">
                        +{favoriteCrystals.length - 6} 個
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-[10px] text-slate-400 leading-relaxed italic">
                  暫無收藏，可於水晶目錄分頁下，點擊您喜好的水晶介紹右上角「心形」圖案，將此水晶收藏。
                </p>
              )}
            </div>

            {/* Box B: Personal Aura Analysis */}
            <div className="border border-[#E9E4DC] rounded-2xl p-5 space-y-3 bg-[#FAF9F6]">
              <h5 className="text-xs font-semibold text-slate-800 flex items-center gap-1.5 border-b border-stone-200/50 pb-2">
                <Compass className="text-[#7E8B83]" size={13} />
                主導能量分析 (Aura Analysis)
              </h5>

              {energyInsights ? (
                <div className="space-y-3 font-serif">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>強勢脈輪</span>
                      <span>主導能量主題</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-bold text-[#8E735B]">
                      <span>{energyInsights.dominantChakra || '多重脈輪'}</span>
                      <span>{energyInsights.dominantCategory}</span>
                    </div>
                  </div>
                  
                  <p className="text-[10px] text-[#78695E] leading-relaxed border-t border-[#FAF6EE] pt-2">
                    {energyInsights.chakraTip}
                  </p>
                </div>
              ) : (
                <div className="space-y-2 py-2">
                  <p className="text-[10px] text-[#9C8F84] leading-relaxed">
                    您目前尚未建立水晶收藏。
                  </p>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                    此處將依據您的收藏夾水晶，運算並分析出您當下的主導氣脈與身心和諧指引。
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Brand new feature - Interactive Daily Guidance Oracle Card */}
          <div className="border border-[#ECE6DD] bg-[#FAF8F5]/85 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#E9E4DC] pb-2.5">
              <div className="flex items-center gap-1.5">
                <Sparkles className="text-[#8E735B]" size={14} />
                <h5 className="text-xs font-semibold text-slate-800">
                  每日專屬水晶靈魂 (Daily Resonance Guidance)
                </h5>
              </div>
              
              {dailyCard && (
                <button
                  onClick={handleResetDraw}
                  className="text-[10px] text-slate-400 hover:text-[#8E735B] transition-colors cursor-pointer flex items-center gap-0.5 font-sans"
                >
                  重抽水晶
                </button>
              )}
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 py-1">
              {/* Left Side: Card Canvas */}
              <div className="w-full md:w-1/3 flex justify-center">
                <AnimatePresence mode="wait">
                  {!dailyCard ? (
                    /* Initial Stack State */
                    <motion.button
                      key="stack-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onClick={handleDrawCard}
                      disabled={isDrawing}
                      className={`w-32 h-44 rounded-2xl border-2 border-dashed border-[#8E735B]/30 bg-white hover:border-[#8E735B]/65 cursor-pointer flex flex-col items-center justify-center p-4 text-center group transition-all duration-300 shadow-sm relative ${
                        isDrawing ? 'animate-pulse' : ''
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FAF6EE] flex items-center justify-center text-[#8E735B] group-hover:scale-110 transition-transform mb-2">
                        <Sparkles size={16} />
                      </div>
                      <span className="text-[10px] font-bold text-[#8E735B] block">
                        {isDrawing ? '正在感知中...' : '點擊翻牌'}
                      </span>
                      <span className="text-[8px] text-slate-400 font-sans block mt-1">
                        抽今日代表您的水晶
                      </span>
                    </motion.button>
                  ) : (
                    /* Drawn Card State */
                    <motion.div
                      key="revealed-card"
                      initial={{ opacity: 0, rotateY: -180, scale: 0.8 }}
                      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                      exit={{ opacity: 0, rotateY: 180, scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 80, damping: 12 }}
                      className="w-32 h-44 rounded-2xl shadow-md p-3 flex flex-col justify-between text-center relative border border-[#E9E4DB]"
                      style={{ 
                        backgroundColor: dailyCard.morandiBg || '#FAF9F6',
                        color: dailyCard.morandiText || '#6E645A'
                      }}
                    >
                      <div className="text-[8px] font-mono tracking-wider opacity-60 uppercase">
                        Daily Oracle
                      </div>

                      {/* Sparkle Glow & Name */}
                      <div className="space-y-1">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-1">
                          <Star size={10} className="opacity-90" />
                        </div>
                        <h6 className="text-xs font-bold tracking-wide">
                          {dailyCard.name}
                        </h6>
                        <span className="text-[7px] font-sans block opacity-75 max-w-[90px] mx-auto truncate uppercase tracking-widest">
                          {dailyCard.englishName}
                        </span>
                      </div>

                      <div className="text-[8px] opacity-75 leading-relaxed truncate px-1">
                        {dailyCard.color}系水晶
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side: Oracle Reading Explanation */}
              <div className="flex-1 space-y-3 text-left w-full">
                {!dailyCard ? (
                  <div className="space-y-2 py-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      靜下心來，做三次深呼吸，將專注力回歸本源，然後點選左側卡牌。
                    </p>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                      將由 20 餘種脈輪能量水晶中，隨機指引出一顆與您當下氣場共振的水晶，並賜予您專屬的身心靈平衡指引。
                    </p>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2.5 font-serif"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono tracking-wider uppercase text-[#8E735B]">
                        今日共振水晶
                      </span>
                      <h4 className="text-sm font-bold text-slate-800">
                        {dailyCard.name} · 靈性啟發指引
                      </h4>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase block">
                        🔮 今日奧秘故事與能量特性
                      </span>
                      <p className="text-[11px] text-[#6E645A] leading-relaxed">
                        {dailyCard.story || dailyCard.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[9px] font-sans border-t border-[#E9E4DC] pt-2">
                      <div>
                        <span className="text-slate-400 block font-serif">對應脈輪：</span>
                        <span className="text-[#8E735B] font-bold font-serif">{dailyCard.chakras.join('、')}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-serif">每日配戴指引：</span>
                        <span className="text-slate-600 block truncate font-serif">{dailyCard.wearingRules || '隨身佩帶或靜心時握於掌中。'}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-[#FAF6EE] flex justify-end font-sans">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white hover:bg-[#FAF6EE] border border-[#ECE6DD] text-slate-600 text-xs font-medium rounded-xl transition-colors cursor-pointer"
          >
            關閉檔案 Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
