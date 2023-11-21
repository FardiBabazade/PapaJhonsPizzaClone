import React from 'react'
import styles from "./Drinks.module.scss"
import dataimport from "../../data"
function DrinkComponent() {
  return (
    <>
      <div className='container' >
        <div className='row'>
          {dataimport[1].map(item => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className={`${styles.card} card`}>
                <img className={styles.cardimage} src={item.imgUrl} alt="Card image cap" />
                <div className='card-body'>
                  <div>
                    <span className={styles.drinkname}>{item.name}</span>
                    <span className={styles.drinkbtn}>BUNU SEÇ</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >
    </>
  )
}
export default DrinkComponent;