import React, { useState } from 'react'
import contactFormStyle from './contactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

function ContactForm() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [text,setText]=useState("");

  const onCallSubmit=()=>{
    console.log("CALL ")
  }

  const onSubmit=(event)=>{
    
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[1].value);
  
    // console.log(
    //   name,
    //   email,
    //   text 
    // )
  }




  return (
    <section className={contactFormStyle.container}>
    <div className={contactFormStyle.contact_form}>
        <div className={contactFormStyle.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage />}/>
        <Button onClick={onCallSubmit} text="VIA CALL" icon={<FaPhoneAlt />}/>
        </div>
        <Button
        isOutline={true} 
        text="VIA EMAIL" 
        icon={<HiMail fontSize="24px"/>}/>

        <form onSubmit={onSubmit}>

          <div className={contactFormStyle.form_container}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name'></input>
          </div>
          <div className={contactFormStyle.form_container}>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email'></input>
          </div>
          <div className={contactFormStyle.form_container}>
          <label htmlFor='text'>Text</label>
          <textarea name='email'></textarea>
          <div className={contactFormStyle.sub_btn}>
          <Button
          text="SUBMIT BUTTON"/>
          </div>
          </div>         
          <div>
            {name + "" +email+ "" +text}
          </div>
          
        </form>
    </div>
    <div className={contactFormStyle.contact_image}>
      <img src='/images/services.jpg' alt='sarviceimg'/>
    </div>
    </section>
  )
}

export default ContactForm
