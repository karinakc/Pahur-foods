import lasoonTimur from './assets/lasoon-timur.jpg';
import sidhraMachha from './assets/sidhra-machha.jpg';
import yanjiChicken from './assets/yanji-chicken.jpg';
import polayekoBuff from './assets/polayeko-buff.jpg';
import lasoon from './assets/lasoon.jpg';
import mangoMurabba from './assets/mango-murabba.jpg';
import tangyMango from './assets/tangy-mango.jpg';
import timurHimalayan from './assets/Timur-himalayan.jpg';

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
    description: 'A rich chicken achar made for rice, roti, chiura or a quick bite straight from the jar.',
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
    description: 'Pahur Mango Murabba, presented in a pantry-ready jar.',
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
];

export const locations = [
  {
    number: '01',
    title: 'Pahur Shop',
    detail: 'Pokhara, Nepal · Contact us for current address and opening hours',
    action: 'Get shop details',
    href: '/contact',
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
    title: 'Stock Pahur',
    detail: 'For retailers, restaurants and hospitality partners',
    action: 'Wholesale enquiry',
    href: '/contact?subject=wholesale',
  },
];
