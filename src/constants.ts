// types files

import { Roboto } from "next/font/google";
import { cardsElementType, linkType } from "./globaltypes";
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
    link: "/",
  },
  {
    name: "Features",
    link: "/features",
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

export { roboto, headerLinks };
