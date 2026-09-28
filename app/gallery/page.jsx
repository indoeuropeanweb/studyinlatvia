import Breadcrumb from '../components/Breadcrumb';
import { Testimonials } from "@/public/data/testimonials";

export const metadata = {
  title: "Latvia Student Life | Gallery of Student Experiences & Campus Life",
  description: "Explore Latvia Student Life through our gallery featuring university campuses, student events, cultural experiences, accommodation, and daily life in Latvia.",
  keywords: ["Latvia Student Life", "Study in Latvia", "Student Life in Latvia", "Latvia University Campus", "International Students in Latvia", "Study Abroad Latvia", "Latvia Student Experience", "Latvia Education", "Student Gallery Latvia"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/gallery"
  },
    robots: {
    index: true,
    follow: true,
  },
  openGraph: {
  type: "website",
  title:
    "Latvia Student Life | Gallery of Student Experiences & Campus Life",
  description:
    "Explore Latvia Student Life through our gallery featuring university campuses, student events, cultural experiences, accommodation, and daily life in Latvia.",
  url: "https://www.studyinLatvia.in/gallery/",
  siteName: "Study in Latvia Centre",
  images: [
    {
      url:
        "https://www.studyinLatvia.in/images/logos/logo.png",
      width: 1200,
      height: 630,
      alt: "Student Success Stories",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title:
    "Latvia Student Life | Gallery of Student Experiences & Campus Life",
  description:
    "Explore Latvia Student Life through our gallery featuring university campuses, student events, cultural experiences, accommodation, and daily life in Latvia.",
  images: [
    "https://www.studyinLatvia.in/images/logos/logo.png",
  ],
},
}

const page = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinLatvia.in/contact",
        "name": "Study in Latvia Centre",
        "url": "https://www.studyinLatvia.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinLatvia.in/images/logos/logo.png"
        }
      },
      {
        "@type": "CollectionPage",
        "@id":
          "https://www.studyinLatvia.in/gallery/collectionpage",
        "url": "https://www.studyinLatvia.in/gallery/",
        "name":
          "Student Success Stories & Video Reviews",
        "description":
          "A gallery of student success stories and video reviews."
      },
      {
        "@type": "ImageGallery",
        "@id":
          "https://www.studyinLatvia.in/gallery/",
        "name":
          "Study in Latvia Student Gallery",
        "url":
          "https://www.studyinLatvia.in/gallery/"
      },
      {
        "@type": "VideoObject",
        "@id":
          "https://www.studyinLatvia.in/gallery/#video1",
        "name":
          "Student Video Review - Study in Latvia",
        "description":
          "Student shares their experience studying in Latvia.",
        "thumbnailUrl":
          "https://www.studyinLatvia.in/images/logos/logo/logo.png",
        "uploadDate": "2026-01-01",
        "contentUrl":
          "https://www.studyinLatvia.in/gallery/"
      },
      {
        "@type": "Review",
        "@id":
          "https://www.studyinLatvia.in/gallery/#review1",
        "author": {
          "@type": "Person",
          "name": "Student"
        },
        "reviewBody":
          "Study in Latvia Centre helped me secure admission and visa support.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.studyinLatvia.in/faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "What can I see on the gallery page?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The gallery page includes student video reviews and success stories."
            }
          },
          {
            "@type": "Question",
            "name":
              "Are the student reviews about studying in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, the reviews feature students studying in Latvia."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
     <Breadcrumb heading={'Student​‍​‌‍​‍‌​‍​‌‍​‍‌ Life in Latvia - Real Stories from International ​‍​‌‍​‍‌​‍​‌‍​‍‌Students'}/>
     <section className='mx-auto max-w-6xl'>
       <div className='py-10 px-5'>
         <h2 className='text-2xl md:text-4xl font-aino'>Life in Latvia Through Student Eyes</h2>
         <p className='text-base font-inter text-justify mt-3'>Watch real student stories from Latvia and explore their experiences with university admissions, student visas, campus life, and studying in Europe. Discover how they successfully started their international education journey.</p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 space-x-3 mt-8'>
            {Testimonials.map((testimonial, index) => {
              return <div className='' key={index}>
                <iframe className='rounded-lg' src={testimonial} width={320} height={160} />
              </div>
            })}
         </div>
       </div>
     </section>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  )
}

export default page