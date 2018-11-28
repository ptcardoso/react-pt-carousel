export function getNextIndex(currentIndex: number, numItems: number): number {
    return (currentIndex + 1) % numItems
}

export function getPreviousIndex(currentIndex: number, numItems: number): number {
    const previousIndex = currentIndex - 1
    if (previousIndex < 0) {
        return numItems - 1
    } else {
        return previousIndex
    }
}
