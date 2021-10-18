import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { setupeStore } from '../src/store/store'
const store = setupeStore()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}  >
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
