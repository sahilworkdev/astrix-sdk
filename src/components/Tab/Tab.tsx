import React from "react";
import { ITab, ITabProps } from "./types";

const defaultList: ITab[] = [
  { label: "Home", onClick: () => {} },
  { label: "About us", onClick: () => {} },
  { label: "Contact", onClick: () => {} },
];

const Tab = ({
  defaultTab = "Home",
  activeTab = defaultTab,
  fontFamily = "Mulish",
  textSize = 16,
  defaultActiveTabColor = "blue",
  defaultNonActiveTabColor = "red",
  ...props
}: ITabProps) => {
  const tabs = props?.tabList ?? defaultList;
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          paddingTop: "12px",
          overflowX: "scroll",
          justifyContent: "space-between",
          minWidth: "100%",
          background: props.background,
        }}
        className="my_custom_scrollbar"
      >
        {tabs.map((tab: ITab, index: number) => (
          <div
            key={tab.label + index}
            style={{
              cursor: "pointer",
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
            onClick={() => {
              if (!props.setActiveTab) {
                alert("Please provide a 'setActiveTab' handler");
                return;
              }
              props?.setActiveTab(tab.label);
            }}
          >
            <h4
              style={{
                textAlign: "center",
                fontFamily: fontFamily,
                color:
                  activeTab == tab.label
                    ? props.activeTabColor
                      ? props.activeTabColor
                      : defaultActiveTabColor
                    : props.nonActiveTabColor
                    ? props.nonActiveTabColor
                    : defaultNonActiveTabColor,
                paddingBottom: "10px",
                fontSize: textSize,
                ...(activeTab === tab.label && {
                  borderColor: props.activeTabColor ?? defaultActiveTabColor,
                  borderBottom: "2px solid",
                }),
              }}
            >
              {tab.label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
