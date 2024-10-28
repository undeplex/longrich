import CartIcon from '@/components/CartIcon';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Layout from '@/components/Layout';
// _app.js or _app.tsx
import { Open_Sans } from '@next/font/google';

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});


function MyApp({ Component, pageProps }) {
    return (
        <div className="relative overflow-hidden">
<main className={openSans.classNam}>
        <Layout>
                <Component {...pageProps} />
        </Layout>
 </main>     
        </div>
       
    );
}

export default MyApp;