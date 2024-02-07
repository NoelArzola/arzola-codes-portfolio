let pfp = "../images/user01.jpg";

interface IPost {
  postID: number;
  username: string;
  userImage: string;
  commentCount: number;
  quoteCount: number;
  likeCount: number;
  postText: string;
  postImage?: string;
  postLink: string;
  prettyLink: string;
  following: boolean;
  mention?: boolean;
  userMentioned?: string;
  backgroundPosition?: string;
}

export const spillDB: IPost[] = [
  {
    postID: 0,
    username: "arzolacodes",
    userImage: pfp,
    commentCount: 2,
    quoteCount: 1,
    likeCount: 9,
    postText:
      "amazon clone project w/ sign up, cart, stripe checkout, & order history",
    postImage: "https://noelarzola.com/img/amazon-react.png",
    postLink: "https://clone-fac52.web.app/",
    prettyLink: "amazon clone",
    following: true,
  },
  {
    postID: 1,
    username: "arzolacodes",
    userImage: pfp,
    commentCount: 3,
    quoteCount: 26,
    likeCount: 13,
    postText:
      "facebook clone project (requires sign in w/ FB) uses fb api and has text and image uploads",
    postImage: "https://noelarzola.com/img/facebook-react.png",
    postLink: "https://calm-sawine-52f367.netlify.app/",
    prettyLink: "facebook clone",
    following: true,
    backgroundPosition: "center center",
  },
  {
    postID: 2,
    username: "arzolacodes",
    userImage: pfp,
    commentCount: 10,
    quoteCount: 4,
    likeCount: 16,
    postText:
      "netflix clone project w/ sign up, subscriptions, stripe integeration, tmdb api",
    postImage: "https://noelarzola.com/img/netflix-react.png",
    postLink: "https://netflix-152b6.web.app/",
    prettyLink: "netflix clone",
    following: true,
    backgroundPosition: "inherit",
  },
  {
    postID: 3,
    username: "arzolacodes",
    userImage: pfp,
    commentCount: 4,
    quoteCount: 1,
    likeCount: 1,
    postText: `if you somehow landed here without knowing what @spill is, check it out at the link below`,
    postImage: "",
    postLink: "https://spill.com",
    prettyLink: "spill.com",
    following: false,
    mention: true,
    userMentioned: "@spill",
  },
  {
    postID: 4,
    username: "arzolacodes",
    userImage: pfp,
    commentCount: 8,
    quoteCount: 0,
    likeCount: 8,
    following: false,
    postText: `I type Dvorak and my kids call my keyboard cursed. check it out at dvzine.org`,
    postImage: "",
    postLink: "https://www.dvzine.org",
    prettyLink: "dvzine.org",
  },
  {
    postID: 5,
    username: "arzolacodes",
    userImage: pfp,
    commentCount: 12,
    quoteCount: 31,
    likeCount: 85,
    postText: `honestly I'm just typing random things to fill out this teaL, Jumblie is fun tho`,
    postImage: "",
    postLink: "https://jumblie.com",
    prettyLink: "jumblie.com",
    following: false,
  },
  {
    postID: 6,
    username: "arzolacodes",
    userImage: pfp,
    commentCount: 0,
    quoteCount: 0,
    likeCount: 0,
    postText: `updating my site made me realize I have no beard in any of my pics`,
    postImage: "",
    postLink: "",
    prettyLink: "",
    following: false,
  },
  {
    postID: 7,
    username: "arzolacodes",
    userImage: pfp,
    commentCount: 6,
    quoteCount: 3,
    likeCount: 86,
    postText: `wuttup @spill, this is a link to my main site`,
    postImage: "",
    postLink: "https://arzola.codes",
    prettyLink: "arzola.codes",
    following: false,
    mention: true,
    userMentioned: "@spill",
  },
  {
    postID: 8,
    username: "arzolacodes",
    userImage: pfp,
    commentCount: 0,
    quoteCount: 4,
    likeCount: 11,
    postText: "you can download my resume here (.docx)",
    postImage: "",
    postLink:
      "https://drive.google.com/drive/folders/118xYeGzZge2OYlBJOTr9bnFhxapEkk_t",
    prettyLink: "drive.google.com",
    following: false,
  },
  {
    postID: 9,
    username: "arzolacodes",
    userImage: pfp,
    commentCount: 1,
    quoteCount: 33,
    likeCount: 7,
    postText: "@spill peep my LinkedIn here",
    postImage: "",
    postLink: "https://www.linkedin.com/in/noelarzola/",
    prettyLink: "linkedin.com",
    following: false,
    mention: true,
    userMentioned: "@spill",
  },
];
