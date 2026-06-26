import HomeClient from "./HomeClient";

export const metadata = {
  title: "Study in Latvia for Indian Students | Universities, Visa & Admission",
  description: "Study in Latvia with expert guidance for Indian students. Explore top Latvian universities, admission requirements, tuition fees, scholarships, student visa process, accommodation, and career opportunities.",
  keywords: ["study in Latvia", "study in Latvia for Indian students", "Latvia universities", "Latvia admission", "Latvia student visa", "scholarships in Latvia", "MBBS in Latvia", "masters in Latvia", "bachelors in Latvia", "study abroad Latvia", "Latvia education consultant", "Latvia education"],
  alternates: {
    canonical: "https://www.studyinlatvia.in"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title:
      "Study in Latvia for Indian Students | Admissions, Universities, Visa & Scholarships",
    description:
      "Explore top Latvian universities, admission process, scholarships, tuition fees and student visa guidance for Indian students.",
    url: "https://www.studyinlatvia.in/",
    siteName: "Study in Latvia",
    images: [
      {
        url: "https://www.studyinlatvia.in/images/logos/logo.webp",
        width: 1200,
        height: 630,
        alt: "Study in Latvia",
      },
    ],
  },
}

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinlatvia.in/#organization",
        "name": "Study in Latvia",
        "url": "https://www.studyinlatvia.in/",
        "logo": "https://www.studyinLatvia.in/images/logo/logo.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.studyinlatvia.in/#website",
        "url": "https://www.studyinlatvia.in/",
        "name": "Study in Latvia",
        "publisher": {
          "@id": "https://www.studyinlatvia.in/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinlatvia.in/#webpage",
        "url": "https://www.studyinlatvia.in/",
        "name":
          "Study in Latvia for Indian Students | Admissions, Universities, Visa & Scholarships",
        "description":
          "Study in Latvia with expert guidance for Indian students.",
        "isPartOf": {
          "@id": "https://www.studyinlatvia.in/#website"
        },
        "about": {
          "@id": "https://www.studyinlatvia.in/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinlatvia.in/faq/#faq",
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
          }
        ]
      }
    ]
  };

export default function Home() {
  return (
    <>
     <HomeClient />
     <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
      />
    </>
  );
}
