import React from 'react'
import styles from "./SetsComponent.module.scss"
import set1 from "../../assets/images/sets1.jpeg"
import set2 from "../../assets/images/sets2.png"
import set3 from "../../assets/images/sets3.jpg"
import set4 from "../../assets/images/sets4.jpg"
import set5 from "../../assets/images/sets5.jpg"
import set6 from "../../assets/images/sets6.png"
import set7 from "../../assets/images/sets7.png"
import set8 from "../../assets/images/sets8.png"

function SetsComponent() {
     return (
          <section className={`${styles.section}`}>
               <div className='container'>
                    <div className='row'>
                         <div className='col-md-3'>
                              <img src={set1} />
                         </div>
                         <div className='col-md-3'>
                              <img src={set2} />
                         </div>
                         <div className='col-md-3'>
                              <img src={set3} />
                         </div>
                         <div className='col-md-3'>
                              <img src={set4} />
                         </div>
                         <div className='col-md-3'>
                              <img src={set5} />
                         </div>
                         <div className='col-md-3'>
                              <img src={set6} />
                         </div>
                         <div className='col-md-3'>
                              <img src={set7} />
                         </div>
                         <div className='col-md-3'>
                              <img src={set8} />
                         </div>
                    </div>
               </div>

          </section>

     )
}

export default SetsComponent;