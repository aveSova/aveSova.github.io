import styles from '../Styles/Service.module.css'

const Service = ({
    img,
    description
}) => {
    return (
        <>
        <div className={styles.base}>
            <img src={img}/>
            <p className={styles.description}>{description}</p>
        </div>
        </>
    )
}

export default Service;