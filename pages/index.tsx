import type { NextPage } from 'next';
import Head from 'next/head';
import BePremium from '../components/landingPage/bePremium/BePremium';
import Footer from '../components/landingPage/footer/Footer';
import HeaderBar from '../components/landingPage/headerBar/HeaderBar';

import Hero from '../components/landingPage/hero/Hero';
import Steps from '../components/landingPage/steps/Steps';
import Why from '../components/landingPage/why/Why';

const Home: NextPage = () => {
    return (
        <>  
            <HeaderBar />
            <Hero />
            <Steps />
            <BePremium />
            <Why />
            <Footer />
        </>
    );
};

export default Home;
