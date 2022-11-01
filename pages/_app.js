import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import usePageLoading from "../hooks/usePageLoading";
import Spinner from '../components/spinner/Spinner';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

// Page transition delay time in millisecond
const DELAY_TIME = 500;

function MyApp({ Component, pageProps }) {
  const pageLoading = usePageLoading(DELAY_TIME);

  return <Provider store={store}>
  {pageLoading ? <Spinner /> :<Component {...pageProps} />}
  </Provider>
}

export default MyApp
