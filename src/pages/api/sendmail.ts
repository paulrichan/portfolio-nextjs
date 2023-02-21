// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const message = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: 'Portfolio Message from ' + req.body.name,
      text: req.body.message,
      html: `<p>${req.body.message}</p>`,
   }

   let transporter = nodemailer.createTransport({
      service: 'iCloud',
      auth: {
         user: process.env.NODEMAILER_EMAIL,
         pass: process.env.NODEMAILER_PASS,
      },
   })

   if (req.method === 'POST') {
      transporter.sendMail(message, (err: any, info: any) => {
         if (err) {
            res.status(404).json({
               error: `Connection refused at ${err.address}`,
            })
         } else {
            res.status(250).json({
               success: `Message delivered to ${info.accepted}`,
            })
         }
      })
   }
}
