// types files

import { Roboto } from "next/font/google";
import { linkType } from "./globaltypes";

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

export { roboto, headerLinks };
