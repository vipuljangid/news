import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import { sampleImage } from '@/public/Images';

const Page = ({ details }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-t from-sky-50 to-violet-50 min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Heading */}
        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 capitalize text-center text-gray-800">{details.title}</h1>
          {/* Sub Heading */}
          <h2 className="text-xl md:text-2xl text-gray-700 capitalize mb-6 text-center">{details.subHeading}</h2>
          {/* Author and Date */}
          <div className="text-gray-600 mb-6 text-center">
            By {details.author} on {new Date(details.date).toLocaleDateString()}
          </div>
          {/* Cover Image */}
          <div className="relative h-64 md:h-96 mb-6">
            <Image
              src={sampleImage}
              alt={details.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Article Content */}
          <div className="text-gray-800 leading-relaxed">
            {details.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

export async function getServerSideProps({ params }) {
  const { details } = params;

  // Simulating data fetching
  const post = {
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ratione porro ex.',
    subHeading: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    author: 'John Doe',
    date: '2023-06-07',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora enim debitis quibusdam adipisci earum saepe, placeat deserunt necessitatibus, error, molestias iusto ex soluta assumenda a sit ullam pariatur voluptate neque accusamus facilis esse. Aliquam et perferendis ullam corporis ad, fugit quasi nemo odit in eligendi velit quae eius voluptates omnis cumque inventore. Alias voluptates ipsam deserunt, est sunt eius odit qui. Quam iure unde inventore earum sit obcaecati dolores, sint fugiat dolore aut? Incidunt nostrum quidem dolor totam, maiores voluptatum repellat facilis sapiente nisi, minus saepe expedita sit culpa doloribus amet eius. Ut corrupti, voluptates tempora ea temporibus, fugit dignissimos, dolor ipsum repellendus quasi distinctio laudantium quo nostrum labore consequuntur reiciendis similique! Natus atque delectus necessitatibus quam excepturi quas in vero cum sapiente tempora quia dolorem, a aliquam nisi asperiores perspiciatis eaque. Dolor mollitia laboriosam commodi, eum odit et ullam laborum quam provident assumenda? Commodi fugiat quidem optio laudantium hic ipsam dolor assumenda architecto quisquam minus, vitae dolore cupiditate magni, illum eos harum! Commodi dolore asperiores fugit minima et in maxime quos distinctio illo labore, veritatis culpa facilis, natus at aliquam reprehenderit tempora. Qui in dicta ad unde necessitatibus facilis sed a accusamus mollitia voluptatem numquam, blanditiis veritatis ut.`,
  };

  return {
    props: { details: post },
  };
}
