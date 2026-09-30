import LivingClient from "./LivingClient";

export const metadata = {
  title:
    "Living in Latvia as an Indian Student | Cost, Accommodation & Lifestyle",
  description:
    "Learn about student life in Latvia, including living costs, accommodation, transportation, healthcare, safety, culture, food, and daily expenses for Indian and international students.",
  keywords: [
    "Living in Latvia",
    "Student Life in Latvia",
    "Cost of Living in Latvia",
    "Accommodation in Latvia",
    "Latvia Student Housing",
    "Latvia Lifestyle",
    "Study in Latvia",
    "Living Expenses in Latvia",
    "Indian Students in Latvia",
    "International Students Latvia",
  ],
  alternates: {
    canonical: "https://www.studyinlatvia.in/living/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title:
      "Living in Latvia as an Indian Student | Cost, Accommodation & Lifestyle",
    description:
      "Explore student life in Latvia, including accommodation, living expenses, transportation, healthcare, safety, culture, food, and lifestyle for Indian and international students.",
    url: "https://www.studyinlatvia.in/living/",
    siteName: "Study in Latvia",
    images: [
      {
        url: "https://www.studyinlatvia.in/images/living/living.webp",
        width: 1200,
        height: 630,
        alt: "Living in Latvia as an International Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Living in Latvia as an Indian Student | Cost, Accommodation & Lifestyle",
    description:
      "Explore student life in Latvia, including accommodation, living expenses, transportation, healthcare, safety, culture, and lifestyle.",
    images: [
      "https://www.studyinlatvia.in/images/living/living.webp",
    ],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.studyinlatvia.in/#organization",
      "name": "Study in Latvia",
      "url": "https://www.studyinlatvia.in/",
      "logo": {
        "@type": "ImageObject",
        "url":
          "https://www.studyinlatvia.in/images/logos/logo.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlatvia.in/#website",
      "url": "https://www.studyinlatvia.in/",
      "name": "Study in Latvia",
      "publisher": {
        "@id": "https://www.studyinlatvia.in/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.studyinlatvia.in/living/#webpage",
      "url": "https://www.studyinlatvia.in/living/",
      "name":
        "Living in Latvia as an Indian Student | Cost, Accommodation & Lifestyle",
      "description":
        "Learn about student life in Latvia, including living costs, accommodation, transportation, healthcare, safety, culture, food, and daily expenses for Indian and international students.",
      "isPartOf": {
        "@id": "https://www.studyinlatvia.in/#website",
      },
      "about": {
        "@id": "https://www.studyinlatvia.in/#organization",
      },
    },
    {
      "@type": "Article",
      "@id": "https://www.studyinlatvia.in/living/#article",
      "headline":
        "Living in Latvia as an Indian Student | Cost, Accommodation & Lifestyle",
      "description":
        "Learn about student life in Latvia, including living costs, accommodation, transportation, healthcare, safety, culture, food, and daily expenses for Indian and international students.",
      "url": "https://www.studyinlatvia.in/living/",
      "mainEntityOfPage": {
        "@id": "https://www.studyinlatvia.in/living/#webpage",
      },
      "publisher": {
        "@id": "https://www.studyinlatvia.in/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.studyinlatvia.in/living/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cost of living in Latvia for students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The cost of living in Latvia varies depending on the city, accommodation, lifestyle, transportation, food, and other personal expenses.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Latvia safe for international students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Latvia is a popular destination for international students, with students living and studying in cities such as Riga and other university towns.",
          },
        },
        {
          "@type": "Question",
          "name": "What accommodation options are available for students in Latvia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Students in Latvia can choose from university accommodation, student residences, shared apartments, and private rental accommodation depending on availability and budget.",
          },
        },
        {
          "@type": "Question",
          "name": "Can Indian students work while studying in Latvia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "International students may have opportunities to work while studying in Latvia, subject to the conditions and regulations applicable to their residence permit and study program.",
          },
        },
        {
          "@type": "Question",
          "name": "What is student life like in Latvia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Student life in Latvia combines European education, cultural experiences, public transportation, student communities, and access to various recreational and social activities.",
          },
        },
      ],
    },
  ],
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