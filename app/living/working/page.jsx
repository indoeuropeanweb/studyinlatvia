import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Study and Work Opportunities in Latvia for Indian Students",
  description: "Explore study and work opportunities in Latvia for Indian student. Discover pay scales, permit laws, and how to land your first role. Apply and Contact Us Now",
  keywords: ["Work Opportunities in Latvia", "Work Opportunities in Latvia for International Students", "Jobs in Latvia", "Part Time Jobs in Latvia", "Study and Work in Latvia", "Latvia Work Permit", "Post Study Work in Latvia", "Student Jobs in Latvia", "Career Opportunities in Latvia", "Working in Latvia", "Latvia Employment", "Jobs in Latvia for Indian Students"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/living/working"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "article",
    url: "https://www.studyinLatvia.in/living/working/",
    siteName: "Study in Latvia Center",
    title:
      "Study and Work Opportunities in Latvia for Indian Students",
    description:
      "Explore study and work opportunities in Latvia for Indian student. Discover pay scales, permit laws, and how to land your first role. Apply and Contact Us Now",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Working in Latvia for International Students",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Study and Work Opportunities in Latvia for Indian Students",
    description:
      "Explore study and work opportunities in Latvia for Indian student. Discover pay scales, permit laws, and how to land your first role. Apply and Contact Us Now",
    images: [
      "https://www.studyinLatvia.in/images/logos/logo.png",
    ],
  },
}

const page = () => {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinLatvia.in/#organization",
        name: "Study in Latvia Center",
        url: "https://www.studyinLatvia.in",
        logo: {
          "@type": "ImageObject",
          url: "https://www.studyinLatvia.in/images/logos/logo.webp",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinLatvia.in/living/working/#webpage",
        url: "https://www.studyinLatvia.in/living/working/",
        name: "Working in Latvia Center",
        description:
          "Learn about student jobs, part-time work, internships, salaries, work rights and career opportunities in Latvia for international students.",
        isPartOf: {
          "@id": "https://www.studyinLatvia.in/#website",
        },
        breadcrumb: {
          "@id":
            "https://www.studyinLatvia.in/living/working/#breadcrumb",
        },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.studyinLatvia.in/living/working/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.studyinLatvia.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Living",
            item: "https://www.studyinLatvia.in/living/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Working",
            item: "https://www.studyinLatvia.in/living/working/",
          },
        ],
      },
    ],
  };

  return (
    <>
        <Breadcrumb heading={"Job​‍​‌‍​‍‌ openings in Latvia for foreign ​‍​‌‍​‍‌students"}/>
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
          <div className=''>
             <h2 className='text-2xl md:text-4xl font-aino'>Work opportunities in Latvia for Indian students</h2>
             <p className='text-md font-roboto mt-3 text-justify'>Latvia offers international students the opportunity to gain valuable work experience while
                pursuing their education. Working during studies can help students develop professional skills,
                build industry connections, and contribute towards their living expenses. <br /> <br />
                With a growing economy and increasing demand for skilled professionals, Latvia provides a
                supportive environment for students who want to balance academics with practical work
                experience.</p>
            </div>
            <div>
              <Image className='rounded-md' width={420} height={320} src={'/images/living/working/working.webp'} alt="working in Latvia for indian students" />
            </div>
            </div>
            <div className='mt-5'>
              <h4 className='text-xl md:text-2xl font-roboto'>Can International Students Work in Latvia?</h4>
              <p className='mt-3 text-base font-inter'>Yes, international students studying at recognised Latvian universities can work while pursuing
                their studies, subject to current immigration and employment regulations. Many students choose
                part-time jobs to gain workplace experience and better understand the European work
                environment.</p>
            </div>
            <div className='mt-5'>
               <h4 className='text-xl md:text-2xl font-roboto'>Benefits of Working While Studying</h4>
               <ul className='space-y-3'>
                <li>
                  <h5 className='text-lg md:text-xl font-roboto'>Gain Practical Experience</h5>
                  <p className='text-base font-inter mt-3'>Working alongside studies allows students to apply their academic knowledge in real-world
                    situations and develop valuable professional skills.</p>
                </li>
                <li>
                  <h5 className='text-lg md:text-xl font-roboto'>Support Living Expenses</h5>
                  <p className='text-base font-inter mt-3'>Part-time employment can help students manage daily expenses such as accommodation, food, transportation, and personal costs.</p>
                </li>
                <li>
                  <h5 className='text-lg md:text-xl font-roboto'>Improve Career Opportunities</h5>
                  <p className='text-base font-inter mt-3'>Employers often value candidates who have practical work experience. Student jobs and internships can strengthen a graduate&#39;s career prospects after completing their degree.</p>
                </li>
                <li>
                  <h5 className='text-lg md:text-xl font-roboto'>Build Professional Networks</h5>
                  <p className='text-base font-inter mt-3'>Working in Latvia enables students to connect with professionals, employers, and industry experts, which may be beneficial for future career growth.</p>
                </li>
               </ul>
            </div>
            <div className='mt-5'>
              <h4 className='text-xl md:text-2xl font-roboto'>Popular Student Job Sectors</h4>
              <p className='text-base font-inter mt-3'>International students often find opportunities in:</p>
              <ul className='space-y-2 mt-3'>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Hospitality and Tourism</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Customer Service</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Retail</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Digital Marketing</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Administrative Support</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Logistics and Warehousing</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Freelance and Online Work</li>
                <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;University-Based Positions</li>
              </ul>
              <p className='text-base font-inter mt-3'>Job availability may vary depending on skills, qualifications, language requirements, and location.</p>
            </div>
            <div className='mt-5'>
              <h5 className='text-xl md:text-2xl font-roboto'>Internship Opportunities</h5>
              <p className='text-base font-inter mt-3'>Many universities encourage students to participate in internships as part of their academic
                programmes. Internships help students gain industry exposure, improve practical skills, and
                build professional confidence before graduation.</p>
            </div>
            <div className='mt-5'>
              <h5 className='text-xl md:text-2xl font-roboto'>Balancing Work and Studies</h5>
              <p className='text-base font-inter mt-3'>Students should ensure that employment does not interfere with their academic responsibilities.
                Effective time management allows students to maintain strong academic performance while
                gaining valuable work experience.</p>
            </div>
            <div className='mt-5'>
              <h5 className='text-xl md:text-2xl font-roboto'>Career Prospects After Graduation</h5>
              <p className='text-base font-inter mt-3'>Latvia's growing industries, including Information Technology, Engineering, Healthcare,
                Finance, Logistics, and Business Services, continue to create opportunities for qualified
                graduates. The experience gained while studying can provide a strong foundation for future
                employment.</p>
            </div>
            <div className='mt-5'>
              <h5 className='text-xl md:text-2xl font-roboto'>Build Skills for a Global Career</h5>
              <p className='text-base font-inter mt-3'>Working while <Link className='font-semibold hover:underline' href='/'>studying in Latvia</Link> allows students to develop professional experience, strengthen
                their resumes, and gain insights into the international job market. Combined with a recognised
                European degree, these experiences can significantly enhance long-term career opportunities
                both in Latvia and internationally.</p>
            </div>
            <div className='mt-5 flex justify-end items-center'>
              <Link className='text-blue-500 hover:underline' href='/student-ambassadors'>Read About Student Ambassadors of Latvia&nbsp;&nbsp;<FaArrowRightLong className='size-4 inline-block'/></Link>
            </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
    </>
  )
}

export default page