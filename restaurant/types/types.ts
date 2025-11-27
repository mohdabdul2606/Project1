// types.ts

export type Item = {
  id: string;
  title: string;
  price: number;
  desc?: string;
  veg?: boolean;
  image?: string;
  // optional, used by filters
  type?: "veg" | "nonveg" | "egg";
};

export type Section = {
  id: string;
  title: string;
  items: Item[];
};
