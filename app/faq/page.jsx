import Breadcrumb from '../components/Breadcrumb';
import FAQ from '../components/FAQ';


export const metadata = {
  title: "Frequently Asked Questions About Studying in Latvia | Study in Latvia Centre",
  description: "Find answers to the most frequently asked questions about studying in Latvia. Learn about admissions, universities, tuition fees, scholarships, student visas, accommodation, work opportunities, and student life in Latvia.",
  keywords: ["study in Latvia FAQ", "Latvia student visa FAQ", "Latvia university admission questions", "scholarships in Latvia", "study in Latvia for Indian students", "Latvia tuition fees", "Latvia accommodation", "Latvia student life", "Latvia universities FAQ", "Study in Latvia Centre"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/faq"
  },
    robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    title:
      "Frequently Asked Questions About Studying in Latvia | Study in Latvia Centre",
    description:
      "Get answers to common questions about studying and living in Latvia.",
    url: "https://www.studyinLatvia.in/faq/",
    siteName: "Study in Latvia Centre",
    images: [
      {
        url:
          "https://www.studyinLatvia.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in Latvia FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Frequently Asked Questions About Studying in Latvia | Study in Latvia Centre",
    description:
      "Explore answers to common questions about studying in Latvia.",
    images: [
      "https://www.studyinLatvia.in/images/logos/logo.png",
    ],
  },
}

const page = () => {

const faqData = [
  {
    id: 1,
    question: "1. Can I study in Latvia without IELTS?",
    answer: "Yes, some Latvian universities may accept students through Medium of Instruction (MOI) or alternative English proficiency requirements."
  },
  {
    id: 2,
    question: "2. Can I go abroad after 12th without IELTS?",
    answer: "Many universities in Europe offer admission without IELTS if students meet alternative language requirements."
  },
  {
    id: 3,
    question: "3. Is Latvia a good country for Indian students?",
    answer: "Latvia is known for affordable education, recognised degrees, a safe environment, and growing career opportunities."
  },
  {
    id: 4,
    question: "4. What is the cost of studying in Latvia for Indian students?",
    answer: "Tuition fees vary by university and course, but Latvia is generally more affordable than many Western European countries."
  },
  {
    id: 5,
    question: "5. How much does it cost to live in Latvia as a student?",
    answer: "International students typically spend between €450–€900 per month on living expenses."
  },
  {
    id: 6,
    question: "6. Can international students work while studying in Latvia?",
    answer: "Yes, eligible international students can work during their studies according to current regulations."
  },
  {
    id: 7,
    question: "7. What are the admission requirements for Latvia universities?",
    answer: "Requirements usually include academic documents, passport, English proficiency proof, and other programme-specific documents."
  },
  {
    id: 8,
    question: "8. Is Latvia part of the Schengen Area?",
    answer: "Yes, Latvia is a member of the Schengen Area, allowing easier travel across participating European countries."
  },
  {
    id: 9,
    question: "9. Which are the best universities in Latvia for international students?",
    answer: "Popular choices include Riga Technical University, University of Latvia, Riga Stradiņš University, and Turiba University."
  },
  {
    id: 10,
    question: "10. What intakes are available in Latvia?",
    answer: "The main intake is September, while some universities also offer a February intake."
  },
  {
    id: 11,
    question: "11. Can I get a scholarship in Latvia?",
    answer: "Yes, various university scholarships, tuition fee discounts, and merit-based funding opportunities are available."
  },
  {
    id: 12,
    question: "12. How long does the Latvia student visa process take?",
    answer: "Processing times vary depending on individual applications and embassy requirements."
  },
  {
    id: 13,
    question: "13. Are degrees from Latvia recognised internationally?",
    answer: "Yes, degrees awarded by recognised Latvian universities are accepted across Europe and many countries worldwide."
  },
  {
    id: 14,
    question: "14. What are the most popular courses in Latvia?",
    answer: "Business, IT, Engineering, Computer Science, Healthcare, Logistics, and Finance are among the most popular programmes."
  },
  {
    id: 15,
    question: "15. Is Latvia safe for international students?",
    answer: "Latvia is considered one of the safer European countries and offers a student-friendly environment."
  },
  {
    id: 16,
    question: "16. Can students stay in Latvia after graduation?",
    answer: "Graduates may explore post-study opportunities based on the latest immigration and employment regulations."
  },
  {
    id: 17,
    question: "17. What accommodation options are available for students in Latvia?",
    answer: "Students can choose university dormitories, shared apartments, student residences, and private rentals."
  },
  {
    id: 18,
    question: "18. Do Latvian universities offer English-taught programmes?",
    answer: "Yes, many Bachelor's, Master's, and PhD programmes are available entirely in English."
  },
  {
    id: 19,
    question: "19. Why choose Latvia for higher education?",
    answer: "Students choose Latvia for affordable education, quality universities, international exposure, and career opportunities in Europe."
  },
  {
    id: 20,
    question: "20. How can I apply to study in Latvia?",
    answer: "Students can apply directly to universities by submitting the required documents and completing the admission process before the deadline."
  }
];
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
        }
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.studyinLatvia.in/",
        "url":
          "https://www.studyinLatvia.in/faq/",
        "name":
          "Frequently Asked Questions About Studying in Latvia",
        "description":
          "Answers to common questions about studying and living in Latvia."
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.studyinLatvia.in/faq/",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "Why should I study in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Latvia offers affordable European education and internationally recognized degrees."
            }
          },
          {
            "@type": "Question",
            "name":
              "Can Indian students study in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, Indian students can apply to Latvian universities for English-taught programs."
            }
          },
          {
            "@type": "Question",
            "name":
              "Do I need a student visa to study in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, non-EU students need a student visa or temporary residence permit."
            }
          },
          {
            "@type": "Question",
            "name":
              "Can students work while studying in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, international students are generally allowed to work during studies."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.studyinLatvia.in/faq/",
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
            "name": "FAQ",
            "item":
              "https://www.studyinLatvia.in/faq/"
          }
        ]
      }
    ]
  };

  return (
    <>
         <Breadcrumb heading={'Frequently Asked Questions'}/>
         <div className='max-w-6xl mx-auto'>
            <div className='px-5 py-10'>
               {faqData?.map((faq, index) => {
                return <FAQ panelNo={faq.id} key={index} question={faq.question} answer={faq.answer}/>
               })}
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