import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Home',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Subjects',
    icon: { name: 'keypad-outline' },
    link: { href: '/subjects' },
  },
  {
    title: 'Assesments',
    icon: { name: 'file-outline' },
    link: { href: '/subjects' },
  },
  {
    title: 'Live Sessions',
    icon: { name: 'video-outline' },
    link: { href: '/subjects' },
  },
  {
    title: 'Training Zone',
    icon: { name: 'browser-outline' },
    link: { href: '/subjects' },
  },
  {
    title: 'Profile Setting',
    icon: { name: 'settings' },
    link: { href: '/subjects' },
  }
];

export default items;
