import Breadcrumb from "@/app/components/Breadcrumb"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"

export const metadata = {
  title: "Study with Top Universities in Latvia for Indian Students",
  description: "Find the best universities in Latvia for Indian students. We compare top courses, costs, and admission rules. Get expert help to apply now.",
  keywords: ["Universities in Latvia", "Latvia Universities", "Best Universities in Latvia", "Top Universities in Latvia", "Universities in Latvia for International Students", "Latvia University for Indian Students", "Study in Latvia Universities", "Public Universities in Latvia", "Private Universities in Latvia", "Latvia Higher Education", "Latvia University Admission", "Latvia University Fees", "English Universities in Latvia", "Study in Latvia"],
  alternates: {
    canonical: "https://www.studyinlatvia.in/study/universities"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.studyinlatvia.in/study/universities/",
    siteName: "Study in latvia",
    title:
    "Study with Top Universities in Latvia for Indian Students",
    description:
    "Find the best universities in Latvia for Indian students. We compare top courses, costs, and admission rules. Get expert help to apply now.",
    images: [
    {
    url: "https://www.studyinlatvia.in/images/study/latvia-01.webp",
    alt: "Universities in latvia",
    },
  ],
},
}

const page = () => {

const universitiesData = [
  {
    id: 1,
    name: "Riga Technical University (RTU)",
    img_url: "/images/universities/01.webp",
    rankingRecognition:
      "One of the oldest and most prestigious technical universities in the Baltic region, widely recognised for engineering, technology, and innovation-focused education.",
    academicStrength: [
      "Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Computer Science",
      "Architecture",
    ],
  },
  {
    id: 2,
    name: "University of Latvia",
    img_url: "/images/universities/02.webp",
    rankingRecognition:
      "The largest and one of the most respected universities in Latvia, known for its strong academic research and diverse range of programmes.",
    academicStrength: [
      "Business Administration",
      "Economics",
      "Medicine",
      "Law",
      "Social Sciences",
    ],
  },
  {
    id: 3,
    name: "Riga Stradiņš University (RSU)",
    img_url: "/images/universities/03.webp",
    rankingRecognition:
      "A leading university for healthcare and medical education, attracting international students from many countries.",
    academicStrength: [
      "Medicine",
      "Dentistry",
      "Pharmacy",
      "Public Health",
      "Healthcare Management",
    ],
  },
  {
    id: 4,
    name: "Latvia University of Life Sciences and Technologies",
    img_url: "/images/universities/04.webp",
    rankingRecognition:
      "Known for practical education and research in agriculture, environmental sciences, engineering, and business-related disciplines.",
    academicStrength: [
      "Agriculture",
      "Environmental Science",
      "Food Technology",
      "Business Management",
      "Engineering",
    ],
  },
  {
    id: 5,
    name: "Transport and Telecommunication Institute (TSI)",
    img_url: "/images/universities/05.webp",
    rankingRecognition:
      "A modern private university recognised for technology, aviation, logistics, and digital innovation programmes.",
    academicStrength: [
      "Computer Science",
      "Data Analytics",
      "Aviation Management",
      "Logistics",
      "Business Technology",
    ],
  },
  {
    id: 6,
    name: "Turība University",
    img_url: "/images/universities/06.webp",
    rankingRecognition:
      "One of Latvia's leading private universities, known for entrepreneurship-focused education and strong industry connections.",
    academicStrength: [
      "Business Administration",
      "Tourism and Hospitality",
      "Marketing",
      "International Communication",
      "Management",
    ],
  },
  {
    id: 7,
    name: "BA School of Business and Finance",
    img_url: "/images/universities/07.webp",
    rankingRecognition:
      "A specialised institution with a strong reputation in finance, banking, and business education.",
    academicStrength: [
      "Finance",
      "Banking",
      "Economics",
      "Business Management",
      "Accounting",
    ],
  },
  {
    id: 8,
    name: "Vidzeme University of Applied Sciences",
    img_url: "/images/universities/08.webp",
    rankingRecognition:
      "Recognised for applied learning, innovation, and international collaboration across multiple academic disciplines.",
    academicStrength: [
      "Information Technology",
      "Tourism Management",
      "Business Studies",
      "Communication",
      "Media Studies",
    ],
  },
  {
    id: 9,
    name: "RISEBA University of Applied Sciences",
    img_url: "/images/universities/09.webp",
    rankingRecognition:
      "A well-known private university offering creative, business, and technology-focused programmes with international perspectives.",
    academicStrength: [
      "Business",
      "Media and Communication",
      "Architecture",
      "Creative Industries",
      "Project Management",
    ],
  },
  {
    id: 10,
    name: "Daugavpils University",
    img_url: "/images/universities/10.webp",
    rankingRecognition: "One of Latvia's well-established public universities, recognised for its research, teacher education, and international study programmes in science and humanities.",
    academicStrength: [
      "Education",
      "Biology",
      "Environmental Science",
      "Computer Science",
      "Business Administration"
    ]
  },
  {
    id: 11,
    name: "Ventspils University of Applied Sciences",
    img_url: "/images/universities/11.webp",
    rankingRecognition: "A modern public university known for its practical learning approach, international partnerships, and strong focus on digital technologies and business education.",
    academicStrength: [
      "Information Technology",
      "Translation Studies",
      "Business Administration",
      "Electronics",
      "International Management"
    ]
  },
  {
    id: 12,
    name: "EKA University of Applied Sciences",
    img_url: "/images/universities/12.webp",
    rankingRecognition: "A leading private university in Latvia offering career-focused education with emphasis on business, technology, and creative industries.",
    academicStrength: [
      "Business Management",
      "Information Technology",
      "Marketing",
      "Design",
      "Entrepreneurship"
    ]
  }
];

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
      url: "https://www.studyinlatvia.in/images/study/latvia-01.webp",
      },
      },
      {
      "@type": "WebSite",
      "@id": "https://www.studyinlatvia.in/#website",
      url: "https://www.studyinlatvia.in",
      name: "Study in latvia",
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
      "https://www.studyinlatvia.in/study/universities/#webpage",
      url: "https://www.studyinlatvia.in/study/universities/",
      name: "Universities in latvia",
      description:
      "Explore top universities in latvia offering Bachelor's, Master's and PhD programs for international students.",
      isPartOf: {
      "@id": "https://www.studyinlatvia.in/#website",
      },
      breadcrumb: {
      "@id":
      "https://www.studyinlatvia.in/study/universities/#breadcrumb",
      },
      inLanguage: "en",
      },
      {
      "@type": "CollectionPage",
      "@id":
      "https://www.studyinlatvia.in/study/universities/#collectionpage",
      url: "https://www.studyinlatvia.in/study/universities/",
      name: "Universities in latvia",
      description:
      "A comprehensive list of universities and colleges in latvia for international students.",
      mainEntity: {
      "@id":
      "https://www.studyinlatvia.in/study/universities/#itemlist",
      },
      },
      {
      "@type": "Article",
      "@id":
      "https://www.studyinlatvia.in/study/universities/#article",
      headline:
      "Top Universities in latvia for International Students",
      description:
      "Explore latvia's leading universities, admission requirements, tuition fees, scholarships and study opportunities.",
      mainEntityOfPage: {
      "@id":
      "https://www.studyinlatvia.in/study/universities/#webpage",
      },
      publisher: {
      "@id": "https://www.studyinlatvia.in/#organization",
      },
      author: {
      "@type": "Organization",
      name: "Study in latvia",
      },
      datePublished: "2026-06-11",
      dateModified: "2026-06-11",
      },
      {
      "@type": "BreadcrumbList",
      "@id":
      "https://www.studyinlatvia.in/study/universities/#breadcrumb",
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
      name: "Study",
      item: "https://www.studyinlatvia.in/study/",
      },
      {
      "@type": "ListItem",
      position: 3,
      name: "Universities",
      item: "https://www.studyinlatvia.in/study/universities/",
      },
      ],
      },
      {
      "@type": "ItemList",
      "@id":
      "https://www.studyinlatvia.in/study/universities/#itemlist",
      name: "Top Universities in latvia",
      itemListElement: [
      {
      "@type": "CollegeOrUniversity",
      position: 1,
      name: "Vilnius University",
      },
      {
      "@type": "CollegeOrUniversity",
      position: 2,
      name: "Vilnius Gediminas Technical University (VILNIUS TECH)",
      },
      {
      "@type": "CollegeOrUniversity",
      position: 3,
      name: "Kaunas University of Technology",
      },
      {
      "@type": "CollegeOrUniversity",
      position: 4,
      name: "Vytautas Magnus University",
      },
      {
      "@type": "CollegeOrUniversity",
      position: 5,
      name: "Mykolas Romeris University",
      },
      {
      "@type": "CollegeOrUniversity",
      position: 6,
      name: "latvian University of Health Sciences",
      },
      {
      "@type": "CollegeOrUniversity",
      position: 7,
      name: "ISM University of Management and Economics",
      },
      {
      "@type": "CollegeOrUniversity",
      position: 8,
      name: "Klaipeda University",
      },
      ],
      },
      {
      "@type": "ImageObject",
      "@id":
      "https://www.studyinlatvia.in/study/universities/#image",
      contentUrl:
      "https://www.studyinlatvia.in/study/latvia-01.webp",
      caption:
      "Top Universities in latvia for International Students",
      representativeOfPage: true,
      },
      ],
};


  return (
    <>
      <Breadcrumb heading={'Top​‍​‌‍​‍‌ Universities in Latvia for International Students and ​‍​‌‍​‍‌Indians'}/>
      <div className="px-10 mt-10">
         <h2 className="font-aino text-2xl md:text-4xl">Top Universities in Latvia for Indian Students</h2>
         <p className="mt-5">Latvia is home to several internationally recognised universities known for academic excellence,
          research opportunities, industry-focused education, and affordable tuition fees. Students can
          choose from a wide range of programmes in Business, Engineering, Information Technology,
          Medicine, Healthcare, Social Sciences, and Management.<br />
          Many Latvian universities offer English-taught programmes and maintain strong partnerships
          with institutions and industries across Europe, helping students gain valuable international
          exposure and career opportunities.
          </p>
          <div className="mt-12">
          <h2 className="font-aino text-2xl md:text-4xl">Discover Leading Universities in Latvia</h2>
          <div className="mt-5">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {universitiesData?.map((university, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary to-tertiary" />

                      <div className="relative h-60 overflow-hidden">
                        <Image
                          width={400}
                          height={240}
                          src={university.img_url}
                          alt={university.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5">
                          <h2 className="text-2xl font-bold text-white leading-snug">
                            {university.name}
                          </h2>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="mb-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-primarydark" />
                            <h3 className="font-semibold text-primary">
                              Ranking & Recognition
                            </h3>
                          </div>

                          <p className="text-gray-600 text-sm leading-relaxed">
                            {university.rankingRecognition}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-primarydark" />
                            <h3 className="font-semibold text-primary">
                              Academic Strength
                            </h3>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {university?.academicStrength?.map((course, index) => (
                              <span
                                key={index}
                                className="px-3 py-1.5 text-xs font-medium rounded-full
                                  text-primarydark
                                  border border-[#000000]/20"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    ))}
                  </div>
          </div>
          <div className="mt-10">
             <h2 className="font-roboto text-xl md:text-2xl">Why opt for Latvian Universities?</h2>
             <ul className="mt-4 space-y-2">
               <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Internationally recognised European degrees</li>
               <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Affordable tuition fees and living costs</li>
               <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English-taught Bachelor's and Master's programmes</li>
               <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Modern campuses and research facilities</li>
               <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Industry-oriented learning approach</li>
               <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Multicultural student environment</li>
               <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Internship and career development opportunities</li>
               <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Access to the European Union education network</li>
               <li><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Strong academic support for international students</li>
             </ul>
          </div>
          <div className="mt-10">
             <h2 className="font-roboto text-xl md:text-2xl">Study at the Best Universities in Latvia</h2>
             <p className="font-inter text-base mt-3">Whether you are interested in Medicine, Engineering, Business, Information Technology,
              Healthcare, or Social Sciences, Latvian universities offer quality education combined with
              international exposure. With affordable study options, globally recognised qualifications, and
              growing career opportunities, Latvia continues to attract students looking to build a successful
              future in Europe.</p>
          </div>
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