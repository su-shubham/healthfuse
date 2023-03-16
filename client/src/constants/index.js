import { createCampaign, dashboard, logout, money, profile, withdraw,doctors } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/dashboard',
  },
  {
    name: 'appointments',
    imgUrl: createCampaign,
    link: '/appointments',
  },
  {
    name: 'doctors',
    imgUrl: doctors,
    link: '/doctors',
  },
  {
    name: 'Donate',
    imgUrl: money,
    link: '/chat',
  },
  {
    name: 'chat',
    imgUrl: withdraw,
    link: '/chat',
  },
  {
    name: 'blogs',
    imgUrl: profile,
    link: '/blogs',
  },
  {
    name: 'community',
    imgUrl: profile,
    link: '/community',
  },
  {
    name: 'about',
    imgUrl: profile,
    link: '/about',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/logout',
  },
];
