import Breadcrumb from '@/app/components/Breadcrumb'

export const metadata = {
  title: "Latvian Language Guide for Indian Students",
  description: "Learn about the Latvian Language, its importance for Indian students, daily communication, and study opportunities in Latvia.  Get the guide you need now.",
  keywords: ["Latvian Language", "Latvia Language", "Official Language of Latvia", "Learn Latvian Language", "Latvian Language for International Students", "Study in Latvia", "Latvian Language Guide", "Languages Spoken in Latvia", "Education in Latvia", "Study Abroad Latvia"],
  alternates: {
    canonical:"https://www.studyinlatvia.in/latvia/language"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://www.studyinlatvia.in/latvia/language/",
    siteName: "Study in Latvia",
    title:
      "Latvian Language Guide for Indian Students",
    description:
      "Learn about the Latvian Language, its importance for Indian students, daily communication, and study opportunities in Latvia.  Get the guide you need now.",
    images: [
      {
        url: "https://www.studyinlatvia.in/images/logos/logo.webp",
        alt: "Latvian Language",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Latvian Language Guide for Indian Students",
    description:
      "Learn about the Latvian Language, its importance for Indian students, daily communication, and study opportunities in Latvia.  Get the guide you need now.",
    images: [
      "https://www.studyinlatvia.in/images/logos/logo.webp",
    ],
  },
}

const page = () => {

 const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.studyinlatvia.in/#organization",
      name: "Study in latvia",
      url: "https://www.studyinlatvia.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.studyinlatvia.in/images/logos/logo.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlatvia.in/#website",
      url: "https://www.studyinlatvia.in",
      name: "Study in Latvia",
      publisher: {
        "@id": "https://www.studyinlatvia.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.studyinlatvia.in/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.studyinlatvia.in/latvia/language/#webpage",
      url: "https://www.studyinlatvia.in/latvia/language/",
      name: "Language of Latvia",
      description:
        "Learn about the Latvian language, its history, significance, usage in Latvian, and language opportunities available for international students.",
      isPartOf: {
        "@id": "https://www.studyinlatvia.in/#website",
      },
      breadcrumb: {
        "@id":
          "https://www.studyinlatvia.in/latvia/language/#breadcrumb",
      },
      about: {
        "@id":
          "https://www.studyinlatvia.in/latvia/language/#country",
      },
      inLanguage: "en",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.studyinlatvia.in/latvia/language/#article",
      headline: "latvian Language",
      description:
        "Comprehensive guide to the Latvian language, one of the oldest living Indo-European languages, and its role in education, culture, and everyday life in latvia.",
      mainEntityOfPage: {
        "@id":
          "https://www.studyinlatvia.in/latvia/language/#webpage",
      },
      publisher: {
        "@id": "https://www.studyinlatvia.in/#organization",
      },
      author: {
        "@type": "Organization",
        name: "Study in Latvia",
      },
      datePublished: "2026-06-11",
      dateModified: "2026-06-11",
      image: {
        "@type": "ImageObject",
        url: "https://www.studyinlatvia.in/images/logos/logo.webp",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.studyinlatvia.in/latvia/language/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.studyinlatvia.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Latvia",
          item: "https://www.studyinlatvia.in/latvia/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Language",
          item: "https://www.studyinlatvia.in/latvia/language/",
        },
      ],
    },
    {
      "@type": "Country",
      "@id":
        "https://www.studyinlatvia.in/latvia/language/#country",
      name: "latvia",
      description:
        "Latvian is the official language of Latvia and one of the oldest living Indo-European languages. English is widely spoken among students and young professionals, making latvia an attractive destination for international students.",
    },
    {
      "@type": "ImageObject",
      "@id":
        "https://www.studyinlatvia.in/latvia/language/#image",
      contentUrl:
        "https://www.studyinlatvia.in/images/logos/logo.webp",
      caption:
        "latvian language, culture and education in latvia",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
      <Breadcrumb heading={'Latvia​‍​‌‍​‍‌ is a student-friendly multilingual environment in terms of ​‍​‌‍​‍‌language.'} />
      <div className='px-5 py-5'>
        <h2 className='text-2xl md:text-4xl font-aino'>Language in Latvia</h2>
        <div className=''>
        <p className='text-md font-roboto mt-3 text-justify'>
         Latvia is a country with a rich linguistic heritage. The country's official language is Latvian. It is one of the oldest languages in the Baltic region and plays an important role in Latvian culture, traditions, and national identity. Latvian is used in government, public services, and everyday communication across the country.
          <br />
         Indian students generally do not have problems communicating, as English is widely spoken, especially by young people, university students, and academic staff. Most universities offer English-taught programs so that Indian students can comfortably study while experiencing the culture and daily life of Latvia. 
        </p>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  )
}

export default page