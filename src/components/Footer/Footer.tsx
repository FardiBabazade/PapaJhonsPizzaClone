import React from 'react'
import styles from "./Footer.module.scss"

function Footer() {
  return (
    <section className={`${styles.section}`}>
      <footer className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className={styles.footersize}>
              <span>Haqqımızda</span>
              <span>Sual-Cavab</span>
              <span>Karyera</span>
              <span>Xəmir</span>
              <span>Şərtlər və Qaydalar</span>
            </div>
          </div>
        </div>
      </footer>
    </section>

  )
}

export default Footer;