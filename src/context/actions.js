export const ADD_ITEM = "ADD_ITEM";
export const ADD_TAB = "ADD_TAB";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const MOVE_ITEM = "MOVE_ITEM";

export const addTab = dispatch => (tab) => dispatch({ type: ADD_TAB, payload: {tab} });
export const addItemToTab = dispatch => (item, tabId) => dispatch({ type: ADD_ITEM, payload: {item, tabId} });
export const updateItemInTab = dispatch => (item, tabId) => dispatch({ type: UPDATE_ITEM, payload: {item, tabId} });
export const removeItemFromTab = dispatch => (itemId, tabId) => dispatch({ type: REMOVE_ITEM, payload: {itemId, tabId} });
export const moveItem = dispatch => (itemId, source, destination) => dispatch({ type: MOVE_ITEM, payload: {itemId, source, destination} });