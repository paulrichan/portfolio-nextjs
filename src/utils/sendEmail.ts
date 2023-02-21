import axios from 'axios'

const sendEmail = async (email: string, message: string, name: string) => {
   return axios({
      method: 'post',
      url: '/api/sendmail',
      data: {
         name: name,
         email: email,
         message: message,
      },
   })
}

export default sendEmail
