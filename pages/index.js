import { Raleway } from 'next/font/google'
 
const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
})
import {NextUIProvider} from "@nextui-org/react";
import MainPage from "./MainPage";


export default function Home() {
  return (
    // <div className='w- bg-gradient-to-r from-rose-100 to-teal-100 '>
    // <div className='bg-gradient-to-tr from-slate-300 to-gray-300'>
    // <div className='bg-gradient-to-t from-neutral-50 to-lime-50'>
    <div className={`${'bg-gradient-to-t from-sky-50 to-violet-50'} ${raleway.className}`} >
    {/* <div className=''> */}

    <NextUIProvider>
      <MainPage/>
      
    </NextUIProvider>
</div>
  );
}
