import Breadcrumb from '@/app/components/Breadcrumb'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export const metadata = {
  title: "PhD Programs in Latvia: Complete Guide for Indian Students",
  description: "Explore Phd programs in Latvia for Indian students. Learn about university entry needs and low tuition fees. See how to secure a scholarship and start now.",
  keywords: ["phd programs in latvia", "phd in latvia", "doctorate in latvia", "study phd in latvia", "latvia phd universities", "phd admission in latvia", "phd for international students in latvia", "research programs in latvia", "doctoral degree in latvia", "universities in latvia for phd", "study in latvia", "phd scholarships in latvia", "higher education in latvia", "international phd programs", "study abroad latvia"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/study/phd"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinLatvia.in/study/phd/",
    siteName: "Study in Latvia Center",
    title:
      "PhD Programs in Latvia: Complete Guide for Indian Students",
    description:
      "Explore Phd programs in Latvia for Indian students. Learn about university entry needs and low tuition fees. See how to secure a scholarship and start now.",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/logos/logo.png",
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
      "PhD Programs in Latvia: Complete Guide for Indian Students",
    description:
      "Explore Phd programs in Latvia for Indian students. Learn about university entry needs and low tuition fees. See how to secure a scholarship and start now.",
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
      name: "Study in Latvia",
      url: "https://www.studyinLatvia.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.studyinLatvia.in/images/logos/logo.webp",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinLatvia.in/study/phd/#webpage",
      url:
        "https://www.studyinLatvia.in/study/phd/",
      name: "PhD Programs in Latvia",
      description:
        "Explore doctoral and research degree programs in Latvia for international students, including admission requirements, scholarships, and research opportunities.",
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
          name: "PhD",
          item: "https://www.studyinLatvia.in/study/phd",
        },
      ],
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
        <h2 className='text-xl md:text-2xl font-roboto mt-10'>PhD Programmes in Latvia</h2>
        <p className='text-justify text-roboto'>In Latvia, a doctoral programme usually takes 3 to 4 years and includes original research,
         academic development and contribution of scientific knowledge to a specialised field.</p> 
        <div className='mt-5'>
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
          <h2 className='text-xl md:text-2xl font-roboto text-[#5d5b5b]'>Admission in Latvia Universities</h2>
          <p className='mt-4'>
            <Link className='font-semibold hover:underline' href={'/study/admission'}>Admission requirements for PhD programs in Latvia</Link> vary between universities but generally require a recognized Master’s degree, academic transcripts, a research proposal and evidence of English language proficiency. 
            <br />
            Before applying, students need to check the university’s own entry requirements, find a suitable supervisor for their research and prepare the required documents. Proper planning can ease admission in the universities of Latvia and make a smooth transition to doctoral studies.
          </p>
        </div>
          <div className='mt-5 flex justify-end items-center'>
            <Link className='text-blue-500 hover:underline' href={'/study/admission'}>Read About Admission in Latvia&nbsp;<FaArrowRightLong className='size-4 inline-block'/></Link>
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