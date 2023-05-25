import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Root() {

    return (
        <div className='container'>
            <Header/>
            {/* to tell where to children should be rendered */}
            <Outlet/>
            <Footer/>
        </div>
    )
}
