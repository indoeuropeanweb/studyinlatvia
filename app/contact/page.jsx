import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Form from '../components/form/form';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from 'next/image';


export const metadata = {
  title: "Contact Study in Latvia Centre | Latvia Education Consultants in India",
  description: "Contact Study in Latvia Centre for expert guidance on Latvian university admissions, scholarships, student visas, course selection, and study abroad support for Indian students",
  keywords: ["contact Study in Latvia Centre", "Latvia education consultants India", "study in Latvia contact", "Latvia admission consultants", "Latvia visa consultants", "study abroad Latvia consultants", "Latvia university admission India", "Indian students Latvia", "Latvia counselling", "study in Latvia support"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/contact"
  },
    robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    title:
      "Contact Study in Latvia Centre | Latvia Education Consultants in India",
    description:
      "Get expert support for Latvia university admissions, scholarships, student visas, and study abroad counselling.",
    url: "https://www.studyinLatvia.in/contact/",
    siteName: "Study in Latvia Centre",
    images: [
      {
        url: "https://www.studyinLatvia.in/assets/images/contact/our-expert.webp",
        width: 1200,
        height: 630,
        alt: "Contact Study in Latvia Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Study in Latvia Centre | Latvia Education Consultants in India",
    description:
      "Contact our Latvia education consultants for admissions, scholarships, student visa guidance, and course selection support.",
    images: [
      "https://www.studyinLatvia.in/assets/images/contact/our-expert.webp",
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
        name: "Study in Latvia Centre",
        url: "https://www.studyinLatvia.in/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.studyinLatvia.in/images/logos/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+919650133355",
          contactType: "student admissions support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.studyinLatvia.in/#website",
        url: "https://www.studyinLatvia.in/",
        name: "Study in Latvia Centre",
        publisher: {
          "@id": "https://www.studyinLatvia.in/#organization",
        },
      },
      {
        "@type": "ContactPage",
        "@id":
          "https://www.studyinLatvia.in/contact/#contactpage",
        url: "https://www.studyinLatvia.in/contact/",
        name: "Contact Study in Latvia Centre",
        description:
          "Contact page for students seeking guidance on Latvia university admissions, scholarships, student visas, and study abroad counselling.",
        isPartOf: {
          "@id": "https://www.studyinLatvia.in/#website",
        },
        about: {
          "@id": "https://www.studyinLatvia.in/#organization",
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id":
          "https://www.studyinLatvia.in/#educationalorganization",
        name: "Study in Latvia Centre",
        url: "https://www.studyinLatvia.in/",
        description:
          "Education consultancy helping Indian students study in Latvia.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },

      {
        "@type": "LocalBusiness",
        "@id":
          "https://www.studyinLatvia.in/contact/#localbusiness",
        name: "Study in Latvia Centre",
        url: "https://www.studyinLatvia.in/",
        image: "https://www.studyinLatvia.in/images/logos/logo.png",
        telephone: "+919650133355",
        email: "info@studyinLatvia.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "First Floor, 18/1 -A, Jail Road, Opposite Tilak Nagar Metro Station Gate no - 4, Above Sona Baker, New Delhi-110058.",
          addressLocality: "Tilak Nagar",
          addressRegion: "Delhi",
          postalCode: "110058",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        priceRange: "$$",
      },

      {
        "@type": "Service",
        "@id": "https://www.studyinLatvia.in/contact/#service",
        name: "Latvia Study Abroad Consultation",
        serviceType: "Education Consultancy",
        provider: {
          "@id": "https://www.studyinLatvia.in/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        description:
          "Student counselling, university selection, application support, scholarship guidance, visa documentation support, and pre-departure assistance for studying in Latvia.",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.studyinLatvia.in/contact/#breadcrumb",
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
            name: "Contact",
            item: "https://www.studyinLatvia.in/contact/",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Breadcrumb heading={"Contact​‍​‌‍​‍‌​‍​‌‍​‍‌ us for expert advice on studying in ​‍​‌‍​‍‌​‍​‌‍​‍‌Latvia"}/>
      <section className='max-w-6xl mx-auto'>
         <div className='px-5 py-10'>
             <div className=''>
                <h2 className='text-2xl md:text-4xl font-aino'>Get in Touch With Our Latvia Education Advisors</h2>
                <h4 className='text-md md:text-lg font-roboto mt-3'>Connect With Us for Expert Study in Latvia Guidance</h4>
                <p className='text-md font-inter mt-3 text-justify'>Thinking about studying in Latvia? Whether you&#39;re searching for the right university, exploring available scholarships, or looking for assistance with the Latvia admission and student visa process, our team is here to support you every step of the way.</p>
                <p className='text-md font-inter mt-3 text-justify'>Studying abroad is a major decision that can shape your future. Our experienced counsellors provide personalised advice to help students make informed choices about universities, courses, and career opportunities while ensuring a smooth and hassle-free application process.</p>
             </div>
             <div className='mt-10'>
              <div className='grid md:grid-cols-3 grid-cols-1 gap-5 border-2 border-dotted border-secondary p-4 rounded-lg bg-gray-100'>
                <div className='col-span-1 px-3'>
                <h2 className='text-xl md:text-2xl font-aino mt-3'>Book Your Free Latvia Study Consultation</h2>
                <p className='text-md font-inter mt-3 text-justify'>Need expert advice before applying? Schedule a free consultation with our study abroad
                  specialists and receive guidance tailored to your academic profile, study preferences, and future
                  career plans.</p>
                <div className='mt-5'>
                <h4 className='text-lg font-inter font-semibold text-primary'>Follow us on :-</h4>
                <ul className='flex mt-2 gap-3 items-center'>
                  <li className=''><Link className="px-2 py-2 flex justify-center items-center rounded-full bg-tertiary text-white hover:scale-110 duration-300 ease-in-out" href="https://www.facebook.com/Indoeuropean.in" target="_blank"><FaFacebook className='size-5 inline-block'/></Link></li>
                  <li className=''><Link className="px-2 py-2 flex justify-center items-center rounded-full bg-tertiary text-white hover:scale-110 duration-300 ease-in-out" href="https://www.instagram.com/indo_european" target="_blank"><FaInstagram  className='size-5 inline-block'/></Link></li>
                  <li className=''><Link className="px-2 py-2 flex justify-center items-center rounded-full bg-tertiary text-white hover:scale-110 duration-300 ease-in-out" href="https://www.youtube.com/IEESIndoEuropean" target="_blank"><FaYoutube  className='size-5 inline-block'/></Link></li>
                </ul>
                </div>
                </div>
                <div className='col-span-2'>
                  <Form />
                </div>
              </div>
             </div>
             <div className='my-10 mx-5'>
                <h4 className='mt-5 text-xl md:text-2xl font-aino'>How We Can Help You?</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <ul className='space-y-2 mt-3'>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;University and programme selection</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Latvia admission support</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Scholarship information and assistance</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Student visa guidance</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Application and document review</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;SOP and profile evaluation</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Interview guidance</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Pre-departure support</li>
                    <li className='text-lg font-roboto'><IoIosArrowForward className='inline-block size-6'/>&nbsp;Post-admission assistance</li>
                </ul>
                <Image className="rounded-md" width={520} height={250} src="/images/contact/contact.webp" alt="Meet Our Experts" />
                </div>
                <p className='text-base text-inter mt-3 text-justify'>Our dedicated team works closely with students to simplify the study abroad process and help
                  them confidently prepare for their academic journey in Latvia.</p>
              </div>
             <div className='my-10 mx-5'>
                   <h2 className='text-2xl md:text-4xl font-aino'>Visit Our Office for One-to-One Counselling</h2>
                   <p className='mt-3'>If you prefer personal interaction, meet our advisors for detailed guidance on studying in Latvia.
                      We’ll answer your questions, discuss your options, and help you create a clear roadmap
                      towards achieving your international education goals.</p>
                      <div className='py-5'>
                      <div className='border-2 border-dotted border-secondary p-4 rounded-md'>
                        <div>
                          <h4 className='text-xl md:text-2xl font-semibold font-roboto'>
                            Address:
                          </h4>
                          <p className='text-lg font-inter mt-3'>
                            First Floor, 18/1 -A, Jail Road, Opposite Tilak Nagar Metro Station Gate no - 4,
                            Above Sona Baker, New Delhi-110058.
                          </p>
                        </div>
                        <div className='mt-3'>
                          <iframe
                            className='w-full rounded-md'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.7675210874636!2d77.09410477475721!3d28.63559637566306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bee270eea1%3A0xa4b0610ae05bae2d!2sIndo%20European%20%7C%20Study%20Abroad%20Consultants%20-%20Head%20Office!5e1!3m2!1sen!2sin!4v1780644883915!5m2!1sen!2sin"
                            height="320"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                          />
                        </div>
                      </div>
                   </div>
              </div>
         </div>
      </section>
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