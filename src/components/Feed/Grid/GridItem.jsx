import styles from "./Grid.module.css";

const GridItem = ({ item }) => {
    return (
        <div className={styles.gridItemContainer}>
            <img className={styles.image} src={item.image} alt={item.name} />
            <div className={styles.imageDescriptionContainer}>
                <p className={styles.itemName}>{item.name}</p>
                <p>{new Date(item.dateLastEdited).toLocaleDateString()}</p>
                <p className={styles.itemDescription}>{item.description}</p>
            </div>
        </div>
    );
};

export default GridItem;
