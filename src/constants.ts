// types files

import { Roboto } from "next/font/google";
import {
  cardsElementType,
  linkType,
  moneyComponentTypes,
  valueElementtypes,
} from "./globaltypes";
import { colors } from "./styles";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

const headerLinks: linkType[] = [
  {
    name: "Home",
    link: "/#",
  },
  {
    name: "Features",
    link: "/#features-section",
  },
  {
    name: "How it works",
    link: "/#how-it-works",
  },
  {
    name: "Agents",
    link: "/#agents",
  },
  {
    name: "Benefits",
    link: "/#benefits",
  },
];

const cardsData: cardsElementType[] = [
  {
    imgLink: "/images/trash-management.png",
    title: "Effective Trash management tools",
    body: "Monitor and manage your household or business waste effortlessly",
    bgColor: colors.primaryContainer,
    fgColor: colors.onPrimaryContainer,
    actionLink: "",
  },
  {
    imgLink: "/images/store.png",
    title: "Effective Trash management tools",
    body: "Monitor and manage your household or business waste effortlessly",
    bgColor: colors.SecondaryContainer,
    fgColor: colors.onSecondaryContainer,
    actionLink: "",
  },
  {
    imgLink: "/images/agent.png",
    title: "Effective Trash management tools",
    body: "Monitor and manage your household or business waste effortlessly",
    bgColor: colors.tertiaryContainer,
    fgColor: colors.onTertiaryContainer,
    actionLink: "",
  },
];

const moneyElements: moneyComponentTypes[] = [
  {
    image: "/images/image-1.png",
    content:
      "Complete waste pickup or recycling tasks assigned to you via the platform.",
    bgColor: colors.primaryContainer,
    fgColor: colors.onPrimaryContainer,
  },
  {
    image: "/images/image-2.png",
    content:
      "Efficiency Bonuses: Achieve higher ratings and faster completion times to unlock performance-based incentives.",
    bgColor: colors.SecondaryContainer,
    fgColor: colors.onSecondaryContainer,
  },
  {
    image: "/images/image-3.png",
    content:
      "Recyclables Trade Income: Facilitate the buying and selling of recyclable materials within your network and earn commission.",
    bgColor: colors.tertiaryContainer,
    fgColor: colors.onTertiaryContainer,
  },
  {
    image: "/images/image-4.png",
    content:
      "Flexible Payments: Get paid securely through the app with transparent transaction records and instant payouts.",
    bgColor: "#E6E6E6",
    fgColor: "#000000",
  },
];

const valueContents: valueElementtypes[] = [
  {
    icon: "/images/icons/bin.svg",
    title: "Simplified Waste management",
    content:
      " Easily schedule, track, and manage your waste pickups and recycling tasks with just a few clicks",
  },
  {
    icon: "/images/icons/sustainability.svg",
    title: "Environmental Impact",
    content:
      "Contribute to a greener planet by reducing waste, promoting recycling, and minimizing environmental footprints.",
  },
  {
    icon: "/images/icons/job.svg",
    title: "Empower Local Communities",
    content:
      "Our platform connects individuals with agents, creating job opportunities and fostering local economic growth.",
  },
  {
    icon: "/images/icons/solutions.svg",
    title: "Comprehensive Solutions",
    content:
      "Whether you’re a business or an individual, DTracker offers tailored solutions to meet your waste management needs.",
  },
];

const userSteps = [
  {
    title: "Sign Up",
    step: "Create your account in minutes by providing basic details and verifying your email or phone number.",
  },
  {
    title: "Connect with Local Agents",
    step: "Use our app to find verified agents or recyclers nearby for easy waste collection or recycling services.",
  },
  {
    title: "Schedule and manage Pickups",
    step: "Set pickup times, track the status of your request, and make payments directly through the app.",
  },
  {
    title: "Track Progress",
    step: "View your waste management history, get recycling insights, and see your contribution to a greener environment.",
  },
];

const agentSteps = [
  {
    title: "Register as an agent",
    step: "Sign up to become a DTracker agent by filling out the agent application form and providing necessary documents.",
  },
  {
    title: "Verification and Onboarding",
    step: "Complete our simple verification process and attend a short onboarding session to learn how to use the platform.",
  },
  {
    title: "Access leads and Jobs",
    step: "Get notified about waste collection and recycling opportunities in your area through the app.",
  },
  {
    title: "Earn and Track income",
    step: "Manage your earnings directly on the platform with built-in financial tools to help you grow your business.",
  },
  {
    title: "Build your Reputation",
    step: "Deliver excellent service and receive ratings and reviews to attract more clients.",
  },
];

export {
  roboto,
  headerLinks,
  cardsData,
  moneyElements,
  valueContents,
  userSteps,
  agentSteps,
};
