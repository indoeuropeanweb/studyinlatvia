import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'

export const metadata = {
  title: "Student Experiences in Latvia | Study in Latvia Centre Ambassadors",
  description: "Discover real student experiences in Latvia through Study in Latvia Centre Ambassadors. Learn about university life, academics, accommodation, culture, career opportunities, and student success stories from Indian students studying in Latvia",
  keywords: ["student experiences in Latvia", "Study in Latvia Centre ambassadors", "Indian students in Latvia", "Latvia student testimonials", "Latvia success stories", "study in Latvia experiences", "student life in Latvia", "Latvia student stories", "Latvia education experiences", "study abroad Latvia"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/student-ambassadors"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "article",
    title:
      "Student Experiences in Latvia | Study in Latvia Centre Ambassadors",
    description:
      "Read real experiences and success stories from students studying in Latvia.",
    url:
      "https://www.studyinLatvia.in/student-ambassadors/",
    siteName: "Study in Latvia Centre",
    images: [
      {
        url:
          "https://www.studyinLatvia.in/images/student-ambassadors/student-01.webp",
        width: 1200,
        height: 630,
        alt: "Student Experiences in Latvia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Student Experiences in Latvia | Study in Latvia Centre Ambassadors",
    description:
      "Read real experiences and success stories from students studying in Latvia.",
    images: [
      "https://www.studyinLatvia.in/images/student-ambassadors/student-01.webp",
    ],
  },
}

const page = () => {

const students = [
  {
    name: "Yuvraj Singh",
    university: "Turiba University",
    country: "Latvia",
    course: "Master of Business Administration",
    img_url: "/images/student-ambassadors/student-01.webp",
    testimonial: "My dream of pursuing an MBA in Europe became possible through the excellent guidance I received throughout the Latvia admission process. From university selection to visa preparation, every step was handled professionally. Today, I am proudly studying in Latvia and gaining valuable international exposure."
  },
  {
    name: "Saurav Dangi",
    university: "Riga Technical University",
    country: "Latvia",
    course: "Master in Computer Systems",
    img_url: "/images/student-ambassadors/student-02.webp",
    testimonial: "I was looking for quality education in Europe at an affordable cost, and Latvia proved to be the right destination. The support with university applications and visa procedures was excellent. Today, I am confidently pursuing my Master's degree at Riga Technical University."
  },
  {
    name: "Azeem Abbas",
    university: "Turiba University",
    country: "Latvia",
    course: "Master of Business Administration",
    img_url: "/images/student-ambassadors/student-03.webp",
    testimonial: "Choosing Latvia for my higher education was one of the best decisions I have made. The counselling and admission support helped me secure admission at a reputed Latvian university. The process was transparent, and I received guidance whenever I needed it."
  },
  {
    name: "Kabirraj Singh",
    university: "Turiba University",
    country: "Latvia",
    course: "Bachelor in Hospitality & Tourism Management",
    img_url: "/images/student-ambassadors/student-04.webp",
    testimonial: "I wanted to build a global career in hospitality, and studying in Latvia provided the perfect opportunity. From course selection to admission formalities, the guidance I received made everything easier. My transition to student life in Latvia was smooth and comfortable."
  },
  {
    name: "Harshdeep Singh",
    university: "Turiba University",
    country: "Latvia",
    course: "Bachelor in Business Administration",
    img_url: "/images/student-ambassadors/student-05.webp",
    testimonial: "I had a great experience during the admission process. The team helped me at every stage, and with their support, I secured admission to Turiba University. Their guidance and timely advice made the entire journey simple, smooth, and hassle-free."
  },
  {
    name: "Sonia Soni",
    university: "Turiba University",
    country: "Latvia",
    course: "Master of Business Administration",
    img_url: "/images/student-ambassadors/student-06.webp",
    testimonial: "Studying abroad felt overwhelming at first, but the support I received made the entire process smooth and stress-free. The team guided me with applications, documentation, and Latvia student visa requirements. I am grateful for their continuous assistance throughout my journey."
  },
  {
    name: "Ranjeet Singh",
    university: "Riga Technical University",
    country: "Latvia",
    course: "Master in Computer Systems Engineering",
    img_url: "/images/student-ambassadors/student-07.webp",
    testimonial: "My experience throughout the Latvia university admission process was extremely positive. The guidance provided helped me choose the right programme and prepare all required documents. I am thankful for the professional support that helped me achieve my study abroad goals."
  },
  {
    name: "Mohit Sharma",
    university: "RISEBA University of Applied Sciences",
    country: "Latvia",
    course: "Master in International Business",
    img_url: "/images/student-ambassadors/student-08.webp",
    testimonial: "The entire process was clear, transparent, and professionally managed. From admission counselling to Latvia student visa assistance, I received continuous support. Studying in Latvia has given me valuable international learning and career opportunities."
  },
  {
    name: "Jayalakshmi Jagadeesan",
    university: "RISEBA University of Applied Sciences",
    country: "Latvia",
    course: "Master in International Business",
    img_url: "/images/student-ambassadors/student-09.webp",
    testimonial: "Pursuing an international business degree in Latvia has been an amazing experience. The guidance I received during admissions and visa preparation gave me confidence throughout the process. I highly appreciate the support provided at every stage."
  },
  {
    name: "Mamta Vallabhbhai Pandav",
    university: "Riga Technical University",
    country: "Latvia",
    course: "Master in International Business",
    img_url: "/images/student-ambassadors/student-10.webp",
    testimonial: "My study abroad journey became much easier with expert guidance and personalised counselling. From selecting the right university to completing admission requirements, everything was managed efficiently. I am excited to continue building my future through education in Latvia."
  }
];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinLatvia.in/",
        "name": "Study in Latvia Centre",
        "url": "https://www.studyinLatvia.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.studyinLatvia.in/images/logos/logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.studyinLatvia.in/student-ambassadors/",
        "url":
          "https://www.studyinLatvia.in/student-ambassadors/",
        "name": "Student Experiences in Latvia",
        "description":
          "Read real experiences and success stories from international students studying in Latvia."
      },
      {
        "@type": "Article",
        "@id":
          "https://www.studyinLatvia.in/student-ambassadors/",
        "headline":
          "Student Experiences in Latvia",
        "description":
          "Real stories and experiences shared by students studying in Latvia.",
        "mainEntityOfPage": {
          "@id":
            "https://www.studyinLatvia.in/student-ambassadors/"
        }
      },
      {
        "@type": "Review",
        "@id":
          "https://www.studyinLatvia.in/student-ambassadors/",
        "author": {
          "@type": "Person",
          "name": "Student Ambassador"
        },
        "reviewBody":
          "Studying in Latvia has been a life-changing experience.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "itemReviewed": {
          "@type": "Thing",
          "name": "Study Experience in Latvia"
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
              "What can I learn from student ambassadors in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Student ambassadors share real-life experiences about academics, accommodation and student life."
            }
          },
          {
            "@type": "Question",
            "name":
              "Can I contact students currently studying in Latvia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, prospective students can connect with ambassadors for first-hand insights."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
     <Breadcrumb heading="Real​‍​‌‍​‍‌ accounts from students studying in ​‍​‌‍​‍‌Latvia"/>
     <section className='max-w-6xl mx-auto'>
       <div className='py-10 px-5'>
        <div className="grid grid-cols-1 gap-5 lg:gap-8">
        {students.map((student, index) => {
            return (
            <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-[#048D4E]/10 bg-white shadow-lg transition-all duration-500"
            >
                <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:p-7 lg:grid-cols-[200px_1fr] xl:grid-cols-[220px_1fr]">
                <div className="relative mx-auto w-full max-w-55">
                    <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-[#048D4E]/10 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                    <Image
                    className="relative z-10 h-70 sm:h-80 w-full rounded-2xl border-4 border-white object-cover shadow-xl"
                    height={360}
                    width={220}
                    src={student.img_url}
                    alt={student.name}
                    />
                    <div className="absolute bottom-4 left-4 z-20 rounded-full bg-secondary px-3 py-1 text-xs sm:text-sm font-semibold text-black shadow-md">
                    Student Ambassador
                    </div>
                </div>
                <div className="flex flex-col justify-center text-center lg:text-left">
                    <div className="mb-2 text-5xl sm:text-6xl leading-none text-dark/15">
                    ”
                    </div>
                    <h2 className="font-aino text-2xl font-bold text-primary sm:text-3xl">
                    {student.name}
                    </h2>
                    <h4 className="mt-2 font-roboto text-sm sm:text-base font-medium leading-relaxed text-tertiary">
                    {student.university}
                    </h4>
                    <div className="mt-3">
                    <h6 className="inline-block rounded-full bg-dark/10 px-4 py-1 text-xs sm:text-sm font-semibold text-primary-dark">
                        {student.course}
                    </h6>
                    </div>
                    <p className="mt-5 border-l-4 border-secondary pl-4 sm:pl-5 text-sm sm:text-[15px] leading-7 sm:leading-8 text-gray-700 italic">
                    “{student.testimonial}”
                    </p>
                    <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    <span className="h-2 w-2 rounded-full bg-tertiary" />
                    </div>
                </div>
                </div>
            </div>
            );
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