import HomeClient from "./HomeClient";

export const metadata = {
  title: "Study in Latvia Consultant | Top Universities, Student Visa & Admission",
  description: "Study in Latvia consultant. We provide clear steps by step for top university Admission and visa approvals. Check out our top University lists and apply today.",
  keywords: ["Study in Latvia", "Study in Latvia for Indian Students", "Latvia Universities", "Study Abroad Latvia", "Latvia Student Visa", "Latvia Education Consultants", "Universities in Latvia", "Study in Europe", "Latvia Admission", "Latvia Scholarships"],
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
      "Study in Latvia Consultant | Top Universities, Student Visa & Admission",
    description:
      "Study in Latvia consultant. We provide clear steps by step for top university Admission and visa approvals. Check out our top University lists and apply today.",
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
          "Study in Latvia Consultant | Top Universities, Student Visa & Admission",
        "description":
          "Study in Latvia consultant. We provide clear steps by step for top university Admission and visa approvals. Check out our top University lists and apply today.",
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
