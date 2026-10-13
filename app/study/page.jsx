import StudyClient from "./StudyClient";

export const metadata = {
  title: "Why Study in Latvia | Why Affordable For Indian Student",
  description:
    "Why study in Latvia? Discover low tuition fees and affordable living costs for Indian students. Explore world-class education and start your application today.",
  keywords: [
    "Why Study in Latvia",
    "Study in Latvia Consultant",
    "Study in Latvia Consultant India",
    "Latvia Education Consultant",
    "Study Abroad Latvia",
    "Latvia Universities",
    "Latvia Student Visa",
    "Study in Europe",
    "Study in Latvia for Indian Students",
    "Latvia Admission Consultant",
  ],
  alternates: {
    canonical: "https://www.studyinlatvia.in/study/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Why Study in Latvia | Why Affordable For Indian Student",
    description:
      "Why study in Latvia? Discover low tuition fees and affordable living costs for Indian students. Explore world-class education and start your application today.",
    url: "https://www.studyinlatvia.in/study/",
    siteName: "Study in Latvia Center",
    images: [
      {
        url: "https://www.studyinlatvia.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in Latvia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Study in Latvia | Why Affordable For Indian Student",
    description:
      "Why study in Latvia? Discover low tuition fees and affordable living costs for Indian students. Explore world-class education and start your application today.",
    images: [
      "https://www.studyinlatvia.in/images/logos/logo.png",
    ],
  },
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinlatvia.in/#organization",
        name: "Study in Latvia",
        url: "https://www.studyinlatvia.in/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.studyinlatvia.in/images/logos/logo.png",
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinlatvia.in/study/#webpage",
        url: "https://www.studyinlatvia.in/study/",
        name: "Why Study in Latvia | Why Affordable For Indian Student",
        description:
          "Why study in Latvia? Discover low tuition fees and affordable living costs for Indian students. Explore world-class education and start your application today.",
        isPartOf: {
          "@id": "https://www.studyinlatvia.in/#website",
        },
        about: {
          "@id": "https://www.studyinlatvia.in/#organization",
        },
      },
      {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlatvia.in/study/#breadcrumb",
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
          "name": "study",
          "item": "https://www.studyinlatvia.in/study/"
        },
      ]
    },
    ],
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