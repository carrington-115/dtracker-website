// types files

import { Roboto } from "next/font/google";
import { linkType, textFontStylesTypes } from "./globaltypes";

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

const textFontStyles: textFontStylesTypes = {
  /* Display font styles */
  display: {
    displaySmallBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 36,
      lineHeight: 42.19,
    },
    displayMediumBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 45,
      lineHeight: 52.73,
    },
    displayLargeBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 57,
      lineHeight: 66.8,
    },
    displaySmallMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 36,
      lineHeight: 42.19,
    },
    displayMediumMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 45,
      lineHeight: 52.73,
    },
    displayLargeMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 57,
      lineHeight: 66.8,
    },
    displaySmallRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 36,
      lineHeight: 42.19,
    },
    displayMediumRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 45,
      lineHeight: 52.73,
    },
    displayLargeRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 57,
      lineHeight: 66.8,
    },
  },
  /* Headline font styles */
  headline: {
    headlineLargeBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 32,
      lineHeight: 37.5,
    },
    headlineMediumBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 28,
      lineHeight: 32.81,
    },
    headlineSmallBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 24,
      lineHeight: 28.13,
    },
    headlineLargeMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 32,
      lineHeight: 37.5,
    },
    headlineMediumMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 28,
      lineHeight: 32.81,
    },
    headlineSmallMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 24,
      lineHeight: 28.13,
    },
    headlineLargeRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 32,
      lineHeight: 37.5,
    },
    headlineMediumRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 28,
      lineHeight: 32.81,
    },
    headlineSmallRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 24,
      lineHeight: 28.13,
    },
  },
  /* Title font styles */
  title: {
    titleLargeBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 22,
      lineHeight: 25.78,
    },
    titleMediumBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 16,
      lineHeight: 18.75,
    },
    titleSmallBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 14,
      lineHeight: 16.41,
    },
    titleLargeMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 22,
      lineHeight: 25.78,
    },
    titleMediumMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 16,
      lineHeight: 18.75,
    },
    titleSmallMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 14,
      lineHeight: 16.41,
    },
    titleLargeRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 22,
      lineHeight: 25.78,
    },
    titleMediumRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      lineHeight: 18.75,
    },
    titleSmallRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 14,
      lineHeight: 16.41,
    },
  },
  body: {
    /* Body font styles */
    bodyLargeBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 16,
      lineHeight: 18.75,
    },
    bodyMediumBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 14,
      lineHeight: 16.41,
    },
    bodySmallBold: {
      fontFamily: "Roboto-Bold",
      fontSize: 12,
      lineHeight: 14.06,
    },
    bodyLargeMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 16,
      lineHeight: 18.75,
    },
    bodyMediumMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 14,
      lineHeight: 16.41,
    },
    bodySmallMedium: {
      fontFamily: "Roboto-Medium",
      fontSize: 12,
      lineHeight: 14.06,
    },
    bodyLargeRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      lineHeight: 18.75,
    },
    bodyMediumRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 14,
      lineHeight: 16.41,
    },
    bodySmallRegular: {
      fontFamily: "Roboto-Regular",
      fontSize: 12,
      lineHeight: 14.06,
    },
  },
};

export { roboto, headerLinks, textFontStyles };
