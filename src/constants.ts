// types files

import { Roboto } from "next/font/google";
import { cardsElementType, linkType, moneyComponentTypes } from "./globaltypes";
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
    link: "/how-it-works",
  },
  {
    name: "Agents",
    link: "/agents",
  },
  {
    name: "Benefits",
    link: "/benefits",
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

export { roboto, headerLinks, cardsData, moneyElements };
