// types

interface linkType {
  name: string;
  link: string;
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

export type { linkType, btnsType, fontSpecificType, textFontStylesTypes };
