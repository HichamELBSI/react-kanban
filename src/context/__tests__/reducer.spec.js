import reducer from '../reducer';
import { ADD_TAB, ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, MOVE_ITEM} from '../actions';

describe('reducer', () => {
    it('ADD_TAB', () => {
        const initialState = {
            tabs: []
        };
        const action = {
            type: ADD_TAB,
            payload: {
                tab: {
                    id: 1,
                    title: "title",
                    items: []
                },
            },
        };
        const actual = reducer(initialState, action);
        const expected = {
            tabs: [
                {
                    id: 1,
                    title: "title",
                    items: []
                }
            ]
        };

        expect(actual).toEqual(expected);
    });
    it('ADD_ITEM', () => {
        const initialState = {
            tabs: [
                {id: 1, title: 'first tab', items: []}
            ]
        };
        const action = {
            type: ADD_ITEM,
            payload: {
                tabId: 1,
                item: {id: 1, text: "Text"}
            },
        };
        const actual = reducer(initialState, action);
        const expected = {
            tabs: [
                {
                    id: 1,
                    title: "first tab",
                    items: [
                        {id: 1, text: "Text"}
                    ]
                }
            ]
        };

        expect(actual).toEqual(expected);
    });
    it('UPDATE_ITEM', () => {
        const initialState = {
            tabs: [
                {
                    id: 1, 
                    title: 'first tab', 
                    items: [
                        {id: 1, text: "Text"}
                    ]
                }
            ]
        };
        const action = {
            type: UPDATE_ITEM,
            payload: {
                tabId: 1,
                item: {id: 1, text: "updated text"}
            },
        };
        const actual = reducer(initialState, action);
        const expected = {
            tabs: [
                {
                    id: 1,
                    title: "first tab",
                    items: [
                        {id: 1, text: "updated text"}
                    ]
                }
            ]
        };

        expect(actual).toEqual(expected);
    });
    it('REMOVE_ITEM', () => {
        const initialState = {
            tabs: [
                {
                    id: 1, 
                    title: 'first tab', 
                    items: [
                        {id: 1, text: "Text"}
                    ]
                }
            ]
        };
        const action = {
            type: REMOVE_ITEM,
            payload: {
                tabId: 1,
                itemId: 1
            },
        };
        const actual = reducer(initialState, action);
        const expected = {
            tabs: [
                {
                    id: 1,
                    title: "first tab",
                    items: []
                }
            ]
        };

        expect(actual).toEqual(expected);
    });
    it('should move an item from the second tab to the first', () => {
        const initialState = {
            tabs: [
                {
                    id: 1, 
                    title: 'first tab', 
                    items: [
                        {id: "1-1", text: "1 first"},
                        {id: "1-2", text: "1 second"},
                        {id: "1-3", text: "1 third"}
                    ]
                },
                {
                    id: 2, 
                    title: 'second tab', 
                    items: [
                        {id: "2-1", text: "2 first"},
                        {id: "2-2", text: "2 second"},
                        {id: "2-3", text: "2 third"}
                    ]
                }
            ]
        };
        const action = {
            type: MOVE_ITEM,
            payload: {
                source: {
                    droppableId: 2,
                    index: 1,
                },
                itemId: "2-2",
                destination: {
                    droppableId: 1,
                    index: 0,
                },
            },
        };
        const actual = reducer(initialState, action);
        const expected = {
            tabs: [
                {
                    id: 1, 
                    title: 'first tab', 
                    items: [
                        {id: "2-2", text: "2 second"},
                        {id: "1-1", text: "1 first"},
                        {id: "1-2", text: "1 second"},
                        {id: "1-3", text: "1 third"}
                    ]
                },
                {
                    id: 2, 
                    title: 'second tab', 
                    items: [
                        {id: "2-1", text: "2 first"},
                        {id: "2-3", text: "2 third"}
                    ]
                }
            ]
        };

        expect(actual).toEqual(expected);
    });
    it('should move an item inside a single tab', () => {
        const initialState = {
            tabs: [
                {
                    id: 1, 
                    title: 'first tab', 
                    items: [
                        {id: "1-1", text: "1 first"},
                        {id: "1-2", text: "1 second"},
                        {id: "1-3", text: "1 third"}
                    ]
                }
            ]
        };
        const action = {
            type: MOVE_ITEM,
            payload: {
                source: {
                    droppableId: 1,
                    index: 0,
                },
                itemId: "1-1",
                destination: {
                    droppableId: 1,
                    index: 2,
                },
            },
        };
        const actual = reducer(initialState, action);
        const expected = {
            tabs: [
                {
                    id: 1, 
                    title: 'first tab', 
                    items: [
                        {id: "1-2", text: "1 second"},
                        {id: "1-3", text: "1 third"},
                        {id: "1-1", text: "1 first"},
                    ]
                },
            ]
        };

        expect(actual).toEqual(expected);
    });
})