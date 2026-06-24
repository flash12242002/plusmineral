/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Crystal {
  id: string;
  name: string;
  englishName: string;
  chemicalFormula?: string;
  hardness?: string;
  description: string;
  needs: string[];
  chakras: string[];
  color: string;
  gradientColors: string[]; // Gradient start & end for beautiful glowing gems
  morandiBg: string; // Pastel Morandi-style background
  morandiText: string; // Text tint
  energyIndex: {
    calm: number;   // 靜心冥想
    love: number;   // 情感人緣
    fortune: number;// 豐盛財富
    protect: number;// 避邪定靜
    focus: number;  // 專注靈感
  };
  cleansing: {
    methods: string[];
    forbidden: string;
    cycle: string;
  };
  wearingRules: string;
  matchTips: string;
  story: string;
}

export interface EnergyNeed {
  id: string;
  name: string;
  description: string;
  iconName: string;
  colorClass: string;
}

export interface Chakra {
  name: string;
  sanskritName: string;
  description: string;
  colorClass: string; // morandi code
}
