import '../styles/globals.css'
import {Toaster} from 'react-hot-toast';
//add layout here and structure the pages
import { Layout} from '../components'
import { StateContext} from '../context/StateContext'
import { UserProvider } from '@auth0/nextjs-auth0/client';
function MyApp({ Component, pageProps}) {
  return (
    <UserProvider>
    <StateContext>
      <Layout>
        <Toaster />
        
        <Component {...pageProps} />
        
    </Layout>

    </StateContext>
    </UserProvider>
    
  )
}

export default MyApp
// pass the component as a children property in layout to