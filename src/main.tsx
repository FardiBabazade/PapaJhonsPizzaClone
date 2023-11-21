import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function Layout(props:{children:JSX.Element}) {
    return (
        <div>
            <Header />
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}


export default Layout;