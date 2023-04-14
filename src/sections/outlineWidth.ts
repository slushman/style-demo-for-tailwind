export const outlineWidth = {
  id: 'outlineWidth',
  label: 'Outline Width',
  meta: 'The text inside each element has a green background color to help show the outline.',
  styles: {
    li: 'outline',
    p: 'bg-lime-600',
  },
  sections: [
    {
      data: [
        { className: 'outline-0', note: 'outline-width: 0px' },
        { className: 'outline-1', note: 'outline-width: 1px' },
        { className: 'outline-2', note: 'outline-width: 2px' },
        { className: 'outline-4', note: 'outline-width: 4px' },
        { className: 'outline-8', note: 'outline-width: 8px' },
      ],
    },
  ],
};
