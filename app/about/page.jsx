import Breadcrumb from '../components/Breadcrumb'
import { IoIosArrowForward } from 'react-icons/io'
import Image from "next/image";
import {
  FaUniversity,
  FaUserGraduate,
  FaCheckCircle,
  FaAward,
  FaLanguage,
  FaGlobeEurope,
} from "react-icons/fa";

export const metadata = {
  title: "About Study in Latvia Centre | Trusted Latvia Education Consultants",
  description: "Learn about Study in Latvia Centre, a trusted education consultancy helping Indian students secure admissions, scholarships, visa guidance, and career opportunities in Latvia.",
  keywords: ["Study in Latvia Centre", "about Study in Latvia", "Latvia education consultants", "study in Latvia consultants India", "Latvia admission guidance", "Latvia visa consultants", "study abroad Latvia", "Indian students in Latvia", "Latvia university admission", "Latvia scholarship guidance"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/about"
  },
    robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    title:
      "About Study in Latvia Centre | Trusted Latvia Education Consultants",
    description:
      "Discover how Study in Latvia Centre helps Indian students with admissions and visa guidance.",
    url: "https://www.studyinLatvia.in/about/",
    siteName: "Study in Latvia Centre",
    images: [
      {
        url:
          "https://www.studyinLatvia.in/images/contact/our-expert.webp",
        width: 1200,
        height: 630,
        alt: "About Study in Latvia Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Study in Latvia Centre | Trusted Latvia Education Consultants",
    description:
      "Learn how Study in Latvia Centre supports Indian students.",
    images: [
      "https://www.studyinLatvia.in/images/contact/our-expert.webp",
    ],
  },
}

const page = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinLatvia.in/",
        "name": "Study in Latvia Centre",
        "url": "https://www.studyinLatvia.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinLatvia.in/images/logos/logo.png"
        },
        "description":
          "Study in Latvia Centre helps Indian students with admissions, scholarships, visa guidance, and study abroad support."
      },
      {
        "@type": "WebSite",
        "@id": "https://www.studyinLatvia.in/#website",
        "url": "https://www.studyinLatvia.in/",
        "name": "Study in Latvia Centre"
      },
      {
        "@type": "AboutPage",
        "@id":
          "https://www.studyinLatvia.in/about/#aboutpage",
        "url":
          "https://www.studyinLatvia.in/about/",
        "name":
          "About Study in Latvia Centre",
        "description":
          "Trusted education consultancy supporting Indian students studying in Latvia.",
        "isPartOf": {
          "@id":
            "https://www.studyinLatvia.in/#website"
        },
        "about": {
          "@id":
            "https://www.studyinLatvia.in/#organization"
        }
      },
      {
        "@type": "Service",
        "@id":
          "https://www.studyinLatvia.in/about/#service",
        "name":
          "Latvia Study Abroad Consultation",
        "serviceType":
          "Education Consultancy",
        "provider": {
          "@id":
            "https://www.studyinLatvia.in/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "description":
          "Counselling, university selection, application support, scholarship guidance and visa assistance."
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.studyinLatvia.in/about/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "What is Study in Latvia Centre?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Study in Latvia Centre is an education consultancy helping Indian students study in Latvia."
            }
          },
          {
            "@type": "Question",
            "name":
              "How does Study in Latvia Centre help students?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The consultancy supports students with counselling, applications, scholarships and visa guidance."
            }
          },
          {
            "@type": "Question",
            "name":
              "Does Study in Latvia Centre help with visas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, guidance is provided for Latvia student visa applications."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.studyinLatvia.in/about/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item":
              "https://www.studyinLatvia.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item":
              "https://www.studyinLatvia.in/about/"
          }
        ]
      }
    ]
  };

  return (
    <>
     <Breadcrumb heading={'Who​‍​‌‍​‍‌​‍​‌‍​‍‌ We Are – Your Trustworthy Study Abroad Consultants for Latvia & ​‍​‌‍​‍‌​‍​‌‍​‍‌Europe'}/>
     <div className='mx-auto max-w-6xl'>
         <div className='py-10 px-5'>
               <h2 className='font-aino text-2xl md:text-4xl'>Who We Are?</h2>
               <p className='text-justify font-roboto text-lg mt-3'>We are a dedicated overseas education platform helping students turn their study abroad
                dreams into reality. With over 20+ years of experience in international education and 5,000+
                successful student placements, we have guided students through every stage of their
                journey—from choosing the right university to securing visas and preparing for life abroad.<br />
                Our experienced counsellors provide personalised guidance for students planning to pursue
                Bachelor's, Master's, PhD, and other higher education programmes in Latvia and other leading
                European destinations. We believe every student deserves expert support, clear information,
                and confidence throughout the study abroad process.</p>
              <div className='mt-10'>
                <h2 className='font-roboto text-xl md:text-2xl'>What We Offer</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-3'>
                      <ul className='mt-3 space-y-3'>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;University and course selection guidance</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Admission application support</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Scholarship assistance</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Student visa guidance</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;IELTS coaching and preparation</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Interview preparation</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Pre-departure counselling</li>
                         <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Ongoing student support</li>
                      </ul>
                   <Image className="rounded-md" src="/images/aboutus/we-offer.webp" width={480} height={200} alt="We Offer" />
                 </div>
                 <div className=''>
                    <p className='text-justify font-roboto text-lg mt-3'>Our commitment to student success, transparent guidance, and personalised counselling has
                      helped us maintain a 99% visa success rate, making us a trusted choice for students planning
                      to study abroad.</p>
                 </div>
               </div>
               <div className='my-10'>
                      <h2 className='font-roboto text-xl md:text-2xl my-5'>Why Study in Latvia?</h2>
                      <p className='font-inter text-base text-justify'>Latvia has emerged as one of Europe&#39;s most attractive destinations for international students
                        seeking affordable, high-quality education. The country offers internationally recognised
                        degrees, modern universities, English-taught programmes, and excellent opportunities for
                        academic and professional growth.</p>
                      <p className='font-inter text-justify text-base mt-3'>Students can explore educational opportunities at some of Latvia's leading universities, including:</p>
                      <ul className='space-y-3 mt-3'>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Riga Technical University</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;University of Latvia</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Riga Stradiņš University</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Turiba University</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;RISEBA University of Applied Sciences</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Transport and Telecommunication Institute (TSI)</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;BA School of Business and Finance</li>
                          <li className='font-roboto text-justify'><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Latvia University of Life Sciences and Technologies</li>
                      </ul>
                      <p className='mt-5 text-justify'>These universities provide career-focused education, international exposure, and a supportive learning environment for students from around the world.</p>
               </div>
                <div className="my-10">
                  <div className="mb-10">
                    <h2 className="font-roboto text-xl md:text-2xl mt-3">
                      Latvia at a Glance
                    </h2>
                    <p className="text-gray-600 mt-3 text-base">
                      Latvia offers affordable education, globally recognized degrees,
                      and excellent opportunities for indian students.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaUniversity className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">22+</h3>
                      <p className="mt-2 text-gray-600">
                        Years of Overseas Education Experience
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaUserGraduate className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">5,000+</h3>
                      <p className="mt-2 text-gray-600">
                        Students Successfully Guided
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaCheckCircle className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">99%</h3>
                      <p className="mt-2 text-gray-600">
                        Visa Success Rate
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaAward className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">3000+</h3>
                      <p className="mt-2 text-gray-600">
                        Scholarship Opportunities
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaLanguage className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">English-Taught</h3>
                      <p className="mt-2 text-gray-600">
                        Bachelor's & Master's Programmes
                      </p>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                      <FaGlobeEurope className="mx-auto text-3xl text-primary mb-3" />
                      <h3 className="text-3xl font-bold text-primary">Welcoming</h3>
                      <p className="mt-2 text-gray-600">
                        Indian Student Community
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 bg-primary text-white rounded-2xl p-8">
                    <h4 className="text-xl md:text-2xl font-roboto">Building Futures Beyond Education</h4>
                    <p className="text-lg leading-relaxed mt-3">
                      Studying abroad is more than gaining a qualification—it is about discovering new opportunities,
                      developing global perspectives, and preparing for long-term success. Our mission is to support
                      students at every stage of this journey and help them confidently pursue their educational and
                      career goals in Latvia and beyond.
                    </p>
                  </div>
                </div>
         </div>
         </div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  )
}

export default page