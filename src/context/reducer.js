import {ADD_ITEM, REMOVE_ITEM, MOVE_ITEM, ADD_TAB, UPDATE_ITEM} from './actions';

import {getDestinationTabItems} from './helpers';

export default (state, action) => {
    switch(action.type) {
        // Add a new tab.
        case ADD_TAB: {
            const newState = {
                tabs: [
                    ...state.tabs,
                    action.payload.tab
                ],
            };
            return newState;
        }
        // Add an item to a tab.
        case ADD_ITEM: {
            const {tabId, item} = action.payload;
            const newState = {
                tabs: [
                    ...state.tabs.map(
                        tab => tab.id === tabId 
                            ? {...tab, items: [...tab.items, item]}
                            : tab 
                    )
                ]
            }
            return newState;
        }
        // Update an item in a tab.
        case UPDATE_ITEM: {
            const {tabId, item} = action.payload;
            const newState = {
                tabs: [
                    ...state.tabs.map(
                        tab => tab.id === tabId 
                            ? {...tab, items: tab.items.map(i => i.id === item.id ? item : i)}
                            : tab 
                    )
                ]
            }
            return newState;
        }
        case REMOVE_ITEM: {
            const {itemId, tabId} = action.payload;
            const newState = {
                tabs: [
                    ...state.tabs.map(
                        tab => tab.id === tabId 
                            ? {...tab, items: tab.items.filter(item => item.id !== itemId)}
                            : tab 
                    )
                ],
            };
            return newState;
        }
        case MOVE_ITEM: {
            const {itemId, destination, source} = action.payload;
            
            const sourceTabDroppableId = source.droppableId
            const destinationTabDroppableId = destination.droppableId
            
            // Get the source tab.
            const sourceTab = state.tabs.find(tab => tab.id === sourceTabDroppableId);
            
            // Get item to move.
            const itemToMove = sourceTab.items.find(item => item.id === itemId);

            const newState = {
                tabs: [
                    ...state.tabs.map(
                        tab => {
                            // This will update the source tab.
                            if (sourceTabDroppableId !== destinationTabDroppableId && tab.id === sourceTabDroppableId) {
                                return {
                                    ...tab,
                                    items: tab.items.filter(item => item.id !== itemId),
                                };
                            }
                            if (sourceTabDroppableId !== destinationTabDroppableId && tab.id === destinationTabDroppableId) {
                                return {
                                    ...tab,
                                    items: getDestinationTabItems(tab.items, destination, itemToMove),
                                };
                            }
                            if (sourceTabDroppableId === destinationTabDroppableId && tab.id === destinationTabDroppableId) {
                                return {
                                    ...tab,
                                    items: getDestinationTabItems(
                                        tab.items.filter(item => item.id !== itemId), 
                                        destination, 
                                        itemToMove
                                    )
                                }
                            }
                            return tab;
                        }
                    ),
                ],
            };
            return newState;
        }
        default: 
            return state;
    }
}