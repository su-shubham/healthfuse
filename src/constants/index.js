import { createCampaign, dashboard, logout, money, profile, withdraw,doctor,stethoscope } from '../assets';

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
    imgUrl: stethoscope,
    link: '/doctors',
  },
  {
    name: 'Chat',
    imgUrl: money,
    link: '/chat',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/logout',
  },
];
