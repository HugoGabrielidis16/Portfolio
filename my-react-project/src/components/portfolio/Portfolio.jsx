import React from 'react'
import './portfolio.css'
import Food101 from '../../assets/Food101.jpg'
import Recommender_Systems from '../../assets/Recommender_Systems.jpg'


const Portfolio = () => {
    return (
        <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
        <article className= 'portfolio_item'>
        <div className="portfolio_item-image">
        <img src={Food101} alt="" />
        </div>
            <h3>Food101 Project</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuuuugo/Food101" className='btn' target='_blank'> Github</a>
            
            
        </div>
        </article>
        
        <article className= 'portfolio_item'>
        <div className="portfolio_item-image">
        <img src={Recommender_Systems} alt="" />
        </div>
        <h3>Recommender_Systems project</h3>

            <div className="portfolio_item-cta">    
            <a href="https://github.com/Yuuuugo/Recommender_Systems" className='btn' target='_blank'> Github</a>
            
            </div>
        
        </article>
        
        <article className= 'portfolio_item'>
        <div className="portfolio_item-image">
        <img src={Recommender_Systems} alt="" />
        </div>
            <h3>Sentiment Analysis</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuuuugo/Sentiment_Analysis" className='btn' target='_blank'> Github</a>
        </div>
        </article> 

        <article className= 'portfolio_item'>
        <div className="portfolio_item-image">
        <img src={Recommender_Systems} alt="" />
        </div>
            <h3>SkimLit</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuuuugo/Sentiment_Analysis" className='btn' target='_blank'> Github</a>
            
            
        </div>
        </article> 


        <article className= 'portfolio_item'>
        <div className="portfolio_item-image">
        <img src={Recommender_Systems} alt="" />
        </div>
            <h3>BitPredict</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuuuugo/Sentiment_Analysis" className='btn' target='_blank'> Github</a>
              
        </div>
        </article> 

        <article className= 'portfolio_item'>
        <div className="portfolio_item-image">
        <img src={Recommender_Systems} alt="" />
        </div>
            <h3>Text Recognizer Project</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Yuuuugo/Sentiment_Analysis" className='btn' target='_blank'> Github</a>
              
        </div>
        </article> 


        
        {/* ADD MORE WHEN NEEDED */}

         </div>
            
        </section>
    )
}



export default Portfolio

