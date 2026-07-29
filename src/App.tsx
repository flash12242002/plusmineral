/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CRYSTALS, ENERGY_NEEDS } from './data/crystals';
import { Crystal } from './types';
import CrystalCard from './components/CrystalCard';
import CrystalDetailModal from './components/CrystalDetailModal';
import EnergyAssessor from './components/EnergyAssessor';
import Logo from './components/Logo';
import { useApp } from './context/AppContext';
import AuthModal from './components/AuthModal';
import { playCrystalChime } from './utils/audio';
import { 
  Search, Sparkles, BookOpen, Heart, SlidersHorizontal, 
  HelpCircle, Compass, RefreshCcw, Info, CheckCircle2,
  ChevronDown
} from 'lucide-react';

const LIFE_PATH_CRYSTAL_MAPPING: Record<number, string[]> = {
  1: ['red-agate', 'Southern-red-agate', 'citrine', 'tigers-eye', 'Smoky-quartz'],
  2: ['moonstone', 'aquamarine', 'rose-quartz'],
  3: ['strawberry-quartz', 'amethyst', 'Kyanite', 'Lolite'],
  4: ['black-obsidian', 'green-phantom-quartz', 'tigers-eye', 'Smoky-quartz'],
  5: ['clear-quartz', 'Southern-red-agate', 'green-phantom-quartz', 'Kyanite'],
  6: ['rose-quartz', 'moonstone', 'strawberry-quartz', 'Lolite'],
  7: ['fluorite', 'amethyst', 'Kyanite', 'Lolite'],
  8: ['rutilated-quartz', 'Southern-red-agate', 'citrine', 'black-obsidian', 'Smoky-quartz'],
  9: ['clear-quartz', 'amethyst', 'lapis-lazuli', 'Lolite']
};

export default function App() {
  const { user, logout, favorites, isFavorite } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);
  const [selectedChakra, setSelectedChakra] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedLifePath, setSelectedLifePath] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'diagnose' | 'knowledge' | 'favorites'>('all');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMessage, setAuthMessage] = useState('');
  
  // Dialog/Modal State
  const [activeCrystal, setActiveCrystal] = useState<Crystal | null>(null);

  // Core filter logic matching need tags, colors, and chakras
  const filteredCrystals = useMemo(() => {
    return CRYSTALS.filter((c) => {
      const matchesSearch = 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (c.story && c.story.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesNeed = selectedNeed ? c.needs.includes(selectedNeed) : true;
      const matchesChakra = selectedChakra ? c.chakras.includes(selectedChakra) : true;
      const matchesColor = selectedColor ? c.color === selectedColor : true;
      const matchesLifePath = selectedLifePath 
        ? LIFE_PATH_CRYSTAL_MAPPING[selectedLifePath]?.includes(c.id) 
        : true;

      return matchesSearch && matchesNeed && matchesChakra && matchesColor && matchesLifePath;
    });
  }, [searchTerm, selectedNeed, selectedChakra, selectedColor, selectedLifePath]);

  // Favorite Crystals
  const favoriteCrystals = useMemo(() => {
    return CRYSTALS.filter((c) => isFavorite(c.id));
  }, [favorites, isFavorite]);

  // Reset all filters in one go
  const handleResetFilters = () => {
    playCrystalChime();
    setSearchTerm('');
    setSelectedNeed(null);
    setSelectedChakra(null);
    setSelectedColor(null);
    setSelectedLifePath(null);
  };

  const chakras = ['頂輪', '眉心輪', '喉輪', '心輪', '太陽輪', '臍輪', '海底輪'];
  const colors = ['紫色', '粉色', '白色', '黃色', '綠色', '黑色', '藍色', '紅色', '褐色'];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col justify-between">
      {/* Sticky Top Header Container on desktop (lg), scrollable on mobile & tablet */}
      <div className="relative lg:sticky lg:top-0 z-30 shadow-sm bg-white">
        {/* 1. Global Alert Banner: Refined, sleek, literary warning context */}
        <div className="bg-white border-b border-[#EBE7E1] px-4 py-2 select-none font-serif">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2.5 text-[11px] text-[#7D6652] tracking-wider relative">
            <div className="text-center w-full">
              🔮✨水晶共振，靜心定性。水晶為古老能量的指引，源於內心善念與溫柔覺知💎。
            </div>
            
            {/* User Block in Banner for Tablet/Desktop */}
            <div className="flex-shrink-0 flex items-center sm:absolute sm:right-0">
              {user ? (
                <div className="flex items-center gap-1.5 bg-stone-50 border border-[#ECE6DD] pl-2.5 pr-1.5 py-0.5 rounded-lg text-[10px]">
                  <span className="text-slate-600 max-w-[100px] truncate">
                    {user.isAnonymous ? '訪客' : user.email}
                  </span>
                  <button
                    onClick={() => { playCrystalChime(); logout(); }}
                    className="text-[9px] text-amber-900/65 hover:text-amber-900 px-1.5 py-0.5 rounded bg-white border border-[#ECE6DD] transition-all font-sans cursor-pointer"
                  >
                    登出
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => { playCrystalChime(); setAuthMessage('登入以收藏您喜愛的水晶，隨時查看能量印記'); setAuthModalOpen(true); }}
                  className="px-2.5 py-1 bg-[#8E735B] hover:bg-[#7D644E] text-white text-[9px] font-serif rounded-lg shadow-2xs tracking-widest transition-colors cursor-pointer"
                >
                  登入 / 註冊
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2. Banner Header Section */}
        <header className="py-4 md:py-6 px-4 md:px-12 border-b border-[#EBEBE9] bg-[#EAE0D7] relative overflow-hidden select-none">
          {/* Soft background zen blobs */}
          <div className="absolute right-[-10%] top-[-20%] w-96 h-96 rounded-full bg-[#EAE4EE] opacity-25 filter blur-3xl" />
          <div className="absolute left-[-5%] bottom-[-10%] w-96 h-96 rounded-full bg-[#E5ECE5] opacity-20 filter blur-3xl" />

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6 z-10 relative">
            <div className="space-y-3">
              <div className="flex flex-row items-center gap-2 sm:gap-4">
                <Logo size="md" theme="adaptive" />
                <span className="h-4 w-[1px] bg-slate-400 inline-block" />
                <span className="font-mono text-xs tracking-widest text-slate-600 uppercase">
                  水晶能量誌
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-slate-800 tracking-wide mt-2 whitespace-nowrap">
                水晶能量 & 能量傳遞指南
              </h1>
              <p className="text-xs text-slate-500 w-full md:w-[480px] leading-relaxed select-text font-serif">
                這是一個自然質感的澄澈空間。
                可您依據自身需求、特定脈輪 or 莫蘭迪色彩，
                感受、思索並篩選出最契合自身當下狀態的水晶能量伴隨，附有心靈淨化與五行手則。
              </p>
            </div>

            {/* Quick view selector buttons */}
            <div className="flex flex-wrap gap-1.5 border border-[#ECE6DD] bg-white p-1 rounded-xl self-start lg:self-auto shadow-sm max-w-full">
              <button
                id="tab-all-btn"
                onClick={() => { setActiveTab('all'); playCrystalChime(); }}
                className={`px-3.5 py-2 rounded-lg text-xs font-serif transition-all duration-300 cursor-pointer
                  whitespace-normal md:whitespace-nowrap
                    ${activeTab === 'all'
                     ? 'bg-[#8E735B] text-white shadow-sm'
                     : 'text-[#6E645A] hover:bg-stone-50'
                }`}
              >
                水晶目錄 · Library
              </button>
              <button
                id="tab-diagnose-btn"
                onClick={() => { setActiveTab('diagnose'); playCrystalChime(); }}
                className={`px-3.5 py-2 rounded-lg text-xs font-serif transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'diagnose'
                    ? 'bg-[#8E735B] text-white shadow-sm'
                    : 'text-[#6E645A] hover:bg-stone-50'
                }`}
              >
                能量小測驗 · Energy test
              </button>
              <button
                id="tab-knowledge-btn"
                onClick={() => { setActiveTab('knowledge'); playCrystalChime(); }}
                className={`px-3.5 py-2 rounded-lg text-xs font-serif transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'knowledge'
                    ? 'bg-[#8E735B] text-white shadow-sm'
                    : 'text-[#6E645A] hover:bg-stone-50'
                }`}
              >
                保養須知 · Knowledge
              </button>
              <button
                id="tab-favorites-btn"
                onClick={() => { setActiveTab('favorites'); playCrystalChime(); }}
                className={`px-3.5 py-2 rounded-lg text-xs font-serif transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeTab === 'favorites'
                    ? 'bg-[#8E735B] text-white shadow-sm'
                    : 'text-[#6E645A] hover:bg-stone-50'
                }`}
              >
                我的收藏 · Favorites
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* 3. Main Operational Board */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 md:px-12 pt-[1cm] pb-8 space-y-8">
        
        {activeTab === 'all' && (
          <>
            {/* Filter controls panel */}
            <div className="bg-white border border-[#EBE7E1] rounded-3xl p-6 space-y-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F2ECE4] pb-5">
                <div className="flex items-center gap-2.5">
                  <SlidersHorizontal size={16} className="text-[#8E735B]" />
                  <h2 className="text-sm font-serif font-semibold tracking-wider text-slate-700">
                    篩選與探索條件 · Energy Filters
                  </h2>
                </div>
                
                {/* Reset button if filter is modified */}
                {(searchTerm || selectedNeed || selectedChakra || selectedColor || selectedLifePath) && (
                  <button
                    id="reset-filter-btn"
                    onClick={handleResetFilters}
                    className="text-xs text-amber-950/60 hover:text-amber-950 transition-colors flex items-center gap-1 font-serif underline underline-offset-2"
                  >
                    <RefreshCcw size={11} />
                    清除所有篩選
                  </button>
                )}
              </div>

              {/* Dynamic Search Box */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  id="search-crystals-input"
                  type="text"
                  placeholder="輸入水晶名稱（如：紫水晶）、英文、化學組成、或關鍵功效描述..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-[#E1DCD3] rounded-xl pl-11 pr-4 py-3 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#8E735B] focus:ring-1 focus:ring-[#8E735B] transition-all"
                />
              </div>

              {/* A. Need/Intents Filters (莫蘭迪色系貼紙) */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-[#9C8F84] uppercase block">
                  ① 依據您的身心靈需求引導 (Life Intentions)
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                  {ENERGY_NEEDS.map((need) => {
                    const isSelected = selectedNeed === need.id;
                    return (
                      <button
                        key={need.id}
                        id={`need-filter-btn-${need.id}`}
                        onClick={() => { setSelectedNeed(isSelected ? null : need.id); playCrystalChime(); }}
                        className={`text-left p-3 rounded-xl border text-xs transition-all duration-300 select-none outline-none ${
                          isSelected
                            ? `${need.colorClass} border-slate-700 ring-1 ring-slate-800 scale-[1.01] shadow-sm`
                            : 'bg-white hover:bg-stone-50 border-[#EDE8E2] text-slate-600'
                        }`}
                      >
                        <span className="font-serif font-medium block text-slate-800 mb-0.5">
                          {need.name}
                        </span>
                        <span className="text-[9px] text-[#8E7E73] line-clamp-1 opacity-80 leading-relaxed font-sans">
                          {need.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* B. Chakra (脈輪) and Color filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* 脈輪篩選 */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono tracking-widest text-[#9C8F84] uppercase block">
                    ② 依據人體七大脈輪 (Energy Chakras)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {chakras.map((chk) => {
                      const isSelected = selectedChakra === chk;
                      return (
                        <button
                          key={chk}
                          id={`chakra-filter-btn-${chk}`}
                          onClick={() => { setSelectedChakra(isSelected ? null : chk); playCrystalChime(); }}
                          className={`px-3 py-1.5 text-xs rounded-lg border transition-all duration-200 font-serif select-none outline-none ${
                            isSelected
                              ? 'bg-[#7E8B83] text-white border-[#68756D]'
                              : 'bg-white border-[#E9E4DB] text-[#6E645A] hover:bg-stone-50'
                          }`}
                        >
                          {chk}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 色系系統篩選 */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono tracking-widest text-[#9C8F84] uppercase block">
                    ③ 依據色彩美學色系 (Morandi Color System)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {colors.map((col) => {
                      const isSelected = selectedColor === col;
                      return (
                        <button
                          key={col}
                          id={`color-filter-btn-${col}`}
                          onClick={() => { setSelectedColor(isSelected ? null : col); playCrystalChime(); }}
                          className={`px-3 py-1.5 text-xs rounded-lg border transition-all duration-200 flex items-center gap-1.5 font-serif select-none outline-none ${
                            isSelected
                              ? 'bg-[#917E8B] text-white border-[#7C6976]'
                              : 'bg-white border-[#E9E4DB] text-[#6E645A] hover:bg-stone-50'
                          }`}
                        >
                          {/* Dot representative */}
                          <span 
                            className="w-2- h-2 w-2 rounded-full border border-black/10 inline-block"
                            style={{ 
                              backgroundColor: 
                                col === '紫色' ? '#DFCDEB' :
                                col === '粉色' ? '#F5D2D2' :
                                col === '白色' ? '#EAEAEA' :
                                col === '黃色' ? '#EAD29C' :
                                col === '綠色' ? '#ADC8B4' :
                                col === '紅色' ? '#E07A5F' :
                                col === '黑色' ? '#3F3F46' : 
                                col === '褐色' ? '#A89685' : '#ABDBE7'
                            }}
                          />
                          {col}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* C. Life Path Number (生命靈數) filters */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono tracking-widest text-[#9C8F84] uppercase block">
                  ④ 依據生命靈數號碼 (Life Path Numbers)
                </span>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
                    const isSelected = selectedLifePath === num;
                    return (
                      <button
                        key={num}
                        id={`lifepath-filter-btn-${num}`}
                        onClick={() => { setSelectedLifePath(isSelected ? null : num); playCrystalChime(); }}
                        className={`px-4 py-2 text-xs rounded-lg border transition-all duration-200 font-serif select-none outline-none cursor-pointer ${
                          isSelected
                            ? 'bg-[#8E735B] text-white border-[#7A6049] shadow-sm'
                            : 'bg-white border-[#E9E4DB] text-[#6E645A] hover:bg-stone-50'
                        }`}
                      >
                        {num} 號人
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Total Indicator label */}
            <div className="text-xs text-slate-400 font-mono flex justify-between items-center px-2">
              <span>
                找尋到與您當下心靈最契合、偏好顏色或生命靈數的水晶： 
                <b className="text-slate-700 font-semibold font-sans">{filteredCrystals.length} 個</b>
              </span>
              {(searchTerm || selectedNeed || selectedChakra || selectedColor || selectedLifePath) && (
                <span className="text-[10px] text-amber-800 tracking-wider bg-amber-500/5 border border-amber-900/10 px-2 py-0.5 rounded">
                  已過濾能量
                </span>
              )}
            </div>

            {/* Crystals grid display panel */}
            <motion.div 
              id="crystals-grid"
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredCrystals.length > 0 ? (
                  filteredCrystals.map((crystal) => (
                    <motion.div
                      key={crystal.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                    >
                      <CrystalCard 
                        crystal={crystal} 
                        onOpenDetail={(c) => setActiveCrystal(c)} 
                        onRequireAuth={(msg) => { setAuthMessage(msg); setAuthModalOpen(true); }}
                      />
                    </motion.div>
                  ))
                ) : (
                  // Empty search backup view
                  <div className="col-span-full py-16 text-center space-y-4">
                    <p className="font-serif italic text-sm text-[#8E735B]">
                      在浩瀚的晶川中，未尋獲符合當下氣息的水晶。
                    </p>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                      請嘗試簡化文字關鍵詞，或是重設左上角的「清除篩選」按鈕。
                    </p>
                    <button
                      id="reset-grid-fallback"
                      onClick={handleResetFilters}
                      className="px-6 py-2 rounded-xl bg-[#8E735B] hover:bg-[#78604B] text-xs text-white font-serif tracking-widest shadow-sm transition-all"
                    >
                      還原所有目錄
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}

        {/* 3.5. Favorites Tab Container */}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            {!user ? (
              <div className="bg-white border border-[#EBE7E1] rounded-3xl p-12 text-center max-w-lg mx-auto space-y-6 shadow-sm my-12">
                <div className="w-16 h-16 bg-[#FAF6EE] rounded-full flex items-center justify-center mx-auto">
                  <Heart className="text-[#8E735B]" size={28} />
                </div>
                <h3 className="text-lg font-serif font-semibold text-slate-800">
                  開始建立您的個人水晶收藏夾
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-serif">
                  登入您的帳號，即可隨時記錄並追蹤您喜愛的水晶。
                  無論是桃花、招財或是療癒，專屬的能量共振都在這裡守護。
                </p>
                <button
                  onClick={() => { playCrystalChime(); setAuthMessage('登入即可查看並管理您的個人專屬水晶收藏夾！'); setAuthModalOpen(true); }}
                  className="px-8 py-3 bg-[#8E735B] hover:bg-[#7D644E] text-white text-xs font-serif rounded-xl tracking-widest shadow-sm transition-all cursor-pointer"
                >
                  登入 / 註冊帳號
                </button>
              </div>
            ) : favoriteCrystals.length === 0 ? (
              <div className="bg-white border border-[#EBE7E1] rounded-3xl p-12 text-center max-w-lg mx-auto space-y-4 shadow-sm my-12">
                <div className="w-16 h-16 bg-[#FAF6EE] rounded-full flex items-center justify-center mx-auto">
                  <Heart className="text-slate-400" size={28} />
                </div>
                <h3 className="text-lg font-serif font-semibold text-slate-800">
                  您的水晶收藏夾目前是空的
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-serif">
                  在主頁探索水晶卡片時，點擊卡片右上角的「心形圖標」，即可將喜愛的水晶收藏至此。
                </p>
                <button
                  onClick={() => { playCrystalChime(); setActiveTab('all'); }}
                  className="px-6 py-2 border border-[#8E735B] text-[#8E735B] hover:bg-[#FAF6EE] text-xs font-serif rounded-xl tracking-widest transition-all cursor-pointer"
                >
                  去水晶目錄看看
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-xs text-slate-400 font-mono flex justify-between items-center px-2">
                  <span>
                    您的專屬水晶收藏集（共 <b className="text-slate-700 font-semibold font-sans">{favoriteCrystals.length} 個</b>）：
                  </span>
                </div>
                <motion.div 
                  id="favorites-grid"
                  layout 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {favoriteCrystals.map((crystal) => (
                      <motion.div
                        key={crystal.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35 }}
                      >
                        <CrystalCard 
                          crystal={crystal} 
                          onOpenDetail={(c) => setActiveCrystal(c)} 
                          onRequireAuth={(msg) => { setAuthMessage(msg); setAuthModalOpen(true); }}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
          </div>
        )}

        {/* 4. Assessment Tab Container */}
        {activeTab === 'diagnose' && (
          <div className="space-y-6">
            <EnergyAssessor onSelectCrystal={(c) => setActiveCrystal(c)} />
          </div>
        )}

        {/* 5. Pure Literary Informative tab */}
        {activeTab === 'knowledge' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 select-text">
            
            {/* Box A: Left In, Right Out theory */}
            <div className="bg-white rounded-3xl p-6 border border-[#E9E4DC] shadow-sm space-y-4">
              <span className="font-serif italic text-[#8E735B] text-2xl font-light">I</span>
              <h3 className="text-base font-serif font-medium text-slate-800 tracking-wide">
                戴左手還是右手？「左進右出」經典論
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-serif">
                水晶能量學與人體氣卦運行（氣循環與經絡）相匹配。中醫及東方瑜伽脈輪，常持「左手引入、右手釋放」法則：
              </p>
              
              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 bg-white hover:bg-stone-50 rounded-xl border border-[#EDE8E2] transition-colors">
                  <span className="font-semibold text-slate-700 block">左手（求引與吸收接收）</span>
                  <p className="text-[#6E645A] leading-relaxed mt-1">
                    引入水晶所蘊涵的和諧氣場。如「粉水晶」增進慈悲、自愛；「紫水晶」激活大直覺、開闢學位智慧；「黃水晶」接收富足財氣。
                  </p>
                </div>
                <div className="p-3 bg-white hover:bg-stone-50 rounded-xl border border-[#EDE8E2] transition-colors">
                  <span className="font-semibold text-slate-700 block">右手（排出與阻隔反射）</span>
                  <p className="text-[#6E645A] leading-relaxed mt-1">
                    排解體內積壓的疲累、悶煩病氣跟濁流。如佩戴「黑曜石」幫助將平日高壓的負能量沉降導向大地；或釋放社交防護屏障。
                  </p>
                </div>
              </div>
            </div>

            {/* Box B: Cleansing schedules */}
            <div className="bg-white rounded-3xl p-6 border border-[#E9E4DC] shadow-sm space-y-4">
              <span className="font-serif italic text-[#8E735B] text-2xl font-light">II</span>
              <h3 className="text-base font-serif font-medium text-slate-800 tracking-wide">
                消磁淨化的時機與保養週期
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-serif">
                天然水晶具有精密的二氧化矽網狀共振結構，極易記錄遭遇的混亂頻率。適度「淨化歸零」對維持水晶純淨極其要緊：
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 bg-white hover:bg-stone-50 rounded-xl border border-[#EDE8E2] transition-colors">
                  <span className="font-semibold text-[#8E735B] block">什麼時候需要去消磁？</span>
                  <p className="text-[#6E645A] leading-relaxed mt-1">
                    ・新購買或剛拆封的水晶飾品。<br />
                    ・經過人潮流動極大、能量多干擾的空間遺留後（如醫院、喪家、雜亂市集）。<br />
                    ・遭遇重大的爭執、抑鬱、哭泣、失眠情緒爆發過後。
                  </p>
                </div>
                <div className="p-3 bg-white hover:bg-stone-50 rounded-xl border border-[#EDE8E2] transition-colors">
                  <span className="font-semibold text-[#8E735B] block">幾次合適？</span>
                  <p className="text-[#6E645A] leading-relaxed mt-1">
                    一般常戴的水晶，提倡「每隔兩週至一個月」進行一次澈底消磁。我們的檔案室在水晶細節中備有客製消磁建議。
                  </p>
                </div>
              </div>
            </div>

            {/* Box C: Sunlight Prohibitions */}
            <div className="bg-white rounded-3xl p-6 border border-[#E9E4DC] shadow-sm space-y-4">
              <span className="font-serif italic text-[#8E735B] text-2xl font-light">III</span>
              <h3 className="text-base font-serif font-medium text-slate-800 tracking-wide">
                「日光暴曬」褪色危險警示
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-serif font-sans">
                並非所有水晶都耐受高溫日光。大自然的彩色寶石，多因微緻金屬離子致色。長時間強烈暴曬會引發化學微折損：
              </p>

              <div className="p-4 bg-red-500/5 text-red-800 rounded-2xl border border-red-900/10 text-xs space-y-2.5">
                <span className="font-semibold flex items-center gap-1">
                  ⚠️ 日光暴曬忌諱石
                </span>
                <p className="leading-relaxed">
                  <b>紫水晶、粉水晶、黃水晶、螢石、部分粉色綠橘色長石系列。</b> These are highly photophobia zones. 長時間強光會氧化褪色，變為黯淡白灰石。
                </p>
                <div className="h-[1px] bg-red-800/10" />
                <span className="font-semibold block">安穩的方法</span>
                <p className="leading-relaxed text-red-900/85">
                  強烈建議選用溫和的<b>「月光照拂、原礦晶洞、香薰沉淨、磬音/頌缽共鳴」</b>。這些手法不僅安全，更能溫和軟化水晶結構，不受物理折損。
                </p>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* 6. High-fidelity slide-over detailed panel */}
      {activeCrystal && (
        <CrystalDetailModal 
          crystal={activeCrystal} 
          onClose={() => setActiveCrystal(null)} 
          onRequireAuth={(msg) => { setAuthMessage(msg); setAuthModalOpen(true); }}
        />
      )}

      {/* Auth Modal overlay */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        message={authMessage}
      />

      {/* 7. Design Signature Footer */}
      <footer className="bg-white border-t border-[#EBE7E1] py-10 px-6 text-center select-none">
        <div className="max-w-7xl mx-auto space-y-3.5">
          <div className="flex justify-center items-center gap-3">
            <span className="h-[1px] w-8 bg-[#E2DCD3]" />
            <div className="flex flex-col items-center">
              <Logo size="sm" theme="adaptive" className="opacity-75 hover:opacity-100 transition-opacity" />
            </div>
            <span className="h-[1px] w-8 bg-[#E2DCD3]" />
          </div>
          
          <p className="text-[10px] text-slate-400 max-w-xl mx-auto leading-relaxed">
            本平台上所提供的水晶與脈輪功效資訊皆為生活、靈性與心靈輔助建議。
            真正的療癒能量，在於與內心溫和善念的共鳴。願您在水晶之光中，看懂內心深處那份豐盈與美麗。
          </p>

          <span className="text-[9px] font-mono text-slate-400 block pt-1.5">
            Crafted for Tranquility in 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
