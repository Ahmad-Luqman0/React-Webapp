import type { Country, SubTab, ContentItem } from './types';

export const COUNTRIES: Country[] = [
  { name: 'Brazil', count: 1092 },
  { name: 'Indonesia', count: 2 },
  { name: 'Mexico', count: 0 },
  { name: 'Colombia', count: 0 },
  { name: 'Argentina', count: 0 },
  { name: 'Pakistan', count: 0 },
  { name: 'Egypt', count: 0 },
  { name: 'Turkey', count: 34 },
  { name: 'Peru', count: 0 },
  { name: 'Saudi Arabia', count: 0 },
  { name: 'Jordan', count: 0 },
  { name: 'Iraq', count: 0 },
  { name: 'Commercialization – Splash Ad', count: 0 },
  { name: 'Commercialization – Splash Ad – Brazil Queue', count: 0 },
  { name: 'Commercialization - Landing Page - Turkish Bucket - Initial', count: 110 },

  
];

export const SUB_TABS_BY_COUNTRY: { [key: string]: SubTab[] } = {
  'Brazil': [
    { name: 'Commercial-Effect Ad-Brazil-Original', count: 70 },
    { name: 'Commercialization-effect advertisement-Brazilian barrel-top customer', count: 0 },
    { name: 'Commercialization-effect advertising-Brazilian barrel-AIGC', count: 0 },
  ],
  'Indonesia': [
    { name: 'Indonesia-General', count: 2 },
    { name: 'Indonesia-Priority-Ads', count: 0 },
  ],
  'Mexico': [
    { name: 'Mexico-Primary', count: 0 },
    { name: 'Mexico-Video-Ads', count: 0 },
    { name: 'Mexico-Community-Content', count: 0 },
  ],
  'Colombia': [
    { name: 'Colombia-Main-Queue', count: 0 },
  ],
  'Argentina': [
    { name: 'Argentina-Feed', count: 0 },
    { name: 'Argentina-Promoted', count: 0 },
  ],
  'Pakistan': [
    { name: 'Pakistan-Urdu-Review', count: 0 },
    { name: 'Pakistan-English-Ads', count: 0 },
  ],
  'Egypt': [
    { name: 'Egypt-Arabic-Content', count: 0 },
  ],
  'Turkey': [
    { name: 'Turkey-General-Review', count: 34 },
    { name: 'Turkey-High-Priority', count: 0 },
    { name: 'Commercialization – Website – Turkey Queue', count : 94},
  ],
  'Peru': [
    { name: 'Peru-Lima-Queue', count: 0 },
    { name: 'Peru-General', count: 0 },
  ],
  'Saudi Arabia': [
    { name: 'KSA-Riyadh-Ads', count: 0 },
    { name: 'KSA-General-Content', count: 0 },
  ],
  'Jordan': [
    { name: 'Jordan-Amman-Review', count: 0 },
  ],
  'Iraq': [
    { name: 'Iraq-Baghdad-Content', count: 0 },
  ],
  'America': [
    { name: 'USA-West-Content', count: 0 },
    { name: 'USA-East-Ads', count: 0 },
    { name: 'USA-Central-Video', count: 0 },
  ],
  'Global': [
    { name: 'Global-English-Priority', count: 0 },
    { name: 'Global-Multilingual-Content', count: 0 },
  ],
};


export const CONTENT_BY_COUNTRY: { [key: string]: ContentItem[] } = {
  'Brazil': [
    {
      id: 1,
      title: 'Hello Hi How are Yoy i am fine',
      videoThumb: 'https://i.imgur.com/uR1G5aB.png',
      frames: [ 
        'https://i.imgur.com/7gN0xV1.png',
        'https://i.imgur.com/gS4f5yT.png',
        'https://i.imgur.com/5hG6f7C.png',
        'https://i.imgur.com/rT3p9Q8.png',
        'https://i.imgur.com/xI6w8aO.png',
        'https://i.imgur.com/Uf7Wc8U.png',
      ],
      asr: 'Curabitur ut quam eget nisl mollis finibus eu eget augue. Donec vel porttitor nibh. Proin velit lorem, tincidunt ut tempor nec, gravida ac sapien. Suspendisse eu viverra ligula. Quisque arcu ipsum, lacinia nec enim eu, vulputate ullamcorper ipsum. Phasellus in quam eget augue faucibus efficitur. Integer aliquet arcu non ullamcorper congue. Donec nec auctor sem. Mauris placerat, dui sit amet porta accumsan, lorem libero iaculis ante, vitae luctus nisl mauris id nulla.',
      ocr: '',
    },
    {
      id: 2,
      title: 'Hello Hi How are Yoy i am fine',
      videoThumb: 'https://i.imgur.com/rP0S9Oa.png',
      frames: [
        'https://i.imgur.com/7gN0xV1.png',
        'https://i.imgur.com/gS4f5yT.png',
        'https://i.imgur.com/5hG6f7C.png',
        'https://i.imgur.com/rT3p9Q8.png',
        'https://i.imgur.com/xI6w8aO.png',
        'https://i.imgur.com/Uf7Wc8U.png',
      ],
      asr: 'Vivamus sollicitudin ex eget tortor mollis, sed viverra nisi rutrum. Sed sed ultricies lacus. Morbi commodo rhoncus sem, eget tincidunt diam viverra quis. Vestibulum in arcu ac libero accumsan sagittis. Aenean porta mollis enim, at egestas diam tincidunt vitae. Quisque mauris ligula, commodo nec lectus eget, fermentum maximus odio. Phasellus posuere diam vitae magna feugiat sodales. Vivamus faucibus nisi turpis. Cras fringilla egestas consequat',
      ocr: '',
    },
    {
      id: 3,
      title: 'AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ',
      videoThumb: 'https://i.imgur.com/2s8E9aC.png',
      frames: [
        'https://i.imgur.com/A6j5d8f.png',
        'https://i.imgur.com/A6j5d8f.png',
        'https://i.imgur.com/A6j5d8f.png',
        'https://i.imgur.com/eE1j9fT.png',
        'https://i.imgur.com/eE1j9fT.png',
        'https://i.imgur.com/eE1j9fT.png',
      ],
      asr: 'HELOSFNSI',
      ocr: 'Vivamus sollicitudin ex eget tortor mollis, sed viverra nisi rutrum. Sed sed ultricies lacus. Morbi commodo rhoncus sem, eget tincidunt diam viverra quis. Vestibulum in arcu ac libero accumsan sagittis. Aenean porta mollis enim, at egestas diam tincidunt vitae. Quisque mauris ligula, commodo nec lectus eget, fermentum maximus odio. Phasellus posuere diam vitae magna feugiat sodales. Vivamus faucibus nisi turpis. Cras fringilla egestas consequat',
    },
  ],
  'Indonesia': [
    {
      id: 101,
      title: 'XYZVTAVE',
      videoThumb: 'https://i.imgur.com/L3z4jYy.png',
      frames: [
        'https://i.imgur.com/F0z1gH3.png',
        'https://i.imgur.com/bX4VqA5.png',
        'https://i.imgur.com/F0z1gH3.png',
        'https://i.imgur.com/bX4VqA5.png',
        'https://i.imgur.com/F0z1gH3.png',
        'https://i.imgur.com/bX4VqA5.png',
      ],
      asr: 'sjbdshbfhw',
      ocr: 'dwufbwb</span>',
    },
    {
      id: 102,
      title: 'DUSBDCHWBUP HUCW',
      videoThumb: 'https://i.imgur.com/9f8vM7a.png',
      frames: [
        'https://i.imgur.com/sS6f7gH.png',
        'https://i.imgur.com/tY9hU0I.png',
        'https://i.imgur.com/sS6f7gH.png',
        'https://i.imgur.com/tY9hU0I.png',
        'https://i.imgur.com/sS6f7gH.png',
        'https://i.imgur.com/tY9hU0I.png',
      ],
      asr: 'Vivamus sollicitudin ex eget tortor mollis, sed viverra nisi rutrum. Sed sed ultricies lacus. Morbi commodo rhoncus sem, eget tincidunt diam viverra quis. Vestibulum in arcu ac libero accumsan sagittis. Aenean porta mollis enim, at egestas diam tincidunt vitae. Quisque mauris ligula, commodo nec lectus eget, fermentum maximus odio. Phasellus posuere diam vitae magna feugiat sodales. Vivamus faucibus nisi turpis. Cras fringilla egestas consequat',
      ocr: '<span class="bg-blue-200">csfs</span> TUTORIAL',
    }
  ],
  'Turkey': [
    {
      id: 201,
      title: 'Lezzetli bir yolculuk: İstanbul\'un en iyi kebapları! 🇹🇷',
      videoThumb: 'https://i.imgur.com/sM4wA8r.png',
      frames: [
        'https://i.imgur.com/cW9q9vS.png',
        'https://i.imgur.com/pD8tG6k.png',
        'https://i.imgur.com/cW9q9vS.png',
        'https://i.imgur.com/pD8tG6k.png',
        'https://i.imgur.com/cW9q9vS.png',
        'https://i.imgur.com/pD8tG6k.png',
      ],
      asr: 'Vivamus sollicitudin ex eget tortor mollis, sed viverra nisi rutrum. Sed sed ultricies lacus. Morbi commodo rhoncus sem, eget tincidunt diam viverra quis. Vestibulum in arcu ac libero accumsan sagittis. Aenean porta mollis enim, at egestas diam tincidunt vitae. Quisque mauris ligula, commodo nec lectus eget, fermentum maximus odio. Phasellus posuere diam vitae magna feugiat sodales. Vivamus faucibus nisi turpis. Cras fringilla egestas consequat',
      ocr: 'İstanbul\'un <span class="bg-blue-200">fdefe</span> Durağı',
    },
    {
      id: 202,
      title: 'Kapadokya\'da Balon Turu Deneyimi',
      videoThumb: 'https://i.imgur.com/aW5e6fJ.png',
      frames: [
        'https://i.imgur.com/kY4v3gK.png',
        'https://i.imgur.com/mN8o9pL.png',
        'https://i.imgur.com/kY4v3gK.png',
        'https://i.imgur.com/mN8o9pL.png',
        'https://i.imgur.com/kY4v3gK.png',
        'https://i.imgur.com/mN8o9pL.png',
      ],
      asr: 'sf jfhbh',
      ocr: '<span class="bg-blue-200">KAPADOKYA</span>\'YI KEŞFET',
    },
    {
      id: 203,
      title: 'sfwnufn',
      videoThumb: 'https://i.imgur.com/7gH8fTj.png',
      frames: [
        'https://i.imgur.com/dF9jS3k.png',
        'https://i.imgur.com/uV6wR4b.png',
        'https://i.imgur.com/dF9jS3k.png',
        'https://i.imgur.com/uV6wR4b.png',
        'https://i.imgur.com/dF9jS3k.png',
        'https://i.imgur.com/uV6wR4b.png',
      ],
      asr: 'Mijsfnfin',
      ocr: '40 Yıl <span class="bg-blue-200">Hatırı</span> Var',
    }
  ],
};
