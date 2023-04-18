import { DemoComponent } from '../types';

export const aspectRatio = {
  demoComponent: DemoComponent.Video,
  id: 'aspectRatio',
  label: 'Aspect Ratio',
  sections: [
    {
      data: [
        { className: 'aspect-auto', note: 'aspect-ratio: auto' },
        { className: 'aspect-square', note: 'aspect-ratio: 1 / 1' },
        { className: 'aspect-video', note: 'aspect-ratio: 16 / 9 ' },
      ],
    },
  ],
};
