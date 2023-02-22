/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from '../styles/ProjectCard.module.css'
import Tag from './Tag'

interface ProjectCardProps {
   title: string
   src: string
   desc: string
   link: string
   tagWords: string[]
   visible: boolean
}

function ProjectCard(props: ProjectCardProps) {
   const { title, src, desc, link, tagWords, visible } = props

   const tags = tagWords.map((tag) => <Tag key={tag} tagName={tag} />)

   return (
      <a target='_blank' rel='noreferrer' className={styles.card_link} href={link}>
         <div className={styles.card}>
            <div className={styles.image_container}>
               <Image src={src} fill alt='proj img' />
            </div>

            <div className={styles.info_container}>
               <h3>{title}</h3>

               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img className={styles.github} src='/GitHubLogo.svg' alt='' />
                  <p>{visible ? 'Public' : 'Private'}</p>
               </div>

               <div className={styles.tag_container}>{tags}</div>

               <p>{desc}</p>

               <div className={styles.mobile_link}>🔗</div>
            </div>
         </div>
      </a>
   )
}

export default ProjectCard
