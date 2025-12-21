import styles from '../Styles/Achievement.module.css'

const Achievement_copy = ({
    description,
}) => {
    return (
        <>
        <div className={styles.base} style={{width: '50vw'}}>
            <p className={styles.description} style={{color:'white', fontSize: '18px', maxWidth: '50vw'}}>{description}</p>
        </div>
        </>
    )
}

export default Achievement_copy;