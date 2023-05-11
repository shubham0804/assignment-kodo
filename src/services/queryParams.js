export const updateParams = ({ setSearchParams, searchParams, search, sort, pageNo }) => {
    const updatedParams = {};
    if (search) {
        updatedParams.search = search;
    }
    if (pageNo) {
        updatedParams.pageNo = pageNo;
    }
    if (sort) {
        updatedParams.sort = sort;
    }
    if (!!Object.keys(updatedParams)) {
        setSearchParams(updatedParams);
    }
};

export const updateStateWithParams = ({ searchParams, setPageNo, setSearch, setSort }) => {
    searchParams?.forEach((value, key) => {
        switch (key) {
            case "pageNo":
                setPageNo(parseInt(value));
                break;
            case "search":
                setSearch(value);
                break;
            case "sort":
                setSort(value);
                break;
        }
    });
};
