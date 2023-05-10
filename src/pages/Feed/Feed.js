import { useState, useEffect } from "react";

import Filter from "../../components/Feed/Filters/Filters";
import Grid from "../../components/Feed/Grid/Grid";
import Table from "../../components/Feed/Table/Table";
import styles from "./Feed.module.css";
import { handleDataChange } from "../../services/feed";
import Pagination from "../../components/Feed/Pagination/Pagination";

const Feed = ({ data }) => {
    const [currentPageData, setCurrentPageData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("name");
    const [totalNoOfPages, setTotalNoOfPages] = useState(data.length);

    useEffect(() => {
        const filteredData = handleDataChange({ pageNo, search, sort, setTotalNoOfPages, data });
        setCurrentPageData(filteredData);
    }, [search, sort, pageNo]);

    return (
        <div className={styles.container}>
            <h2>Feed</h2>
            <Filter setSearch={setSearch} setSort={setSort} />
            <Grid data={currentPageData} />
            <Table data={currentPageData} />
            <Pagination pageNo={pageNo} setPageNo={setPageNo} totalNoOfPages={totalNoOfPages} />
        </div>
    );
};

export default Feed;
