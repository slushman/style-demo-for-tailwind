export type Styles = {
  li?: string;
  p?: string;
  span?: string;
};

export type SectionData = {
  className: string;
  note?: string;
};

export type Section = {
  sectionId?: string;
  sectionTitle?: string;
  data: SectionData[];
};

export type DemoData = {
  id: string;
  label: string;
  meta?: string;
  sections: Section[];
  styles?: Styles;
};

export type MenuOption = {
  id: string;
  label: string;
};

export type MenuOptions = MenuOption[];
