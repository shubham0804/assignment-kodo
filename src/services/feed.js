export const handleDataChange = ({ pageNo, search, sort, setTotalNoOfPages, data }) => {
    // Search
    const searchData = data.filter((entry) => {
        if (
            entry.name.toLowerCase().match(search.toLowerCase()) ||
            entry.description.toLowerCase().match(search.toLowerCase())
        ) {
            return true;
        }
    });

    // Set Total Pages
    const entriesPerPage = 6;
    setTotalNoOfPages(Math.ceil(searchData.length / entriesPerPage));

    // Sort
    searchData.sort((a, b) => {
        if (a[sort] > b[sort]) {
            return 1;
        }
        if (a[sort] < b[sort]) {
            return -1;
        }
        return 0;
    });
    // Pagination
    const firstEntryOfPage = (pageNo - 1) * entriesPerPage + 1;
    const lastEntryOfPage = firstEntryOfPage - 1 + entriesPerPage;
    const paginatedData = searchData.slice(firstEntryOfPage, lastEntryOfPage + 1);
    return paginatedData;
};
