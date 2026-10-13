import lasoonTimur from './assets/lasoon-timur.webp';
import sidhraMachha from './assets/sidhra-machha.webp';
import yanjiChicken from './assets/yanji-chicken.webp';
import polayekoBuff from './assets/polayeko-buff.webp';
import lasoon from './assets/lasoon.webp';
import mangoMurabba from './assets/mango-murabba.webp';
import tangyMango from './assets/tangy-mango.webp';
import timurHimalayan from './assets/Timur-himalayan.webp';
import buffChoila from './assets/choila.webp';

// Keep business details here so they can be updated without touching the layouts.
export const products = [
  {
    name: 'Lasoon Timur',
    eyebrow: 'Garlic achar',
    description: 'A garlic and timur achar made for adding an extra spoonful of flavour to the table.',
    image: lasoonTimur,
    tone: 'cream',
  },
  {
    name: 'Sidra Machha',
    eyebrow: 'Fish achar',
    description: 'Deep, savoury flavour that brings a bold Nepali accent to an everyday plate.',
    image: sidhraMachha,
    tone: 'blue',
  },
  {
    name: 'Yanji Chicken',
    eyebrow: 'Chicken achar',
    description: 'A rich chicken achar made for rice, roti, chiura or a quick savoury bite.',
    image: yanjiChicken,
    tone: 'red',
  },
  {
    name: 'Polayeko Buff',
    eyebrow: 'Buff achar',
    description: 'A Pahur buff achar for rice, roti, chiura and shared meals.',
    image: polayekoBuff,
    tone: 'mint',
  },
  {
    name: 'Lasoon Bites',
    eyebrow: 'Garlic achar',
    description: 'Pahur Lasoon Bites, packed for the pantry and ready for the table.',
    image: lasoon,
    tone: 'gold',
  },
  {
    name: 'Mango Murabba',
    eyebrow: 'Mango speciality',
    description: 'Pahur Mango Murabba, packed and ready for the pantry.',
    image: mangoMurabba,
    tone: 'orange',
  },
  {
    name: 'Tangy Mango',
    eyebrow: 'Mango achar',
    description: 'Pahur Tangy Mango, made to take its place beside the everyday meal.',
    image: tangyMango,
    tone: 'lime',
  },
  {
    name: 'Timur Himalayan Touch',
    eyebrow: 'Timur speciality',
    description: 'Pahur Timur Himalayan Touch, packed for easy everyday serving.',
    image: timurHimalayan,
    tone: 'aqua',
  },
  {
    name: 'Buff Choila',
    eyebrow: 'Packaged choila',
    description: 'Pahur Buff Choila, packed as a convenient set for the everyday table.',
    image: buffChoila,
    tone: 'choila',
  },
];

export const locations = [
  {
    number: '01',
    title: 'Pahur Shops',
    detail: 'Pokhara & Butwal, Nepal · Contact us for current addresses and opening hours',
    action: 'View locations',
    href: '/locations',
  },
  {
    number: '02',
    title: 'Order Pahur',
    detail: 'Ask us about current products, delivery areas and availability',
    action: 'Start an order',
    href: '/contact?subject=order',
  },
  {
    number: '03',
    title: 'Order with Jiffy',
    detail: 'Shop Pahur products online through Jiffy Services',
    action: 'Order online',
    href: 'https://www.jiffy-services.com/',
    external: true,
  },
];
