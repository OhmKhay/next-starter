import { Fragment } from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { useStore } from '../src/store';
import '../styles/reset.scss';

 const  MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
   return (
     <Fragment>
       
      <Provider store={store}>
        
          <Component {...pageProps} />
          
      </Provider>
     </Fragment>
   )
}

MyApp.getInitialProps = async (appContext) => {
 
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps};
};

export default MyApp;