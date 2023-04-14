import type { DemoData } from '../types';

export const slugify = (str: string) => {
	return str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "");
};

export const getMenuOptionsForSection = (demos: DemoData[]) => demos.map(({ id, label }: DemoData) => ({
  id,
  label,
}));
