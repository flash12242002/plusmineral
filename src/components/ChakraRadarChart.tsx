/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip
} from 'recharts';
import { Crystal } from '../types';

interface ChakraRadarChartProps {
  crystal: Crystal;
}

export interface ChakraDataPoint {
  chakra: string;
  sanskrit: string;
  score: number;
  isPrimary: boolean;
  color: string;
  fullMark: number;
}

export function getCrystalChakraData(crystal: Crystal): ChakraDataPoint[] {
  const primaryChakras = crystal.chakras || [];
  const idx = crystal.energyIndex || { calm: 5, love: 5, fortune: 5, protect: 5, focus: 5 };

  const chakraDefs = [
    { name: '頂輪', sanskrit: 'Sahasrara', color: '#8C6D9E', calc: () => Math.round(idx.calm * 0.6 + idx.focus * 0.4) },
    { name: '眉心輪', sanskrit: 'Ajna', color: '#697FA1', calc: () => Math.round(idx.focus * 0.7 + idx.calm * 0.3) },
    { name: '喉輪', sanskrit: 'Vishuddha', color: '#558E97', calc: () => Math.round(idx.focus * 0.5 + idx.calm * 0.5) },
    { name: '心輪', sanskrit: 'Anahata', color: '#5E8359', calc: () => Math.round(idx.love * 0.8 + idx.calm * 0.2) },
    { name: '太陽輪', sanskrit: 'Manipura', color: '#937C4F', calc: () => Math.round(idx.fortune * 0.7 + idx.focus * 0.3) },
    { name: '臍輪', sanskrit: 'Svadhisthana', color: '#966E53', calc: () => Math.round(idx.love * 0.5 + idx.fortune * 0.5) },
    { name: '海底輪', sanskrit: 'Muladhara', color: '#8E5151', calc: () => Math.round(idx.protect * 0.8 + idx.calm * 0.2) },
  ];

  return chakraDefs.map((c) => {
    const isPrimary = primaryChakras.some(p => p.includes(c.name) || c.name.includes(p));
    // Primary chakras receive maximum 10 rating; others scaled cleanly between 3 and 8
    const rawCalc = c.calc();
    const score = isPrimary ? 10 : Math.max(3, Math.min(8, rawCalc));
    return {
      chakra: c.name,
      sanskrit: c.sanskrit,
      score,
      isPrimary,
      color: c.color,
      fullMark: 10,
    };
  });
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data: ChakraDataPoint = payload[0].payload;
    return (
      <div className="bg-white/95 backdrop-blur-md border border-[#E5DEC3] p-2.5 rounded-xl shadow-lg text-xs font-serif space-y-1 z-50">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: data.color }} />
          <span className="font-semibold text-slate-800">{data.chakra}</span>
          <span className="text-[10px] text-slate-400 font-mono">({data.sanskrit})</span>
        </div>
        <div className="flex items-center justify-between gap-3 text-[11px] text-slate-600">
          <span>共振能量值</span>
          <span className="font-mono font-bold" style={{ color: data.color }}>{data.score} / 10</span>
        </div>
        {data.isPrimary && (
          <div className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded-md text-center font-sans font-medium mt-1">
            ✨ 主對應脈輪
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default function ChakraRadarChart({ crystal }: ChakraRadarChartProps) {
  const data = getCrystalChakraData(crystal);

  const primaryChakraNames = data.filter(d => d.isPrimary).map(d => d.chakra);

  const renderCustomTick = ({ x, y, payload, cx, cy }: any) => {
    const item = data.find(d => d.chakra === payload.value);
    if (!item) return null;

    // Determine text alignment based on position
    const isRight = x > cx + 5;
    const isLeft = x < cx - 5;
    const isTop = y < cy - 5;
    const isBottom = y > cy + 5;

    let textAnchor = 'middle';
    if (isRight) textAnchor = 'start';
    if (isLeft) textAnchor = 'end';

    let dy = 4;
    if (isTop) dy = -4;
    if (isBottom) dy = 12;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          textAnchor={textAnchor}
          dy={dy}
          className="text-[10px] sm:text-[11px] font-serif select-none"
          fill={item.isPrimary ? '#3F352C' : '#8A7A6E'}
          fontWeight={item.isPrimary ? '600' : '400'}
        >
          <tspan fill={item.color} fontWeight="bold">● </tspan>
          {item.chakra}
        </text>
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Primary Chakras Badges */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-1 text-[11px]">
        <span className="text-slate-400 font-mono text-[10px]">主對應脈輪:</span>
        {primaryChakraNames.length > 0 ? (
          primaryChakraNames.map((name) => {
            const item = data.find(d => d.chakra === name);
            return (
              <span
                key={name}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-serif border shadow-2xs"
                style={{
                  backgroundColor: `${item?.color}15`,
                  borderColor: `${item?.color}40`,
                  color: item?.color,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item?.color }} />
                {name}
              </span>
            );
          })
        ) : (
          <span className="text-slate-500 font-serif text-[10px]">全身體脈輪共振</span>
        )}
      </div>

      {/* Radar Chart Container */}
      <div className="w-full h-[220px] sm:h-[240px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="68%" data={data}>
            <PolarGrid stroke="#EADEC9" strokeDasharray="3 3" />
            <PolarAngleAxis
              dataKey="chakra"
              tick={renderCustomTick}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 10]}
              tick={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Radar
              name={crystal.name}
              dataKey="score"
              stroke={crystal.morandiText || '#7D6652'}
              fill={crystal.morandiText || '#7D6652'}
              fillOpacity={0.35}
              strokeWidth={2}
              dot={{
                r: 3,
                fill: crystal.morandiText || '#7D6652',
                stroke: '#FFFFFF',
                strokeWidth: 1.5,
              }}
              activeDot={{
                r: 5,
                fill: '#FFFFFF',
                stroke: crystal.morandiText || '#7D6652',
                strokeWidth: 2,
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
