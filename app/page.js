import HomeClient from "./HomeClient";

export const metadata = {
  title: "Study in Latvia Consultant | Universities, Visa & Admission",
  description: "Study in Latvia consultant. We provide clear steps by step for top university Admission and visa approvals. Check out our top University lists and apply today.",
  keywords: [  
  "Study in Latvia",
  "Study in Latvia Consultants",
  "Study in Latvia for Indian Students",
  "Latvia Universities",
  "Study Abroad Latvia",
  "Latvia Student Visa",
  "Latvia Education Consultants",
  "Universities in Latvia",
  "Study in Europe",
  "Latvia Admission",
  "Latvia Scholarships"
],
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
      "Study in Latvia Consultant | Universities, Visa & Admission",
    description:
      "Study in Latvia consultant. We provide clear steps by step for top university Admission and visa approvals. Check out our top University lists and apply today.",
    url: "https://www.studyinlatvia.in/",
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
}

  const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.studyinlatvia.in/#organization",
      "name": "Study in Lithuania Centre",
      "url": "https://www.studyinlatvia.in/",
      "description": "Study abroad consultancy providing guidance on Latvian universities, admissions, scholarships and student visas.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, 18/1-A, Jail Road, Opposite Tilak Nagar Metro Station Gate No. 4, Above Sona Baker",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110058",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.studyinlatvia.in/#localbusiness",
      "name": "Study in Latvia Centre",
      "url": "https://www.studyinlatvia.in/",
      "description": "Study in Latvia consultants offering university selection, admission guidance, scholarship assistance and student visa support.",
      "parentOrganization": {
        "@id": "https://www.studyinlatvia.in/#organization"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, 18/1-A, Jail Road, Opposite Tilak Nagar Metro Station Gate No. 4, Above Sona Baker",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110058",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Study in Latvia Consultancy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "University and Course Selection"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Latvia University Admissions Guidance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Scholarship Assistance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Latvia Student Visa Guidance"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlatvia.in/#website",
      "url": "https://www.studyinlatvia.in/",
      "name": "Study in Latvia",
      "publisher": {
        "@id": "https://www.studyinlatvia.in/#organization"
      },
      "inLanguage": "en-IN"
    }
  ]
}

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
