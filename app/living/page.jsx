import LivingClient from "./LivingClient";


export const metadata = {
  title: "Living in Latvia as an Indian Student | Cost, Accommodation & Lifestyle",
  description: "Learn about student life in Latvia, including living costs, accommodation, transportation, healthcare, safety, culture, food, and daily expenses for Indian and international students",
  keywords: ["living in Latvia", "student life in Latvia", "cost of living in Latvia", "accommodation in Latvia", "Latvia student housing", "Latvia lifestyle", "study in Latvia", "living expenses in Latvia", "Indian students in Latvia", "international students Latvia"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/living"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "article",
    title:
      "Living in Latvia as an International Student | Cost, Accommodation & Lifestyle",
    description:
      "Explore student life in Latvia including accommodation, living expenses, transportation, healthcare, safety, culture and lifestyle for international students.",
    url: "https://www.studyinLatvia.in/living/",
    siteName: "Study in Latvia",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/living/living.webp",
        width: 1200,
        height: 630,
        alt: "Living in Latvia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Living in Latvia as an International Student | Cost, Accommodation & Lifestyle",
    description:
      "Explore student life in Latvia including accommodation and lifestyle.",
    images: [
      "https://www.studyinLatvia.in/images/living/living.webp",
    ],
  },
}

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
        "@type": "WebSite",
        "@id": "https://www.studyinLatvia.in/",
        "url": "https://www.studyinLatvia.in/",
        "name": "Study in Latvia"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinLatvia.in/living/",
        "url": "https://www.studyinLatvia.in/living/",
        "name":
          "Living in Latvia as an International Student",
        "description":
          "Learn about student life in Latvia, including living costs, accommodation, transportation, healthcare, safety, culture and lifestyle.",
        "isPartOf": {
          "@id": "https://www.studyinLatvia.in/"
        }
      },
      {
        "@type": "Article",
        "@id": "https://www.studyinLatvia.in/living/#article",
        "headline":
          "Living in Latvia as an International Student",
        "mainEntityOfPage": {
          "@id":
            "https://www.studyinLatvia.in/living/"
        },
        "publisher": {
          "@id":
            "https://www.studyinLatvia.in/"
        },
        "author": {
          "@id":
            "https://www.studyinLatvia.in/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinLatvia.in/faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "What is the cost of living in Latvia for students?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Latvia is considered one of the more affordable European countries for international students."
            }
          },
          {
            "@type": "Question",
            "name":
              "Is Latvia safe for international students?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Latvia is generally regarded as a safe and welcoming country."
            }
          }
        ]
      }
    ]
  };

export default function Home() {
  return (
    <>
     <LivingClient />
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
