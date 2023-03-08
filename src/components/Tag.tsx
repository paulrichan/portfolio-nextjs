import React from 'react'
import styles from '../styles/Tag.module.css'

interface TagProps {
   tagName: string
}

function Tag(props: TagProps) {
   const { tagName } = props

   function handleTagStyle(tagName: string) {
      const generateStyle = (color: string) => {
         return { background: color.slice(0, color.length - 1) + ', 0.2)', border: '1px solid ' + color }
      }

      switch (tagName) {
         case 'React':
            return generateStyle('rgb(97, 218, 251)')
         case 'TypeScript':
            return generateStyle('rgb(49, 120, 198)')
         case 'Tailwind':
            return generateStyle('rgb(6, 182, 212)')
         case 'Figma':
            return generateStyle('rgb(242, 78, 30)')
         case 'SWR':
            return generateStyle('rgb(128, 11, 212)')
         case 'CSS':
            return generateStyle('rgb(21, 114, 182)')
         case 'Strapi':
            return generateStyle('rgb(47, 46, 139)')
         case 'Railway':
            return generateStyle('rgb(11, 13, 14)')
         case 'Prisma':
            return generateStyle('rgb(45, 55, 72)')
         case 'tRPC':
            return generateStyle('rgb(37, 150, 190)')
         case 'MySQL':
            return generateStyle('rgb(68, 121, 161)')

         default:
            break
      }
   }

   return (
      <div className={styles.container} style={handleTagStyle(tagName)}>
         {tagName}
      </div>
   )
}

export default Tag
