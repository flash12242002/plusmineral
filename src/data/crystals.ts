/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crystal, EnergyNeed, Chakra } from '../types';

export const ENERGY_NEEDS: EnergyNeed[] = [
  {
    id: 'love',
    name: '桃花人緣',
    description: '滋養愛與寬容，增進親密關係，和諧人際磁場。',
    iconName: 'Heart',
    colorClass: 'bg-[#FDF3F3] text-[#B87C7C] border-[#F5E1E1]'
  },
  {
    id: 'career',
    name: '事業學業',
    description: '增強洞察、智慧與行動力，突破困境並激發靈感。',
    iconName: 'GraduationCap',
    colorClass: 'bg-[#F2F5FA] text-[#637C9F] border-[#E4EAF2]'
  },
  {
    id: 'wealth',
    name: '招財納福',
    description: '喚醒豐盛本質，吸引物質與商機，穩固事業根基。',
    iconName: 'Coins',
    colorClass: 'bg-[#FAF6EE] text-[#A68F63] border-[#F2EDE0]'
  },
  {
    id: 'protection',
    name: '避邪安定',
    description: '阻絕負能量侵擾，安定浮躁心神，提供氣場結界。',
    iconName: 'Shield',
    colorClass: 'bg-[#F2F2F4] text-[#6B6B75] border-[#E3E3E7]'
  },
  {
    id: 'healing',
    name: '療癒安定',
    description: '洗滌積壓憂傷與焦慮，重回溫柔安靜的中心點。',
    iconName: 'Sparkles',
    colorClass: 'bg-[#F3FAF7] text-[#5A8F76] border-[#E1F3EC]'
  },
  {
    id: 'communication',
    name: '溝通表達',
    description: '支持真實表露心聲，和合言語衝突，增強演說信念。',
    iconName: 'MessageSquare',
    colorClass: 'bg-[#EEF7FA] text-[#4F8D9E] border-[#DCF1F5]'
  }
];

export const CHAKRAS: Chakra[] = [
  { name: '頂輪', sanskritName: 'Sahasrara', description: '位於靈魂之巔，主導靈性連結、大智慧與與宇宙意識的融合。', colorClass: 'border-[#D9CBE2] text-[#8C6D9E]' },
  { name: '眉心輪', sanskritName: 'Ajna', description: '位於眉心，主導直覺、第六感、洞察力與清晰的心智。', colorClass: 'border-[#CBD4E4] text-[#697FA1]' },
  { name: '喉輪', sanskritName: 'Vishuddha', description: '位於喉部，主導言語表達、溝通藝術、真實意圖與藝術創作力。', colorClass: 'border-[#CBE3E7] text-[#558E97]' },
  { name: '心輪', sanskritName: 'Anahata', description: '位於胸口，主導無私、同理心、親密之愛與接納自己的柔美力量。', colorClass: 'border-[#CCDDCB] text-[#5E8359]' },
  { name: '太陽輪', sanskritName: 'Manipura', description: '位於肚臍上方，主導個人意志、力量、決策膽識與對財富的支配感。', colorClass: 'border-[#E7DEC7] text-[#937C4F]' },
  { name: '臍輪', sanskritName: 'Svadhisthana', description: '位於下腹，主導情緒、性靈感受力、生命熱情與本能能量。', colorClass: 'border-[#E7D6CB] text-[#966E53]' },
  { name: '海底輪', sanskritName: 'Muladhara', description: '位於脊椎底部，主導安全感、生命根基物理力與內在安穩的安全感。', colorClass: 'border-[#DEC8C8] text-[#8E5151]' }
];

export const CRYSTALS: Crystal[] = [
  {
    id: 'amethyst',
    name: '紫水晶',
    englishName: 'Amethyst',
    chemicalFormula: 'SiO₂ (含有鐵、錳)',
    hardness: '7.0',
    description: '低回沉靜的智慧守護石。紫水晶獨特的光波能輕拂繁亂思緒，幫助在喧囂的日常中，沉澱出一處清明的思考空間。特別適用於需要高度專注、腦力激盪、或面臨重要決策的知性時刻。',
    needs: ['career', 'healing'],
    chakras: ['頂輪', '眉心輪'],
    color: '紫色',
    gradientColors: ['#CCCCCC', '#CABCD5'],
    morandiBg: '#F3EEF6',
    morandiText: '#5A4A62',
    energyIndex: { calm: 9, love: 6, fortune: 5, protect: 8, focus: 9 },
    cleansing: {
      methods: ['月光消磁', '晶洞消磁', '鼠尾草薰香', '音律消磁'],
      forbidden: '忌「日光消磁」：長時間暴曬會使色澤變淡、失去原本濃郁色度。',
      cycle: '建議每隔 2 - 3 週，或是剛經歷負能量高壓事件後即刻消磁。'
    },
    wearingRules: '建議配戴在「左手」，左手引入外在水晶的溫柔與大直覺；進行冥想時，可將手握紫水晶放置於額前或掌心，有助放鬆大腦深處。',
    matchTips: '搭配「白水晶」可使智慧與思緒放大的效果更加純淨透徹；若搭配「黃水晶」則能組成「紫黃晶」之象，平衡理智與財富吸引力。',
    story: '在古希臘神話中，紫水晶是酒神戴奧尼索斯（Dionysus）憤怒消解、月亮女神將純潔少女轉化為白石後，被酒神灑上葡萄酒染紅的聖石。它自古以來便被賦予「不易醉」、「防沉迷」的理智表徵。東方文化則視其為人緣極佳的「社交石」，其散發的貴氣是內斂而吸引知己的。'
  },
  {
    id: 'rose-quartz',
    name: '粉晶',
    englishName: 'Rose Quartz',
    chemicalFormula: 'SiO₂ (含有微量鈦與錳)',
    hardness: '7.0',
    description: '溫潤、毫不刺眼的愛之凝石。粉水晶（芙蓉石）傳遞的是溫柔的療癒力量，它並非急切地吸引熱烈的情感，而是先和解你與自己的關係，融化內在對愛的懷疑，進而向外散發包容、和諧的軟實力，帶動善意的桃花。',
    needs: ['love', 'healing'],
    chakras: ['心輪'],
    color: '粉色',
    gradientColors: ['#FAF3F3', '#ECD8D8'],
    morandiBg: '#FAF0F0',
    morandiText: '#7B4D4D',
    energyIndex: { calm: 8, love: 10, fortune: 4, protect: 2, focus: 5 },
    cleansing: {
      methods: ['月光消磁', '流水沖洗', '音律消磁', '香薰淨化'],
      forbidden: '忌「日光消磁」：日光的高熱會使細緻的鐵與錳離子氧化褪色，變為黯淡白石。',
      cycle: '建議每二週消磁一次，或在感情感到疲憊沉重時進行澈底沖洗與月光照拂。'
    },
    wearingRules: '配戴在「左手」有助於軟化自我尖銳、滋長自愛與溫柔；若配戴「右手」則較利於釋放內在壓抑的悲傷，並調和向外的社交氣場。',
    matchTips: '搭配「拉長石」或「月光石」能為溫和的粉紅色澤加上一絲靈動微光，能更細膩地調整睡前的安眠與內省。',
    story: '粉水晶與希臘神話中象徵愛與美的女神阿芙蘿黛蒂（Aphrodite）緊密相連。傳說阿芙蘿黛蒂在拯救愛人阿多尼斯時不慎被荊棘刺傷，她的神聖之血與他流出的血交融灑於白石上，便生出了代表永恆愛戀與極致溫度的粉色礦物。'
  },
  {
    id: 'clear-quartz',
    name: '白水晶',
    englishName: 'Clear Quartz',
    chemicalFormula: 'SiO₂ (純粹二氧化矽)',
    hardness: '7.0',
    description: '大自然純粹無瑕之光輝。白水晶被讚譽為「水晶之王」，是一切水晶能量的基石。如同清晨第一道光穿透空氣，能淨化混亂的思緒與環境殘留的雜訊，提供安靜、客觀的溫暖陪伴。',
    needs: ['career', 'healing', 'protection'],
    chakras: ['頂輪', '眉心輪', '喉輪', '心輪', '太陽輪', '臍輪', '海底輪'],
    color: '白色',
    gradientColors: ['#F9FAFB', '#ECEFF1'],
    morandiBg: '#F3F4F6',
    morandiText: '#4B5563',
    energyIndex: { calm: 10, love: 5, fortune: 5, protect: 10, focus: 10 },
    cleansing: {
      methods: ['日光消磁', '月光消磁', '流水沖洗', '海鹽法', '音律消磁'],
      forbidden: '無特殊禁忌。由於其耐受度極高，非常適合充當其他脆弱水晶的「消磁基座」。',
      cycle: '建議每週定期流水清洗，可以攜帶出入多雜音的空間後立即消磁，回復初始純白。'
    },
    wearingRules: '兩手皆合適。配戴「左手」引入纯粹意念與高專注力；配戴「右手」則能像一盞白熾燈般，將周遭干擾靈魂的負能反射並排解出去。',
    matchTips: '幾乎能與任何水晶「相乘搭配」，它可以提升主調水晶（如粉水晶的愛、黃水晶的財）的頻率，是完美的和弦襯托。',
    story: '古羅馬人相信白水晶是永久凝結、永不融化的冰川深切結晶，因此稱其為「Krystallos」（冰之意）。中世紀的修士們視其為天堂淨光留在凡間的物質投射，常用於鑲嵌法器，代表純潔、沒有欺瞞的上帝真相。'
  },
  {
    id: 'citrine',
    name: '黃水晶',
    englishName: 'Citrine',
    chemicalFormula: 'SiO₂ (含有微量鐵致色)',
    hardness: '7.0',
    description: '傾灑金色陽光的富饒之石。黃水晶代表著「創造」、「物質財富」與底氣極強的信心。它溫暖微烘的振頻，能活化下三輪的生存本能，帶來理性的商機、敏銳的判斷，是以明朗、積極的方式去實踐夢想的實業家隨護。',
    needs: ['wealth', 'career'],
    chakras: ['太陽輪'],
    color: '黃色',
    gradientColors: ['#FAF7F0', '#EFE0C3'],
    morandiBg: '#FAF6EE',
    morandiText: '#7B6236',
    energyIndex: { calm: 6, love: 5, fortune: 10, protect: 4, focus: 8 },
    cleansing: {
      methods: ['月光消磁', '晶簇淨化', '檀香薰香', '音律消磁'],
      forbidden: '忌「強烈曝曬」：天然黃水晶不宜高溫經年照射，容易在漫長日光中因化學結構微調而顏色變淡。',
      cycle: '建議每兩週或開張新業務、新合作案後消磁，將沾染的物質交易執念洗淨。'
    },
    wearingRules: '建議配戴在「左手」，左手承托著富足、自信心、和吸引好機會的暖意能量；當感到自我懷疑或意志消沉時，可握於胃部（太陽輪）冥想。',
    matchTips: '搭配「綠幽靈」或「東陵玉」，可形成古典的「內在富饒與外在豐盛」之象，非常適合創業、自媒體工作者與開拓市場的開路者。',
    story: '其名源於古法語的「Citron」（檸檬之意）。在古埃及、古羅馬，黃水晶是富商貴冑象徵尊榮與幸運的吊墜。由於它不保留累積下來的負能量，而是將之散化為平靜陽光，因此在能量學中，它是極少數「自帶主動淨化氣場」的神奇晶體。'
  },
  {
    id: 'aventurine',
    name: '東陵玉',
    englishName: 'Aventurine',
    chemicalFormula: 'KAl₂(AlSi₃O₁₀)(OH)₂ (含鉻雲母微粒)',
    hardness: '6.5 - 7.0',
    description: '春日復甦時的療癒之林。東陵玉（綠東陵）擁有一種沉穩的草木生機，在能量上它緊緊連結著大地母親的頻率。它給人的感覺並非躁動的冒險，而是像置身雨後森林，幫人鬆開長期累積的無形焦慮，重新迎來豐盛機會的種子萌芽。',
    needs: ['wealth', 'healing'],
    chakras: ['心輪'],
    color: '綠色',
    gradientColors: ['#F3FAF5', '#D2DFD6'],
    morandiBg: '#EDF2EE',
    morandiText: '#466752',
    energyIndex: { calm: 8, love: 7, fortune: 8, protect: 5, focus: 7 },
    cleansing: {
      methods: ['日光消磁', '月光消磁', '流水清滌', '泥土掩埋法', '香氛香草'],
      forbidden: '無特別禁忌。它與大自然山林有著天然共鳴，因此尤其喜好植物、泉水、或是露水的潤澤。',
      cycle: '特別適合浸泡於流動的乾淨溪水或盆栽綠植旁一夜，每隔一個月進行一次即可。'
    },
    wearingRules: '戴於「左手」可幫助放開心智接受新事物，改善刻板而緊張的神經；戴在「右手」則有助調和緊繃的交際張力、展現包容。',
    matchTips: '若同「月光石」配戴，則能把草木與月影融為極致寧靜的入夢氣息，能深度消解在快節奏生活中失衡、焦躁不寧、淺眠的心。',
    story: '其名 Aventurine 在法語與義大利語中意指「ventura」（意外的幸運、偶然）。相傳 18 世紀時，威尼斯工匠無意將銅屑掉入熔融的玻璃中，產生了熠熠生輝的耀眼綠砂，隨後天然綠東陵也因相似的雲母星點被寄寓為「偶然降臨的蓬勃商機與生命福氣」。'
  },
  {
    id: 'black-obsidian',
    name: '黑曜石',
    englishName: 'Black Obsidian',
    chemicalFormula: 'SiO₂ (富含矽酸鹽的天然火山玻璃)',
    hardness: '5.0 - 5.5',
    description: '大地極深處的堅毅守護。黑曜石是火山岩漿淬煉而成的天然玻璃，其能量極高、且具有大地的根基感。它像是一枚黑色的棱鏡護盾，能迅速吸收周遭的病氣、鬱悶、不懷好意的偏見、或是心懷芥蒂的低語，帶來絕對的平穩。',
    needs: ['protection'],
    chakras: ['海底輪'],
    color: '黑色',
    gradientColors: ['#ECECEE', '#B3B3B9'],
    morandiBg: '#EFEFEF',
    morandiText: '#3F3F46',
    energyIndex: { calm: 9, love: 2, fortune: 4, protect: 10, focus: 8 },
    instagramUrl: 'https://www.instagram.com/p/Da9ByxZIIH-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    cleansing: {
      methods: ['粗鹽淨化（乾燥浸泡）', '流水沖洗', '音律消磁', '日光消磁'],
      forbidden: '因為極易並樂於「吸收」周邊濁氣，故極度建議「定期消磁」，否則會因能量過載而色調灰暗。',
      cycle: '頻率要比一般水晶高：最好每週或每當出入醫院、老舊廢墟、密集擁擠的人潮後即刻消磁。'
    },
    wearingRules: '在東方民俗常規下，建議配戴在「右手」以利將體內潛沉的負面阻礙、疲憊濁氣與煩悶導向大地排遣；配戴「左手」則有助在急躁中踏實定性。',
    matchTips: '搭配「虎眼石」能形成「辟邪+威嚴」的勇敢相得益彰組合，為面臨生活低谷或恐懼開創的個體提供實打實的沉底背書。',
    story: '黑曜石自新石器時代起就是珍貴的防禦武器和占卜聖鏡。阿茲特克人會用黑曜石打磨成暗色魔鏡，認為能映照出人本質的靈魂光圈；在中德美洲它亦是高階祭司不可或缺的護身聖器，用於切斷恐懼、安穩基底。'
  },
  {
    id: 'lapis-lazuli',
    name: '青金石',
    englishName: 'Lapis Lazuli',
    chemicalFormula: '(Na,Ca)₈(AlSiO₄)₆(SO₄,S,Cl)₂ (多種礦物集合體)',
    hardness: '5.0 - 5.5',
    description: '浩瀚星空下的永恆凝神。青金石那一抹高雅、灑滿黃鐵礦金星的群青藍，宛如繁星滿天的深夜穹頂。它能直入眉心，調和靈性深度，協助人們釐清隱晦的心事，支持你以高貴、冷靜且條理分明的態度，向世界吐露真實的知見。',
    needs: ['career', 'communication'],
    chakras: ['眉心輪', '喉輪'],
    color: '藍色',
    gradientColors: ['#EBEFF5', '#C5D0E3'],
    morandiBg: '#EDF1F6',
    morandiText: '#3B4E6B',
    energyIndex: { calm: 9, love: 4, fortune: 6, protect: 7, focus: 9 },
    cleansing: {
      methods: ['月光消磁', '檀香/鼠尾草薰香', '音律法', '水晶簇/晶洞放一宿'],
      forbidden: '嚴忌「海鹽法」與「流水沖洗」：青金石結構較疏鬆、常帶有方解石，遇鹽或流水會使其失去原本剔透的光澤。',
      cycle: '建議隔 3 週左右，用布擦拭乾淨後放置於星空下，不接觸水分去作純淨的風化與月光滋潤。'
    },
    wearingRules: '戴於「左手」能平定焦躁不寧的血脈與激越情緒，激盪高維想像力；戴於「右手」則較多地被用於增強理性的辯駁、表達與教學氣場。',
    matchTips: '搭配「海藍寶」能大幅寬恕緊繃的喉部氣管，將智慧在極佳且溫吞的情狀下轉換為動聽、極具說服力的言詞。',
    story: '在古希臘、羅馬和古埃及，青金石地位等同黃金。圖坦卡門那著名的黃金面具中，眼眶與眉毛便嵌滿了此寶石。古人稱青金石為天之石，並認為它代表「至高無上的皇權與不容玷污的高潔真相」。'
  },
  {
    id: 'tigers-eye',
    name: '虎眼石',
    englishName: "Tiger's Eye",
    chemicalFormula: 'SiO₂ (含有石棉纖維與氧化鐵)',
    hardness: '6.5 - 7.0',
    description: '躍躍欲試的林中王者凝視。虎眼石那如貓眼般、隨光線折射而游移的游絲，是勇氣、突破力、與驚人魄力的集合。它具有非常實在的大地物理力量，能消除因長久空想而裹足不前的「拖延」，促使你站起身、踏出腳步。',
    needs: ['career', 'wealth'],
    chakras: ['太陽輪', '海底輪'],
    color: '黃色',
    gradientColors: ['#FAF3EB', '#EBDCC5'],
    morandiBg: '#FAF5EE',
    morandiText: '#7D5537',
    energyIndex: { calm: 5, love: 3, fortune: 9, protect: 8, focus: 9 },
    cleansing: {
      methods: ['日光消磁', '月光消磁', '流水沖洗', '泥土親近法', '音律消磁'],
      forbidden: '性情極剛健、耐受度強，日常保養無特別禁忌，是不需過度呵護的夥伴。',
      cycle: '建議每隔一個月進行一次淨化，或在完成重大戰略目標、考試過後進行排負。'
    },
    wearingRules: '配戴於「左手」有助穩步確立堅定的自我核心防護、阻擋猶豫和質疑；配戴於「右手」則有助將計畫果敢落地，並形成防小人的威震氣勢。',
    matchTips: '若與「黑曜石」相伴，則構成極強大的實務「避邪護航、事業保衛」風水，能為奔波於複雜商業博弈的決策者擋下不少暗箭。',
    story: '在古羅馬，戰士們會將虎眼石鑲嵌在盾牌與胸甲上，因為深信它的貓眼線條能在瞬息萬變的戰場中賜予雙眼看穿欺敵圈套的敏銳視野，提供無窮力量與堅實信念。'
  },
  {
    id: 'fluorite',
    name: '螢石',
    englishName: 'Fluorite',
    chemicalFormula: 'CaF₂ (氟化鈣，有多色雜質致色)',
    hardness: '4.0',
    description: '自帶微光的心智理性魔方。螢石常交織著綠、紫、藍、透明多層次光譜，被稱為「天才之石」。它能梳理腦葉深處雜亂無章的思維斷點，如同將卡在腦海中的書架逐一歸類，重新喚回條理性。適合複習備考或做深度學術思索。',
    needs: ['career', 'healing'],
    chakras: ['眉心輪', '頂輪'],
    color: '紫色',
    gradientColors: ['#EEF6F4', '#DCEFEA'],
    morandiBg: '#EEF6F4',
    morandiText: '#3D5E56',
    energyIndex: { calm: 9, love: 4, fortune: 3, protect: 5, focus: 10 },
    cleansing: {
      methods: ['煙熏法式淨化', '月光消磁', '音律法', '水晶簇放置方式'],
      forbidden: '嚴禁「流水長沖」與「強力日光」：螢石摩氏硬度僅 4.0，脆而易碎，且日光會使其內部氟化結構受熱受損或致變色；水浸容易導致微隙龜裂。',
      cycle: '應每兩週以柔軟的乾棉布擦拭，並在乾爽、充滿音樂的環境中冥想消磁。'
    },
    wearingRules: '推薦配戴在「左手」，左手能很好地吸收其調和心緒的柔和波動，理順左腦的邏輯推理和右腦的藝術聯想。',
    matchTips: '搭配「白水晶」能產生如清晨曦光的清涼思維感；對於高頻度伏案工作的人而言，是放鬆視神經與釋放繁瑣細節的最佳拍檔。',
    story: '中國古書中常提及的「夜明珠」，一部分便是指能在紫外光或受熱下發出螢光的天然螢石。在煉金術士的歷史中，它常被看作是一把能開啟「隱晦世界學識」的奇妙之匙，協助人類將抽象的宇宙結構落筆成文明實體。'
  },
  {
    id: 'moonstone',
    name: '月光石',
    englishName: 'Moonstone',
    chemicalFormula: 'K[AlSi₃O₈] (正長石與鈉長石交互層)',
    hardness: '6.0 - 6.5',
    description: '月暈拂面的靜謐之夜。月光石帶著幽微、變幻多端的藍白青幽光彩（青白光），猶如夜幕中高懸的明亮一輪。它不張揚，卻無比長情，以一種如水如霧的姿態，溫和撫平被高壓擰得過緊的「情緒病」，在無眠的暗夜帶來美滿和解。',
    needs: ['love', 'healing'],
    chakras: ['眉心輪', '頂輪', '臍輪'],
    color: '白色',
    gradientColors: ['#F2F5F8', '#DBE2EB'],
    morandiBg: '#F3F5F7',
    morandiText: '#475366',
    energyIndex: { calm: 10, love: 9, fortune: 5, protect: 4, focus: 7 },
    instagramUrl: 'https://www.instagram.com/p/DbDxgG-IH2h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    cleansing: {
      methods: ['月光沉浸照拂（極致推薦）', '音律磬鳴', '鼠尾草精細煙熏'],
      forbidden: '忌「日光法」與「粗鹽侵蝕」：強光會破壞長石那柔美幽光層的折射效率；鹽粒會侵蝕其微細的層狀表層。',
      cycle: '在滿月之時放置於窗櫺前照耀一宿，能讓其青冷月暈再次亮眼、蓄滿平靜活力。'
    },
    wearingRules: '戴於「左手」有助感知周圍的微妙氛圍，增強細緻的情感共鳴、改善暴躁脾性；戴於「右手」則被視為傳遞個人柔和魅力的最好燈塔。',
    matchTips: '搭配「拉長石」共同佩戴，能構成古老陰陽交融的心緒，是針對情緒過度敏感、時而沮喪恐慌之人的良藥配方。',
    story: '在古希臘，月光石是月亮女神塞勒涅（Selene）的精魂碎片，會隨著月相的盈虧而亮暗。印度文化則並視其為「能夠帶來幸福與和美夢之石」，認為它內部藏有月神的溫純法術，是祈求姻緣與好眠的古老定情信物。'
  },
  {
    id: 'aquamarine',
    name: '海藍寶',
    englishName: 'Aquamarine',
    chemicalFormula: 'Be₃Al₂Si₆O₁₈ (含有二價鐵)',
    hardness: '7.5 - 8.0',
    description: '蔚藍洋面的寧靜共鳴。海藍寶蘊藏著深不可測的溫和洋流氣度。它是喉腺的守護神，幫助因膽怯、壓抑或討好而緊閉不開的喉部舒展開來，讓你重新擁有順暢表達自我、且與他人溫和尋找最大公約數的語言魅力。',
    needs: ['communication', 'healing'],
    chakras: ['喉輪'],
    color: '藍色',
    gradientColors: ['#F0F8FC', '#D2E6ED'],
    morandiBg: '#EEF5F8',
    morandiText: '#3B5966',
    energyIndex: { calm: 8, love: 7, fortune: 4, protect: 6, focus: 8 },
    cleansing: {
      methods: ['流水沖洗', '月光消磁', '晶洞/晶簇放置一宿', '音律洗滌'],
      forbidden: '硬度達 7.5 - 8.0 極高，物理耐性好。但仍不宜進行高溫或長期暴曬，以免色澤逐漸轉淡、發白。',
      cycle: '適合在飲用水等級的涼水下輕輕沖洗 3-5 分鐘，每隔兩至三週消磁，可引導其找回澄澈洋流特質。'
    },
    wearingRules: '戴在「左手」能讓表達不自信、怕說錯話的內在舒張，提升自我接納與靈覺；配戴「右手」有助於安流和融，理順棘手的談判和對外商談。',
    matchTips: '若同「青金石」搭配，一邊釋放（喉輪海藍寶），一邊定靜（眉心輪青金石），能使藝術工作者在書寫、繪畫或歌唱時能量連貫無阻。',
    story: 'Aquamarine 的字源是拉丁語「Aqua Marina」（海水）。古代地中海的航海士常視其為海洋之神波塞頓（Poseidon）沉入海底的至寶，相信在風雨飘搖、航海迷航之際，將此石拋入浪中即可撫平波濤、抵禦惑人海妖，象徵平安、旅行好運與永恆青春。'
  },
  {
    id: 'rutilated-quartz',
    name: '金髮晶',
    englishName: 'Rutilated Quartz',
    chemicalFormula: 'SiO₂ (包體含有二氧化鈦之針狀金紅石)',
    hardness: '7.0',
    description: '無可匹敵的金針雷射閃耀。金髮晶（鈦晶）在晶透的二氧化矽體內孕育著金光燦燦、呈絲狀或扁平片狀的金属針線。它本身是一座充滿野心與權威感的發電機，象徵「膽識」、「大財富」以及勢不可挡的領袖力，能極快振作低迷。',
    needs: ['wealth', 'career'],
    chakras: ['太陽輪'],
    color: '黃色',
    gradientColors: ['#FAF5EE', '#ECDDBF'],
    morandiBg: '#FAF5EF',
    morandiText: '#7B5B33',
    energyIndex: { calm: 4, love: 4, fortune: 10, protect: 7, focus: 9 },
    cleansing: {
      methods: ['月光消磁', '白水晶消磁', '檀香/沈香薰香', '音律淨化'],
      forbidden: '忌「強烈日光長期曬照」：內部包體有些在特強高溫下會產生性質微變或基底微發褐。亦忌與化學洗劑直接接觸。',
      cycle: '因其工作頻率高、負載強（常負責與高強度事業談判對撞），建議一週消磁一次，保持其高頻金針的耀目。'
    },
    wearingRules: '強烈推薦配戴於「左手」承迎大格局財氣、提升事業大魄力與抗壓實力的底蘊；在重要合約簽署或重大面試當天可兩手握持一二。',
    matchTips: '搭配「黑曜石」是完美的「打拼、守護、防身」防護網，前者在外衝鋒陷陣賺取生計，後者在內紮根辟邪阻絕反噬和濁氣。',
    story: '因其針絲如維納斯女神散落的金色秀髮，因而在西方神話中有著浪漫的別稱「維納斯金髮石（Venus-hair stone）」。在長久的玄學中，它象徵萬丈陽光被封存進晶石，能掃除一切在決心前的軟弱和迷惑，點燃心底的英雄之魂。'
  },
  {
    id: 'Black-Rutilated-Quartz',
    name: '黑髮晶',
    englishName: 'Black Rutilated Quartz',
    chemicalFormula: 'SiO₂ (含有黑色針狀礦物包裹體)',
    hardness: '7.0',
    description: '如墨色流光般的髮絲結晶，彷彿將大地深層的穩定能量封存其中，能協助釋放累積的負面情緒與壓力，阻隔外界紛擾對心神的侵襲。當內心感到迷惘或疲憊時，黑髮晶能引導人重新回到自身中心，以沉著而堅定的步伐，面對生命中的每一次考驗。',
    needs: ['protection', 'wealth','healing'],
    chakras: ['海底輪'],
    color: '黑色',
    gradientColors: ['#ECECEE', '#B3B3B9'],
    morandiBg: '#EFEFEF',
    morandiText: '#3F3F46',
    energyIndex: { calm: 7, love: 2, fortune: 8, protect: 10, focus: 9 },
    cleansing: {
      methods: ['月光消磁', '晶簇淨化', '流水沖洗', '白水晶淨化', '音律淨化'],
      forbidden: '忌「長時間強烈曝曬」：鹽水長時間浸泡，使用強烈化學清潔方式清洗。',
      cycle: '建議每一週至兩週間進行消磁，如此可以維持穩定狀態。'
    },
    wearingRules: '建議配戴在「右手」，以穩定外在行動場域與防護能量為主；右手象徵釋放與對外應對，有助於隔絕負面干擾與提升行動決斷力。當感到壓力過大或思緒混亂時，可握於尾椎下方（海底輪）靜坐冥想，使身心回到穩定與紮根狀態。',
    matchTips: '搭配「黃水晶」或「虎眼石」，可形成「穩定基礎 × 行動執行 × 財富落實」的結構型能量組合，特別適合轉職期、創業者與高壓職場環境使用者，有助於在混亂中維持清晰目標與持續推進力。',
    story: '在東方神祕主義的卷軸中，黑髮晶被尊稱為「玄武之墨」。相傳在大地初開、水火相剋之際，北方守護神獸「玄武」現身，將其萬年修為化為一汪墨池，封印在至純的白水晶之中，形成了那一道道如墨筆揮毫的黑色髮絲。'
  },
  {
    id: 'Kyanite',
    name: '藍晶石',
    englishName: 'Kyanite',
    chemicalFormula: 'Al₂SiO₅ (矽酸鋁礦物)',
    hardness: '6.0 - 7.0',
    description: '如湛藍深海般的絲光結晶，彷彿將夜空深邃的澄澈能量封存其中，能協助清理喉部與心靈的阻塞，阻隔外界雜音對思緒的干擾。當內心感到迷惘或混亂時，藍晶石能引導人重拾清晰與專注，以順暢而自信的表達，展現生命中的每一次溝通。',
    needs: ['healing', 'communication'],
    chakras: ['眉心輪', '喉輪'],
    color: '藍色',
    gradientColors: ['#F0F8FC', '#D2E6ED'],
    morandiBg: '#EEF5F8',
    morandiText: '#3B5966',
    energyIndex: { calm: 8, love: 3, fortune: 5, protect: 9, focus: 10 },
    instagramUrl: 'https://www.instagram.com/p/DbSXWE2oAYZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    cleansing: {
      methods: ['月光消磁', '晶簇淨化', '檀香/沈香薰香', '白水晶淨化', '音律淨化'],
      forbidden: '忌「鹽水浸泡與化學清洗」：高溫強光曝曬，碰撞摔落以免因雙向硬度特性導致晶體裂損。',
      cycle: '建議每一週至兩週間進行消磁，如此可以維持穩定狀態。'
    },
    wearingRules: '建議配戴在「左手」以內化平靜能量，或配戴在「右手」以提升表達展現；左手象徵接收，有助於梳理混亂思緒與平復焦慮，右手象徵釋放，能強化溝通自信與邏輯輸出。當感到思緒過載或迷惘時，可握於眉心輪或喉輪處靜坐冥想，使心神回到澄澈與專進狀態。',
    matchTips: '搭配「拉長石」或「白水晶」，可形成「思緒釐清 × 靈感啟發 × 能量放大」的結構型能量組合，特別適合創作者、需頻繁溝通的決策者與高壓動腦環境使用者，有助於在繁雜局勢中維持敏銳洞察與精準表達力。',
    story: '在北歐神話中，藍晶石是守護靈魂的「真理之盾」。其水晶印記蘊含著「破曉與斷念」的遠古誓約。它猶如一把湛藍的光之刃，承載著大天使米迦勒的意志。這道印記不染塵埃、永不吸收負能量，能瞬間斬斷宿世的業力紐帶與心靈枷鎖，將宇宙最純粹的藍色光束，烙印在行者的靈魂深處。'
  },
  {
    id: 'red-agate',
    name: '紅瑪瑙',
    englishName: 'Red Agate',
    chemicalFormula: 'Fe₂O₃SiO₂ (二氧化矽及氧化鐵)',
    hardness: '6.5~7.0',
    description: '高能量的熱情與行動之石。紅瑪瑙獨特的溫潤光澤能驅散拖延與迷惘，幫助在平淡的日常中，注入一股堅定的實踐力量。特別適用於需要突破瓶頸、激發創意、或面臨重要挑戰的果斷時刻。',
    needs: ['protection', 'healing'],
    chakras: ['臍輪', '海底輪'],
    color: '紅色',
    gradientColors: ['#F5CBA7', '#E6B0AA'],
    morandiBg: '#FDEDEC',
    morandiText: '#78281F',
    energyIndex: { calm: 7, love: 5, fortune: 7, protect: 9, focus: 8 },
    cleansing: {
      methods: ['日光消磁', '晶洞消磁', '流水消磁', '鼠尾草薰香'],
      forbidden: '忌「高溫烘烤」：雖然可用日光曝曬，但須避免接近高溫火源或精油燈烘烤，以免流失微量水份導致質地變乾、失去溫潤光澤。',
      cycle: '建議每隔 2 - 3 週，或是剛完成重大挑戰、出入磁場混亂場所後即刻消磁。'
    },
    wearingRules: '建議配戴在「左手」，左手引入紅瑪瑙的熱情活力與自信能量；進行冥想時，可將紅瑪瑙放置於尾椎（海底輪位置）或右手握持，有助於排除雜念、將思緒穩固接地。',
    matchTips: '搭配「黑曜石」或「黑髮晶」可將避邪化煞與防小人的防護磁場極大化；若搭配「黃水晶」或「鈦晶」則能激發衝勁，組成強大的「事業催財」組合。',
    story: '在遠古的巴比倫與埃及文明中，紅瑪瑙被雕刻成戰士的護身符與印章，象徵戰神的力量，能賦予戰士無畏的勇氣與刀槍不入的守護。東方文化則將紅瑪瑙（古稱赤玉）視為長壽、富貴與喜慶的象徵，其深沉而內斂的紅色被認為具有強大的辟邪驅凶磁場，能安定家宅並喚醒配戴者心中的主導力量。'
  },
  {
    id: 'green-phantom-quartz',
    name: '綠幽靈',
    englishName: 'Green Phantom Quartz',
    chemicalFormula: '(Mg,Fe)₅Al(Si₃Al)O₁₀(OH)₈ (綠泥石族礦物)',
    hardness: '7.0',
    description: '象徵事業與財富的幻影之石。綠幽靈獨特的層疊景致能驅散焦慮與停滯，幫助在挑戰的職場中，注入一股堅定的實踐力量。特別適用於需要突破事業瓶頸、凝聚貴人運、或面臨重大轉折的衝刺時刻。',
    needs: ['career','wealth','healing','protection'],
    chakras: ['心輪'],
    color: '綠色',
    gradientColors: ['#F3FAF5', '#D2DFD6'],
    morandiBg: '#EDF2EE',
    morandiText: '#466752',
    energyIndex: { calm: 8, love: 6, fortune: 9, protect: 7, focus: 8 },
    instagramUrl: 'https://www.instagram.com/p/Dasfi3AgciH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    cleansing: {
      methods: ['晶簇/晶洞消磁', '流水消磁', '鼠尾草薰香', '音樂消磁'],
      forbidden: '忌「日光曝曬」：內含的綠泥石礦物對熱源極為敏感，高溫或陽光直射易導致礦物變質、晶體褪色，進而失去原有的翠綠幻影與光澤。',
      cycle: '建議每隔 2 - 3 週，或是剛完成重大事業決策、出入磁場混亂場所後即刻消磁。'
    },
    wearingRules: '建議配戴在「左手」，左手引入綠幽靈的事業好運與財富磁場；進行冥想或需要療癒時，可將綠幽靈放置於胸口中心（心輪位置），有助於釋放累積的職場壓力、撫平焦慮並找回內心平靜。',
    matchTips: '搭配「黑曜石」或「黑髮晶」能一邊吸納病氣煞氣、一邊招財招貴人，將職場防小人的防護磁場極大化；若搭配「鈦晶」或「捷克隕石」則能倍增正財能量，組成無往不利的頂級「事業招財」組合。',
    story: '在西方自然療癒界，它因晶體內宛如四季更迭的微型景致，被讚譽為「幻影水晶」，記載著大自然千百年來的生長與重生。在東方，其濃郁的綠色酷似美金，因而被奉為「鬼佬財神」；古人更將內部層疊如山巒的金字塔景觀，視為「步步高升」的財富圖騰，相傳能為在商海或仕途中拼搏的行者凝聚四方貴人、廣納正財，是智者與創業者案頭不可或缺的事業之皇。'
  },
  {
    id: 'strawberry-quartz',
    name: '草莓晶',
    englishName: 'Strawberry Quartz',
    chemicalFormula: 'SiO₂(α-Fe₂O₃) (富含赤鐵礦晶體的二氧化矽)',
    hardness: '7.0',
    description: '象徵愛情與人緣的甜蜜之石。草莓晶獨特的紅潤微粒能驅散孤獨與迷惘，幫助在平淡的日常中，注入一股溫柔的實踐力量。特別適用於需要突破情感瓶頸、凝聚正緣桃花、或面臨人際轉折的幸福時刻。',
    needs: ['love','career','healing'],
    chakras: ['心輪'],
    color: '紅色',
    gradientColors: ['#F5CBA7', '#E6B0AA'],
    morandiBg: '#FDEDEC',
    morandiText: '#78281F',
    energyIndex: { calm: 6, love: 9, fortune: 5, protect: 6, focus: 7 },
    cleansing: {
      methods: ['晶簇/晶洞消磁', '流水消磁', '月光消磁', '鼠尾草薰香'],
      forbidden: '忌「日光曝曬」：內含的鐵元素在強光與高溫直射下極易氧化變質，導致原有的粉紅色彩褪色變深，失去草莓般的鮮亮色澤。',
      cycle: '建議每隔 2 - 3 週，或是剛經歷情緒起伏、出入磁場混亂場所後即刻消磁。'
    },
    wearingRules: '建議配戴在「左手」，左手引入草莓晶的粉紅人緣與正桃花磁場；進行冥想時，可將其放置於胸口中心（心輪位置），有助於感受愛的能量、敞開心胸並與宇宙溫柔的頻率共振。',
    matchTips: '搭配「白水晶」能放大草莓晶的粉紅氣場，將招桃花的吸引力極大化；若搭配「拉長石」或「月光石」則能安撫情緒，組成溫柔浪漫的「守護愛情」組合。',
    story: '在西方自然療癒界，它因晶體內部點綴著無數紅色鐵礦微粒，宛如將熟成草莓的盛夏氣息凝結在冰晶之中，被視為「大自然最甜蜜的造物」。它掌管著心輪最純粹的愛之頻率，相傳能化作一道溫柔的粉紅護身符，為在情感與人際中尋覓方向的旅人撥開迷霧、喚醒內在的獨特魅力，是每一位渴望在生命中擁抱正緣與幸福的行者，不可或缺的戀愛之石。'
  },
  {
    id: 'Southern-red-agate',
    name: '南紅瑪瑙',
    englishName: 'Southern Red Agate',
    chemicalFormula: 'SiO₂Fe₂O₃ (帶有微量氧化鐵的二氧化矽)',
    hardness: '6.5',
    description: '古稱赤玉的吉祥之石。南紅瑪瑙溫潤濃郁的中國紅能驅散內心的焦慮與不安，幫助在起伏的日常中，注入一股堅定的守護力量。適用於需要提升個人氣場、招財納福渴望平安順遂的幸福時刻。',
    needs: ['protection', 'wealth', 'healing'],
    chakras: ['海底輪', '臍輪'],
    color: '紅色',
    gradientColors: ['#F5CBA7', '#E6B0AA'],
    morandiBg: '#FDEDEC',
    morandiText: '#78281F',
    energyIndex: { calm: 8, love: 5, fortune: 5, protect: 9, focus: 8 },
    instagramUrl: 'https://www.instagram.com/p/DbRWc2aHfQl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    cleansing: {
      methods: ['晶簇/晶洞消磁', '流水消磁', '月光消磁'],
      forbidden: '忌「日光曝曬」及「化學洗劑」：內含水分子，烈日暴曬或高溫會使其流失水分，導致顏色變淡、失去光澤；另強酸強鹼會侵蝕南紅微細的孔隙，破壞其油潤的包漿。',
      cycle: '建議每隔 1 - 2 個月，或是表面看起來灰暗、失去原本的油潤感或摸起來有黏膩感時則即刻消磁。'
    },
    wearingRules: '建議配戴在「左手」，左手引入南紅瑪瑙的中國紅吉祥富貴與辟邪守護磁場；進行冥想時，可將其放置於脊椎骨尾端（海底輪位置），有助於感受大地的沉穩能量、消除焦慮並與宇宙堅定實踐的頻率共振。',
    matchTips: '搭配「黃水晶」或「金髮晶」能放大南紅瑪瑙的鴻運氣場，將招財開運的吸金力極大化；若搭配「茶晶」或「黑曜石」則能加強阻擋負能量，組成沉穩剛毅的「避邪護身」組合。',
    story: '掌管海底輪最沉穩的生命頻率，被視為「大地深處最純粹的赤玉結晶」；而在中國古代傳說中，相傳在遠古是火神遺留在人間的護身符，能化作一道剛毅的硃砂結界，為在世俗與考驗中砥礪前行的旅人驅散焦慮、喚醒內在的無畏勇氣。'
  },
  {
    id: 'Smoky-quartz',
    name: '茶晶',
    englishName: 'Smoky Quartz',
    chemicalFormula: 'SiO₂ (帶有微量鋁元素)',
    hardness: '7.0',
    description: '古稱煙晶的沉穩之石。茶晶溫潤深邃的煙褐色能沉澱內心的浮躁與雜念，幫助在起伏的日常中，注入一股堅定的守護力量。適用於需要穩定個人氣場、辟邪化煞渴望平安順遂的幸福時刻。',
    needs: ['protection', 'healing'],
    chakras: ['海底輪', '太陽輪'],
    color: '褐色',
    gradientColors: ['#8A7B72', '#4E433E'],
    morandiBg: '#EDE8E4',
    morandiText: '#594E48',
    energyIndex: { calm: 9, love: 4, fortune: 6, protect: 10, focus: 9 },
    cleansing: {
      methods: ['晶簇/晶洞消磁', '流水消磁', '月光消磁'],
      forbidden: '忌「日光曝曬」，茶晶褐色的「色心」結構對高溫與強烈紫外線非常敏感。烈日暴曬或高溫易使其流失水分，導致顏色變淡、褪色或失去油亮光澤。',
      cycle: '建議每 2－3 週，或出入醫院、老舊場所後進行消磁，維持能量純淨。'
    },
    wearingRules: '建議配戴在「右手」，依循氣場左進右出的宇宙律動，由右手將體內堆積的壓力、病氣與負面能量深層排解；進行冥想時，可將其放置於雙腳腳底，化作一根與地心相連的能量接地線，引導漂浮的思緒重回大地的懷抱。',
    matchTips: '搭配「鈦晶」或「綠幽靈」能將茶晶的沉穩氣場轉化為強大的顯化力量，打造出「穩中求財、財庫豐盈」的事業格局；若搭配「黑曜石」或「白水晶」則能一邊排除晦氣、一著鞏固心神，築起一道牢不可破的精神防護網，是「防小人淨化」最佳搭配。',
    story: '在古蘇格蘭的凱爾特傳說中，它是德魯伊祭司在冬至夜裡點燃的守護之火，其深邃的煙褐色能化作一圈無形的煙燻結界，為在現實迷霧與精神內耗中迷失的旅人，驅散混亂的思緒、喚醒心靈最深處的沉著與大將之風。'
  },
  {
    id: 'Lolite',
    name: '堇青石',
    englishName: 'Lolite',
    chemicalFormula: 'Mg₂Al₄Si₅O₁₈ (複合鎂鋁矽酸鹽)',
    hardness: '7.0~7.5',
    description: '迷霧指引下的心靈羅盤。堇青石那一抹隨著角度變幻、如深海又如晨昏交界的多色湛藍，宛如穿透迷霧的航標曙光。它能直擊眉心，指引內在的直覺與方向，協助人們看清混亂中的本質與路徑，支持你以理性、自信且堅定不移的精神，校準人生航向並走向明確的解答。',
    needs: ['career', 'healing', 'communication'],
    chakras: ['眉心輪', '喉輪'],
    color: '紫色',
    gradientColors: ['#BAC7E8', '#4F6196'],
    morandiBg: '#E9ECF5',
    morandiText: '#3B4D7A',
    energyIndex: { calm: 8, love: 4, fortune: 5, protect: 7, focus: 10 },
    cleansing: {
      methods: ['晶簇/晶洞消磁', '流水消磁', '月光消磁'],
      forbidden: '忌「日光曝曬」，長期曝曬在烈日下或接觸高溫，會使其流失水分，導致原有的神祕藍紫色變淡、褪色，甚至失去原本清透的光澤。',
      cycle: '建議每 2－3 週，或出入醫院、老舊場所後或是「變暗或變沉」時進行消磁，維持能量純淨。'
    },
    wearingRules: '建議配戴在「左手」，左手引入堇青石如紫羅蘭夜空般的靈性智慧與理智磁場，幫助釐清思緒、看穿表象的迷霧；進行冥想時，可將其放置於兩眼中間的眉心輪位置，有助於喚醒內在的直覺與敏銳的洞察力。',
    matchTips: '搭配「藍線石」或「月光石」能放大堇青石的靈性氣場，將直覺與冷靜的力量極大化，打造出「看透本質、智慧大開」的思維；若搭配「白水晶」或「黑尖晶」則能在一邊排除負面干擾、一邊穩固清明心神，是「破除迷茫」最強大的組合。',
    story: '北歐維京人的古老傳說中，曾是航海家在陰天裡用來尋找太陽、判定航向的「海上藍寶石」與「黑暗中的指南針」。這道穿越迷茫的引領光芒，如今化作內在的理性指引，為在人生十字路口感到迷茫的旅人，指引出一條通往澄澈與自律的智慧道路。'
  },
  {
    id: 'Morganite',
    name: '摩根石',
    englishName: 'Morganite',
    chemicalFormula: 'Be₃Al₂Si₆O₁₈',
    hardness: '7.5~8.0',
    description: '柔和晨曦中的愛與療癒。摩根石那一抹溫潤清新、如櫻花瓣般的粉橘光澤，宛如拂過心頭的暖陽。它能溫柔撫慰心輪，滋養內在的情感深度，協助人們放下隱含的焦慮與執念，支持你以包容、慈悲且優雅柔和的心態，擁抱真實的自己並傳遞純粹的愛。',
    needs: ['love', 'healing', 'communication'],
    chakras: ['心輪'],
    color: '粉色',
    gradientColors: ['#FFF0F0', '#E5A2A6'],
    morandiBg: '#FAF1F1',
    morandiText: '#8E5A5D',
    energyIndex: { calm: 9, love: 10, fortune: 6, protect: 5, focus: 6 },
    instagramUrl: 'https://www.instagram.com/p/DYq4nQ2lBvo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    cleansing: {
      methods: ['晶簇/晶洞消磁', '白水晶淨化', '月光消磁'],
      forbidden: '忌「日光曝曬」，摩根石含微量水分與微細內部結構，長期暴露在強光或高溫下，可能使其粉色調變淡、失去原有的柔和光暈。',
      cycle: '建議每2-3週，或在情緒起伏較大、經歷人際衝突、或覺得能量變得黯沉時進行消磁，讓心輪保持純淨與流動。'
    },
    wearingRules: '建議配戴在 左手，左手象徵「引入能量」，能讓摩根石的粉色心輪磁場緩緩滲入內在，帶來溫柔、包容與情緒修復的力量。在冥想或自我療癒時，可將摩根石放置於胸口中央，有助於釋放壓力、打開情感流動，重新感受愛與安全感。',
    matchTips: '搭配「粉晶」 或「月光石」能放大摩根石的愛與情緒療癒能量，使心輪的柔和頻率更加明亮;搭配「白水晶」或「紫水晶」，則能在穩定心神的同時提升清晰度，形成「柔中帶明」的能量組合。',
    story: '在古老傳說中，被視為「心之光」，是旅人在漫長生命旅途中，用來修補情感裂縫、重拾愛與信任的溫柔護符;它像黎明前的第一道粉色晨光，能在混亂與壓力的陰影中，重新喚醒內在的柔軟與安定。'
  },
];
