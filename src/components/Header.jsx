import React from "react";
import rocketLogo from '../assets/rocket.png'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div>
            <header>
                <section className={styles.headerContent}>
                    <div className={rocketLogo}>
                        <img src={rocketLogo} />
                    </div>
                    <h1>to<span>do</span></h1>
                </section>
            </header>
        </div>
    )
}