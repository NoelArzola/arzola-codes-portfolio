import React from "react";

type TNavItems = Array<{
  title: string;
  navLink: string;
  hash?: string;
}>;

export const navItems: TNavItems = [
  {
    title: "services",
    navLink: "/services",
  },
  {
    title: "testimonials",
    navLink: "/",
    hash: "#testimonies",
  },
  {
    title: "projects",
    navLink: "/",
    hash: "#projects",
  },
  {
    title: "about",
    navLink: "/",
    hash: "#about",
  },
  {
    title: "contact",
    navLink: "/",
    hash: "#contact",
  },
];

type TToolsArray = Array<{
  name: string;
  icon: any;
}>;

export const toolsArray: TToolsArray = [
  {
    name: "HTML5",
    icon: <i className="fab fa-html5" aria-hidden="true"></i>,
  },
  {
    name: "CSS3",
    icon: <i className="fab fa-css3" aria-hidden="true"></i>,
  },
  {
    name: "JavaScript",
    icon: <i className="fab fa-js" aria-hidden="true"></i>,
  },
  {
    name: "ReactJS",
    icon: <i className="fab fa-react" aria-hidden="true"></i>,
  },
  {
    name: "Angular",
    icon: <i className="fab fa-angular" aria-hidden="true"></i>,
  },
  {
    name: "Python",
    icon: <i className="fab fa-python" aria-hidden="true"></i>,
  },
  {
    name: "NodeJS",
    icon: <i className="fab fa-node-js" aria-hidden="true"></i>,
  },
  {
    name: "WordPress",
    icon: <i className="fab fa-wordpress-simple" aria-hidden="true"></i>,
  },
  {
    name: "PHP",
    icon: <i className="fab fa-php" aria-hidden="true"></i>,
  },
  {
    name: "SQL",
    icon: <i className="fas fa-database" aria-hidden="true"></i>,
  },
  {
    name: "OpenCart",
    icon: <i className="fab fa-opencart" aria-hidden="true"></i>,
  },
  {
    name: "Shopify",
    icon: <i className="fab fa-shopify" aria-hidden="true"></i>,
  },
];

type TProjects = Array<{
  title: string;
  description: string;
  tools: string;
  liveURL: string;
  codeURL: string;
  comingSoon?: boolean;
  imageURL: string;
  imageALT: string;
}>;

export const projectArray: TProjects = [
  {
    title: "Social Media App",
    tools: "Responsive HTML/CSS, React JavaScript",
    description:
      "Features: Clone of the awesome social media app Spill! Features two timelines, My Brew and Fresh Tea. Made to get their attention, WIP.",
    comingSoon: false,
    imageURL: "http://noelarzola.com/img/spill.png",
    imageALT: "A clone of the social media app Spill",
    codeURL:
      "https://github.com/NoelArzola/arzola-codes-portfolio/blob/main/src/pages/Spill.js",
    liveURL: "https://arzola.codes/spill",
  },
  {
    title: "Netflix Clone",
    tools:
      "Responsive HTML/CSS, React JavaScript, Redux, Firestore Database, Firebase Authentication, Stripe Checkout, TMDB API",
    description:
      "Features: User sign-ups, user login/out, payments, user profiles, and a fully functional interface including 'My Profile'",
    comingSoon: false,
    imageURL: "http://noelarzola.com/img/netflix-react.png",
    imageALT: "A clone of the Netflix website",
    codeURL: "https://github.com/NoelArzola/netflix-clone",
    liveURL: "https://netflix-152b6.web.app/",
  },
  {
    title: "Facebok Clone",
    tools:
      "Responsive HTML/CSS, React JavaScript, Next.js, Next Auth, Tailwind, Firebase Storage, Server Side Rendering, Dark Mode Toggle",
    description:
      "Features: Facebook authentication for login/out, status updates, a live real-time feed, and image uploading",
    comingSoon: false,
    imageURL: "http://noelarzola.com/img/facebook-react.png",
    imageALT: "A clone of the Facebook website",
    codeURL: "https://github.com/NoelArzola/facebook-clone",
    liveURL: "https://calm-sawine-52f367.netlify.app/",
  },
  {
    title: "Amazon Clone",
    tools:
      "Responsive HTML/CSS, React Javascript, Firebase Database, Firebase Authentication, Stripe for checkout experience",
    description:
      "Features: User signups, user login/out, many products, and a fully functioning cart with checkout and payments",
    imageURL: "https://noelarzola.com/img/amazon-react.png",
    imageALT: "A clone of the Amazon website",
    liveURL: "https://clone-fac52.web.app/",
    codeURL: "https://github.com/NoelArzola/amazon-clone",
  },
];

type IBio = {
  imageURL: string;
  heading: string;
  paragraph: any;
};

export const bio: IBio = {
  imageURL: "https://noelarzola.com/img/hello.png",
  heading: "Just a short bio",
  paragraph: (
    <span>
      I started as a back-end engineer learning Python the beginning of 2011.
      I've since added front-end to my skillset, and my career has really taken
      off as a Full-Stack Engineer. In addition to my personal business I have
      also worked for Skillcrush as both a Front End Engineer and a Full-Stack
      Engineer. I'm on the hunt for my next great role and would love to talk to
      you if you think I'd be a good fit!
      <br />
      <br />
      <span className="font-bold">Hobbies:</span> Spending time with my three
      kids, riding my motorcycle, lifting weights, running, and learning foreign
      languages.
    </span>
  ),
};

interface TContactInfo {
  heading: string;
  phoneNumber: any;
  email: any;
}

export const contactInfo: TContactInfo = {
  heading: "hire me",
  phoneNumber: <a href="tel:+17403158315">+1.740.315.8315</a>,
  email: (
    <a href="mailto:noel@noelarzola.com" target="_blank" rel="noreferrer">
      noel@noelarzola.com
    </a>
  ),
};

type TFollowMe = Array<{
  name: string;
  url: string;
  icon: any;
  aria: string;
}>;

export const followMe: TFollowMe = [
  {
    name: "Twitter",
    url: "https://www.twitter.com/arzolacodes",
    icon: (
      <span className="fa-stack">
        <i className="fas fa-circle fa-stack-2x" aria-hidden="true"></i>
        <i
          className="text-almost-white hover:text-white fab fa-twitter fa-stack-1x"
          aria-hidden="true"
        ></i>
      </span>
    ),
    aria: "This is a link to my Twitter page",
  },
  {
    name: "GitHub",
    url: "https://github.com/NoelArzola",
    icon: (
      <span>
        <i
          className="text-3xl hover:bg-white fab fa-github"
          aria-hidden="true"
        ></i>
      </span>
    ),
    aria: "This is a link to my GitHub page",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/noelarzola",
    icon: (
      <span className="fa-stack">
        <i className="fas fa-circle fa-stack-2x" aria-hidden="true"></i>
        <i
          className="text-almost-white hover:text-white fab fa-linkedin-in fa-stack-1x"
          aria-hidden="true"
        ></i>
      </span>
    ),
    aria: "This is a link to my LinkedIn page",
  },
];

interface IMeetMe {
  heading: string;
  cityState: string;
  tagline: string;
}

export const meetMe: IMeetMe = {
  heading: "meet me",
  cityState: "Vienna, WV",
  tagline: "Let's grab a coffee!",
};

type TServices = Array<{
  icon: any;
  name: string;
  description: string;
}>;

export const services: TServices = [
  {
    icon: <i className="fas fa-code" aria-hidden="true"></i>,
    name: "responsive web development",
    description:
      "If you need a site built, you're in the right place. I have worked on websites for individuals, influencers, small businesses and large companies. These sites have included shops, payments, and so much more.",
  },
  {
    icon: <i className="fab fa-app-store" aria-hidden="true"></i>,
    name: "mobile development",
    description:
      "I use Flutter to deploy cross-platform apps for Android and iOS. This speeds up development and allows for a consistent experience across your users' devices, while being able to still customize each platform indivdually for a native look and feel.",
  },
  {
    icon: <i className="fas fa-mobile-alt" aria-hidden="true"></i>,
    name: "mobile-friendly sites",
    description:
      "I work with a mobile first approach which ensures your site will look awesome on any screen it's accessed on - whether phone, tablet, or desktop.",
  },
  {
    icon: <i className="fas fa-paint-brush" aria-hidden="true"></i>,
    name: "bring your design to life",
    description: `I love working with designers. I can work from designs in apps like Photoshop, XD, Figma, etc. Let's bring this design to life!`,
  },
  {
    icon: <i className="fab fa-wordpress-simple" aria-hidden="true"></i>,
    name: "wordpress",
    description:
      "An elegant WordPress site to fit your needs. If you need some tweaks and customizations, I've got you. Includes: custom theming, custom pages, newsletter sign-ups, contact forms, social media hook-ups, and more upon request.",
  },
  {
    icon: <i className="far fa-calendar-alt" aria-hidden="true"></i>,
    name: "retainer",
    description:
      "Allow me to maintain your site so you can have more time to focus on your day to day and advancing your business. Includes: coding, tweaks, tech, bug fixing, and maintenance tasks.",
  },
];

export interface ITestimony {
  reviewer: string;
  title: string;
  title2?: string;
  business: string;
  business2?: string;
  review: string;
  isShort?: boolean;
}

export const testimonies: ITestimony[] = [
  {
    reviewer: "Adam Tucker",
    title: "Owner, Instructor",
    business: "Ronin Martial Arts Academy",
    review:
      "Noah Centineo is a movie star on Netflix and I connected with his father Greg who is a big advisor/consultant to CEOs. We were lucky enough to get him to review our social media and website. He said our website was very clean and smooth and perfect. Our website helped us keep our business open during COVID, we are so happy that we hired Noel to implement Stripe checkout and online enrollment so that we could continue receiving enrollments as we maneuvered to teaching online until things opened back up.",
  },
  {
    reviewer: "JaQuitta Robinson",
    title: "Founder, Owner",
    business: "Chic Next Door",
    title2: "Founder, Technician",
    business2: "Pretty In Pink Brow & Beauty",
    review:
      "I needed a website to grow my online prescence even further, and show brands my star power. This included features such as a blog where I could post frequently as a companion to my IG, as well as a page with my social media stats and plenty of places to contact me. I was handed off a true piece of art, my website was beautiful and had everything I needed and more. I like how easy it was for me to post and how easy it was to communicate my needs to receive results.",
  },
  {
    reviewer: "LaCoya Austin",
    title: "Owner, Designer, Creator",
    business: "Kreative Weirdo",
    review:
      "Before getting my own website I was managing my business through Facebook posts and messages, and processing payments over Cash App and Venmo. Needless to say, it was pretty overwhelming once my business picked up momentum. Noel created a beautiful storefront for my business, where I could display hundreds of items for sale and even with special requests. I love that I can run sales and promotions and that purchases were offloaded onto a website I'm in full control of. Managing orders, getting paid, and shipping is a breeze on this new system.",
  },
  {
    reviewer: "Adda Birnir",
    title: "Founder, CEO",
    business: "Skillcrush",
    review:
      "Have you even SEEN how slick and beautiful our website and platform are?????!!!!!",
    isShort: true,
  },
];
