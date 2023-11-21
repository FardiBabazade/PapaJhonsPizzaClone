import React, { useState } from 'react'
import Select from 'react-select';
import styles from "./Pizzas.module.scss"
import dataimport from "../../data"
import Counter from '../Counter/Counter';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


function Pizzas() {

  const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; } | null>(null);

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleClick = (id: number, name: string, price: number[]) => {
    setId(id)
    setName(name)
    setPrice(price[1])
  };

  return (
    <>
      <div className='container'>
        {/*  MODAL-START*/}
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className={`${styles.modalsize} modal-dialog modal-dialog-centered`}>
            <div className="modal-content">
              <div className={styles.modalHeader}>
                <span className={styles.closeBtn} data-bs-dismiss="modal">Bağla X</span>
              </div>
              <div className={styles.modalBody}>
                <img src={dataimport[0][id].imgUrl} />
                <p className=' fw-bold mt-2'>{name}</p>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
                <div className='row'>
                  <div className='col-md-6 mt-3'>
                    <Counter />
                  </div>
                  <div className='col-md-6'>
                    <span></span>
                  </div>
                  <div className='col-md-12 d-flex  mt-4 justify-content-center'>
                     <button className='btn btn-success'>SƏBƏTƏ AT</button>
                </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        {/*  MODAL-END*/}

        <div className="row">
          {dataimport[0].map(item => (
            <div className="col-lg-3 col-md-3">
              <div className={`${styles.card} card`}>
                <img className={styles.cardimage} src={item.imgUrl} alt="Card image cap" />
                <div className="card-body">
                  <h5 className={`${styles.cardTitle}`}>{item.name}</h5>
                  {/* <span>{item.id}</span> */}
                  <button
                    onClick={() => handleClick(item.id, item.name, item.price)}
                    className={`${styles.cardBtn} btn btn-success`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">BUNU SEÇ</button>
                  <p className={styles.carddescription}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Pizzas;