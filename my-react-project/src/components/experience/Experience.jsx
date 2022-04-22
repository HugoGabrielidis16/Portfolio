import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>
                The Skills I have
            </h5>
            <h2>My Experience</h2>

            <div className="container experience_container">   
                <div className="experience_datasciensce">    
                    <h3> Data Science </h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                        <BsPatchCheckFill className= 'experience_details-icon' />
                        <div>
                        <h4> Python</h4>
                        <small className='text-light'> Experienced </small>
                        </div>
                         </article>
                         <article className='experience_details'>
                        <BsPatchCheckFill className= 'experience_details-icon' />
                        <div>
                        <h4> C++ </h4>
                        <small className='text-light'> Intermediate </small></div>
                         </article>
                         <article className='experience_details'>
                        <BsPatchCheckFill className= 'experience_details-icon' />
                        <div>
                        <h4> R </h4>
                        <small className='text-light'> Intermediate </small></div>
                         </article>
                         <article className='experience_details'>
                        <BsPatchCheckFill className= 'experience_details-icon' />
                        <div>
                        <h4> PostegreSQL </h4>
                        <small className='text-light'> Experienced </small></div>
                         </article>
                         <article className='experience_details'>
                        <BsPatchCheckFill className= 'experience_details-icon' />
                        <div>
                        <h4> Apache Spark </h4>
                        <small className='text-light'> Intermediate </small></div>
                         </article>
                         <article className='experience_details'>
                        <BsPatchCheckFill className= 'experience_details-icon' />
                        <div>
                        <h4> AWS & Google Cloud </h4>
                        <small className='text-light'> Intermediate </small></div>
                         </article> 
                    </div>
            
            </div>
            {/* END OF Data Science */}
            <div className="experience_deeplearning">  
            <h3> Deep Learning </h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                        <BsPatchCheckFill className= 'experience_details-icon' />
                        <div>
                        <h4> TensorFlow</h4>
                        <small className='text-light'> Experienced </small></div>
                         </article>
                         <article className='experience_details'>
                        <BsPatchCheckFill className= 'experience_details-icon' />
                       <div> <h4> Pytorch </h4>
                        <small className='text-light'> Intermediate </small></div>
                         </article>
                         <article className='experience_details'>
                        <BsPatchCheckFill className= 'experience_details-icon' />
                        <div><h4> Computer Vision  </h4>
                        <small className='text-light'> Experienced </small></div>
                         </article>
                         <article className='experience_details'>
                        <BsPatchCheckFill className= 'experience_details-icon' />
                        <div><h4> Natural Language Processing </h4>
                        <small className='text-light'> Intermediate </small></div>
                         </article>
                    </div>
              
            
            </div>

            </div>
        </section>
    )
}

export default Experience
