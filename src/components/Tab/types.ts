export interface ITab {
  label: string;
  onClick: (val: string | number) => void; 
}

export interface ITabs {
  tabs: ITab[];
}

export type FontStyles = "Mulish" | "Poppins";

export interface ITabProps {
  tabList?: ITab[];
  setActiveTab?: (tab: string) => void;
  defaultTab?: string;
  activeTab?: string;
  defaultActiveTabColor?: string;
  activeTabColor?: string;
  nonActiveTabColor?: string;
  defaultNonActiveTabColor?: string;
  background?: string;
  textSize?: number;
  fontFamily?: FontStyles;
}
