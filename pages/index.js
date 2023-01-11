import Head from 'next/head';
import About from '../components/About';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Contact from '../components/Contact';


export default function Home() {
  return ( 
  <div>
    <Head>
      <title>Florencia Gomez</title>
    </Head>
    <Hero/>
    <About/>
    <Experience/>
    <Work/>
    <Contact/>
  </div>
  )
}
