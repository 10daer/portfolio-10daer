// projectsData.js
import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import memento from "/src/assets/images/memento-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunny-side-square.webp";

const projectsData = [
  {
    title: "IB Group Vietnam Website",
    description: "Web Design / Frontend Development",
    imageSrc: ibgroup,
    link: "https://musical-stroopwafel-1c2327.netlify.app/landing.html",
  },
  {
    title: "Memento Studio Landing Page",
    description: "Web Design / Frontend Development",
    imageSrc: memento,
    link: "https://mementostudio.netlify.app/",
  },
  {
    title: "Real Business Accountants",
    description: "Web Design / Frontend Development",
    imageSrc: acc,
    link: "https://realbusinessaccountants.netlify.app",
  },
  {
    title: "GoDaddy Landing Page Clone",
    description: "Web Design / Frontend Development",
    imageSrc: daddy,
    link: "https://godaddyuiclone.netlify.app",
  },
  {
    title: "Sunnyside Landing Page",
    description: "Web Design / Frontend Development",
    imageSrc: sunnyside,
    link: "https://sunnysidechallenge.netlify.app",
  },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/10daer",
    icon: "mdi:twitter",
  },
  {
    name: "Github",
    href: "https://github.com/10daer",
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/10daer/",
    icon: "mdi:linkedin",
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/7065747990",
    icon: "simple-icons:whatsapp",
  },
];

const text =
  "I create elevating digital experiences that inspire and connect with people through development and design";

export { socialLinks, text, projectsData };
