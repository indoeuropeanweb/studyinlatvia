import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Script from 'next/script'

export const metadata = {
  title: "Best Master's Degrees in Latvia: Get Fees and Admission Tips",
  description: "Study in Latvia for your master's degree. Learn about Admission needs, affordable fees and Visa. Start your application and find program at a top university today.",
  keywords: ["master's degree in Latvia", "Masters in Latvia", "Study Masters in Latvia", "Latvia Masters Programs", "Master's Degree in Latvia for International Students", "Latvia Universities", "Study in Latvia", "Affordable Masters in Europe", "Latvia Student Visa", "Masters Admission Latvia", "Scholarships in Latvia", "Higher Education Latvia", "Indian Students in Latvia", "Study Abroad Latvia", "Masters Courses in Latvia"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/study/masters"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "website",
    url: "https://www.studyinLatvia.in/study/masters/",
    siteName: "Study in Latvia",
    title:
      "Best Master's Degrees in Latvia: Get Fees and Admission Tips",
    description:
      "Study in Latvia for your master's degree. Learn about Admission needs, affordable fees and Visa. Start your application and find program at a top university today.",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
        width: 1200,
        height: 630,
        alt: "Master's Programs in Latvia",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Master's Degrees in Latvia: Get Fees and Admission Tips",
    description:
      "Study in Latvia for your master's degree. Learn about Admission needs, affordable fees and Visa. Start your application and find program at a top university today.",
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
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.studyinLatvia.in/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinLatvia.in/study/masters/#webpage",
      url:
        "https://www.studyinLatvia.in/study/masters/",
      name: "Master's Programs in Latvia",
      description:
        "Explore Master's degree programs in Latvia for international students including admission requirements, tuition fees, scholarships and career opportunities.",
      isPartOf: {
        "@id": "https://www.studyinLatvia.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "CollectionPage",
      "@id":
        "https://www.studyinLatvia.in/study/masters/#collectionpage",
      url:
        "https://www.studyinLatvia.in/study/masters/",
      name: "Master's Programs in Latvia",
      description:
        "Browse Master's degree programs offered by Latvian universities for international students.",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinLatvia.in/study/masters/#article",
      headline:
        "Master's Programs in Latvia for International Students",
      description:
        "Comprehensive guide to Master's studies in Latvia including universities, tuition fees, scholarships, admission requirements and career opportunities.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinLatvia.in/study/masters/#webpage",
      },
      publisher: {
        "@id": "https://www.studyinLatvia.in/#organization",
      },
      author: {
        "@type": "Organization",
        name: "Study in Latvia",
      },
      datePublished: "2026-06-12",
      dateModified: "2026-06-12",
      image: {
        "@type": "ImageObject",
        url: "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
      },
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
          item: "https://www.studyinLatvia.in/study/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Master's",
          item:
            "https://www.studyinLatvia.in/study/masters/",
        },
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      name: "Master's Degree Programs in Latvia",
      educationalLevel: "Postgraduate",
      timeToComplete: "P1Y-P2Y",
      occupationalCategory: "Higher Education",
      provider: {
        "@type": "Organization",
        name: "Latvian Universities",
      },
      description:
        "Master's degree programs offered in English across Engineering, Information Technology, Business, Management, Health Sciences, Social Sciences and other disciplines.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does a Master's degree take in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Master's degree programs in Latvia take between 1 and 2 years to complete.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students study Master's programs in English in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many Latvian universities offer Master's degree programs fully taught in English.",
          },
        },
        {
          "@type": "Question",
          name: "What are the tuition fees for Master's programs in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tuition fees generally range from €2,000 to €6,000 per year depending on the university and program.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinLatvia.in/study/masters/#image",
      contentUrl:
        "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
      caption:
        "Master's Programs in Latvia for International Students",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={"Explore Master’s in Latvia: Build Expertise and Global Careers"}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>Master's Degree in Latvia</h2>
        <p className='mt-3 text-justify text-roboto'>Latvia has become a popular destination for international students seeking advanced education,
          internationally recognised qualifications, and excellent career opportunities in Europe. Master's
          degree programmes in Latvia combine academic excellence with practical learning, helping
          students develop specialised knowledge and industry-relevant skills in their chosen field.<br />Most Master's programmes are taught in English and are designed to prepare graduates for
          leadership roles, research opportunities, and global career advancement. With affordable tuition
          fees, modern universities, and a multicultural learning environment, Latvia offers an ideal
          destination for postgraduate studies.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Master's Courses in Latvia</h2>
          <p className='text-base font-inter mt-3'>Master's courses in Latvia generally last 1.5 to 2 years, depending on the
            university and field of study.</p>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Popular Master's Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Business Administration (MBA)</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;International Business</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Information Technology</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Computer Science</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Data Science and Artificial Intelligence</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Engineering</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Finance and Accounting</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Public Health</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Healthcare Management</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Logistics and Supply Chain Management</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Tourism and Hospitality Management</li>
            <li className="text-base font-inter"><IoIosArrowForward className='inline-block size-6'/>&nbsp;Economics</li>
          </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility Requirements</h2>
            <p className='text-base font-inter mt-3'>Students applying for a Master's course in Latvia generally need:</p>
            <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;A recognised Bachelor's degree</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Academic transcripts and certificates</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Proof of English language proficiency (if required)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Valid passport</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;CV/Resume (for selected programmes)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Additional university-specific documents</li>
            </ul>
             <p className='text-base font-inter mt-3'>Some universities may also accept the Medium of Instruction (MOI) in eligible cases, subject
to admission requirements.</p>
        </div>
                <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Choose a Master's Degree in Latvia?</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Internationally recognised European qualification</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable tuition fees and living costs</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English-taught postgraduate programmes</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Industry-oriented curriculum and practical learning</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern research and learning facilities</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Multicultural academic environment</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Opportunities for internships and professional networking</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Strong career prospects across Europe and internationally</li>
          </ul>
          <p className='text-base font-inter mt-5'>A Master's degree in Latvia provides students with advanced expertise, international exposure,
and valuable professional skills that support long-term career success in today's global job
market.</p>
        </div>
      </div>
      <Script
        id="masters-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  )
}

export default page