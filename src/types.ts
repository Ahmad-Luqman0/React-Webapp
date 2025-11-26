
export interface Country {
  name: string;
  count: number;
}

export interface SubTab {
  name: string;
  count: number;
}

export interface ContentItem {
  id: number;
  title: string;
  videoThumb: string;
  frames: string[];
  asr: string;
  ocr: string;
}
