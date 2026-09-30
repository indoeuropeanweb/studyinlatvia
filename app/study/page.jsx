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
    type: "article",
    title: "Why Study in Latvia | Why Affordable For Indian Student",
    description:
      "Why study in Latvia? Discover low tuition fees and affordable living costs for Indian students. Explore world-class education and start your application today.",
    url: "https://www.studyinlatvia.in/study/",
    siteName: "Study in Latvia",
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
        "@type": "WebSite",
        "@id": "https://www.studyinlatvia.in/#website",
        url: "https://www.studyinlatvia.in/",
        name: "Study in Latvia",
        publisher: {
          "@id": "https://www.studyinlatvia.in/#organization",
        },
      },
      {
        "@type": "Article",
        "@id": "https://www.studyinlatvia.in/study/#article",
        headline: "Why Study in Latvia?",
        description:
          "Information for Indian students about studying in Latvia, including affordable education, living costs, universities, English-taught programs, and student opportunities.",
        url: "https://www.studyinlatvia.in/study/",
        mainEntityOfPage: {
          "@id": "https://www.studyinlatvia.in/study/#webpage",
        },
        publisher: {
          "@id": "https://www.studyinlatvia.in/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinlatvia.in/study/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why should Indian students study in Latvia?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Latvia offers European higher education with a range of English-taught programs and comparatively affordable tuition and living costs.",
            },
          },
          {
            "@type": "Question",
            name: "Are English-taught programs available in Latvia?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, Latvian higher education institutions offer a range of study programs taught in English for international students.",
            },
          },
          {
            "@type": "Question",
            name: "Is studying in Latvia affordable for Indian students?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Latvia can be an affordable European study destination, with tuition fees and living expenses varying by university, program, city, and lifestyle.",
            },
          },
          {
            "@type": "Question",
            name: "Can Indian students apply to universities in Latvia?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, Indian students can apply to eligible Latvian universities and higher education institutions by meeting the admission and visa requirements applicable to their chosen program.",
            },
          },
        ],
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