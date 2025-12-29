import styles from '../Styles/Achievement_copy.module.css'

const Achievement_copy = ({
    description,
    isRed = ''
}) => {
    return (
        <>
        <div className={styles.base_copy}>
            <div className={styles.description_copy}>
                <p style={{color:'white'}}>{description}</p> 
                <p style={{color: '#F14D34'}}>{isRed}</p>
            </div>
        </div>
        </>
    )
}

export default Achievement_copy;