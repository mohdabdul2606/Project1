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
        desc: "Eggs That Are Gently Poached In Simmering Mixture Of ...",
        veg: false,
        image: "/mnt/data/Screenshot_2025-11-21-23-43-17-086_com.android.chrome.jpg",
      },
      {
        id: "s2",
        title: "Scrambled Egg Labneh Toast",
        price: 270,
        desc: "Perfectly Cooked Scrambled Egg A Top, Labneh Packed W...",
        veg: false,
        image: "/mnt/data/Screenshot_2025-11-21-23-43-26-331_com.android.chrome.jpg",
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
        desc: "Rich Flaky And Buttery Croissant, The Quintessential ...",
        veg: true,
        image: "/mnt/data/Screenshot_2025-11-21-19-11-11-403_com.android.chrome.jpg",
      },
    ],
  },

  {
    id: "food",
    title: "Food",
    items: [
      {
        id: "f1",
        title: "English Breakfast",
        price: 390,
        desc: "A Hearty British Breakfast Meal Featuring Fried Eggs,...",
        veg: false,
        image: "/mnt/data/Screenshot_2025-11-21-23-43-32-665_com.android.chrome.jpg",
      },
      {
        id: "f2",
        title: "Turkish Eggs",
        price: 330,
        desc: "Perfectly Poached Eggs Served Over A Delicious Garlic...",
        veg: false,
      },
      {
        id: "f3",
        title: "Stuffed Omlette",
        price: 250,
        desc: "Chicken Sausage, Caramelized Onion Stuffed Inside...",
        veg: false,
      },
      {
        id: "f4",
        title: "Mushroom And Cheese Omlette",
        price: 230,
        desc: "Fluffy Omlette Stuffed With Mushroom And Cheese.",
        veg: false,
      },
    ],
  },

  {
    id: "cold-bev",
    title: "Cold Beverage",
    items: [
      { id: "c1", title: "Iced Latte", price: 180, veg: true },
      { id: "c2", title: "Cold Brew", price: 200, veg: true },
    ],
  },

  {
    id: "hot-bev",
    title: "Hot Beverage",
    items: [
      { id: "h1", title: "Espresso", price: 120, veg: true },
      { id: "h2", title: "Cappuccino", price: 140, veg: true },
    ],
  },
];
