import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col max-w-[1140px] mx-auto'>
            <div className=''>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;