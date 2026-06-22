import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";


export const metadata = {
  title: "Working in Latvia  | Student Jobs, Part-Time Work & Career Opportunities",
  description: "Discover working opportunities in Latvia for international students, including part-time jobs, work rights, salaries, internships, and post-study employment opportunities.",
  keywords: ["Working in Latvia", "Student Jobs Latvia", "Part Time Jobs Latvia", "Work While Studying Latvia", "Latvia Student Employment", "Jobs in Latvia for International Students", "Latvia Work Permit", "Latvia Career Opportunities", "Latvia Internship Opportunities", "Latvia Graduate Jobs", "Latvia Student Work Rights", "Latvia Job Market", "Latvia Employment Guide", "Work in Europe", "Latvia Post Study Work", "Latvia Work and Study", "Latvia Student Life", "Latvia Salaries", "International Students Latvia", "Latvia Career Development"],
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
    siteName: "Study in Latvia",
    title:
      "Working in Latvia 2026 | Student Jobs, Part-Time Work & Career Opportunities",
    description:
      "Explore student jobs, internships, work rights, salaries and career opportunities in Latvia for international students.",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/living/working/working.webp",
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
      "Working in Latvia 2026 | Student Jobs, Part-Time Work & Career Opportunities",
    description:
      "Explore student jobs, internships, work rights, salaries and career opportunities in Latvia for international students.",
    images: [
      "https://www.studyinLatvia.in/images/living/working/working.webp",
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
        "@id": "https://www.studyinLatvia.in/living/working/#webpage",
        url: "https://www.studyinLatvia.in/living/working/",
        name: "Working in Latvia",
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
        "@type": "Article",
        "@id": "https://www.studyinLatvia.in/living/working/#article",
        headline: "Working in Latvia for International Students",
        description:
          "Comprehensive guide to part-time work, internships, work rights, salaries and career opportunities in Latvia.",
        mainEntityOfPage: {
          "@id":
            "https://www.studyinLatvia.in/living/working/#webpage",
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
          url: "https://www.studyinLatvia.in/images/living/working/working.webp",
        },
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
      {
        "@type": "HowTo",
        name: "How to Find a Student Job in Latvia",
        step: [
          {
            "@type": "HowToStep",
            name: "Obtain Your Student Residence Permit",
          },
          {
            "@type": "HowToStep",
            name: "Prepare a European-Style CV",
          },
          {
            "@type": "HowToStep",
            name: "Search for Part-Time Jobs and Internships",
          },
          {
            "@type": "HowToStep",
            name: "Attend Interviews",
          },
          {
            "@type": "HowToStep",
            name: "Sign an Employment Contract",
          },
          {
            "@type": "HowToStep",
            name: "Start Working Legally in Latvia",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can international students work while studying in Latvia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. International students are permitted to work while studying in Latvia, subject to current immigration and residence permit regulations.",
            },
          },
          {
            "@type": "Question",
            name: "Do students need a work permit in Latvia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Students holding the appropriate temporary residence permit for studies can work without obtaining a separate work permit.",
            },
          },
          {
            "@type": "Question",
            name: "What jobs are available for students in Latvia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Students commonly find opportunities in customer service, hospitality, retail, logistics, IT, administration, internships and university-related roles.",
            },
          },
          {
            "@type": "Question",
            name: "Can students stay and work in Latvia after graduation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Graduates may apply for residence permits that allow them to remain in Latvia and seek employment after completing their studies.",
            },
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.studyinLatvia.in/living/working/#image",
        contentUrl:
          "https://www.studyinLatvia.in/images/living/working/working.webp",
        caption: "Working in Latvia for International Students",
        representativeOfPage: true,
      },
    ],
  };

  return (
    <>
        <Breadcrumb heading={"Work in Latvia"}/>
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
              <p className='text-base font-inter mt-3'>Working while studying in Latvia allows students to develop professional experience, strengthen
                their resumes, and gain insights into the international job market. Combined with a recognised
                European degree, these experiences can significantly enhance long-term career opportunities
                both in Latvia and internationally.</p>
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