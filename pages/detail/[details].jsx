import { Router, useRouter } from 'next/router';
import React from 'react'
import Section from '../Section';
import Image from 'next/image';
import { sampleImage } from '@/public/Images';
import Header from '../Header';
import Fotter from '../Fotter';

const Page = ({details}) => {
    const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
    // const {}=Router.query;
    console.log(details)
  return (
    <div className='bg-gradient-to-t from-sky-50 to-violet-50'>
        {/* <Section heading="news" subHeading="head" /> */}
        <div className='text-center mt-4 text-[grey]'>Detail xyz</div>
        <div className='flex flex-col px-8'>
            {/* heading */}
            <div className='text-[38px]  max-md:text-[24px] font-bold  mb-2 capitalize'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ratione porro ex.</div>
            {/* sub heading */}
            <div className='text-[#707070] capitalize mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure unde repellendus, praesentium blanditiis fuga eos reprehenderit magnam quos neque. Autem, perspiciatis illum?</div>
            {/* author */}
            <div></div>

            <div className='max-w-[700px] m-auto'>
                <Image src={sampleImage} className='max-w-[100%] ' />
            </div>
            <div className='mt-10 px-20 max-md:px-0 mb-4 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora enim debitis quibusdam adipisci earum saepe, placeat deserunt necessitatibus, error, molestias iusto ex soluta assumenda a sit ullam pariatur voluptate neque accusamus facilis esse. Aliquam et perferendis ullam corporis ad, fugit quasi nemo odit in eligendi velit quae eius voluptates omnis cumque inventore. Alias voluptates ipsam deserunt, est sunt eius odit qui. Quam iure unde inventore earum sit obcaecati dolores, sint fugiat dolore aut? Incidunt nostrum quidem dolor totam, maiores voluptatum repellat facilis sapiente nisi, minus saepe expedita sit culpa doloribus amet eius. Ut corrupti, voluptates tempora ea temporibus, fugit dignissimos, dolor ipsum repellendus quasi distinctio laudantium quo nostrum labore consequuntur reiciendis similique! Natus atque delectus necessitatibus quam excepturi quas in vero cum sapiente tempora quia dolorem, a aliquam nisi asperiores perspiciatis eaque. Dolor mollitia laboriosam commodi, eum odit et ullam laborum quam provident assumenda? Commodi fugiat quidem optio laudantium hic ipsam dolor assumenda architecto quisquam minus, vitae dolore cupiditate magni, illum eos harum! Commodi dolore asperiores fugit minima et in maxime quos distinctio illo labore, veritatis culpa facilis, natus at aliquam reprehenderit tempora. Qui in dicta ad unde necessitatibus facilis sed a accusamus mollitia voluptatem numquam, blanditiis veritatis ut.
            </div>

        </div>
    </div>
    
  )
}

export default Page;


export async function getServerSideProps({ params }) {
    const { details } = params;
  
    // Fetch data for the specific post using slug
    // const response = await fetch(`https://api.example.com/posts/${slug}`);
    // const post = await response.json();
  
    return {
      props: { details },
    };
  }
  