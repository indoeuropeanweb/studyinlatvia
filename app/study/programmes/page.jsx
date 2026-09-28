import ProgrammeClient from "./ProgrammeClient"

export const metadata = {
  title: "Study Programmes in Latvia | Find Your Degree Course Here",
  description: "Looking for study programmes in Latvia? Compare top courses, degree, tuition costs. We make admission simple for Indian students. Start your application.",
  keywords: ["bachelors degree", "bachelors degree in Latvia", "study bachelors degree in Latvia", "bachelor's programs in Latvia", "Latvia universities", "undergraduate degree Latvia", "study in Latvia", "Latvia bachelor courses", "bachelor's degree for Indian students", "affordable bachelor's degree Europe", "English taught bachelor's programs", "study abroad Latvia", "higher education Latvia", "Latvia admission consultants", "Indo European"],
  alternates: {
    canonical: "https://www.studyinLatvia.in/study/programmes"
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    type: "website",
    url: "https://www.studyinLatvia.in/study/programmes/",
    siteName: "Study in Latvia",
    title:
      "Study Programmes in Latvia | Find Your Degree Course Here",
    description:
      "Looking for study programmes in Latvia? Compare top courses, degree, tuition costs. We make admission simple for Indian students. Start your application.",
    images: [
      {
        url: "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
        width: 1200,
        height: 630,
        alt: "Programmes in Latvia",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Study Programmes in Latvia | Find Your Degree Course Here",
    description:
      "Looking for study programmes in Latvia? Compare top courses, degree, tuition costs. We make admission simple for Indian students. Start your application.",
    images: [
      "https://www.studyinLatvia.in/images/study/Latvia-01.webp",
    ],
  },
}

const page = () => {
 

  return (
    <>
     <ProgrammeClient />
    </>
  )
}

export default page