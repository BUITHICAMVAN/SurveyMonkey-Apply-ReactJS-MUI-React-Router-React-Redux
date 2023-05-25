import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FirstForm from './FirstForm';
import "../css/index.css"

export default function Consent() {
    // // cac bien la 1 trang thai 
    // const [age, setAge] = useState(21);
    // //function, array cac gia tri
    // // nhan biet content da duoc render hay chua
    
    // useEffect (() => {
    //     setAge(age + 1)
    // }, [])

  useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, []);

  return (
    <div className='consent_main' id='consent'>
      <div className='consent_content'>
        <div className='consent_top'>
          <div className='consent_item'>
            <h3>Thank you for your interest</h3>
            <span className='consent_top-italic'>Please read the information below.</span><br/>
          <p>Once you have read and understood the information, if you agree to take part in the <br/> research, click on the   
          <span className='consent_top-bold'> "I agree"</span> button to begin the survey.</p>
          </div>
        </div>
        <div className='consent_bottom'>
          <div className='consent_item'>
            <h3>Why are we asking you to take part?</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolore accusamus molestiae veritatis. Nihil asperiores perferendis ut soluta, rem quidem laudantium tempora odit, veritatis libero ipsam accusantium a deleniti voluptatum!</p>
            <h3>Why are we asking you to take part?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius illo itaque obcaecati dignissimos quidem laudantium, ex sequi tempore ad enim culpa id molestiae odio inventore quos sapiente maiores error? <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolore consequatur perferendis fugit quos error labore perspiciatis odit! Quos earum laboriosam itaque sed iusto officiis. Voluptates vel laboriosam deleniti aliquam.<br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolore consequatur perferendis fugit quos error labore perspiciatis odit! Quos earum laboriosam itaque sed iusto officiis. Voluptates vel laboriosam deleniti aliquam.<br/></p>
          <h3>How will we use the information?</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolore consequatur perferendis fugit quos error labore perspiciatis odit! Quos earum laboriosam itaque sed iusto officiis. Voluptates vel laboriosam deleniti aliquam.<br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates vel laboriosam deleniti aliquam.<br/></p>
          <h3>What if I change my mind?</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolore consequatur perferendis fugit quos error labore perspiciatis odit! Quos earum laboriosam itaque sed iusto officiis. Voluptates vel laboriosam deleniti aliquam.<br/></p>
          <h3>How can I find the results of the research</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolore consequatur perferendis fugit quos error labore perspiciatis odit! Quos earum laboriosam itaque sed iusto officiis. Voluptates vel laboriosam deleniti aliquam.<br/></p>
          <h3>Who do I contact to ask questions, or if I want to complain?</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolore consequatur perferendis fugit quos error labore perspiciatis odit! Quos earum laboriosam itaque sed iusto officiis. Voluptates vel laboriosam deleniti aliquam 
          <span>(research@gameloft.com)</span>.</p>
          </div>
        </div>
        <div className='consent_captcha'>
          <form action="?" method="POST">
            <div className="g-recaptcha" data-sitekey="6LfFZDYmAAAAAPVCdV5gDMJBkX--meTo2K8qB4bu"></div>
            <br/>
            <div className='button_g-recaptcha'>
              <Button className="button button_captcha-outlined" variant="outlined">Cancel</Button>
              <Button className = 'button button_captcha-contained' variant="contained"><Link className='link-white' to="/FirstForm">I have read and agree with the terms of use</Link></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
