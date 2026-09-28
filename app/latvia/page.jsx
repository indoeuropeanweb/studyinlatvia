import LatviaClient from "./LatviaClient";


export const metadata = {
  title: "Study in Latvia Consultant for Indian Students with Expert Help",
  description: "Study in Latvia consultant for Indian students. Get expert help with visas, University apply and living cost. Start your journey today for a bright future in Europe.",
  keywords: ["Study in Latvia", "Study in Latvia Consultant", "Latvia Education Consultant", "Study in Latvia for Indian Students", "Latvia Student Visa Consultant", "Latvia Universities", "Study Abroad Latvia", "Latvia Admission Consultant", "Higher Education in Latvia", "Study in Europe"],
  alternates: {
    canonical: "https://www.studyinlatvia.in/latvia"
  },
    robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "article",
    title:
      "Study in Latvia Consultant for Indian Students with Expert Help",
    description:
      "Study in Latvia consultant for Indian students. Get expert help with visas, University apply and living cost. Start your journey today for a bright future in Europe.",
    url: "https://www.studyinlatvia.in/latvia/",
    siteName: "Study in latvia",
    images: [
      {
        url: "https://www.studyinlatvia.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in latvia",
      },
    ]
   },
  twitter: {
    card: "summary_large_image",
    title:
      "Study in Latvia Consultant for Indian Students with Expert Help",
    description:
      "Study in Latvia consultant for Indian students. Get expert help with visas, University apply and living cost. Start your journey today for a bright future in Europe.",
    images: [
      "https://www.studyinlatvia.in/images/logos/logo.png",
    ],
  },
}

export default function Home() {

    const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinlatvia.in/#organization",
        "name": "Study in latvia",
        "url": "https://www.studyinlatvia.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinlatvia.in/logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinlatvia.in/latvia/#webpage",
        "url": "https://www.studyinlatvia.in/latvia/",
        "name":
          "Study in latvia for Indian Students | Benefits, Universities & Career",
        "description":
          "Discover why Indian students choose latvia for higher education."
      },
      {
        "@type": "Article",
        "@id": "https://www.studyinlatvia.in/latvia/#article",
        "headline":
          "Study in latvia — Explore a Smarter Way to Grow in Europe",
        "description":
          "Information for Indian students about studying in latvia.",
        "mainEntityOfPage": {
          "@id":
            "https://www.studyinlatvia.in/latvia/#webpage"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinlatvia.in/latvia/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "Why should Indian students study in latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "latvia offers affordable European education and globally recognized degrees."
            }
          }
        ]
      }
    ]
  };


  return (
    <>
     <LatviaClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
