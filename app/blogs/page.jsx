import Link from "next/link";
import { blogs } from "@/public/data/blogs";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";


export const metadata = {
  title: "Best Study in Latvia Consultants Blog: By Our Top Expert Advice",
  description: "Explore Study in Latvia Consultants Blogs for expert advice on Latvian universities, student visas, admissions, scholarships, living costs, and student life.",
  keywords: ["Study in Latvia Consultants Blogs", "Study in Latvia Blogs", "Latvia Study Abroad Blogs", "Study in Latvia Consultants", "Latvia Universities", "Latvia Student Visa", "Study in Latvia for Indian Students", "Latvia Scholarships", "Latvia Admission Process", "Study Abroad Consultants"],
  alternates: {
    canonical: "https://www.studyinlatvia.in/blogs/"
  },
  robots: {
    index: true,
    follow: true,
  },
    openGraph: {
    type: "website",
    url: "https://www.studyinlatvia.in/blogs/",
    title:
      "Best Study in Latvia Consultants Blog: By Our Top Expert Advice",
    description:
      "Explore Study in Latvia Consultants Blogs for expert advice on Latvian universities, student visas, admissions, scholarships, living costs, and student life.",
    siteName: "Study in latvia",
    locale: "en_US",
    images: [
      {
        url: "https://www.studyinlatvia.in/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "International Students Blog Latvia",
      },
    ],
  },
}

export default function Blogs() {

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
        url: "https://www.studyinlatvia.in/wp-content/uploads/logo.png",
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
      "@type": "Blog",
      "@id": "https://www.studyinlatvia.in/blogs/#blog",
      url: "https://www.studyinlatvia.in/blogs/",
      name: "Study in latvia Blog",
      description:
        "Educational resources, admission guides, scholarship updates, visa information, student life tips and university insights for international students planning to study in latvia.",
      publisher: {
        "@id": "https://www.studyinlatvia.in/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.studyinlatvia.in/blogs/#webpage",
      url: "https://www.studyinlatvia.in/blogs/",
      name: "Study in latvia Blog",
      description:
        "Explore blogs about latvian universities, admissions, scholarships, visas, accommodation, living costs and student life.",
      isPartOf: {
        "@id": "https://www.studyinlatvia.in/#website",
      },
      breadcrumb: {
        "@id": "https://www.studyinlatvia.in/blogs/#breadcrumb",
      },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.studyinlatvia.in/blogs/#collectionpage",
      url: "https://www.studyinlatvia.in/blogs/",
      name: "Study in latvia Blogs",
      description:
        "Collection of blog articles and study guides for international students.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlatvia.in/blogs/#breadcrumb",
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
          name: "Blogs",
          item: "https://www.studyinlatvia.in/blogs/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What topics are covered in the Study in latvia Blog?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The blog covers universities, admissions, scholarships, visas, accommodation, student life, living costs, work opportunities and study abroad guidance.",
          },
        },
        {
          "@type": "Question",
          name: "Are these blogs useful for Indian students?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the blogs are designed to help Indian students understand the admission process, visa requirements, scholarships and life in latvia.",
          },
        },
        {
          "@type": "Question",
          name: "Can I find scholarship and visa updates on this blog?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the blog regularly publishes information about scholarships, university deadlines, admissions and visa procedures.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.studyinlatvia.in/blogs/#image",
      contentUrl:
        "https://www.studyinlatvia.in/wp-content/uploads/study-in-latvia-blog.jpg",
      caption: "Study in latvia Blog for International Students",
      representativeOfPage: true,
    },
  ],
};

  return (
    <>
    <Breadcrumb heading="Study in Latvia Blog – Guides, Tips, and ​‍​‌‍​‍‌Student" />
    <div className="max-w-6xl mx-auto py-10 px-5">
      <h2 className="text-2xl md:text-4xl font-aino mt-5">Study in Latvia Blogs & Student Guides</h2>
      <p className="text-base font-roboto mt-3 mb-10">Explore the latest updates, expert guidance, and student resources about studying in latvia. From university admissions and latvia student visa processes to scholarships, accommodation, career opportunities, and student life, our blogs are designed to help international students make informed decisions about their latvia journey. Stay updated with valuable insights, practical tips, and real experiences to successfully plan your education in latvia.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[...blogs].reverse().map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog.id}
            className="border rounded-xl overflow-hidden hover:scale-102 duration-500 ease-in-out"
          >
          <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
              width={480}
              height={320}
          />
          <div className="p-4">
            <h3 className="font-semibold font-aino text-base md:text-xl">
              {blog.title}
            </h3>

              <div
                // href={`/blogs/${blog.slug}`}
                className="text-blue-600 mt-5 inline-block hover:underline"
              >
                Read More →
              </div>
              {/* <p className="font-roboto text-sm md:text-md text-end">{blog.publishDate}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}