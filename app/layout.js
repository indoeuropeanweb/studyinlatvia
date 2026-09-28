import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const ainoFont = localFont({
  src: [
    {
      path: './fonts/Aino-Headline.otf',
      weight: "400",
      style: 'normal',
    }
  ],
  variable: '--font-ainoFont',
})

export const metadata = {
  metadataBase: new URL('https://www.studyinlatvia.in'),

  title:
    "Study in Latvia Consultant | Top Universities, Student Visa & Admission",

  description:
    "Study in Latvia consultant. We provide clear steps by step for top university Admission and visa approvals. Check out our top University lists and apply today.",

  keywords: ["Study in Latvia", "Study in Latvia for Indian Students", "Latvia Universities", "Study Abroad Latvia", "Latvia Student Visa", "Latvia Education Consultants", "Universities in Latvia", "Study in Europe", "Latvia Admission", "Latvia Scholarships"],

  alternates: {
    canonical: 'https://www.studyinlatvia.in',
  },

  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${robotoMono.variable} ${ainoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <Link className="fixed z-5 bottom-10 right-10 bg-green-600 p-2 rounded-full" href="https://wa.link/67ng4e" target="_blank">
           <FaWhatsapp className="size-8 text-white"/>
        </Link>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-C2KSTLP805');
        `}
      </Script>
      </body>
    </html>
  );
}
