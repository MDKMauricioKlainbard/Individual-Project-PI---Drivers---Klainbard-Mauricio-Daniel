export default function driversSlice(drivers, currentPage, cardsPerPage) {
    const startIndex = (currentPage-1)*cardsPerPage;
    const endIndex = startIndex+cardsPerPage;
    const filterDriversSlice = drivers.slice(startIndex,endIndex);
    return filterDriversSlice
}