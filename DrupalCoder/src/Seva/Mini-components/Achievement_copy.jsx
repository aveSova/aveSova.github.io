import styles from '../Styles/Achievement_copy.module.css'

const Achievement_copy = ({
    description,
    isRed = ''
}) => {
    return (
        <>
        <div className={styles.base}>
            <p className={styles.description} style={{color:'white'}}>{description} <div style={{color: '#F14D34'}}>{isRed}</div> </p>
        </div>
        </>
    )
}

export default Achievement_copy;