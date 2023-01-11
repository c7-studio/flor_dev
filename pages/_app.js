import '../styles/globals.css'
import Navbar from '../components/Navbar';

function App({ Component, pageProps }) {
  return <div>
      <Navbar />
      <Component {...pageProps} />
  </div>
}

export default App