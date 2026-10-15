import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Script from 'next/script'
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "Bachelor's Degree in Latvia: Guide for Indian Students",
  description: "Study in Latvia with a recognized bachelors degree. Enjoy affordable costs and English courses. Our team guides Indian students through every step. Apply Now.",
  keywords: ["bachelors degree", "bachelors degree in Latvia", "study bachelors degree in Latvia", "bachelor's programs in Latvia", "Latvia universities", "undergraduate degree Latvia", "study in Latvia", "Latvia bachelor courses", "bachelor's degree for Indian students", "affordable bachelor's degree Europe", "English taught bachelor's programs", "study abroad Latvia", "higher education Latvia", "Latvia admission consultants", "Indo European"],
  alternates: {
    canonical: "https://www.studyinlatvia.in/study/bachelors"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinlatvia.in/study/bachelors/",
    siteName: "Study in Latvia",
    title:
      "Bachelor's Degree in Latvia: Guide for Indian Students",
    description:
      "Study in Latvia with a recognized bachelors degree. Enjoy affordable costs and English courses. Our team guides Indian students through every step. Apply Now.",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
        width: 1200,
        height: 630,
        alt: "Bachelor's Programs in Latvia",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bachelor's Degree in Latvia: Guide for Indian Students",
    description:
      "Study in Latvia with a recognized bachelors degree. Enjoy affordable costs and English courses. Our team guides Indian students through every step. Apply Now.",
    images: [
      "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
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
      "@id":
        "https://www.studyinLatvia.in/study/bachelors/#webpage",
      url:
        "https://www.studyinLatvia.in/study/bachelors/",
      name: "Bachelor's Programs in Latvia",
      description:
        "Explore undergraduate degree programs in Latvia for international students including admission requirements, tuition fees and career opportunities.",
      isPartOf: {
        "@id": "https://www.studyinLatvia.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Study",
          item: "https://www.studyinLatvia.in/study/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "bachelors",
          item: "https://www.studyinLatvia.in/study/bachelors",
        },
      ],
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={"Earn​‍​‌‍​‍‌ your bachelor's degree in Latvia: quality education at lower ​‍​‌‍​‍‌prices"}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>Bachelor's Degree in Latvia</h2>
        <p className='mt-3 text-justify text-roboto'>Latvia has become an attractive destination for international students seeking a high-quality
          European undergraduate education at an affordable cost. Universities in Latvia offer a wide
          range of Bachelor's degree programmes taught in English, allowing students to gain
          internationally recognised qualifications while studying in a modern and student-friendly
          environment. <br />From Business and Management to Engineering, Information Technology, Healthcare, and
          Social Sciences, students can choose from diverse academic pathways that prepare them for
          successful global careers. Most Bachelor's programmes in Latvia are designed to combine
          academic knowledge with practical skills, helping graduates meet the demands of today's job
          market.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Bachelor's Courses in Latvia</h2>
          <p className='mt-3 text-base font-inter'>Bachelor's courses programmes in Latvia generally last 3 to 4 years, depending on the course
            and university. Students benefit from modern teaching methods, industry-oriented learning, and
            international exposure throughout their studies.</p>
          <h2 className='text-xl md:text-2xl mt-3 font-roboto text-[#5d5b5b]'>Popular Bachelor's Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Business Administration</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;International Business</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Computer Science</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Engineering</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Artificial Intelligence</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Medicine and Health Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Finance and Economics</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Law</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Tourism and Hospitality Management</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Communication and Media Studies</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Social Sciences</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility Requirements</h2>
          <p className='text-base font-inter mt-3'>Students applying for a Bachelor's course in Latvia generally need:</p>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Completion of 12th Grade (Higher Secondary Education)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Academic transcripts and certificates</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Proof of English language proficiency (if required)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Valid passport</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Other university-specific admission documents</li>
          </ul>
          <p className='mt-3 font-inter text-base'>Some universities may also consider the Medium of Instruction (MOI) for eligible students,
            depending on their admission policies.</p>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Choose a Bachelor's Degree in Latvia?</h2>
          <ul className='mt-3 space-x-2'>
            <li className='text-base font-inter'><IoIosArrowForward className="size-6 inline-block"/>&nbsp;Internationally recognised European degree</li>
            <li className='text-base font-inter'><IoIosArrowForward className="size-6 inline-block"/>&nbsp;Affordable tuition fees compared to many European countries</li>
            <li className='text-base font-inter'><IoIosArrowForward className="size-6 inline-block"/>&nbsp;English-taught undergraduate programmes</li>
            <li className='text-base font-inter'><IoIosArrowForward className="size-6 inline-block"/>&nbsp;Modern universities and learning facilities</li>
            <li className='text-base font-inter'><IoIosArrowForward className="size-6 inline-block"/>&nbsp;Multicultural student environment</li>
            <li className='text-base font-inter'><IoIosArrowForward className="size-6 inline-block"/>&nbsp;Opportunities for internships and practical training</li>
            <li className='text-base font-inter'><IoIosArrowForward className="size-6 inline-block"/>&nbsp;Access to career opportunities across Europe</li>
            <li className='text-base font-inter'><IoIosArrowForward className="size-6 inline-block"/>&nbsp;Safe and welcoming study destination</li>
          </ul>
          <p className='text-base font-inter mt-3'>Pursuing a Bachelor's degree in Latvia allows students to build a strong academic foundation,
            gain international exposure, and prepare for long-term career success in a competitive global
            environment.</p>
        </div>
          <div className='mt-5 flex justify-end items-center'>
            <Link className='text-blue-500 hover:underline' href='/study/masters'>Read About Masters in Latvia&nbsp;<FaArrowRightLong className='size-4 inline-block'/></Link>
          </div>
      </div>
      <Script
        id="bachelors-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  )
}

export default page