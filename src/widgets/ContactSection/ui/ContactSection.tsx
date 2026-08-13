import React from 'react';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';

export const ContactSection: React.FC = () => {
  const { ref, isLoaded } = useScrollAnimation(400);

  
  return (
    <>
<section className="section" id="contact" ref={ref} >
<h1 className="title-section">contact</h1>
<div className="box-contact">
<form action="https://api.web3forms.com/submit" className={`detail-box-contact ${isLoaded ? "load" : ""}`} method="POST">
<input name="access_key" type="hidden" value="01369eac-1f50-4b4b-b008-3e80dfb69065"/>
<div className="decorate-contact">
{/*  <i className="fa-regular fa-envelope"></i>  */}
{/*  <i className="fa-solid fa-at"></i>  */}
<i className="fa-solid fa-inbox"></i>
</div>
<label htmlFor="name-contact"><p>name</p></label>
<input id="name-contact" name="name-contact" required type="text"/>
<label htmlFor="email-contact"><p>email</p></label>
<input id="email-contact" name="email-contact" required type="email"/>
<label htmlFor="subject-contact"><p>subject</p></label>
<input id="subject-contact" name="subject-contact" required type="text"/>
<label htmlFor="message-contact"><p>message</p></label>
                <textarea name="message-contact" id="message-contact" wrap="soft" rows={6} required> </textarea>
<div className="button-contact">
<div className="ani-hover">
<input id="button-contact" type="submit" value="SEND MESSAGE"/>
</div>
</div>
</form>
<div className={`detail-box-contact ${isLoaded ? "load" : ""}`}>
<div className="decorate-contact">
{/*  <i className="fa-regular fa-envelope"></i>  */}
{/*  <i className="fa-solid fa-at"></i>  */}
<i className="fa-solid fa-phone"></i>
{/*  <i className="fa-regular fa-message"></i>  */}
{/*  <i className="fa-solid fa-bolt"></i>  */}
</div>
{/*  <div className="head-logo-contact">
                        <p>VStorm</p>
                    </div>
                    <div className="body-logo-contact"></div>  */}
<div className="box1-contact text-main">
                        i'll be glad to answer your questions!
                    </div>
<div className="logo-contact">
<img alt="logo" src={`${import.meta.env.BASE_URL}assets/logo/logo.png`}/>
</div>
<div className={`box2-contact ${isLoaded ? "load" : ""}`}>
<div className="content-contact">
<h3 className="head-content-contact">my phone</h3>
<h2 className="body-content-contact none-decoration">0915014470</h2>
</div>
<div className="content-contact">
<h3 className="head-content-contact">my email</h3>
<h2 className="body-content-contact">
<p>tranvubao2004<span>@</span><span>gmail.com</span> </p>
</h2>
</div>
<div className="content-contact">
<h3 className="head-content-contact">my social</h3>
<div className="body-content-contact">
<a href="https://www.facebook.com/VStorm.TVB" target="_blank">
<i className="fa-brands fa-square-facebook"></i>
</a>
<a href="https://www.instagram.com/I_Dont_Have_Instagram:&gt;" target="_blank">
<i className="fa-brands fa-square-instagram"></i>
</a>
<a href="https://github.com/BaoVStorm" target="_blank">
<i className="fa-brands fa-square-github"></i>
</a>
<a href="https://www.linkedin.com/in/tranvubao-vstorm/" target="_blank">
<i className="fa-brands fa-linkedin"></i>
</a>
{/*  <a href="https://x.com/I_Dont_Have_X">
                                    <i className="fa-brands fa-square-x-twitter"></i>
                                </a>  */}
</div>
</div>
<div className="content-contact">
<h3 className="head-content-contact">call me</h3>
<div className="body-content-contact">
<a href="https://join.skype.com/invite/qHxc9or0fsDI" target="_blank">
<i className="fa-brands fa-skype"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
};
