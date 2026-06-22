import React from 'react'
import Sidebar from '../components/Sidebar';


const menuItems = [
  {
    name: "State",
    href: "/latvia/state"
  },
  {
    heading: "Nature and Climate",
    href: "/latvia/nature-and-climate"
  },
  {
    heading: "Economy",
    href: "/latvia/economy"
  },
  {
    heading: "Culture",
    href: "/latvia/culture"
  },
  {
    heading: "Life-style and Character",
    href: "/latvia/life-style-and-character"
  },
  {
    heading: "Language",
    href: "/latvia/language"
  }
];

const StudyLayout = ({children}) => {

  return (
    <section className='grid grid-cols-5'>
        <div className='hidden lg:block lg:col-span-1'>
           <Sidebar menuItems={menuItems}/>
        </div>
        <div className='col-span-5 lg:col-span-4'>
           {children}
        </div>
    </section>
  )
}

export default StudyLayout