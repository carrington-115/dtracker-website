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
  action: () => void;
}

export type { linkType, btnsType };
