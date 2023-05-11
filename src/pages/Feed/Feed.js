import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Filter from "../../components/Feed/Filters/Filters";
import Grid from "../../components/Feed/Grid/Grid";
import Table from "../../components/Feed/Table/Table";
import styles from "./Feed.module.css";
import { handleDataChange } from "../../services/feed";
import Pagination from "../../components/Feed/Pagination/Pagination";
import { updateStateWithParams, updateParams } from "../../services/queryParams";

const Feed = ({ data }) => {
    const [currentPageData, setCurrentPageData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("name");
    const [totalNoOfPages, setTotalNoOfPages] = useState(data.length);
    const [searchParams, setSearchParams] = useSearchParams();
    const [queryParamsStateUpdated, setQueryParamsStateUpdated] = useState(false);

    useEffect(() => {
        updateStateWithParams({ searchParams, setPageNo, setSearch, setSort });
        setQueryParamsStateUpdated(true);
    }, []);

    useEffect(() => {
        if (!queryParamsStateUpdated) {
            return;
        }
        updateParams({ setSearchParams, searchParams, search, sort, pageNo });
        const filteredData = handleDataChange({
            pageNo,
            search,
            sort,
            setTotalNoOfPages,
            data,
        });
        setCurrentPageData(filteredData);
    }, [search, sort, pageNo, queryParamsStateUpdated]);

    // useEffect(() => {
    //     if (!queryParamsStateUpdated) {
    //         return;
    //     }
    //     console.log("setting page no to 1");
    //     setPageNo(1);
    // }, [search, sort]);

    return (
        <div className={styles.container}>
            <h2>Feed</h2>
            <Filter search={search} sort={sort} setSearch={setSearch} setSort={setSort} />
            <Grid data={currentPageData} />
            <Table data={currentPageData} />
            <Pagination pageNo={pageNo} setPageNo={setPageNo} totalNoOfPages={totalNoOfPages} />
        </div>
    );
};

export default Feed;
