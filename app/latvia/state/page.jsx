import Breadcrumb from '@/app/components/Breadcrumb'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

export const metadata = {
  title: "Study in latvia | Universities, Education System, Cost of Living & Student Life",
  description: "Discover latvia, one of Europe's fastest-growing study destinations. Explore top universities, affordable tuition fees, scholarships, student life, safe cities, and globally recognized degrees for international students.&quot;",
  keywordds: ["Discover latvia – a top European study destination offering quality education", "affordable tuition fees", "internationally recognized degrees", "scholarships", "safe living conditions and excellent career opportunities for international students."],
  alternates: {
    canonical: "https://www.studyinlatvia.in/latvia/state"
  },
      robots: {
    index: true,
    follow: true,
  },
     openGraph: {
    type: "website",
    title:
      "Study in latvia | Universities, Education System, Cost of Living & Student Life",
    description:
      "Get expert support for latvia university admissions, scholarships, student visas, and study abroad counselling.",
    url: "https://www.studyinlatvia.in/contact/",
    siteName: "Study in latvia Centre",
    images: [
      {
        url: "https://www.studyinlatvia.in/images/contact/our-expert.webp",
        width: 1200,
        height: 630,
        alt: "Contact Study in latvia Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Study in latvia Centre | latvia Education Consultants in India",
    description:
      "Contact our latvia education consultants for admissions, scholarships, student visa guidance, and course selection support.",
    images: [
      "https://www.studyinlatvia.in/images/contact/our-expert.webp",
    ],
  },
}

const page = () => {

  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.studyinlatvia.in/#organization",
      "name": "Study in latvia",
      "url": "https://www.studyinlatvia.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.studyinlatvia.in/wp-content/uploads/logo.png"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlatvia.in/#website",
      "url": "https://www.studyinlatvia.in/",
      "name": "Study in latvia",
      "publisher": {
        "@id": "https://www.studyinlatvia.in/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.studyinlatvia.in/latvia/state/#webpage",
      "url": "https://www.studyinlatvia.in/latvia/state/",
      "name": "Study in latvia",
      "description":
        "Discover latvia, one of Europe's fastest-growing study destinations offering affordable education, globally recognized universities, scholarships, and excellent career opportunities.",
      "isPartOf": {
        "@id": "https://www.studyinlatvia.in/#website"
      },
      "about": {
        "@id": "https://www.studyinlatvia.in/latvia/state/#country"
      }
    },
    {
      "@type": "Article",
      "@id": "https://www.studyinlatvia.in/latvia/state/#article",
      "headline": "Study in latvia",
      "description":
        "latvia is one of Europe's leading destinations for international students seeking quality education at an affordable cost.",
      "mainEntityOfPage": {
        "@id": "https://www.studyinlatvia.in/latvia/state/#webpage"
      },
      "author": {
        "@id": "https://www.studyinlatvia.in/#organization"
      },
      "publisher": {
        "@id": "https://www.studyinlatvia.in/#organization"
      }
    },
    {
      "@type": "Country",
      "@id": "https://www.studyinlatvia.in/latvia/state/#country",
      "name": "latvia",
      "alternateName": "Republic of latvia",
      "url": "https://www.studyinlatvia.in/latvia/state/",
      "description":
        "latvia is a Baltic nation known for affordable higher education, safe cities, vibrant student life, and internationally recognized universities."
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.studyinlatvia.in/latvia/state/#image",
      "contentUrl":
        "https://www.studyinlatvia.in/wp-content/uploads/latvia.jpg",
      "name": "Study in latvia",
      "caption": "latvia - European Study Destination"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlatvia.in/latvia/state/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.studyinlatvia.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "latvia",
          "item": "https://www.studyinlatvia.in/latvia/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "State",
          "item": "https://www.studyinlatvia.in/latvia/state/"
        }
      ]
    },
    {
      "@type": "SpeakableSpecification",
      "@id": "https://www.studyinlatvia.in/latvia/state/#speakable",
      "cssSelector": ["h1", ".entry-content p"]
    }
  ]
};

  return (
    <>
      <Breadcrumb heading={'latvia is divided into several administrative regions and municipalities, each offering a unique blend of culture, education, and economic opportunities. Major cities such as Vilnius, Kaunas, Klaipėda, and Šiauliai are popular among international students due to their universities, affordable living costs, and student-friendly environments. Each region contributes to latvia&#39;s strong economy, rich heritage, and high quality of life. Students can enjoy modern infrastructure, safe communities, and easy access to travel across Europe while studying in latvia.'} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Latvia</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <p className='text-md font-roboto mt-3 text-justify'>
          Located in Northern Europe and a member of the European Union, Latvia has become an increasingly popular destination for Indian students seeking quality education, affordable living, and global career opportunities. Known for its modern cities, rich cultural heritage, and internationally recognized universities, Latvia offers an ideal environment for students who want to build a successful future in Europe.<br /><br />
          The country combines academic excellence with practical learning, allowing students to gain industry-relevant knowledge while experiencing life in a multicultural European society. With a growing number of English-taught programs and student-friendly policies, Latvia continues to attract students from India and around the world.
        </p>
        <Image className="rounded-md w-auto h-auto" width={400} height={240} src="/images/latvia/state/state.webp" alt="latvia state of study"/>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Quick Facts About Latvia</h2>
            <ul className='mt-5 space-y-2'>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Capital City:</b> Riga</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Official Language:</b> Latvian</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Currency:</b> Euro (€)</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Population:</b> Approximately 1.9 million</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Region:</b> Northern Europe (Baltic Region)</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Climate:</b> Four distinct seasons with mild summers and cold winters</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>International Student Friendly:</b> Yes</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Popular Study Fields:</b> Business, IT, Engineering, Medicine, and Management</li>
             <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;<b>Popular Student Cities:</b> Riga, Daugavpils, Jelgava, Liepāja, Ventspils</li>
            </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Indian Students Choose Latvia</h2>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl text-roboto'>European Quality Education</h4>
              <p className='mt-2 text-roboto'>Latvian universities follow European higher education standards and offer degrees that are recognized across Europe and many other countries worldwide. Students benefit from modern teaching methods, research opportunities, and practical industry exposure.</p>
            </div>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl text-roboto'>Affordable Study Destination</h4>
              <p className='mt-2 text-roboto'>Compared to many Western European countries, Latvia offers lower tuition fees and reasonable living expenses. This makes it an attractive option for students who want a European education without a significant financial burden.</p>
            </div>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl text-roboto'>Wide Range of English-Taught Programs</h4>
              <p className='mt-2 text-roboto'>Universities in Latvia offer bachelor's, master's, and doctoral programs in fields such as business, engineering, computer science, healthcare, logistics, finance, and social sciences, making it easier for Indian students to pursue their preferred career path.</p>
            </div>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl text-roboto'>International Student Community</h4>
              <p className='mt-2 text-roboto'>Students from different countries choose Latvia for higher education, creating a diverse and inclusive learning environment. This multicultural atmosphere helps students develop global perspectives and valuable international connections.</p>
            </div>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl text-roboto'>Access to Europe</h4>
              <p className='mt-2 text-roboto'>As part of the Schengen Area, Latvia provides students with opportunities to explore other European countries during their studies. This international exposure enhances both personal and professional development.</p>
            </div>
          </div>
          <div className="mt-10">
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl font-semibold font-roboto'>Student Life in Latvia</h4>
              <p className='text-md text-justify font-inter mt-2'>Student life in Latvia is a blend of academic learning, cultural experiences, and personal growth. Universities organize workshops, networking events, sports activities, and student clubs that encourage participation beyond the classroom.</p>
              <p className='text-md text-justify font-inter mt-2'>Riga, the capital city, is especially popular among international students due to its modern infrastructure, vibrant lifestyle, historical architecture, and growing business sector. Students can enjoy a high quality of life while studying in a safe and welcoming environment.</p>
            </div>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl font-semibold font-roboto'>Career Opportunities in Latvia</h4>
              <p className='text-md text-justify font-inter mt-2'>Latvia's developing economy and strategic location within Europe create opportunities in sectors such as information technology, business services, engineering, logistics, healthcare, and finance. Many students gain practical experience through internships and part-time work opportunities during their studies.</p>
              <p className='text-md text-justify font-inter mt-2'>Graduates can benefit from the international recognition of Latvian degrees and the skills gained through European education standards.</p>
            </div>
            <div className='mt-3'>
              <h4 className='text-lg md:text-xl font-semibold font-roboto'>Latvia for Indian Students</h4>
              <p className='text-md text-justify font-inter mt-2'>For Indian students looking for an affordable European study destination, Latvia offers an excellent combination of quality education, global exposure, and career development opportunities. The country's welcoming atmosphere, growing international student population, and internationally recognized universities make it an attractive choice for higher education abroad.</p>
              <p className='text-md text-justify font-inter mt-2'>Whether your goal is academic advancement, international work experience, or long-term career growth, Latvia provides the foundation to achieve your ambitions while enjoying the benefits of studying in Europe.</p>
            </div>
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