import React from "react";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { clients } from "../../data";
import {
  Avatar,
  ClientName,
  ClientReview,
  Container,
  TestimonialsItem,
} from "./testimonialsStyle";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Container className="container">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {clients.map((client: any) => (
            <SwiperSlide key={client.id}>
              <TestimonialsItem>
                <Avatar>
                  <img src={client.image} alt="" />
                </Avatar>
                <ClientName>{client.name}</ClientName>
                <ClientReview>{client.review}</ClientReview>
              </TestimonialsItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
