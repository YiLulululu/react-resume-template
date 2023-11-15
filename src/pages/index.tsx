import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Education from '../components/Sections/Education';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Reference from '../components/Sections/Reference';
import Research from '../components/Sections/Research';
import Resume from '../components/Sections/Resume';
import Teach from '../components/Sections/Teach';
// import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Education />
      <Research />
      <Resume />
      <Teach />
      <Reference />
      <Portfolio /> {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
