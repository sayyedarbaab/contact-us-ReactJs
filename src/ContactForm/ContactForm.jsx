import React from 'react'
import contactFormStyle from './contactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

function ContactForm() {
  return (
    <section className={contactFormStyle.container}>
    <div className={contactFormStyle.contact_form}>
        <div className={contactFormStyle.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage />}/>
        <Button text="VIA CALL" icon={<FaPhoneAlt />}/>
        </div>
        <Button className={contactFormStyle.email_btn} text="VIA EMAIL" icon={<HiMail />}/>
    </div>
    <div className={contactFormStyle.contact_image}></div>
    </section>
  )
}

export default ContactForm
