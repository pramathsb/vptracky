import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

function Tabs(props) {
  let generatedTabs = [],
    generatedComponents = [];

  const tabs = props.tabs.dynamic;
  const renderTabs = (tab, strIndex) => {
    return (
      <li className='nav-item' key={strIndex}>
        <NavLink to={tab.route} className='nav-link'>
          {tab.tabName}
        </NavLink>
      </li>
    );
  };

  const renderComponents = (tab, strIndex) => {
    return (
      <Route
        key={strIndex}
        path={tab.route}
        element={
          <div className='tab-pane fade show active' role='tabpanel'>
            {tab.component}
          </div>
        }
      />
    );
  };

  const generateTabs = () => {
    tabs.forEach((tab, index) => {
      const strIndex = `tab_${index}`;
      generatedTabs.push(renderTabs(tab, strIndex));
      generatedComponents.push(renderComponents(tab, strIndex));
    });
  };

  generateTabs();

  return (
    <>
      <ul className='nav nav-tabs'>{generatedTabs}</ul>
      <div className='tab-content mt-4'>
        <Routes>{generatedComponents}</Routes>
      </div>
    </>
  );
}

export default Tabs;
