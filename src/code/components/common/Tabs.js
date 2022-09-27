import React from "react";

function Tabs() {
  const [activeTab, setActiveTab] = React.useState(null);

  let generatedTabs = [],
    generatedComponents = [],
    startingTabIndex = null;

  const tabs = [
    {
      tabName: "tabName1",
      component: "text-1",
    },
    {
      tabName: "tabName2",
      component: "text-2",
    },
  ];

  const renderTabs = (tab, strIndex) => {
    const className = strIndex === activeTab ? "nav-link active" : "nav-link";
    return (
      <li className="nav-item" key={strIndex}>
        <a
          className={className}
          href="#dashboard"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(strIndex);
          }}
        >
          {tab.tabName}
        </a>
      </li>
    );
  };

  const renderComponents = (tab, strIndex) => {
    const className = strIndex === activeTab ? "tab-pane fade show active" : "tab-pane fade";
    return (
      <div className={className} role="tabpanel" key={strIndex}>
        {tab.component}
      </div>
    );
  };

  const generateTabs = () => {
    tabs.forEach((tab, index) => {
      const strIndex = `tab_${index}`;

      if (index === 0) {
        startingTabIndex = index === 0 && strIndex;
      }

      generatedTabs.push(renderTabs(tab, strIndex));
      generatedComponents.push(renderComponents(tab, strIndex));
    });
  };

  generateTabs();

  React.useEffect(() => {
    setActiveTab(startingTabIndex);
  }, [startingTabIndex]);

  return (
    <>
      <ul className="nav nav-tabs">{generatedTabs}</ul>

      <div className="tab-content">{generatedComponents}</div>
    </>
  );
}

export default Tabs;
