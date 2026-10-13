import ProgrammeClient from "./ProgrammeClient"

export const metadata = {
  title: "Study Programmes in Latvia | Find Your Degree Course Here",
  description: "Looking for study programmes in Latvia? Compare top courses, degree, tuition costs. We make admission simple for Indian students. Start your application.",
  keywords: [
      "study programmes in Latvia",
      "study programs in Latvia",
      "courses in Latvia",
      "study in Latvia",
      "bachelor's programmes in Latvia",
      "master's programmes in Latvia",
      "PhD programmes in Latvia",
      "English taught courses in Latvia",
      "universities in Latvia",
      "higher education in Latvia",
      "study in Latvia for Indian students",
      "Latvia university courses",
      "degree programmes in Latvia",
      "short term courses in Latvia",
      "best courses to study in Latvia",
      "Latvia university admission"
  ],
  alternates: {
    canonical: "https://www.studyinLatvia.in/study/programmes"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinLatvia.in/study/programmes/",
    siteName: "Study in Latvia Center",
    title:
      "Study Programmes in Latvia | Find Your Degree Course Here",
    description:
      "Looking for study programmes in Latvia? Compare top courses, degree, tuition costs. We make admission simple for Indian students. Start your application.",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Programmes in Latvia",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Study Programmes in Latvia | Find Your Degree Course Here",
    description:
      "Looking for study programmes in Latvia? Compare top courses, degree, tuition costs. We make admission simple for Indian students. Start your application.",
    images: [
      "https://www.studyinLatvia.in/images/logos/logo.png",
    ],
  },
}

const page = () => {

  const schemaScript = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.studyinlatvia.in/#organization",
      "name": "Study in Latvia Center",
      "url": "https://www.studyinlatvia.in/"
    },
    {
        "@type": "WebPage",
        "@id": "https://www.studyinlatvia.in/study/programmes/#webpage",
        "url": "https://www.studyinlatvia.in/study/programmes/",
        "name": "Study Programmes in Latvia",
        "description": "Explore Bachelor's, Master's and PhD study programmes in Latvia. Find courses, universities and higher education opportunities for international students.",
        "inLanguage": "en",
        "publisher": {
          "@id": "https://www.studyinlatvia.in/#organization"
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlatvia.in/study/programmes/#breadcrumb",
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
          "name": "Study",
          "item": "https://www.studyinlatvia.in/study/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Programmes",
          "item": "https://www.studyinlatvia.in/study/programmes/"
        }
      ]
    }
  ]
}

  return (
    <>
     <ProgrammeClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaScript),
        }}
      />
    </>
  )
}

export default page