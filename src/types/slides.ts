export interface BaseSlide {
  id: string;
  type: 'title' | 'bullets' | 'code' | 'custom';
}

export interface TitleSlide extends BaseSlide {
  type: 'title';
  title: string;
  subtitle?: string;
}

export interface BulletsSlide extends BaseSlide {
  type: 'bullets';
  title: string;
  bullets: string[];
}

export interface CodeSlide extends BaseSlide {
  type: 'code';
  title: string;
  code: string;
  language?: string;
}

export interface CustomSlide extends BaseSlide {
  type: 'custom';
  title: string;
  component: React.ComponentType;
}

export type Slide = TitleSlide | BulletsSlide | CodeSlide | CustomSlide;