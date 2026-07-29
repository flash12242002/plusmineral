/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Crystal } from '../types';
import GemRenderer from './GemRenderer';
import { useApp } from '../context/AppContext';
import { Heart, GraduationCap, Coins, Shield, Sparkles, MessageSquare } from 'lucide-react';

interface CrystalCardProps {
  crystal: Crystal;
  onOpenDetail: (crystal: Crystal) => void;
  onRequireAuth?: (message: string) => void;
}

// Icon dictionary matching need IDs
const NeedIconMap: Record<string, any> = {
  love: Heart,
  career: GraduationCap,
  wealth: Coins,
  protection: Shield,
  healing: Sparkles,
  communication: MessageSquare,
};

export default function CrystalCard({ crystal, onOpenDetail, onRequireAuth }: CrystalCardProps) {
  const { user, isFavorite, toggleFavorite } = useApp();
  const favorited = isFavorite(crystal.id);

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening detail modal
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

  return (
    <motion.div
      id={`crystal-card-${crystal.id}`}
      layoutId={`card-container-${crystal.id}`}
      whileHover={{ y: -6, scale: 1.01 }}
      onClick={() => onOpenDetail(crystal)}
      className="cursor-pointer bg-white rounded-2xl p-6 border border-[#ECE9E4] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[360px] h-auto overflow-hidden group select-none"
    >
      {/* Top Banner and Gem Illustration */}
      <div className="relative">
        {/* Soft Background Plate */}
        <div 
          className="w-full h-32 rounded-xl flex items-center justify-center relative overflow-hidden transition-colors duration-500"
          style={{ backgroundColor: crystal.morandiBg }}
        >
          {/* Animated Glow in the background of the plate */}
          <div 
            className="absolute -bottom-10 w-24 h-24 rounded-full filter blur-xl opacity-30 group-hover:scale-125 transition-transform duration-700" 
            style={{ backgroundColor: crystal.gradientColors[1] }}
          />
          
          {/* Heart Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2.5 right-2.5 z-10 w-7 h-7 bg-white/80 hover:bg-white text-slate-500 hover:text-rose-500 rounded-full flex items-center justify-center shadow-sm backdrop-blur-xs transition-all duration-300 active:scale-90"
          >
            <Heart 
              size={13} 
              className={`transition-colors duration-300 ${favorited ? 'fill-rose-500 stroke-rose-500' : 'stroke-slate-500'}`} 
            />
          </button>

          <div className="transform group-hover:translate-y-[-2px] transition-transform duration-500">
            <GemRenderer color={crystal.gradientColors[1]} id={crystal.id} />
          </div>
        </div>

        {/* English Name and Traditional Formula */}
        <div className="mt-4 flex justify-between items-start">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              {crystal.englishName}
            </span>
            <h3 className="text-lg font-serif font-medium text-slate-800 tracking-wide mt-0.5 group-hover:text-amber-800 transition-colors duration-300">
              {crystal.name}
            </h3>
          </div>
          {crystal.chemicalFormula && (
            <span className="font-mono text-[8px] bg-slate-50 text-slate-400 border border-slate-100 rounded px-1.5 py-0.5 max-w-[110px] truncate text-right">
              {crystal.chemicalFormula.split(' (')[0]}
            </span>
          )}
        </div>
      </div>

      {/* Description Snippet */}
      <p className="text-xs text-slate-500 leading-relaxed my-3">
        {crystal.description}
      </p>

      {/* Bottom parameters */}
      <div className="border-t border-[#F5F2EE] pt-3 mt-auto">
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {crystal.needs.map((needId) => {
            const Icon = NeedIconMap[needId];
            return (
              <span
                key={needId}
                className="inline-flex items-center gap-1 font-sans text-[10px] px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500"
              >
                {Icon && <Icon size={10} className="stroke-[2px] opacity-75" />}
                {needId === 'love' && '桃花'}
                {needId === 'career' && '學業事業'}
                {needId === 'wealth' && '招財'}
                {needId === 'protection' && '避邪'}
                {needId === 'healing' && '療癒'}
                {needId === 'communication' && '溝通'}
              </span>
            );
          })}
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
          <div className="flex gap-2">
            <span>脈輪: <b className="text-slate-600 font-sans">{crystal.chakras.join(' · ')}</b></span>
          </div>
          <span className="text-slate-300 group-hover:text-amber-700/60 transition-colors duration-300 tracking-wider">
            探索細節 →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
