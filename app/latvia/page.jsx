import LatviaClient from "./LatviaClient";

export const metadata = {
  title: "Study in Latvia Consultant for Indian Students with Expert Help",
  description:
    "Study in Latvia consultant for Indian students. Get expert help with visas, university applications and living costs. Start your journey today for a bright future in Europe.",
  keywords: [
    "Study in Latvia",
    "Study in Latvia Consultant",
    "Latvia Education Consultant",
    "Study in Latvia for Indian Students",
    "Latvia Student Visa Consultant",
    "Latvia Universities",
    "Study Abroad Latvia",
    "Latvia Admission Consultant",
    "Higher Education in Latvia",
    "Study in Europe",
  ],
  alternates: {
    canonical: "https://www.studyinlatvia.in/latvia/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title: "Study in Latvia Consultant for Indian Students with Expert Help",
    description:
      "Study in Latvia consultant for Indian students. Get expert help with visas, university applications and living costs. Start your journey today for a bright future in Europe.",
    url: "https://www.studyinlatvia.in/latvia/",
    siteName: "Study in Latvia",
    images: [
      {
        url: "https://www.studyinlatvia.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in Latvia Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Latvia Consultant for Indian Students with Expert Help",
    description:
      "Study in Latvia consultant for Indian students. Get expert help with visas, university applications and living costs. Start your journey today for a bright future in Europe.",
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
        "name": "Study in Latvia",
        "url": "https://www.studyinlatvia.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinlatvia.in/images/logos/logo.png",
          "width": 1200,
          "height": 630,
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinlatvia.in/latvia/#webpage",
        "url": "https://www.studyinlatvia.in/latvia/",
        "name":
          "Study in Latvia Consultant for Indian Students with Expert Help",
        "description":
          "Study in Latvia consultant for Indian students. Get expert help with visas, university applications and living costs. Start your journey today for a bright future in Europe.",
        "isPartOf": {
          "@id": "https://www.studyinlatvia.in/#website",
        },
        "about": {
          "@id": "https://www.studyinlatvia.in/#organization",
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
        "@type": "Article",
        "@id": "https://www.studyinlatvia.in/latvia/#article",
        "headline":
          "Study in Latvia Consultant for Indian Students with Expert Help",
        "description":
          "Study in Latvia consultant for Indian students. Get expert help with visas, university applications and living costs. Start your journey today for a bright future in Europe.",
        "url": "https://www.studyinlatvia.in/latvia/",
        "mainEntityOfPage": {
          "@id": "https://www.studyinlatvia.in/latvia/#webpage",
        },
        "publisher": {
          "@id": "https://www.studyinlatvia.in/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.studyinlatvia.in/latvia/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why should Indian students study in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Latvia offers European higher education with a range of English-taught programs and opportunities for international students.",
            },
          },
          {
            "@type": "Question",
            "name": "Can Indian students apply to universities in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, Indian students can apply to eligible universities and higher education institutions in Latvia by meeting the admission requirements of their chosen program.",
            },
          },
          {
            "@type": "Question",
            "name": "Are English-taught courses available in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, Latvian universities and higher education institutions offer a variety of programs taught in English for international students.",
            },
          },
          {
            "@type": "Question",
            "name": "Do Indian students need a student visa to study in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Indian students generally need the appropriate Latvian visa or residence permit depending on the duration and nature of their study program.",
            },
          },
          {
            "@type": "Question",
            "name": "What are the living costs for students in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Living costs in Latvia vary depending on the city, accommodation, lifestyle and personal expenses.",
            },
          },
        ],
      },
    ],
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