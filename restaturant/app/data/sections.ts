import { Section } from "../../types";

export const SECTIONS: Section[] = [
  {
    id: "todays-special",
    title: "Todays Special",
    items: [
      {
        id: "s1",
        title: "Traditional Moroccan Shakshuka",
        price: 350,
        desc: "Eggs gently poached in simmering mixture...",
        veg: false,
        image: "/special1.jpg",
      },
      {
        id: "s2",
        title: "Scrambled Egg Labneh Toast",
        price: 270,
        desc: "Perfectly cooked scrambled egg...",
        veg: false,
        image: "/special2.jpg",
      },
    ],
  },
  {
    id: "pastry-breads",
    title: "Pastry And Breads",
    items: [
      {
        id: "p1",
        title: "Croissant",
        price: 120,
        desc: "Rich flaky buttery croissant",
        veg: true,
        image: "/croissant.jpg",
      },
    ],
  },
];
