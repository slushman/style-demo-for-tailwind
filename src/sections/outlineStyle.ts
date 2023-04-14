export const outlineStyle = {
  id: 'outlineStyle',
  label: 'Outline Style',
  meta: 'The text inside each element has a green background color to help show the outline.',
  styles: {
    li: 'outline',
    p: 'bg-lime-600',
  },
  sections: [
    {
      data: [
        { className: 'outline-none' },
        { className: 'outline' },
        { className: 'outline-dashed' },
        { className: 'outline-dotted' },
        { className: 'outline-double' },
      ],
    },
  ],
};
