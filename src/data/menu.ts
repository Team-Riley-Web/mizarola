export interface MenuItem {
  hr: string;
  en: string;
  price: string;
  /** Extra description (e.g. pizza ingredients) that isn't a name translation. */
  noteHr?: string;
  noteEn?: string;
}

export interface MenuCategory {
  id: string;
  hr: string;
  en: string;
  icon: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'hladna-predjela',
    hr: 'Hladna predjela',
    en: 'Cold starters',
    icon: 'Salad',
    items: [
      { hr: 'Hladna plata "Mizarola"', en: 'Cold platter "Mizarola"', price: '16' },
      { hr: 'Salata od hobotnice', en: 'Octopus salad', price: '19' },
      { hr: 'Salata s tunjevinom', en: 'Tuna salad', price: '13' },
      { hr: 'Inćuni na salatu', en: 'Anchovy salad', price: '12' },
      { hr: 'Salata s piletinom', en: 'Chicken salad', price: '13' },
    ],
  },
  {
    id: 'topla-predjela',
    hr: 'Topla predjela',
    en: 'Warm starters',
    icon: 'Soup',
    items: [
      { hr: 'Špageti Bolognese', en: 'Spaghetti Bolognese', price: '13' },
      { hr: 'Špageti "Plodovi mora"', en: 'Spaghetti with seafood', price: '16' },
      { hr: 'Špageti Carbonara', en: 'Spaghetti Carbonara', price: '14' },
      { hr: 'Rižoto "Plodovi mora"', en: 'Seafood risotto', price: '17' },
      { hr: 'Crni rižot', en: 'Black cuttlefish-ink risotto', price: '18' },
      { hr: 'Tjestenina s kozicama i gorgonzolom', en: 'Pasta with shrimp and gorgonzola', price: '17' },
      { hr: 'Lazanje', en: 'Lasagne', price: '15' },
    ],
  },
  {
    id: 'ribe-i-rakovi',
    hr: 'Ribe i rakovi',
    en: 'Fish and shellfish',
    icon: 'Fish',
    items: [
      { hr: 'Riba porcija (brancin, orada)', en: 'Fish portion (sea bass, sea bream)', price: '20' },
      { hr: 'Tuna filet', en: 'Tuna steak', price: '22' },
      { hr: 'Hobotnica gril', en: 'Grilled octopus', price: '25' },
      { hr: 'Riblji brudet', en: 'Traditional fish stew', price: '26' },
      { hr: 'Riblja gregada', en: 'Traditional white fish stew', price: '26' },
      { hr: 'Riblja plata', en: 'Fish platter', price: '28' },
      { hr: 'Riblja plata za dvoje', en: 'Fish platter for two', price: '55' },
      { hr: 'Lignje gril', en: 'Grilled calamari, approx. 300g', price: '19' },
      { hr: 'Škampi na buzaru', en: 'Scampi, traditional stew style', price: '26' },
      { hr: 'Dagnje na buzaru', en: 'Mussels, traditional stew style', price: '17' },
      { hr: 'Pržene kozice', en: 'Fried shrimp', price: '17' },
      { hr: 'File ribe u tijestu', en: 'Fish fillet in batter', price: '20' },
    ],
  },
  {
    id: 'mesna-jela',
    hr: 'Mesna jela',
    en: 'Meat dishes',
    icon: 'Beef',
    items: [
      { hr: 'Ćevapčići', en: 'Grilled minced-meat rolls', price: '14' },
      { hr: 'Biftek (250g)', en: 'Beef steak', price: '28' },
      { hr: 'T-bone steak "Mizarola" (400g)', en: 'T-bone steak with smoked ham and cheese', price: '40' },
      { hr: 'Rib-eye steak', en: 'Rib-eye steak', price: '28' },
      { hr: 'Janjetina na žaru', en: 'Grilled lamb', price: '20' },
      { hr: 'Pileći medaljoni', en: 'Chicken medallions', price: '14' },
      { hr: 'Bečki odrezak', en: 'Vienna schnitzel', price: '16' },
    ],
  },
  {
    id: 'prilozi',
    hr: 'Prilozi',
    en: 'Side dishes',
    icon: 'Utensils',
    items: [
      { hr: 'Mozzarella sticks', en: 'Mozzarella sticks', price: '7' },
      { hr: 'Pomfrit', en: 'Fried potatoes', price: '5,5' },
      { hr: 'Kuhana riža', en: 'Rice', price: '5' },
      { hr: 'Blitva', en: 'Swiss chard', price: '7' },
      { hr: 'Povrće grill', en: 'Grilled vegetables', price: '7' },
    ],
  },
  {
    id: 'salate',
    hr: 'Salate',
    en: 'Salads',
    icon: 'Leaf',
    items: [
      { hr: 'Mješana salata', en: 'Mixed salad', price: '5,5' },
      { hr: 'Zelena salata', en: 'Lettuce salad', price: '5,5' },
      { hr: 'Kupus salata', en: 'Cabbage salad', price: '5,5' },
      { hr: 'Salata od rajčica', en: 'Tomato salad', price: '5,5' },
      { hr: 'Grčka salata', en: 'Greek salad', price: '10' },
      {
        hr: 'Salata Mizarola',
        en: 'Salata Mizarola',
        price: '10',
        noteHr: 'Krastavac, kupus, kukuruz, umak',
        noteEn: 'Cucumber, cabbage, sweetcorn, house sauce',
      },
    ],
  },
  {
    id: 'pizze',
    hr: 'Pizze',
    en: 'Pizza',
    icon: 'Pizza',
    items: [
      { hr: 'Capricciosa', en: 'Capricciosa', price: '14', noteHr: 'Rajčica, sir, šunka, gljive', noteEn: 'Tomato, cheese, ham, mushrooms' },
      { hr: 'Margherita', en: 'Margherita', price: '13', noteHr: 'Rajčica, sir', noteEn: 'Tomato, cheese' },
      { hr: 'Salama', en: 'Salama', price: '15', noteHr: 'Rajčica, sir, salama, gljive', noteEn: 'Tomato, cheese, salami, mushrooms' },
      { hr: 'Calzone', en: 'Calzone', price: '14', noteHr: 'Rajčica, sir, šunka, gljive', noteEn: 'Tomato, cheese, ham, mushrooms (folded)' },
      {
        hr: 'Dalmatinac',
        en: 'Dalmatinac',
        price: '15',
        noteHr: 'Rajčica, sir, šunka, pršut, gljive',
        noteEn: 'Tomato, cheese, ham, smoked ham, mushrooms',
      },
      {
        hr: 'Vegetariana',
        en: 'Vegetariana',
        price: '15',
        noteHr: 'Rajčica, sir, paprika, patlidžan, tikvica, luk, masline',
        noteEn: 'Tomato, cheese, peppers, aubergine, courgette, onion, olives',
      },
      { hr: 'Tunjevina', en: 'Tunjevina', price: '14', noteHr: 'Rajčica, sir, tunjevina, gljive, luk', noteEn: 'Tomato, cheese, tuna, mushrooms, onion' },
      { hr: 'Kukurizza', en: 'Kukurizza', price: '14', noteHr: 'Rajčica, sir, šunka, kukuruz', noteEn: 'Tomato, cheese, ham, sweetcorn' },
      { hr: 'Hobotnica', en: 'Hobotnica', price: '17', noteHr: 'Rajčica, sir, hobotnica, bijeli luk', noteEn: 'Tomato, cheese, octopus, garlic' },
      {
        hr: 'Mizarola',
        en: 'Mizarola',
        price: '15',
        noteHr: 'Rajčica, sir, kozice, kukuruz, kapare',
        noteEn: 'Tomato, cheese, shrimp, sweetcorn, capers',
      },
      {
        hr: 'Sućuraj',
        en: 'Sućuraj',
        price: '15',
        noteHr: 'Rajčica, sir, šunka, inćuni, kapare',
        noteEn: 'Tomato, cheese, ham, anchovies, capers',
      },
      {
        hr: '4 sira',
        en: '4 sira',
        price: '15',
        noteHr: 'Rajčica, gauda, parmezan, livanjski, mozzarella',
        noteEn: 'Tomato, gouda, parmesan, livanjski cheese, mozzarella',
      },
    ],
  },
  {
    id: 'deserti',
    hr: 'Deserti',
    en: 'Desserts',
    icon: 'IceCreamBowl',
    items: [
      { hr: 'Palačinke', en: 'Pancakes / crêpes', price: '6' },
      { hr: 'Palačinke sa sladoledom', en: 'Pancakes with ice cream', price: '7' },
      { hr: 'Sladoled', en: 'Ice cream', price: '7' },
      { hr: 'Souffle', en: 'Souffle', price: '6' },
    ],
  },
];
