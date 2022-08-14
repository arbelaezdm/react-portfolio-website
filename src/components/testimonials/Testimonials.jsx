import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


let clients = [
  {
    id: 1,
    name: 'Cliente 1',
    image: AVTR1,
    review: 'Review Client 1'
  },
  {
    id: 2,
    name: 'Cliente 2',
    image: AVTR1,
    review: 'Review Client 2'
  },
  {
    id: 3,
    name: 'Cliente 3',
    image: AVTR1,
    review: 'Review Client 3'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >

        {
          clients.map(({id, name, image, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt="Avatar1" />
                </div>
                <h5 className="cliente__name">{name}</h5>
                <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  );
}

export default Testimonials