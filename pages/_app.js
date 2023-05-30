import Navbar from '@/src/components/navbar'
import { store } from '@/src/context/store/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <div className='app'>
      <Provider store={store}>
      <Navbar/>
        <Component {...pageProps} />
        </Provider>
    </div>
  )
}
