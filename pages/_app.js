import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import usePageLoading from "../hooks/usePageLoading";
import Spinner from '../components/spinner/Spinner';

// Page transition delay time in millisecond
const DELAY_TIME = 500;

function MyApp({ Component, pageProps }) {
  const pageLoading = usePageLoading(DELAY_TIME);

  return <>
  {pageLoading ? <Spinner /> :<Component {...pageProps} />}
  </>
}

export default MyApp
