import CartIcon from '@/components/CartIcon';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Layout from '@/components/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
    return (
        <div className="relative overflow-hidden">
        <Layout>
            <DefaultSeo {...SEO}/>
                <Component {...pageProps} />
        </Layout>
      
        </div>
       
    );
}

export default MyApp;