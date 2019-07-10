import React, { useReducer } from 'react';
import uuid from 'uuid';

import DashboardContext from './dashboardContext';
import {addItemToTab, removeItemFromTab, moveItem, addTab, updateItemInTab} from './actions';
import dashboardReducer from './reducer';

const initialState = {
    tabs: [
        {
            id: 'tab-'+uuid(), 
            title: 'Todo', 
            items: [
                {id: 'item-'+uuid(), text: 'First task'}
            ]
        },
        {
            id: 'tab-'+uuid(), 
            title: 'In progress', 
            items: [
                {id: 'item-'+uuid(),  text: 'Second task'}
            ]
        },
    ]
};

const GlobalState = props => {
  // use the hook useReducer to manage the complexe state 
  // useReducer return the state and a dispatch function
  const [tabsState, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    // Add state and functions to the context.
    <DashboardContext.Provider
      value={{
        tabs: tabsState.tabs,
        addItemToTab: addItemToTab(dispatch),
        updateItemInTab: updateItemInTab(dispatch),
        addTab: addTab(dispatch),
        removeItemFromTab: removeItemFromTab(dispatch),
        moveItem: moveItem(dispatch),
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default GlobalState;