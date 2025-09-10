const siteConfig = {
  personal: {
    name: 'Nyong Godwill Nkwain',
    title: 'MSc @ Carnegie Mellon University',
    institution: 'CMU Africa',
    department: 'College of Engineering',
    email: 'nyonggodwill11@gmail.com',
    location: 'Kigali, Rwanda',
    avatar:
      'https://github.com/user-attachments/assets/19771f37-ee31-43d6-a993-29de6929379c',
    bio: '🥷 I am Designed For Failure',
    social: {
      email: 'mailto:baimamboukar@gmail.com',
      github: 'https://github.com/baimamboukar',
      linkedin: 'https://linkedin.com/in/baimamboukar',
      twitter: 'https://twitter.com/baimamboukar',
    },
  },
  navigation: [
    { name: 'About', href: '#about', active: true },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Publications', href: '#publications' },
    { name: 'Portfolio', href: '#portfolio' },
  ],
  about: {
    title: 'About me',
    content:
      'I am a master student at Carnegie Mellon University. My research and projects interests center on Space Technologies, Machine Learning applications in Healthcare and Earth Observation. My expertise lies in software engineering and cloud computing.',
    interests: [
      'Space Missions Design',
      'Sattelites Constellations',
      'Cloud Computing',
      'Open Source',
      'Machine Learning',
    ],
    education: [
      {
        degree: "Bachelor's in Computer Engineering",
        institution: 'University of Bamenda, Bamenda',
        year: '2019 - 2023',
      },
      {
        degree: 'MLH Fellowship, Open Source',
        institution: 'MLH x G-Research',
        year: '2023 - 2023',
      },
      {
        degree: 'Msc In EAI, Applied ML',
        institution: 'CMU Africa',
        year: '2025 - Present',
      },
    ],
  },
  publications: [
    {
      title:
        'Setting up a Self-Hosted GitHub Actions Runner on AWS Virtual Machines',
      authors: 'Boukar, B.',
      venue: 'Medium Technical Blog',
      year: '2024',
      type: 'blog',
    },
    {
      title:
        'Geographical Features based Upper-Tropospheric RHi prediction using Machine Learning for Enhanced Contrails Forecasting for African Airspace.',
      authors: 'Alice M., Baimam B., Jonathan K., et al.',
      venue: 'MIGARS',
      year: '2025',
      type: 'Conference',
    },
    {
      title:
        'Deep Learning Based Potentially Hazardous Asteroids Classification Using GNNs',
      authors: 'Boukar, B.',
      venue: 'Hardvard Astrophysics Workshop',
      year: '2025',
      type: 'Workshop',
    },
    {
      title: 'Serverless Retrieval Augmented Generation with AWS SageMaker.',
      authors: 'Boukar, B.',
      venue: 'Personal Blog',
      year: '2023',
      type: 'blog',
    },
  ],
  projects: [
    {
      title: 'Riverpod Intellisense',
      description:
        'VS Code extension providing intelligent code completion and snippets for Flutter Riverpod state management',
      year: '2024',
      link: 'https://github.com/baimamboukar/riverpod-intellisense',
      tags: ['TypeScript', 'VS Code', 'Flutter', 'Developer Tools'],
    },
    {
      title: 'Sahel Fund',
      description:
        'Digital wallet and payment solution app built with Flutter, featuring secure transactions and QR code payments',
      year: '2023',
      link: 'https://github.com/baimamboukar/swiftpay',
      tags: ['Flutter', 'Firebase', 'Payment Gateway', 'Mobile'],
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio website built with Next.js and Tailwind CSS, showcasing projects and skills',
      year: '2023',
      link: 'https://baimamboukar.dev',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    },
    {
      title: 'Cosmosense',
      description:
        'For Space exploration enthusiasts, Cosmosense provides real-time tracking of satellites and space missions with detailed info and alerts',
      year: '2022',
      link: 'https://github.com/baimamboukar/cosmosense',
      tags: ['Flutter', 'Node.js', 'MongoDB', 'REST API'],
    },
    {
      title: 'Asteroidly',
      description:
        'Which asteroids are close to Earth today? Asteroidly provides real-time data on near-Earth objects using NASA APIs, with visualizations and alerts',
      year: '2022',
      link: 'https://github.com/baimamboukar/weather-app',
      tags: ['Flutter', 'Weather API', 'Geolocation'],
    },
  ],
  certifications: [
    {
      title: 'Flutter Development Bootcamp',
      issuer: 'App Brewery',
      date: '2023',
      credential: 'https://www.appbrewery.co/certificate/flutter',
      description: 'Comprehensive Flutter and Dart programming certification',
    },
    {
      title: 'AWS Academy Graduate',
      issuer: 'AWS',
      date: '2023',
      credential: 'https://www.udemy.com/certificate/aws',
      description: 'Cloud computing fundamentals and AWS services knowledge',
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2022',
      credential: 'https://aws.amazon.com/certification',
      description: 'Foundational understanding of AWS Cloud',
    },
    {
      title: 'Github Foundations',
      issuer: 'Github',
      date: '2024',
      credential: 'https://aws.amazon.com/certification',
      description: 'Official Github Certification on Git and Github workflows',
    },
    {
      title: 'Google Developer Student Club Lead',
      issuer: 'Google',
      date: '2022-2023',
      credential: 'https://gdsc.community.dev',
      description:
        'Led technical workshops and community events for student developers',
    },
  ],
  experience: [
    {
      position: 'Full Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2023 - Present',
      description:
        'Building custom web and mobile solutions for clients worldwide using Flutter, React, and Node.js',
    },
    {
      position: 'Mobile Engineer',
      company: 'Caasitech Group LLC',
      location: 'Yaoundé, Cameroon',
      period: '2022 - 2023',
      description:
        'Developed mobile applications for local businesses, implemented payment integrations and real-time features',
    },
    {
      position: 'Google DSC Lead',
      company: 'Google Developer Student Clubs',
      location: 'ICT University, Yaounde',
      period: '2022 - 2023',
      description:
        'Organized workshops, hackathons, and tech talks. Mentored 50+ students in web and mobile development',
    },
    {
      position: 'Open Source Contributor',
      company: 'G-Research, AWSLabs, RkBoot, and others',
      location: 'Remote',
      period: '2021 - Present',
      description:
        'Contributing to Flutter packages, React libraries, and developer tools on GitHub',
    },
  ],
  colors: {
    reInventPurple: '#9D5CAE',
    reInventPink: '#E91E8C',
    reInventOrange: '#FF9900',
    darkBg: '#161E2D',
    lightBg: '#232F3E',
    textLight: '#B0B7C3',
    textDark: '#1B2530',
    accent: '#00D4FF',
  },
}
