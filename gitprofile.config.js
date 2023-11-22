// gitprofile.config.js

const config = {
  github: {
    username: 'chaeyh4', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '@chaeyh4',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'chaeyoon28@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'TensorFlow',
    'PyTorch',
    'sklearn',
    'Java',
  ],
  experiences: [
    {
      company: 'Medical Big Data Labatory, Sungkyunkwan University',
      position: 'Intern',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://sites.google.com/view/mbd-lab?usp=sharing',
    },
    {
      company: 'Machine Learning Systems Lab, Sungkyunkwan University',
      position: 'Intern',
      from: 'December 2022',
      to: 'June 2023',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '대한의료인공지능학회장상',
      body: '2023 의료인공지능 아이디어 경진대회',
      year: 'December 2023',
      link: ''
    },
    {
      name: 'ADsP',
      body: '',
      year: 'September 2022',
      link: ''
    },
  ],
  education: [
    {
      institution: 'Sungkyunkwan University',
      degree: 'Bachelor',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Girls High School Attached to College of Education, Dongguk University',
      degree: 'High School',
      from: '2020',
      to: '2017',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '',
      description:
        '',
      imageUrl: '',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'winter',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
