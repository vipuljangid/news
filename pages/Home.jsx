import { sampleImage } from '@/public/Images'
import Image from 'next/image'
import React, { useState } from 'react'
import TrendingNews from './TrendingNews';
import Section from './Section';
import Footer from './Fotter'
import { Button } from '@nextui-org/react';
import WebStories from '@/components/WebStories';
import { useRouter } from 'next/router';





const categories = [
    "Fire Outbreak",
    "COVID-19",
    "Stock Market",
    "Sports",
    "Technology",
    "Entertainment",
    "Politics",
    "Health",
    "Education",
    "Environment",
    // Add more headings as needed
];






const Home = () => {
    const [sliceValue, setSliceValue] = useState(4);
    const router=useRouter();

    // Sample news data
    const newsData = [
        {
          id: 1,
          title: 'Breaking News 1',
          description: 'Description of breaking news 1',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'John Doe',
          publishDate: 'June 1, 2024',
        },
        {
          id: 2,
          title: 'Breaking News 2',
          description: 'Description of breaking news 2',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Jane Smith',
          publishDate: 'June 2, 2024',
        },
        // Add more news items as needed
        {
          id: 3,
          title: 'Breaking News 3',
          description: 'Description of breaking news 3',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Alice Johnson',
          publishDate: 'June 3, 2024',
        },
        {
          id: 4,
          title: 'Breaking News 4',
          description: 'Description of breaking news 4',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Bob Williams',
          publishDate: 'June 4, 2024',
        },
        // Add more news items as needed
        {
          id: 5,
          title: 'Breaking News 5',
          description: 'Description of breaking news 5',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 6,
          title: 'Breaking News 6',
          description: 'Description of breaking news 6',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 7,
          title: 'Breaking News 7',
          description: 'Description of breaking news 7',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 8,
          title: 'Breaking News 8',
          description: 'Description of breaking news 8',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 9,
          title: 'Breaking News 9',
          description: 'Description of breaking news 9',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 10,
          title: 'Breaking News 10',
          description: 'Description of breaking news 10',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 11,
          title: 'Breaking News 11',
          description: 'Description of breaking news 11',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 12,
          title: 'Breaking News 12',
          description: 'Description of breaking news 12',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 13,
          title: 'Breaking News 13',
          description: 'Description of breaking news 13',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 14,
          title: 'Breaking News 14',
          description: 'Description of breaking news 14',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 15,
          title: 'Breaking News 15',
          description: 'Description of breaking news 15',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 16,
          title: 'Breaking News 16',
          description: 'Description of breaking news 16',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        {
          id: 17,
          title: 'Breaking News 17',
          description: 'Description of breaking news 17',
          imageUrl: 'https://source.unsplash.com/random/800x600/?news',
          author: 'Emma Brown',
          publishDate: 'June 5, 2024',
        },
        // Add more news items as needed
      ];
  

    const [visibleNewsCount, setVisibleNewsCount] = useState(9);
  
    const loadMore = () => {
      setVisibleNewsCount(visibleNewsCount + 9);
    };

    const pageDetail=(title)=>{
        router.push(`/detail/${title}`)
        // redirect("a")
      }
    
    return (
        <div>
            {/* categories */}
            <div className="text-center bg-white shadow-lg pb-6 mb-[-20px] mt-[-30px]">
                <div className="flex flex-row gap-x-4 mx-8 flex-wrap gap-y-4 justify-center max-sm:gap-x-3 max-sm:gap-y-3">
                    {categories?.map((category, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg px-6 py-2 max-sm:px-4 text-sm border-dotted capitalize text-center cursor-pointer hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                        >
                            {category}
                        </div>
                    ))}
                </div>
            </div>




            {/* news */}
            {/* <Section heading="News" /> */}

            <div className="container mx-auto py-8 mt-10">
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.slice(0, visibleNewsCount).map((news) => (
          <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={()=>pageDetail(news?.title)}>
            <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{news.title}</h2>
              <p className="text-gray-700 mb-2">{news.description}</p>
              <p className="text-sm text-gray-500">Published by <span className='font-bold'>{news.author}</span> on {news.publishDate}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleNewsCount < newsData.length && (
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>


            {/* <div className='text-center mt-2'>
                {
                    sliceValue <= data.length &&
                    <Button onClick={LoadMore} className='text-center bg-secondary text-white mt-2'>Load More</Button>
                }
            </div> */}
            {/* <TrendingNews /> */}
            <WebStories/>
            {/* <Footer/> */}
        </div>
    )
}

export default Home