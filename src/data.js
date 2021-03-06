export const navItems = [
  {
    title: "services",
    navLink: "/services",
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

export const toolsArray = [
  {
    name: "HTML5",
    icon: <i className="fab fa-html5" aria-hidden="true"></i>,
  },
  {
    name: "CSS3",
    icon: <i className="fab fa-css3" aria-hidden="true"></i>,
  },
  {
    name: "Javascript",
    icon: <i className="fab fa-js" aria-hidden="true"></i>,
  },
  {
    name: "ReactJS",
    icon: <i className="fab fa-react" aria-hidden="true"></i>,
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

export const projectArray = [
  {
    title: "Netflix Clone",
    tools: "HTML, CSS, React Javascript, Redux, Firebase, Stripe",
    description:
      "Features user sign-ups, user login/out, payments, user profiles, and a full functional interface including 'My List'",
    comingSoon: true,
    imageURL: "",
    imageALT: "A clone of the Netflix website",
    codeURL: "https://github.com/NoelArzola/netflix-clone",
  },
  {
    title: "Facebok Clone",
    tools: "HTML, CSS, React Javascript, Next.js, Tailwind, Firebase",
    description:
      "Features Facebook authentication for login/out, status updates, a real-time feed, and image uploading",
    comingSoon: true,
    imageURL: "",
    imageALT: "A clone of the Hulu website",
    codeURL: "https://github.com/NoelArzola/hulu-clone",
  },
  {
    title: "Amazon Clone",
    tools: "HTML, CSS, React Javascript, Firebase, Stripe",
    description:
      "Features user signups, user login/out, many products, and a fully functioning cart with checkout and payments",
    imageURL: "https://noelarzola.com/img/amazon.png",
    imageALT: "A clone of the Amazon website",
    liveURL: "https://clone-fac52.web.app/",
    codeURL: "https://github.com/NoelArzola/amazon-clone",
  },
];

export const bio = {
  imageURL: "https://noelarzola.com/img/hello.png",
  heading: "Just a short bio",
  paragraph: (
    <span>
      I started as a back-end engineer in Python eleven years ago. I've since
      added front-end to my skillset, and my career has really taken off as a
      full-stack engineer. I currently work for Skillcrush as a Front End
      Engineer.
      <br />
      <br />
      <span className="font-bold">Hobbies:</span> Spending time with my three
      kids, riding my motorcycle, lifting weights, running, and learning foreign
      languages
      <br />
      <br />
      <span className="font-bold">Fun Fact:</span> I've had the fortune of
      interviewing with both Google and Amazon for Software Engineer positions.
      ????
    </span>
  ),
};

export const contactInfo = {
  heading: "hire me",
  phoneNumber: <a href="tel:+17403158315">+1 740-315-8315</a>,
  email: (
    <a href="mailto:noel@arzola.codes" target="_blank" rel="noreferrer">
      noel@arzola.codes
    </a>
  ),
};

export const followMe = [
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

export const meetMe = {
  heading: "meet me",
  cityState: "Vienna, WV",
  tagline: "Let's grab a coffee!",
};

export const services = [
  {
    icon: <i className="fas fa-code" aria-hidden="true"></i>,
    name: "web development",
    description:
      "If you need a site built, you're in the right place. I have worked on websites for individuals, influencers, small businesses and large companies. These sites have included shops, payments, and so much more.",
  },
  {
    icon: <i className="fas fa-paint-brush" aria-hidden="true"></i>,
    name: "bring your design to life",
    description: `I love working with designers. I can work from designs in apps like Photoshop, XD, Figma, etc. Let's bring this design to life!`,
  },
  {
    icon: <i className="fas fa-mobile-alt" aria-hidden="true"></i>,
    name: "mobile-friendly sites",
    description:
      "I work with a mobile first approach which ensures your site will look awesome on any screen it's accessed on - whether phone, tablet, or desktop.",
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
