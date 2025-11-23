import { Section } from "../../types";

export const SECTIONS: Section[] = [
  {
    id: "todays-special",
    title: "Todays Special",
    items:[
      {
        id: "ts1",
        title: "Traditional Moroccan Shakshuka",
        price: 350,
        desc: "Eggs gently poached in a rich tomato & pepper sauce...",
        veg: false,
        image: "/menu/shakshuka.jpg",
      },
      {
        id: "ts2",
        title: "Scrambled Egg Labneh Toast",
        price: 270,
        desc: "Perfectly cooked scrambled egg on creamy labneh toast...",
        veg: false,
        image: "/menu/labneh-toast.jpg",
      },
    ],
  },
  {
    id: "pastry-breads",
    title: "Pastry And Breads",
    items: [
      {
        id: "pb1",
        title: "Croissant",
        price: 120,
        desc: "Rich flaky and buttery croissant, the quintessential breakfast pastry...",
        veg: true,
        image: "/menu/croissant.jpg",
      },
      {
        id: "pb2",
        title: "Almond Croissant",
        price: 160,
        desc: "Filled with almond cream, topped with toasted almonds...",
        veg: true,
        image: "/menu/almond-croissant.jpg",
      },
    ],
  },
  {
    id: "food",
    title: "Food",
    items: [
      {
        id: "f1",
        title: "Eggs Benedict",
        price: 330,
        desc: "Toasted English muffin topped with ham, poached eggs & hollandaise...",
        veg: false,
        image: "/menu/eggs-benedict.jpg",
      },
      {
        id: "f2",
        title: "English Breakfast",
        price: 390,
        desc: "Hearty breakfast with eggs, sausages, baked beans & toast...",
        veg: false,
        image: "/menu/english-breakfast.jpg",
      },
      {
        id: "f3",
        title: "Stuffed Omelette",
        price: 250,
        desc: "Chicken sausage and caramelized onion stuffed in fluffy omelette...",
        veg: false,
        image: "/menu/stuffed-omelette.jpg",
      },
    ],
  },
  {
    id: "cold-bev",
    title: "Cold Beverage",
    items: [
      {
        id: "cb1",
        title: "Iced Latte",
        price: 180,
        desc: "Espresso over ice with chilled milk...",
        veg: true,
        image: "/menu/iced-latte.jpg",
      },
      {
        id: "cb2",
        title: "Cold Brew",
        price: 200,
        desc: "Slow-steeped cold brew coffee, smooth and bold...",
        veg: true,
        image: "/menu/cold-brew.jpg",
      },
    ],
  },
  {
    id: "hot-bev",
    title: "Hot Beverage",
    items: [
      {
        id: "hb1",
        title: "Cappuccino",
        price: 160,
        desc: "Espresso with steamed milk and thick foam...",
        veg: true,
        image: "/menu/cappuccino.jpg",
      },
      {
        id: "hb2",
        title: "Masala Chai",
        price: 90,
        desc: "Traditional Indian spiced tea with milk...",
        veg: true,
        image: "/menu/masala-chai.jpg",
      },
    ],
  },
  {
    id: "cold-pressed",
    title: "Cold Pressed Juice",
    items: [
      {
        id: "cp1",
        title: "Detox Green",
        price: 220,
        desc: "Spinach, cucumber, apple and lemon cold pressed juice...",
        veg: true,
        image: "/menu/green-juice.jpg",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        id: "d1",
        title: "Tiramisu Jar",
        price: 260,
        desc: "Coffee soaked sponge layered with mascarpone cream...",
        veg: true,
        image: "/menu/tiramisu.jpg",
      },
    ],
  },
  {
    id: "baked-cheesecake",
    title: "Baked Cheesecake",
    items: [
      {
        id: "bc1",
        title: "New York Cheesecake",
        price: 280,
        desc: "Classic baked cheesecake with buttery biscuit base...",
        veg: true,
        image: "/menu/cheesecake.jpg",
      },
    ],
  },
  {
    id: "kombucha",
    title: "Kombucha",
    items: [
      {
        id: "k1",
        title: "Ginger Lemon Kombucha",
        price: 220,
        desc: "Fermented tea infused with ginger and lemon...",
        veg: true,
        image: "/menu/kombucha.jpg",
      },
    ],
  },
  {
    id: "mini-cakes",
    title: "Mini Cakes",
    items: [
      {
        id: "mc1",
        title: "Mini Chocolate Truffle Cake",
        price: 250,
        desc: "Dense chocolate cake with truffle ganache...",
        veg: true,
        image: "/menu/mini-choco.jpg",
      },
    ],
  },
  {
    id: "cake-tubs",
    title: "Cake Tubs",
    items: [
      {
        id: "ct1",
        title: "Red Velvet Cake Tub",
        price: 300,
        desc: "Layers of moist red velvet cake with cream cheese frosting...",
        veg: true,
        image: "/menu/red-velvet.jpg",
      },
    ],
  },
  {
    id: "macarons",
    title: "Macarons",
    items: [
      {
        id: "m1",
        title: "Assorted Macarons (6 pcs)",
        price: 320,
        desc: "Delicate almond cookies with assorted fillings...",
        veg: true,
        image: "/menu/macarons.jpg",
      },
    ],
  },
  {
    id: "brownie",
    title: "Brownie",
    items: [
      {
        id: "b1",
        title: "Fudge Brownie",
        price: 150,
        desc: "Intensely fudgy chocolate brownie...",
        veg: true,
        image: "/menu/brownie.jpg",
      },
    ],
  },
  {
    id: "cupcakes",
    title: "Cupcakes",
    items: [
      {
        id: "cc1",
        title: "Vanilla Cupcake",
        price: 120,
        desc: "Soft vanilla sponge with buttercream frosting...",
        veg: true,
        image: "/menu/vanilla-cupcake.jpg",
      },
    ],
  },
  {
    id: "cakes",
    title: "Cakes",
    items: [
      {
        id: "c1",
        title: "Nutella Cake 500g",
        price: 800,
        desc: "Moist chocolate cake layered with Nutella ganache...",
        veg: true,
        image: "/menu/nutella-cake.jpg",
      },
    ],
  },
];