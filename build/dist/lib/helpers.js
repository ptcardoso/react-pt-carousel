export function getNextIndex(currentIndex, numItems) {
    return (currentIndex + 1) % numItems;
}
export function getPreviousIndex(currentIndex, numItems) {
    var previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
        return numItems - 1;
    }
    else {
        return previousIndex;
    }
}
//# sourceMappingURL=helpers.js.map