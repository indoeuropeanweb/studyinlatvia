import Breadcrumb from '../components/Breadcrumb';
import { Testimonials } from "@/public/data/testimonials";

export const metadata = {
  title: "Student Success Stories & Video Reviews | Study in Latvia Centre",
  description: "Hear directly from students who successfully secured admissions, scholarships, and visas to study in Latvia. Watch their video reviews and explore moments from their international education journey.",
  keywords: ["Study in Latvia Centre reviews", "student success stories Latvia", "Latvia student video reviews", "Latvia visa success stories", "Latvia scholarship success", "Indian students in Latvia", "study in Latvia testimonials", "Latvia admission success", "study abroad student reviews", "Latvia education journey"],
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
    "Student Success Stories & Video Reviews | Study in Latvia Centre",
  description:
    "Watch real student video reviews and success stories from students studying in Latvia.",
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
    "Student Success Stories & Video Reviews | Study in Latvia Centre",
  description:
    "Watch student success stories and video reviews.",
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
     <Breadcrumb heading={'Our Students Eperience'}/>
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