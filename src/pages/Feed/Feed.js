import Filter from "../../components/Feed/Filters/Filters";
import Grid from "../../components/Feed/Grid/Grid";
import Table from "../../components/Feed/Table/Table";
import styles from "./Feed.module.css";

const Feed = ({ data }) => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.subContainer}> */}
            <h2>Feed</h2>
            <Filter />
            <Grid data={data} />
            <Table data={data} />
            {/* </div> */}
        </div>
    );
};

export default Feed;
