export const menuItems = [
  {
    title: 'Home',
    url: '/',
    cName: 'nav-links',
  },
  {
    title: 'Services',
    url: '/services',
    cName: 'nav-links',
    submenu: [
      {
        title: 'web design',
        url: 'web-design',
        cName: 'sub-nav-links',
      },
      {
        title: 'web development',
        url: 'web-dev',
        cName: 'sub-nav-links',
        // submenu: [
        //   {
        //     title: 'Frontend',
        //     url: 'frontend',
        //     cName: 'sub-nav-links',
        //   },
        //   {
        //     title: 'Backend',
        //     submenu: [
        //       {
        //         title: 'NodeJS',
        //         url: 'node',
        //         cName: 'sub-nav-links',
        //       },
        //       {
        //         title: 'PHP',
        //         url: 'php',
        //         cName: 'sub-nav-links',
        //       },
        //     ],
        //   },
        // ],
      },
      {
        title: 'SEO',
        url: 'seo',
        cName: 'sub-nav-links',
      },
    ],
  },
  {
    title: 'About',
    url: '/about',
    cName: 'nav-links',
    submenu: [
      {
        title: 'Who we are',
        url: 'who-we-are',
        cName: 'sub-nav-links',
      },
      {
        title: 'Our values',
        url: 'our-values',
        cName: 'sub-nav-links',
      },
    ],
  },
];
