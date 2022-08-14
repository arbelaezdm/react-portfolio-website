import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio.jpg'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'Portfolio 1',
    github: 'https//github.com',
    demo: 'Go to demo'
  },
  {
    id: 2,
    image: IMG,
    title: 'Portfolio 2',
    github: 'https//github.com',
    demo: 'Go to demo'
  },
  {
    id: 3,
    image: IMG,
    title: 'Portfolio 3',
    github: 'https//github.com',
    demo: 'Go to demo'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <section className="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
          }
          
        </div>

      </section>
    </section>
  )
}

export default Portfolio