export const outlineOffset = {
  id: 'outlineOffset',
  label: 'Outline Offset',
  meta: 'The text inside each element has a green background color to help show the outline.',
  styles: {
    li: 'outline',
    p: 'bg-lime-600',
  },
  sections: [
    {
      data: [
        { className: 'outline-offset-0', note: 'outline-offset: 0px', },
        { className: 'outline-offset-1', note: 'outline-offset: 1px', },
        { className: 'outline-offset-2', note: 'outline-offset: 2px', },
        { className: 'outline-offset-4', note: 'outline-offset: 4px', },
        { className: 'outline-offset-8', note: 'outline-offset: 8px', },
      ],
    },
  ],
};
