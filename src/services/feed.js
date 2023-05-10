export const handleDataChange = ({ pageNo, search, sort, setTotalNoOfPages, data }) => {
    // Search
    const searchData = searchFilter({ search, data });

    // Set Total Pages
    const entriesPerPage = 6;
    setTotalNoOfPages(Math.ceil(searchData.length / entriesPerPage));

    // Sort
    const sortData = sortFilter({ searchData, sort });
    // Paginate
    return paginate({ pageNo, entriesPerPage, searchData: sortData });
};

const searchFilter = ({ search, data }) => {
    if (!search) {
        return data;
    }
    if (search.charAt(0) == '"' && search.charAt(search.length - 1) == '"') {
        const searchWithoutQuotes = search.substring(1, search.length - 1);
        return data.filter((entry) => {
            if (
                entry.name.toLowerCase().match(searchWithoutQuotes.toLowerCase()) ||
                entry.description.toLowerCase().match(searchWithoutQuotes.toLowerCase())
            ) {
                return true;
            }
        });
    }
    return data.filter((entry) => {
        let noOfMatches = 0;
        const noOfWords = search.split(" ").length;
        search
            .toLowerCase()
            .split(" ")
            .forEach((word) => {
                if (entry.name.toLowerCase().includes(word)) {
                    noOfMatches++;
                }
            });
        if (noOfMatches === noOfWords) {
            return true;
        }
    });
};

const sortFilter = ({ searchData, sort }) => {
    return searchData.sort((a, b) => {
        if (a[sort] > b[sort]) {
            return 1;
        }
        if (a[sort] < b[sort]) {
            return -1;
        }
        return 0;
    });
};

const paginate = ({ pageNo, entriesPerPage, searchData }) => {
    const firstEntryOfPage = (pageNo - 1) * entriesPerPage + 1;
    const lastEntryOfPage = firstEntryOfPage - 1 + entriesPerPage;
    const paginatedData = searchData.slice(firstEntryOfPage - 1, lastEntryOfPage);
    return paginatedData;
};
