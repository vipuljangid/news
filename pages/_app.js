import "@/styles/globals.css";
import Header from "./Header";
import Fotter from "./Fotter";
import Whatsapp from "./Whatsapp/Whatsapp";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname)
  const isAdminPath = router.pathname.startsWith('/admin');

  return (
    <div className="bg-gradient-to-t from-sky-50 to-violet-50">
      {/* {router.pathname!=='/admin/*'&&<Header/>} */}
      {/* <Whatsapp/> */}
      {isAdminPath ? null : <Header />}
      {isAdminPath ? null : <Whatsapp />}
      <div><Component {...pageProps} /></div>
      {/* {router.pathname!=='/admin/*'&&<Fotter/>} */}
      {isAdminPath ? null : <Fotter />}

      
    </div>
  );
}
