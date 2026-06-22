import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const StudyClient = () => {
  return (
    <>
         <Breadcrumb heading={'Study in Lithuania'}/>
         <div className='py-5 px-5'>
               <h2 className='font-aino text-2xl md:text-4xl'>Study in Latvia – Where European Education Meets Opportunity</h2>
               <p className='text-justify font-roboto text-lg mt-3'>Latvia has emerged as one of Europe&#39;s most attractive study destinations for international
                students seeking quality education, affordable costs, and global career opportunities. With
                internationally recognised universities, English-taught programmes, and a welcoming academic
                environment, Latvia offers students the chance to earn a valuable European degree while
                enjoying a high standard of living.<br />Whether you are planning to pursue undergraduate, postgraduate, or research studies, Latvia
                provides a strong foundation for academic success and professional growth.</p>
              <div className='mt-2'>
                <h4 className='text-lg font-inter'>What Makes Latvia an Attractive Study Destination?</h4>
                <p className='text-base font-inter mt-3'>Students from around the world choose Latvia for its combination of educational excellence,
                  affordability, and international exposure.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-3'>
                      <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Member of the European Union and Schengen Area</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Internationally recognised degrees and qualifications</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable tuition fees compared to many European countries</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English-taught programmes across various disciplines</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern universities with advanced learning facilities</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Safe, peaceful, and student-friendly environment</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Multicultural campuses with international student communities</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Opportunity to travel within the Schengen region</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Growing demand for skilled graduates in various industries</li>
                      </ul>
                   <Image className="h-90 w-70 rounded-md" src="/images/study/study.webp" width={240} height={320} alt="study abroad lithuania" />
                 </div>
                 <div className=''>
                  <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Practical learning and career-focused education</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Access to research, innovation, and technology-driven sectors</li>
                  </ul>
                 </div>
               </div>
               <div className='mt-5'>
                      <h2 className='font-aino text-2xl md:text-4xl my-5'>Why Study at Universities in Latvia?</h2>
                      <p className='font-inter text-base'>Latvian universities are known for delivering high-quality education that combines academic knowledge with real-world application.</p>
                      <ul className='space-y-3 mt-5'>
                          <li className='font-roboto text-justify'>
                            <h4 className='text-lg font-roboto font-semibold'>Globally Recognised Education</h4>
                            <p className='text-base font-inter text-justify'>Universities in Latvia follow European higher education standards, ensuring degrees are
                              respected by employers and institutions worldwide.</p>
                          </li>
                          <li className='font-roboto text-justify'>
                            <h4 className='text-lg font-roboto font-semibold'>Career-Oriented Programmes</h4>
                            <p className='text-base font-inter text-justify'>Students benefit from advanced classrooms, research facilities, digital resources, and
                              innovative teaching methods that support academic achievement.</p>
                          </li>
                          <li className='font-roboto text-justify'>
                            <h4 className='text-lg font-roboto font-semibold'>International Student Experience</h4>
                            <p className='text-base font-inter text-justify'>With students from different countries studying together, Latvia offers a diverse learning
                              environment that encourages cultural exchange and global networking.</p>
                          </li>
                          <li className='font-roboto text-justify'>
                            <h4 className='text-lg font-roboto font-semibold'>Affordable European Education</h4>
                            <p className='text-base font-inter text-justify'>Students can access quality education and a comfortable lifestyle without the high expenses
                              often associated with many Western European destinations.</p>
                          </li>
                      </ul>
               </div>
               <div className='my-5'>
                    <h2 className='font-aino text-2xl md:text-4xl my-3'>Build Your Future in Europe</h2>
                    <p className='text-lg font-inter'>Studying in Latvia is more than earning a degree—it&#39;s an opportunity to gain international
                      exposure, develop professional skills, and experience life in a modern European country. With
                      quality education, affordable study options, and strong career prospects, Latvia continues to
                      attract ambitious students looking to build a successful global future.</p>
               </div>
         </div>
      </>
  )
}

export default StudyClient