import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export const metadata = {
  title: "Short Courses in Latvia  | Certificate, Diploma & Professional Courses",
  description: "Explore short courses in Latvia for international students. Gain industry-focused skills through certificate, diploma, and professional programs.",
  keywords: ["Short Courses in Latvia", "Latvia Certificate Courses", "Professional Courses Latvia", "Diploma Courses Latvia", "Study Short Courses in Latvia", "Latvia Training Programs", "Latvia Professional Development", "Skill Development Courses Latvia", "International Students Latvia", "Latvia Education", "Short Term Courses Europe", "Online Courses Latvia", "Technical Courses Latvia", "Business Courses Latvia", "IT Courses Latvia", "Study in Latvia", "Latvia Career Development", "European Certification Courses", "Latvia Learning Programs", "Latvia Higher Education"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/study/programmes/short-courses"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinLatvia.in/study/programmes/short-courses/",
    siteName: "Study in Latvia",
    title:
      "Short Courses in Latvia 2026 | Certificate, Diploma & Professional Courses",
    description:
      "Explore short courses, certificate programs, diploma courses and professional training opportunities in Latvia.",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
        width: 1200,
        height: 630,
        alt: "Short Courses in Latvia",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Short Courses in Latvia 2026 | Certificate, Diploma & Professional Courses",
    description:
      "Explore short courses, certificate programs, diploma courses and professional training opportunities in Latvia.",
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
        "https://www.studyinLatvia.in/study/programmes/short-courses/#webpage",
      url:
        "https://www.studyinLatvia.in/study/programmes/short-courses/",
      name: "Short Courses in Latvia",
      description:
        "Explore short courses, certificate programs, diploma courses and professional training opportunities in Latvia.",
      isPartOf: {
        "@id": "https://www.studyinLatvia.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "CollectionPage",
      "@id":
        "https://www.studyinLatvia.in/study/programmes/short-courses/#collectionpage",
      url:
        "https://www.studyinLatvia.in/study/programmes/short-courses/",
      name: "Short Courses in Latvia",
      description:
        "Browse short-term certificate, diploma and professional development courses available in Latvia.",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinLatvia.in/study/programmes/short-courses/#article",
      headline:
        "Short Courses in Latvia for International Students",
      description:
        "Guide to short courses, professional certifications, diploma programs and skill development opportunities in Latvia.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinLatvia.in/study/programmes/short-courses/#webpage",
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
          item: "https://www.studyinLatvia.in/study/programmes/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Short Courses",
          item:
            "https://www.studyinLatvia.in/study/programmes/short-courses/",
        },
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      name: "Short Courses in Latvia",
      educationalLevel: "Certificate and Professional Training",
      occupationalCategory: "Professional Education",
      provider: {
        "@type": "Organization",
        name: "Latvian Universities and Training Institutes",
      },
      description:
        "Short-term professional, technical, business, IT, language and skill-development courses designed for students and working professionals.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are short courses in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Short courses are specialized training or certificate programs that focus on practical skills and professional development, usually lasting from a few weeks to several months.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students enroll in short courses in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many Latvian institutions offer short courses and professional certification programs for international students.",
          },
        },
        {
          "@type": "Question",
          name: "What fields are available for short courses in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular areas include Information Technology, Business, Management, Engineering, Digital Marketing, Languages, Healthcare, and Professional Development.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinLatvia.in/study/programmes/short-courses/#image",
      contentUrl:
        "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
      caption:
        "Short Courses and Professional Training Programs in Latvia",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={'Short​‍​‌‍​‍‌ Courses in Latvia to Enhance Your Skills and Boost Your ​‍​‌‍​‍‌Career'}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>Short Courses in Latvia</h2>
        <p className='mt-3 text-justify text-roboto'>Short courses in Latvia provide an excellent opportunity for students and professionals to
          develop practical skills, gain international exposure, and enhance their career prospects within a
          shorter study period. These programmes focus on industry-relevant knowledge and hands-on
          learning, helping learners stay competitive in today&#39;s global job market.</p>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Popular Short Courses</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Business &amp; Management</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Digital Marketing</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Finance &amp; Accounting</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Hospitality &amp; Tourism</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Data Analytics</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Healthcare &amp; Public Health</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Design &amp; Creative Industries</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Choose Short Courses in Latvia?</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable study options</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Industry-focused practical training</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;International learning experience</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English-taught programmes available</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Flexible course duration</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern universities and training facilities</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Career-oriented skill development</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Exposure to European education standards</li>
          </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility</h2>
            <ul className='mt-5 space-y-2'>
              <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Basic academic qualifications</li>
              <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English language proficiency (if required)</li>
              <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Valid passport and supporting documents</li>
            </ul>
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