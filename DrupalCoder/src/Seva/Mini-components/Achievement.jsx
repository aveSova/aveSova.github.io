import styles from '../Styles/Achievement.module.css'

const Achievement = ({
    heading,
    description,
    img,
    isLarge = false
}) => {
    return (
        <>
        <div className={styles.base}>
            <div style={{display: 'flex'}}>
                <h3 className={`${styles.heading} ${isLarge ? styles.headingLarge : ''}`}>{heading}</h3>
                <img src={img}/>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
        </>
    )
}

export default Achievement;