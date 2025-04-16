import { useState } from "react"; 
import { useForm, ValidationError } from '@formspree/react';
import '../styles/contactform.css'

export default function Form({ content }) {
  const [state, handleSubmit] = useForm("xoqglpjd");  
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  if (state.succeeded) {
    setTimeout(() => {
    setEmail("");
    setSubject("");
    setMessage("");
    }, 2000);
  }
 

  return (
    <form onSubmit={handleSubmit} className='contact-form' method='post'>      
      <div className="input-container">
        <label htmlFor='email' className=''>{ content.labels.email }</label>
        <input
          type='email'
          id='email'
          name='email'
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          className=''
          placeholder=''
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="input-container">
        <label htmlFor='subject' className=''>{ content.labels.subject }</label>
        <input
          type='text'
          id='subject'
          name='subject'
          value={subject || ""}
          onChange={(e) => setSubject(e.target.value)}
          className=''
          placeholder=''
          required
        />
        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      </div>      
      <div className="input-container">
        <label htmlFor='message' className=''>{ content.labels.message }</label>
        <textarea
          id='message'
          name='message'
          rows={6}
          value={message || ""}
          onChange={(e) => setMessage(e.target.value)}
          className=''
          placeholder=''>
        </textarea>
          <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
    <button type='submit' disabled={state.submitting} className='submit-btn'>
       { state.submitting ? <span className=""> { content.labels.sending } </span> : content.labels.send }
      </button>
      { state.succeeded && <p className="sent-tag">&#x2714; {content.labels.sent}</p> }
    </form>
  );
}