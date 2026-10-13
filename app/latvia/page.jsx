import LatviaClient from "./LatviaClient";

export const metadata = {
  title: "Study in Latvia Consultant for Students with Expert Help",
  description:
    "Study in Latvia consultant for students. Get expert help with visas, university applications and living costs. Start your journey today.",
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
    type: "website",
    title: "Study in Latvia Consultant for Students with Expert Help",
    description:
      "Study in Latvia consultant for students. Get expert help with visas, university applications and living costs. Start your journey today.",
    url: "https://www.studyinlatvia.in/latvia/",
    siteName: "Study in Latvia Center",
    images: [
      {
        url: "https://www.studyinlatvia.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in Latvia Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Latvia Consultant for Students with Expert Help",
    description:
      "Study in Latvia consultant for students. Get expert help with visas, university applications and living costs. Start your journey today.",
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
          "Study in Latvia Consultant for Students with Expert Help",
        "description":
          "Study in Latvia consultant for students. Get expert help with visas, university applications and living costs. Start your journey today.",
        "isPartOf": {
          "@id": "https://www.studyinlatvia.in/#website",
        },
        "about": {
          "@id": "https://www.studyinlatvia.in/#organization",
        },
      },
      {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlatvia.in/latvia/#breadcrumb",
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
          "name": "latvia",
          "item": "https://www.studyinlatvia.in/latvia/"
        },
      ]
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