// import { sampleImage } from '@/public/Images'
// import { Button } from '@nextui-org/react'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import Section from './Section'

// const data = [
//     {},
//     {},
//     {},
//     {},
//     {},
//     {},
//     {},
//     {},
//     {},
// ]

// const TrendingNews = () => {
//     const [sliceValue, setSliceValue] = useState(4);

//     const LoadMore=()=>{
//         setSliceValue(sliceValue+4);
//         console.log()
//     }
//     return (
//      <div className='flex flex-col items-center pt-4'>
//             <Section heading="Trending News"  />
        
//            <div className='flex flex-row flex-wrap justify-center gap-3  pb-5'>

//             {data?.slice(0,sliceValue)?.map((ele, index) => (
//                 <div key={index} className='relative'>
//                     <Image src={sampleImage} className='max-w-[300px] bg-gradient-to-r from-transparent to-black bg-size-auto bg-no-repeat '/>
//                     <div className='absolute bottom-[20px]   z-50 left-1/2 transform -translate-x-1/2 text-[white] '>
//                     <div>
//                         <div className='text-center mb-2 text-[22px]'>Heading</div>
//                         <div className='flex flex-row gap-x-4 text-[12px] text-[whiteSmoke]'>
//                             <div>Publish:</div>
//                             <div>Author:</div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             ))}
//             </div>
//             {
//     sliceValue<=data.length &&
//             <Button onClick={LoadMore} className='text-center bg-secondary text-white '>Load More</Button>
//         }
//      </div>
      
//     )
// }

// export default TrendingNews



import React from 'react'

const TrendingNews = () => {
  return (
    <div>TrendingNews</div>
  )
}

export default TrendingNews