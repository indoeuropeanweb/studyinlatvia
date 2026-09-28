import StudyClient from "./StudyClient";


export const metadata = {
  title: "Why Study in Latvia | Why Affordable For Indian Student",
  description: "Why study in Latvia? Discover low tuition fees and cheap living costs for Indian students. Get a world-class degree. Start your application today.",
  keywords: ["Why Study in Latvia", "Study in Latvia Consultant", "Study in Latvia Consultant India", "Latvia Education Consultant", "Study Abroad Latvia", "Latvia Universities", "Latvia Student Visa", "Study in Europe", "Study in Latvia for Indian Students", "Latvia Admission Consultant"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/study"
  },
      robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "article",
    title:
      "Why Study in Latvia | Why Affordable For Indian Student",
    description:
      "Why study in Latvia? Discover low tuition fees and cheap living costs for Indian students. Get a world-class degree. Start your application today.",
    url: "https://www.studyinLatvia.in/study/",
    siteName: "Study in Latvia",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in Latvia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Why Study in Latvia | Why Affordable For Indian Student",
    description:
      "Why study in Latvia? Discover low tuition fees and cheap living costs for Indian students. Get a world-class degree. Start your application today.",
    images: [
      "https://www.studyinLatvia.in/images/logos/logo.png",
    ],
  },
}

export default function Home() {

   const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinLatvia.in/contact",
        "name": "Study in Latvia",
        "url": "https://www.studyinLatvia.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinLatvia.in/images/logos/logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinLatvia.in/study/#webpage",
        "url": "https://www.studyinLatvia.in/study/",
        "name":
          "Why Study in Latvia? | Universities, Courses & Benefits for Indian Students",
        "description":
          "Discover why Indian students choose to study in Latvia."
      },
      {
        "@type": "Article",
        "@id": "https://www.studyinLatvia.in/study/#article",
        "headline": "Why Study in Latvia?",
        "description":
          "Information for students about studying in Latvia.",
        "mainEntityOfPage": {
          "@id":
            "https://www.studyinLatvia.in/study/#webpage"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinLatvia.in/study/faq/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "Why should Indian students study in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Latvia offers affordable European education and globally recognized degrees."
            }
          },
          {
            "@type": "Question",
            "name":
              "Are English-taught programs available in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, Latvia offers many English-taught programs."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
     <StudyClient />
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
