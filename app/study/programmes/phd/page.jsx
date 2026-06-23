import Breadcrumb from '@/app/components/Breadcrumb'
import { IoIosArrowForward } from 'react-icons/io'

export const metadata = {
  title: "PhD Programs in Latvia  | Doctoral Studies in Latvia for Indian Students",
  description: "Pursue a PhD in Latvia with affordable tuition fees, research opportunities, scholarships, and internationally recognized doctoral degrees.",
  keywords: ["PhD in Latvia", "Doctoral Programs Latvia", "PhD Programs Latvia", "Study PhD in Latvia", "Doctorate Latvia", "Research Programs Latvia", "PhD Scholarships Latvia", "Latvia Universities PhD", "International Students PhD Latvia", "Doctoral Studies Europe", "Latvia Research Opportunities", "Engineering PhD Latvia", "Business PhD Latvia", "Computer Science PhD Latvia", "Health Sciences PhD Latvia", "Study in Latvia", "Higher Education Latvia", "Latvia Research Universities", "PhD Admission Latvia", "Doctoral Degree Europe"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/study/programmes/phd"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinLatvia.in/study/programmes/phd/",
    siteName: "Study in Latvia",
    title:
      "PhD Programs in Latvia 2026 | Doctoral Studies in Latvia for International Students",
    description:
      "Explore PhD programs in Latvia with research opportunities, scholarships, affordable tuition fees, and globally recognized doctoral degrees.",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
        width: 1200,
        height: 630,
        alt: "PhD Programs in Latvia",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "PhD Programs in Latvia 2026 | Doctoral Studies in Latvia for International Students",
    description:
      "Explore PhD programs in Latvia with research opportunities, scholarships, affordable tuition fees, and globally recognized doctoral degrees.",
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
        "https://www.studyinLatvia.in/study/programmes/phd/#webpage",
      url:
        "https://www.studyinLatvia.in/study/programmes/phd/",
      name: "PhD Programs in Latvia",
      description:
        "Explore doctoral and research degree programs in Latvia for international students, including admission requirements, scholarships, and research opportunities.",
      isPartOf: {
        "@id": "https://www.studyinLatvia.in/#website",
      },
      inLanguage: "en",
    },
    {
      "@type": "CollectionPage",
      "@id":
        "https://www.studyinLatvia.in/study/programmes/phd/#collectionpage",
      url:
        "https://www.studyinLatvia.in/study/programmes/phd/",
      name: "PhD Programs in Latvia",
      description:
        "Browse doctoral and research programs offered by Latvian universities.",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinLatvia.in/study/programmes/phd/#article",
      headline:
        "PhD Programs in Latvia for International Students",
      description:
        "Comprehensive guide to doctoral studies in Latvia, including universities, research opportunities, scholarships, funding, and admission requirements.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinLatvia.in/study/programmes/phd/#webpage",
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
          name: "PhD",
          item:
            "https://www.studyinLatvia.in/study/programmes/phd/",
        },
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      name: "PhD Programs in Latvia",
      educationalLevel: "Doctoral",
      timeToComplete: "P4Y",
      occupationalCategory: "Higher Education",
      provider: {
        "@type": "Organization",
        name: "Latvian Universities",
      },
      description:
        "Doctoral research programs in Engineering, Information Technology, Business, Economics, Health Sciences, Social Sciences, Natural Sciences, and other disciplines.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does a PhD take in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most PhD programs in Latvia take approximately four years of full-time study and research.",
          },
        },
        {
          "@type": "Question",
          name: "Are scholarships available for PhD students in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many Latvian universities and government institutions offer scholarships, research grants, and funding opportunities for doctoral students.",
          },
        },
        {
          "@type": "Question",
          name: "Can international students pursue a PhD in Latvia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Latvia welcomes international researchers and offers several PhD programs conducted in English across multiple disciplines.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinLatvia.in/study/programmes/phd/#image",
      contentUrl:
        "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
      caption:
        "PhD Programs and Research Opportunities in Latvia",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={"Study​‍​‌‍​‍‌ PhD Latvia: Deepen your research and grow academic ​‍​‌‍​‍‌excellence"}/>
      <div className='py-12 px-10'>
        <h2 className='text-2xl md:text-4xl font-aino'>PhD Programs in Latvia</h2>
        <p className='mt-3 text-justify text-roboto'>Latvia offers excellent opportunities for students who wish to pursue advanced research and
          academic excellence in a European environment. PhD programmes in Latvia are designed to
          develop independent researchers, innovators, and subject-matter experts through high-quality
          supervision, modern research facilities, and international collaboration. <br />With internationally recognised universities, affordable study costs, and growing research
          opportunities, Latvia has become an attractive destination for doctoral studies across various
          disciplines.</p>
        <h2 className='text-xl md:text-2xl font-roboto'>PhD Programmes in Latvia</h2>
        <p className='mt-3 text-justify text-roboto'>In Latvia, a doctoral programme usually takes 3 to 4 years and includes original research,
         academic development and contribution of scientific knowledge to a specialised field.</p> 
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Popular PhD Fields</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Engineering</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Information Technology</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Computer Science</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Business and Management</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Economics</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Health Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Medicine</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Environmental Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Social Sciences</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Education</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Law</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Natural Sciences</li>
          </ul>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Eligibility Requirements</h2>
            <p className='text-base font-roboto mt-3'>Students applying for a PhD in Latvia generally need:</p>
            <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;A recognised Master's degree</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Academic transcripts and certificates</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Research proposal (if required)</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Proof of English language proficiency</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Valid passport</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Additional university-specific documents</li>
            </ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Why Pursue a PhD in Latvia?</h2>
          <ul className='mt-5 space-y-2'>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Internationally recognised doctoral qualification</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Research-focused academic environment</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Experienced supervisors and faculty support</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern laboratories and research facilities</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Opportunities for international collaboration</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable tuition fees and living expenses</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Access to European research networks</li>
            <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Strong academic and professional development opportunities</li>
          </ul>
        </div>
            <p className='mt-5'>A PhD in Latvia allows students to contribute to innovative research, expand their academic
expertise, and build a successful career in research, higher education, industry, or international
organisations.</p>
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