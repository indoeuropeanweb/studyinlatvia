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
    type: "website",
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
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlatvia.in/living/#breadcrumb",
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
          "name": "living",
          "item": "https://www.studyinlatvia.in/living/"
        },
      ]
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