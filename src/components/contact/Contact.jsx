import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";


const Contact = () => {
    const formRef = useRef()
    const [done,setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_7vqjjj4', 'template_49zu109', formRef.current, 'user_eSskl0EhSgXXbBuBwbRQy')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          window.location.reload(false);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div classname="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +62 851 5637 6686
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            rezdiany@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            South Jakarta, DKI Jakarta
                        </div>
                    </div>
                </div>
                <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Get in Touch. Always available for freelancing if the right project comes along me 
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{ backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{ backgroundColor: darkMode && "#333" }} type="email" placeholder="Email" name="user_email" />
                    <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="user_message"></textarea>
                    <button>Submit</button>
                    {done && "Thank You For Message..."}
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
