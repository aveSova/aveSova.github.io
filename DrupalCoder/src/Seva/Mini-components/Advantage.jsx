import styles from '../Styles/Advantage.module.css'

const Advantage = ({
    index,
    heading,
    description,
    background
}) => {
    return (
        <>
            <div className={styles.base} style={{backgroundImage: `url("${background}")`, backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat'}}>
                <p className={styles.index}>{index}.</p>
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </>
    )
}

export default Advantage;