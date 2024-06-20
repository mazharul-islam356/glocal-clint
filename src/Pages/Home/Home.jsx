import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import  { useRef } from 'react';
import './home.css'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
    const main = useRef();

    useGSAP(
      () => {
        const boxes = gsap.utils.toArray('.box');
        boxes.forEach((box) => {
          gsap.to(box, {
            x: 300,
           
            scrollTrigger: {
              trigger: box,
             
              start: ' bottom  bottom',
              end: 'bottom 80%',
              scrub: true,
              markers: true,
            },
          });
        });
        
      },
      { scope: main }
    );

    return (
        <div>
            {/* page 01 */}
            <div className='bg-no-repeat bg-[url(https://i.ibb.co/6BHhNgX/Vector-1.png)]'>
           
           <div className="flex justify-between">
           <div>

          {/* haddi */}
            <img className='w-14 relative left-[30rem] top-10' src="https://i.ibb.co/8Mr3b8L/Group.png" alt="" />

          {/* kukurer thaba orange */}
          <div className='box'>
          <img className='w-10  relative left-36 top-20' src="https://i.ibb.co/5TX8SfS/Group-1.png" alt="" />
          </div>

            {/* thaba only border */}
            <img className='w-16 box relative left-[39rem] top-14' src="https://i.ibb.co/SdwNx4R/paw.png" alt="" />

            {/* thaba blue */}
            <img className='w-16 box relative top-64 left-36' src="https://i.ibb.co/QpXLz3K/Group-2.png" alt="" />

            <h1 className='font-playfire text-7xl font-bold relative text-center left-36'>Talking care</h1>

          {/* kukurer golar chain */}
            <img className='w-14 relative left-96 top-36' src="https://i.ibb.co/74JtRxv/Group-3.png" alt="" />

    {/* thaba only border */}
    <img className='w-16 relative left-[41rem] top-60' src="https://i.ibb.co/SdwNx4R/paw.png" alt="" />
           
           
            </div>
            
              <div className='grid grid-cols-3' ref={main}>

              <img className='w-56 box relative z-10 left-32 top-10' src="https://i.ibb.co/tHPyq9t/unsplash-ZCHj-2l-JP00.jpg" alt="" />

            {/* center */}
              <img className='w-64  mt-10 z-10 relative left-16' src="https://i.ibb.co/prsMVKP/unsplash-eoqnr8ikw-FE.jpg" alt="" />

            {/* 3rd */}
              <img className='w-52 relative top-2 left-6' src="  https://i.ibb.co/J780cy6/unsplash-5-PVXkqt2s9k.jpg" alt="" />

            
              <img className='w-56 h-80 relative left-48 bottom-40 z-0' src="https://i.ibb.co/VjtK900/unsplash-Mv9hjn-EUHR4.jpg" alt="" />

            {/* last */}
              <img className='w-60 box  bottom-20 left-56' src="https://i.ibb.co/VqPgGgZ/unsplash-BJaq-Pa-H6-AGQ.jpg" alt="" />

            </div>

           </div>

           
        
            {/* <div>
              
      <section className="section flex-center column">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>
      <div className="section flex-center column" ref={main}>
        <div className="box p-4 bg-green-500">box</div>
        <div className="box p-4 bg-blue-500">box</div>
        <div className="box p-4 bg-red-500">box</div>
      </div>
      <section className="section"></section>
    </div>
             */}

            </div>
        </div>
    );
};

export default Home;