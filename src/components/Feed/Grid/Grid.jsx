import styles from "./Grid.module.css";
import GridItem from "./GridItem";

const Grid = ({ data }) => {
    return (
        <div className={styles.gridContainer}>
            {data.map((item, i) => {
                return <GridItem key={i} item={item} />;
            })}
        </div>
    );
};

export default Grid;
