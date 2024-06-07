export type MenuTypes = {
  name: string;
  image: string;
  href: string;
};

export const navMenuIcons: MenuTypes[] = [
  {
    name: 'Projects',
    image: '/navIcons/projects.svg',
    href: '/projects',
  },
  {
    name: 'Resume',
    image: '/navIcons/resume.svg',
    href: '/resume',
  },
];
export const socialicons: MenuTypes[] = [
  {
    name: 'LinkedIn',
    image: '/navIcons/linkedin.svg',
    href: 'https://www.linkedin.com/in/heo',
  },
  {
    name: 'GitHub',
    image: '/navIcons/github.svg',
    href: 'https://www.github.com/heojay0309',
  },
];
