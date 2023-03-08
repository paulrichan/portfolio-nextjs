/* eslint-disable @next/next/no-img-element */
import ContactForm from '@/components/ContactForm'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

function App() {
   const [isNavOpen, setIsNavOpen] = useState(false)
   const projectCardInfo = [
      {
         tagWords: ['Next.js', 'React', 'TypeScript', 'Prisma', 'tRPC', 'Tailwind', 'PlanetScale', 'MySQL'],
         title: 'Registered Behavior Technician Tracking Tool',
         link: 'https://rbt-tracker.vercel.app/',
         src: '/rbt-showcase.png',
         desc: 'This is a web application that is built with Next.js, MySQL, tRPC, and Prisma. The front end uses a tailwind plugin called DaisyUI. The application is hosted on vercel and the MySQL database is hosted on PlanetScale. The main use of the application is for Registered Behavior Technicians to track their working hours in order to receive a certification to further advance their career. To test, you can go through the authentication flow like normal and input dummy information to reach the dashboard.',
         visible: false,
      },
      {
         tagWords: ['Next.js', 'React', 'TypeScript', 'REST', 'Tailwind', 'Figma', 'SWR'],
         title: "Pepiti's Dashboard",
         link: 'https://pepiti.com/',
         src: '/pepiti-home.png',
         desc: 'This is an active, real world application that I am currently working on with 2 other individuals. I built the majority of the front end that consumes a REST api built by one of the members of the team. The data comes from a racing game that generates stats after each race, we save it to a database and our website is a beautiful way to view the data!',
         visible: false,
      },
      {
         tagWords: ['Next.js', 'React', 'TypeScript', 'REST', 'CSS', 'Next Auth', 'Strapi', 'Railway'],
         title: 'Real Estate Portfolio',
         link: 'https://re-portfolio-fake.vercel.app/',
         src: '/property-page.png',
         desc: "Real Estate Portfolio is a proof of concept CMS CRUD application where real estate agents can upload information about their listings and give their clients a dashboard experience to view all their agent's personal listings. Other agents are also searchable, allowing people that are in the market to explore all of their options. This project is currently not hosted due to costs required to host it.",
         visible: true,
      },
      {
         tagWords: ['Next.js', 'React', 'TypeScript', 'MantineUI', 'Prisma', 'tRPC'],
         title: 'Kittr',
         link: 'https://kittr.gg/',
         src: '/kittr-home.png',
         desc: 'Kittr is the first project that I provided some help on while I was under contract at In the Zone Development. It provides streamers, who play the popular video game - Call of Duty, a dashboard to upload the weapon kits that they use in game so their viewers can copy and see what they are using. I mostly contributed to front end development with features like the side scroller component on the home page, a dashboard tutorial for new users, and refactoring a lot of messy code.',
         visible: true,
      },
   ]

   const projectCards = projectCardInfo.map((cardInfo, idx) => <ProjectCard key={idx} {...cardInfo} />)

   return (
      <>
         <nav>
            <div className='nav-container'>
               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <img className='signature' src='/initials.png' alt='' />

                  <button className='hamburger' onClick={() => setIsNavOpen(!isNavOpen)}>
                     <img src='/hamburger.svg' alt='' />
                  </button>
               </div>

               <div className='nav-links'>
                  <a className='nav-link' href='#about'>
                     About
                  </a>
                  <a className='nav-link' href='#projects'>
                     Projects
                  </a>
                  <a className='nav-link' href='#contact'>
                     Contact
                  </a>
               </div>
            </div>
            <div
               className='nav-menu-container'
               style={{
                  top: isNavOpen ? '100%' : '-400px',
               }}
            >
               <div className='nav-menu'>
                  <a href='#about' onClick={() => setIsNavOpen(false)}>
                     About
                  </a>
                  <a href='#projects' onClick={() => setIsNavOpen(false)}>
                     Projects
                  </a>
                  <a href='#contact' onClick={() => setIsNavOpen(false)}>
                     Contact
                  </a>
               </div>
            </div>
         </nav>

         <div className='App'>
            <div className='container'>
               <div className='hero'>
                  <div className='cube1'></div>
                  <div className='cube2'></div>
                  <div className='cube3'></div>

                  <div className='name-container'>
                     <h1 className='name'>Paul Richan</h1>

                     <p>Full Stack Web Developer</p>
                  </div>
               </div>
            </div>

            <div className='container'>
               <div id='about'>
                  <div className='section-header'>
                     <h2 className='section-title'>About Me</h2>
                     <div className='accent-underline' />
                  </div>

                  <div className='about-me'>
                     <img className='profile-img' src='/me.png' alt='me' />

                     <p>
                        I attended the <span className='usd-underline'>University of San Diego</span> from 2015-2018,
                        during my junior year I was drafted by the Chicago Cubs to play professional baseball. During my
                        time as a professional athlete, I taught myself how to develop websites. I am now attending{' '}
                        <span className='asu-underline'>Arizona State University</span> in pursuit of a degree in
                        Graphic Information Technology (Full Stack Web Development) with an expected graduation year of
                        2024. I am currently seeking a position as a Full Stack Web Developer.
                     </p>
                  </div>
               </div>
            </div>

            <div className='container'>
               <div id='projects' className='projects'>
                  <div className='section-header'>
                     <h2 className='section-title'>Projects</h2>
                     <div className='accent-underline' />
                  </div>

                  <div className='card-container'>{projectCards}</div>
               </div>
            </div>

            <div className='container'>
               <div id='contact' className='contact'>
                  <div className='cube-contact' />
                  <ContactForm />
               </div>
            </div>

            <footer>
               <hr />
               <p>Created by Paul Richan</p>
               <a href='https://github.com/paulrichan' target='_blank' rel='noreferrer'>
                  <img src='/GitHubLogo.svg' alt='' />
               </a>
            </footer>
         </div>
      </>
   )
}

export default App
