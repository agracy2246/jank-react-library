// fake data generator
export const getItems = (count: number, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

    // a little function to help us with reordering the result
export const reorder = <T>(list: T[], startIndex: number, endIndex: number) => {
    const result: T[] = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};