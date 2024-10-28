import CartIcon from '@/components/CartIcon';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Layout from '@/components/Layout';
// _app.js or _app.tsx



function MyApp({ Component, pageProps }) {
    return (
        <div className="relative overflow-hidden">

        <Layout>
                <Component {...pageProps} />
        </Layout>
    
        </div>
       
    );
}

export default MyApp;