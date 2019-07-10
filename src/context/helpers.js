// This function will add the item (itemToMove) 
// in the array (arr) at the index (destination.index)
// without removing items (0).
const getDestinationTabItems = (arr, destination, itemToMove) => {
    arr.splice(destination.index, 0, itemToMove);
    return arr;
}

export {
    getDestinationTabItems,
}