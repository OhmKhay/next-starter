import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children, pageTitle }) => {
    return (
        <>
        <Head>
        <title>{pageTitle}</title>
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0"
        />
        </Head>
           <Header />
            {children}
           <Footer />
        </>
    )
}

export default Layout
