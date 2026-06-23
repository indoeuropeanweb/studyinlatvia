import Breadcrumb from "@/app/components/Breadcrumb";
import { IoIosArrowForward } from 'react-icons/io'


export const metadata = {
  title: "Scholarships in Latvia  | Study Grants, Tuition Waivers & Funding for indian Students",
  description: "Explore scholarships in Latvia for international students, including tuition fee waivers, government grants, university scholarships, and financial aid opportunities for Bachelor's, Master's, and PhD programs.",
  keywords: ["Scholarships in Latvia", "Latvia Scholarships", "Study in Latvia Scholarships", "Latvia Government Scholarships", "Latvia University Scholarships", "International Student Scholarships Latvia", "Bachelor's Scholarships Latvia", "Master's Scholarships Latvia", "PhD Scholarships Latvia", "Tuition Fee Waiver Latvia", "Financial Aid Latvia", "VILNIUS TECH Scholarship", "Vilnius University Scholarship", "Study Abroad Scholarships", "European Scholarships", "Latvia Education Funding", "Latvia Study Grants", "Fully Funded Scholarships Latvia", "Merit Scholarships Latvia", "International Students Latvia"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/study/scholarships"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.studyinLatvia.in/study/scholarships/",
    siteName: "Study in Latvia",
    title:
      "Scholarships in Latvia 2026 | Study Grants, Tuition Waivers & Funding",
    description:
      "Discover scholarships, grants, tuition fee waivers and financial aid opportunities for international students studying in Latvia.",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
        alt: "Scholarships in Latvia",
      },
    ],
  },
}

const page = () => {

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.studyinLatvia.in/#organization",
          name: "Study in Latvia",
          url: "https://www.studyinLatvia.in",
          logo: {
            "@type": "ImageObject",
            url: "https://www.studyinLatvia.in/",
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://www.studyinLatvia.in/#website",
          url: "https://www.studyinLatvia.in",
          name: "Study in Latvia",
          publisher: {
            "@id": "https://www.studyinLatvia.in/#organization",
          },
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://www.studyinLatvia.in/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        },
        {
          "@type": "WebPage",
          "@id":
            "https://www.studyinLatvia.in/study/scholarships/#webpage",
          url: "https://www.studyinLatvia.in/study/scholarships/",
          name: "Scholarships in Latvia",
          description:
            "Explore scholarships, grants, tuition fee waivers and funding opportunities available for international students studying in Latvia.",
          isPartOf: {
            "@id": "https://www.studyinLatvia.in/#website",
          },
          breadcrumb: {
            "@id":
              "https://www.studyinLatvia.in/study/scholarships/#breadcrumb",
          },
          inLanguage: "en",
        },
        {
          "@type": "Article",
          "@id":
            "https://www.studyinLatvia.in/study/scholarships/#article",
          headline:
            "Scholarships in Latvia for International Students",
          description:
            "Complete guide to scholarships, grants, tuition waivers and financial aid opportunities available for Bachelor's, Master's and PhD students in Latvia.",
          mainEntityOfPage: {
            "@id":
              "https://www.studyinLatvia.in/study/scholarships/#webpage",
          },
          publisher: {
            "@id": "https://www.studyinLatvia.in/#organization",
          },
          author: {
            "@type": "Organization",
            name: "Study in Latvia",
          },
          datePublished: "2026-06-11",
          dateModified: "2026-06-11",
        },
        {
          "@type": "BreadcrumbList",
          "@id":
            "https://www.studyinLatvia.in/study/scholarships/#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.studyinLatvia.in/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Study",
              item: "https://www.studyinLatvia.in/study/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Scholarships",
              item: "https://www.studyinLatvia.in/study/scholarships/",
            },
          ],
        },
        {
          "@type": "FinancialAid",
          name: "Scholarships in Latvia",
          description:
            "Financial support opportunities including tuition fee waivers, government scholarships, university grants, merit-based scholarships and research funding for international students.",
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Can international students get scholarships in Latvia?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Latvian universities and government organizations offer scholarships, tuition fee waivers and grants for international students based on academic merit and eligibility.",
              },
            },
            {
              "@type": "Question",
              name: "Are scholarships available for Bachelor's students in Latvia?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Several Latvian universities offer tuition fee reductions, partial scholarships and full tuition waivers for eligible Bachelor's degree students.",
              },
            },
            {
              "@type": "Question",
              name: "Are there scholarships for Master's and PhD students?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Master's and PhD students can apply for university scholarships, research grants, government-funded scholarships and tuition support programs.",
              },
            },
            {
              "@type": "Question",
              name: "How much scholarship can I get in Latvia?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Scholarships vary by university and program. Students may receive partial tuition discounts, full tuition waivers or monthly stipends depending on eligibility.",
              },
            },
          ],
        },
        {
          "@type": "ImageObject",
          "@id":
            "https://www.studyinLatvia.in/study/scholarships/#image",
          contentUrl:
            "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
          caption:
            "Scholarships and Financial Aid Opportunities in Latvia",
          representativeOfPage: true,
        },
      ],
    };

  return (
    <>
         <Breadcrumb heading={"Scholarships​‍​‌‍​‍‌ in Latvia for International Students including ​‍​‌‍​‍‌Indian"}/>
         <div className='py-5 px-5'>
           <h2 className='font-aino text-2xl md:text-4xl'>Scholarships in Latvia for Indian Students</h2>
               <p className='text-justify font-roboto text-md mt-3'>Latvian universities and educational institutions offer various scholarship opportunities to
                  support Indian students pursuing higher education. These scholarships can help reduce tuition
                  expenses and make studying in Latvia more affordable for students seeking a globally
                  recognised European degree.<br /> Many universities provide merit-based scholarships, tuition fee discounts, and financial
                  assistance programmes for eligible students. In addition, certain funding opportunities may be
                  available through educational exchange programmes and research initiatives.</p>
                  <div className="mt-10"> 
                     <div className="mt-5">
                     <h4 className="text-lg font-semibold font-roboto">Scholarship Opportunities in Latvia</h4>
                     <p className="text-base font-inter mt-3">Students may find financial support through different types of scholarship programmes, including:</p>
                     <ul className="mt-3 space-y-2">
                      <li>
                          <h5 className="text-lg font-roboto font-semibold">Merit-Based Scholarships</h5>
                          <p className="text-md font-inter">Awarded to students with strong academic achievements and outstanding educational performance.</p>
                      </li>
                      <li>
                          <h5 className="text-lg font-roboto font-semibold">University Scholarships</h5>
                          <p className="text-md font-inter">Many universities in Latvia offer scholarships and tuition fee reductions for talented international students.</p>
                      </li>
                      <li>
                          <h5 className="text-lg font-roboto font-semibold">Tuition Fee Discounts</h5>
                          <p className="text-md font-inter">Selected institutions may provide partial tuition fee waivers to eligible applicants based on academic merit and admission criteria.</p>
                      </li>
                      <li>
                          <h5 className="text-lg font-roboto font-semibold">Research and Academic Funding</h5>
                          <p className="text-md font-inter">Research students and PhD candidates may have access to funding opportunities that support academic projects and research activities.</p>
                      </li>
                     </ul>
                     </div>
                     <div className="mt-5">
                     <h4 className="text-lg font-semibold font-roboto text-[#3d3d3d]">Scholarship Eligibility</h4>
                     <p className="text-md font-inter mt-2">Eligibility requirements may vary depending on the university and scholarship programme. Generally, students may need:</p>
                     <ul className="mt-3 space-y-2">
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Good academic performance</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Admission to a Latvian university</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English language proficiency (if required)</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Statement of Purpose (SOP)</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Updated CV or Resume</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Supporting academic documents</li>
                     </ul>
                     </div>
                     <div className="mt-5">
                     <h4 className="text-xl md:text-2xl font-roboto text-[#3d3d3d]">Documents Required</h4>
                     <p className="text-base font-roboto mt-3">Students are commonly asked to submit:</p>
                     <ul className="mt-5 space-y-2">
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Academic transcripts and certificates</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Passport copy</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;University admission letter</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Statement of Purpose (SOP)</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbspCV/Resume</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;English proficiency proof</li>
                        <li className="text-md font-inter"><IoIosArrowForward className='size-6 inline-block'/>&nbsp;Scholarship application documents (if applicable)</li>
                     </ul>
                     </div>
                    <div className="mt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-12 bg-[#FFB81C] rounded-full"></div>
                      <h4 className="text-2xl md:text-3xl font-bold font-roboto text-[#15803D]">
                        How to Apply for Scholarships in Latvia
                      </h4>
                    </div>

                    <div className="relative">
                      <div className="absolute left-5 top-0 h-full w-1 bg-[#048D4E]/20 rounded-full"></div>

                      <div className="space-y-6">
                        <div className="relative flex gap-5">
                          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#048D4E] text-white font-bold shadow-lg">
                            1
                          </div>

                          <div className="flex-1 bg-white border border-[#048D4E]/15 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                            <h5 className="text-lg font-semibold text-[#15803D]">
                              Choose Your University
                            </h5>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                              Select a course and university that aligns with your academic
                              interests and long-term career goals.
                            </p>
                          </div>
                        </div>

                        <div className="relative flex gap-5">
                          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#FFB81C] text-[#3d3d3d] font-bold shadow-lg">
                            2
                          </div>

                          <div className="flex-1 bg-white border border-[#FFB81C]/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                            <h5 className="text-lg font-semibold text-[#3d3d3d]">
                              Explore Available Scholarships
                            </h5>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                              Review scholarship opportunities offered by universities and other funding programmes
                              available to international students.
                            </p>
                          </div>
                        </div>

                        <div className="relative flex gap-5">
                          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#BE3A34] text-white font-bold shadow-lg">
                            3
                          </div>

                          <div className="flex-1 bg-white border border-[#BE3A34]/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                            <h5 className="text-lg font-semibold text-[#BE3A34]">
                              Submit Your Application
                            </h5>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                              Complete the scholarship application process and provide all required documents before the
                              deadline. Applying early can improve your chances of receiving financial support.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                      <h4 className="text-xl md:text-2xl font-roboto">Make Your European Education More Affordable</h4>
                      <p className="text-base font-inter mt-3">Scholarships in Latvia provide valuable financial assistance for students who want to study in
                        Europe while managing educational expenses effectively. By researching available funding
                        opportunities and preparing strong applications, students can make their study abroad journey
                        more accessible and rewarding.</p>
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