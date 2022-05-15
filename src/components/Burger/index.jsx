import React, { useContext } from 'react'
import styles from './styles.module.scss'
import CustomCursorContext from '../mouseFollower/context/CustomCursorContext'


const Burger = () => {
    const { addType } = useContext(CustomCursorContext);
    return(
        <button 
        onMouseEnter={() => addType({hover: true, text: 'Menu'})}
        onMouseLeave={() => addType({hover: false, text: ''})}
        className={styles.burger}
        >
            <div className={styles.barOne} />
            <div className={styles.barTwo} />
            <div className={styles.blob} />
        </button>
    )
}

export default Burger