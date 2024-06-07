import { sampleImage } from '@/public/Images';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';





const responsive = {
    desktop: {
      breakpoint: { max: 6000, min: 14001 },
      items: 6
    },
    deskto: {
      breakpoint: { max: 1400, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const WebStories = () => {
    const router=useRouter();

    const stories = [
        {
          title: 'Earth Vs Other Planets: How Long Is One Day On Each Planet In Solar System?',
          image: 'https://source.unsplash.com/random/800x600/?news',
        },
        {
          title: '7 Smartphones Under Rs 25,000 With Long Battery Life',
          image: 'https://source.unsplash.com/random/800x600/?news',
        },
        {
          title: 'Top 5 Superhit Songs Starring Sargun Mehta',
          image: 'https://source.unsplash.com/random/800x600/?news',
        },
        {
          title: '6 Reasons To Think Twice Before Fitting Aftermarket Alloy Wheels On Your Car',
          image: 'https://source.unsplash.com/random/800x600/?news',
        },
        {
          title: 'Beware: 7 Mistakes That Can Get You A Traffic Challan',
          image: 'https://source.unsplash.com/random/800x600/?news',
        },
      ];

      const pageDetail=(title)=>{
        router.push(`/detail/${title}`)
        // redirect("a")
      }
      
  return (
    <div className="py-8 bg-[#3b4b5b] text-white">
      <h2 className="text-xl font-semibold mb-4 px-4">Web Stories</h2>
      <div className="px-4 gap-x-4">
<Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="duration-300 transition-all"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
>
{stories.map((story, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-64 p-2 m-auto cursor-pointer" onClick={()=>pageDetail(story?.title)}>
              <div className="relative h-48">
                <img
                  src={story.image}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg w-full h-full"
                />
              </div>
              <p className="mt-2 text-sm">{story.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WebStories;