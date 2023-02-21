import sendEmail from '@/utils/sendEmail'
import { useState } from 'react'
import useContactForm from '../hooks/useContactForm'
import styles from '@/styles/ContactForm.module.css'

const ContactForm = () => {
   const { values, handleChange } = useContactForm()
   const [responseMessage, setResponseMessage] = useState({ isSuccessful: false, message: '' })
   const [isSending, setIsSending] = useState(false)

   const handleSubmit = async (e: any) => {
      e.preventDefault()
      setIsSending(true)
      try {
         const req = await sendEmail(values.email, values.message, values.name)
         if (req.status === 250) {
            setResponseMessage({ isSuccessful: true, message: 'Thank you for your message.' })
         }
      } catch (e) {
         console.log(e)
         setResponseMessage({
            isSuccessful: false,
            message: 'Oops something went wrong. Please try again.',
         })
      } finally {
         setIsSending(false)
      }
   }

   return (
      <>
         {responseMessage.isSuccessful ? (
            <h1 className={styles.sent_msg}>Success! I&apos;ll be in touch soon!</h1>
         ) : (
            <>
               <h1>Contact me</h1>
               <form className={styles.form} onSubmit={handleSubmit}>
                  {isSending && <div className={styles.sending}>Sending...</div>}
                  <label htmlFor='email'>Email</label>
                  <input required id='email' value={values.email} onChange={handleChange} type='email' />
                  <label htmlFor='name'>Name</label>
                  <input required id='name' value={values.name ?? ''} onChange={handleChange} type='name' />

                  <label htmlFor='message'>Message</label>
                  <textarea required value={values.message} onChange={handleChange} id='message' rows={8} />
                  <button type='submit' value='Submit'>
                     Send
                  </button>
               </form>
            </>
         )}
      </>
   )
}

export default ContactForm
