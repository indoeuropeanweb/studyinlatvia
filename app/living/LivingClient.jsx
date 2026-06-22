import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const LivingClient = () => {
  return (
    <>
        <Breadcrumb heading={"Important topics to Live in Latvia"}/>
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
            <div>
          <h2 className='text-2xl md:text-4xl font-aino'>Living in Latvia</h2>
          <p className='text-md font-roboto mt-3'>Latvia gives international students a cosy environment and a budget-friendly and first-class
                lifestyle in one of the best and most deserving destinations. With classy cities, smooth public
                transport, digital facilities, and a reliable environment, learners may easily adapt to regular life
                while maintaining their concentration on studies.<br />
                Living in Latvia allows students to experience European culture without the high costs of
                coordinating with several Western European countries. Affordable accommodation, manageable
                living expenses, and student discounts make Latvia an attractive choice for those searching for
                quality education and a lifestyle that can be easily balanced. <br />Additionally, international students may have the opportunity to work part-time to gain practical
                experience and help cover their everyday expenses while studying.</p>
            </div>
            <div className=''>
              <Image className='rounded-md' width={420} height={320} src="/images/living/living.webp" alt="living in Latvia for indian students" />
            </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Life as an International Student in Latvia</h4>
              <p className='text-md font-inter mt-3'>Student life in Latvia combines academics, cultural experiences, and personal development.
                Universities create a welcoming atmosphere where students from different countries can learn,
                connect, and grow together.</p>
                <p className="mt-3 text-base font-inter">Students can participate in the following:</p>
              <ul className='mt-3'>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;University orientation programmes</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Cultural and international events</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Student clubs and organizations</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Workshops and career development activities</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Sports and recreational programmes</li>
                <li className='text-inter text-md'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Networking and social events</li>
              </ul>
              <p className='text-inter text-md mt-2'>These activities help students integrate into university life, build friendships, and gain valuable
                international exposure throughout their studies.</p>
            </div>
            <div className='mt-10'>
              <h4 className='text-xl md:text-2xl font-roboto'>Comfortable and Student-Friendly Environment</h4>
              <p className='text-base font-inter mt-3'>Latvia is well-known for its organised infrastructure and tranquil environment. Students are
                  allowed to avail themselves of modern facilities, public transportation, a library, healthcare
                  services, and several leisure activity opportunities that boost dedicated study concentration.
                  Universities also provide assistance that enables students to adjust to academic life, understand
                  campus amenities, and settle comfortably into their new life.<br />Learners may study and live in Latvia and enjoy the secure European lifestyle while acquiring
                  the academic and professional skills for future success.</p>
            </div>
        </div>
    </>
  )
}

export default LivingClient