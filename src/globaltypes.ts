// types

interface linkType {
  name: string;
  link: string;
  id?: string;
}

interface btnsType {
  icon?: React.ReactNode;
  name: string;
  bgColor: string;
  fgColor: string;
  hbgColor: string;
  hfgColor: string;
  action: () => void;
}

interface fontSpecificType {
  fontSize: number;
}

interface textFontStylesTypes {
  display: Record<string, fontSpecificType>;
  headline: Record<string, fontSpecificType>;
  title: Record<string, fontSpecificType>;
  body: Record<string, fontSpecificType>;
}

interface cardsElementType {
  imgLink: string;
  title: string;
  body: string;
  bgColor: string;
  fgColor: string;
  actionLink: string;
}

interface worksType {
  contentImage: string;
  title: string;
  stepsContent: { title: string; step: string }[];
  agent: boolean;
}

export type {
  linkType,
  btnsType,
  fontSpecificType,
  textFontStylesTypes,
  cardsElementType,
  worksType,
};
