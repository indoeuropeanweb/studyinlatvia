import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export const metadata = {
  title: "Student Accommodation in Latvia  | Housing, Dormitories & Living Costs for Indian Students",
  description: "Find student accommodation in Latvia, including university dormitories, private apartments, shared housing, and living costs. Discover affordable and comfortable housing options for international students studying in Latvia",
  keywords: ["Student Accommodation Latvia", "Accommodation in Latvia", "Student Housing Latvia", "Latvia Dormitories", "University Accommodation Latvia", "Private Accommodation Latvia", "Living in Latvia", "Student Apartments Latvia", "Latvia Student Residence", "Housing for International Students Latvia", "Latvia Living Costs", "Latvia Dorm Rooms", "Shared Accommodation Latvia", "Study in Latvia Accommodation", "Affordable Housing Latvia", "Latvia Student Life", "Latvia Universities Accommodation", "International Students Latvia", "Latvia Housing Guide", "Living Expenses Latvia"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/living/accommodation"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinLatvia.in/living/accommodation/",
    siteName: "Study in Latvia",
    title:
      "Student Accommodation in Latvia 2026 | Housing, Dormitories & Living Costs",
    description:
      "Explore student accommodation options in Latvia including dormitories, private apartments, shared housing and living costs.",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/living/accommodation/accommodation.webp",
        width: 1200,
        height: 630,
        alt: "Student Accommodation in Latvia",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Student Accommodation in Latvia 2026 | Housing, Dormitories & Living Costs",
    description:
      "Explore student accommodation options in Latvia including dormitories, private apartments, shared housing and living costs.",
    images: [
      "https://www.studyinLatvia.in/images/living/accommodation/accommodation.webp",
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
        "https://www.studyinLatvia.in/living/accommodation/#webpage",
      url:
        "https://www.studyinLatvia.in/living/accommodation/",
      name: "Student Accommodation in Latvia",
      description:
        "Explore accommodation options in Latvia including university dormitories, student residences, private apartments and shared housing.",
      isPartOf: {
        "@id": "https://www.studyinLatvia.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinLatvia.in/living/accommodation/#article",
      headline: "Student Accommodation in Latvia",
      description:
        "Complete guide to student housing, university dormitories, private rentals, accommodation costs and living arrangements in Latvia.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinLatvia.in/living/accommodation/#webpage",
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
        url: "hhttps://www.studyinLatvia.in/images/living/accommodation/accommodation.webp",
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
          name: "Living",
          item: "https://www.studyinLatvia.in/living/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Accommodation",
          item:
            "https://www.studyinLatvia.in/living/accommodation/",
        },
      ],
    },
    {
      "@type": "Residence",
      name: "Student Accommodation in Latvia",
      description:
        "Accommodation options available for international students including university dormitories, student residences, shared apartments and private housing.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do Latvian universities provide accommodation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most Latvian universities offer dormitories and student residences with modern facilities and internet access.",
          },
        },
        {
          "@type": "Question",
          name: "What types of accommodation are available in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students can choose university dormitories, shared apartments, private rentals, student residences and short-term housing options.",
          },
        },
        {
          "@type": "Question",
          name: "Is accommodation affordable in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Latvia is considered one of the most affordable study destinations in Europe, with reasonable housing and living costs.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students rent private apartments in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. International students can rent private apartments or shared accommodation through local housing platforms and rental agencies.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinLatvia.in/living/accommodation/#image",
      contentUrl:
        "https://www.studyinLatvia.in/images/living/accommodation/accommodation.webp",
      caption:
        "Student Accommodation and Housing Options in Latvia",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
        <Breadcrumb heading={"Accommodation​‍​‌‍​‍‌ for Indian and International Students in ​‍​‌‍​‍‌Latvia"}/>
        <div className='px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
          <div>
          <h2 className='text-2xl md:text-4xl font-aino'>Best Student Accommodation in Latvia</h2>
          <p className='text-md font-roboto mt-3 text-justify'>Latvia has the best accommodation options for students, making it easy to search housing that
              suits different preferences and budgets. Students can choose from university dormitories,
              shared apartments, student residences and private rental properties in towns and cities such as
              Riga, jelgava, Daugavpils and Liepāja.<br />Most universities provide affordable student housing with essential facilities, allowing students to
              live comfortably while remaining close to campus. With reasonable rental costs and a lower cost
              of living compared to many European destinations, Latvia remains an attractive option for
              students seeking affordable education and accommodation.</p>
            </div>
            <div className=''>
               <Image width={420} height={320} className="rounded-md w-auto h-auto" src="/images/living/accommodation/accommodation.webp" alt="accommodation options for indian students in Latvia" />
            </div>
            </div>
            <div className="mt-5">
              <h4 className="text-xl md:text-2xl font-roboto">Student Accommodation in Latvia</h4>
              <p className=''>Finding suitable accommodation is an important part of preparing for student life in Latvia.
                International students typically select housing based on location, budget, lifestyle preferences,
                and proximity to their university.<br />Accommodation costs vary depending on the city, room type, and available facilities. University
                dormitories are generally the most affordable option, while private apartments offer greater
                independence and flexibility.</p>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Popular Accommodation Options for Students</h4>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>University Dormitories</h5>
                <p className='mt-2 text-inter text-md text-justify'>Many Latvian universities offer student dormitories that provide convenient and cost-effective
                  accommodation for international students.</p>
                <p className='mt-3 text-inter text-md font-medium'>Common dormitory facilities include:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Furnished single or shared rooms</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Study desk and storage space</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Shared kitchen facilities</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Internet access</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Laundry facilities</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Common recreation areas</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Living in student housing allows students to meet classmates, build friendships, and become
                  part of the university community.</p>
              </div>
              <div className='mt-5'>
                <h5 className='font-roboto text-lg md:text-xl'>Shared Apartments</h5>
                <p className='mt-2 text-inter text-md text-justify'>Shared apartments are a popular choice among students who prefer more independence while
                  keeping accommodation costs manageable.</p>
                <p className='mt-3 text-inter text-md font-medium text-justify'>Shared accommodation often includes:</p>
                <ul className='space-y-2 mt-2'>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Private or shared bedrooms</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Kitchen and dining area</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Living space</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Internet connection</li>
                    <li><IoIosArrowForward className='inline-block size-5'/>&nbsp;Utility services</li>
                </ul>
                <p className='text-inter text-md my-5 text-justify'>Many students choose to share accommodation with friends or fellow international students to
                  reduce monthly expenses.</p>
              </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Private Apartments</h4>
              <p className='font-inter text-md mt-3 text-justify'>Students looking for additional privacy may choose private rental apartments. These options
                offer greater flexibility and personal space but generally come at a higher cost than university
                housing.</p>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'></h4>
              <ul className='space-y-2'>
                <li><IoIosArrowForward className="inline-block size-6"/>&nbsp;Start your accommodation search early</li>
                <li><IoIosArrowForward className="inline-block size-6"/>&nbsp;Compare housing options near your university</li>
                <li><IoIosArrowForward className="inline-block size-6"/>&nbsp;Check rental agreements carefully</li>
                <li><IoIosArrowForward className="inline-block size-6"/>&nbsp;Consider transportation access and local amenities</li>
                <li><IoIosArrowForward className="inline-block size-6"/>&nbsp;Confirm included utilities and internet services</li>
                <li><IoIosArrowForward className="inline-block size-6"/>&nbsp;Understand accommodation costs before signing any contract</li>
              </ul>
            </div>
            <div className='mt-5'>
              <h4 className='font-roboto text-xl md:text-2xl'>Comfortable Student Living in Latvia</h4>
              <p className='text-base font-inter mt-3'>Universities often assist international students with accommodation guidance before arrival,
                helping them find suitable housing and settle into their new environment smoothly. <br />With affordable accommodation options, modern facilities, and a safe living environment, Latvia
                provides international students with a comfortable and enjoyable place to live while pursuing
                their education in Europe.</p>
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