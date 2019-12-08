import React from 'react';
import MainHeader from './mainHeader';
import SectionAbout from './sectionAbout';
import SectionBest from './sectionBest';
import Footer from '../../footer';

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <SectionAbout />
      <SectionBest />
      <Footer />
    </>
  )
}

export default MainPage;