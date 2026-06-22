import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Script from 'next/script'


export const metadata = {
  title: "Bachelor’s Programs in Latvia  | Study Undergraduate Degrees in Latvia",
  description: "Study Bachelor's programs in Latvia with affordable fees, English-taught courses, scholarships, and globally recognized degrees.",
  keywords: ["Bachelors in Latvia", "Bachelor Programs in Latvia", "Undergraduate Degree Latvia", "Study Bachelors in Latvia", "Latvia Bachelor Courses", "Engineering in Latvia", "Computer Science Latvia", "Business Studies Latvia", "International Students Latvia", "English Taught Programs Latvia", "Latvia Universities", "Study in Europe", "Latvia Higher Education", "Bachelor Degree Europe", "Latvia Admission Requirements", "Latvia Scholarships", "Affordable Education Europe", "Latvia Student Visa", "Latvia Undergraduate Programs", "Study Abroad Latvia"],
  alternates: {
    canonical: "https://www.studyinlatvia.in/study/programmes/bachelors"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinlatvia.in/study/programmes/bachelors/",
    siteName: "Study in Latvia",
    title:
      "Bachelor's Programs in Latvia 2026 | Study Undergraduate Degrees in Latvia",
    description:
      "Explore Bachelor's programs in Latvia including tuition fees, admission requirements, scholarships, and top universities for international students.",
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
      "Bachelor's Programs in Latvia 2026 | Study Undergraduate Degrees in Latvia",
    description:
      "Explore Bachelor's programs in Latvia including tuition fees, admission requirements, scholarships, and top universities for international students.",
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
      name: "Study in Latvia",
      url: "https://www.studyinLatvia.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.studyinLatvia.in/images/logos/logo.webp",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinLatvia.in/#website",
      url: "https://www.studyinLatvia.in",
      name: "Study in Latvia",
      publisher: {
        "@id": "https://www.studyinLatvia.in/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinLatvia.in/study/programmes/bachelors/#webpage",
      url:
        "https://www.studyinLatvia.in/study/programmes/bachelors/",
      name: "Bachelor's Programs in Latvia",
      description:
        "Explore undergraduate degree programs in Latvia for international students including admission requirements, tuition fees and career opportunities.",
      isPartOf: {
        "@id": "https://www.studyinLatvia.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "EducationalOccupationalProgram",
      name: "Bachelor's Degree Programs in Latvia",
      educationalLevel: "Undergraduate",
      timeToComplete: "P3Y-P4Y",
      occupationalCategory: "Higher Education",
      provider: {
        "@type": "Organization",
        name: "Latvian Universities",
      },
      description:
        "Undergraduate degree programs offered in English across Engineering, IT, Business, Health Sciences, Social Sciences and other disciplines.",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinLatvia.in/study/programmes/bachelors/#article",
      headline:
        "Bachelor's Programs in Latvia for International Students",
      description:
        "Comprehensive guide to Bachelor's studies in Latvia including tuition fees, admission requirements, universities and career opportunities.",
      author: {
        "@type": "Organization",
        name: "Study in Latvia",
      },
      publisher: {
        "@id": "https://www.studyinLatvia.in/#organization",
      },
      datePublished: "2026-06-12",
      dateModified: "2026-06-12",
      image: {
        "@type": "ImageObject",
        url: "https://www.studyinLatvia.in/images/logos/Latvia-01.webp",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long is a Bachelor's degree in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Bachelor's degree programs in Latvia take 3 to 4 years to complete.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students study in English?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many Latvian universities offer Bachelor's programs fully taught in English.",
          },
        },
        {
          "@type": "Question",
          name: "What are the tuition fees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tuition fees generally range from €1,300 to €4,000 per year.",
          },
        },
      ],
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
          name: "Programmes",
          item: "https://www.studyinLatvia.in/study/programmes/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Bachelor's",
          item:
            "https://www.studyinLatvia.in/study/programmes/bachelors/",
        },
      ],
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={"Latvia offers a wide range of Bachelor's degree programs for international students in fields such as Engineering, Information Technology, Business, Health Sciences, Aviation, Social Sciences, and Creative Arts. Most undergraduate programs are taught entirely in English and typically last 3–4 years. With affordable tuition fees, globally recognized degrees, scholarship opportunities, and excellent career prospects across Europe, Latvia has become one of the fastest-growing study destinations for Indian students. Additionally, many universities accept the Medium of Instruction (MOI), allowing students to apply without IELTS in eligible cases."}/>
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
          <p className='mt-3 text-base font-inter'>Bachelor&#39;s degree programmes in Latvia generally last 3 to 4 years, depending on the course
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
          <p className='text-base font-inter mt-3'>Students applying for a Bachelor's degree in Latvia generally need:</p>
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
          <p className='text-base font-inter mt-3'>Pursuing a Bachelor&#39;s degree in Latvia allows students to build a strong academic foundation,
            gain international exposure, and prepare for long-term career success in a competitive global
            environment.</p>
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