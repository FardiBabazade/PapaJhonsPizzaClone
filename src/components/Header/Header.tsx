import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import flagaz from "../../assets/images/azerbaijan.png";
import flagen from "../../assets/images/flag_en.png";
import styles from  "./Header.module.scss";

function Header() {
  return (
    <>
      <section className={styles.sectionone}>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg   navbar-light">
              <div className="container">
                <Link to="/" className="nav-link">
                  <img className={styles.logoimg} src={logo} alt="" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/company" className="nav-link">
                        KAMPANİYALAR
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/sets" className="nav-link">
                        SETLƏR
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/drinks" className="nav-link">
                        İÇKİLƏR
                      </Link>

                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        SƏBƏT
                      </a>
                    </li>
                  </ul>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img className={styles.flag} src={flagaz} alt="" />
                      Az
                    </a>
                    <ul className={`dropdown-menu menu`} aria-labelledby="navbarDropdown">
                      <li> <img className={styles.flagaz} src={flagaz} /><a href="#"><span>Az</span></a></li>
                      <li><img className={styles.flagen} src={flagen} /><a href="#"><span>En</span></a></li>
                    </ul>
                  </li>
                  <div className="navbar-text">
                    <i className={`fa fa-shopping-basket`} aria-hidden="true"> </i>
                  </div>

                </div>
              </div>
            </nav>
          </div>
           
        </div>
      </section>
      <div className={styles.promodiv}>
              <h2>Promo kodunuz var?</h2>
              <span>Endirimdən istifadə edin!</span>
              <input type="text" />
              <button>OK</button>
            </div>
    </>
  );
}

export default Header;
