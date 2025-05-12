import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Reviews.css";
import Image1 from "../../assets/Testimonials/Drobt.png";
import Image2 from "../../assets/Testimonials/DrSahibjan.png";
import Image3 from "../../assets/Testimonials/TImage3.png";
import Image4 from "../../assets/Testimonials/WhetCloud.png";
import Image5 from "../../assets/Testimonials/TaqdirAli.png";
import Images6 from "../../assets/Testimonials/157297000_10225309078536442_3048192279192543361_n-1-removebg-preview.png";
import Images7 from "../../assets/Testimonials/410162333_10160956517370325_2000515334344346490_n-1-removebg-preview.png";
import Images8 from "../../assets/Testimonials/47-removebg-preview.png";
import Images9 from "../../assets/Testimonials/resizecom_Picture2-removebg-preview.png";
import Images10 from "../../assets/Testimonials/Picture1-removebg-preview.png";

const ReviewsTestimonial = () => {
  const teamData = [
    {
      name: "Dr",
      lastName: "OBT",
      role: "CEO, Halcyon Clinic London",
      img: Image1,
      text: `We approached ICreativez Technologies for a website redesign, and
        they transformed our vision into reality. Their designs are visually
        appealing and optimized for a great user experience.`,
    },
    {
      name: "Dr. Sahibjan",
      lastName: "Badar",
      role: "Program Coordinator, AAP, Health",
      img: Image2,
      text: `The Icreativez management and team are highly cooperative and have the
      high level of experience & skill set to address our rapidly changing
      requirements. No doubt iCreativez is among the best IT outsourcing
      companies in the world. I would like to say that it is awesome company.`,
    },
    {
      name: "Syed Reaz ",
      lastName: "Ashraf",
      role: "Founder & CEO, Whet Cloud LLC",
      img: Image4,
      text: "ICreativez Technologies’s SEO services are phenomenal. Our website’s traffic doubled in three months, and we are now ranking on the first page for several competitive keywords.",
    },
    {
      name: "Ton",
      lastName: "Groot",
      role: "Founder bij Pluukz & Kuukz",
      img: Image3,
      text: `ICreativez Technologies exceeded our expectations with their custom
        software development services. Their team delivered a robust and
        scalable solution that streamlined our business processes. Highly
        professional and efficient!`,
    },
    {
      name: "Taqdir",
      lastName: "Ali",
      role: "(Ph.D), Project Manager, UC Lab Kyung Hee University",
      img: Image5,
      text: `The solution relied on provided research from the internal team and is now deployed at a collaborative hospital. Icreativez Technologies demonstrated impressive project management skills, achieving deadlines on time. That said, communication can always be a bit better.
`,
    },

    {
      name: "Hafeez ",
      lastName: "Jamali",
      role: "CEO, MJH Consultants USA",
      img: Images6,
      text: "The quality assurance team at ICreativez Technologies delivered exceptional results, helping us achieve a bug-free product. Their detailed reporting and feedback were incredibly valuable.",
    },
    {
      name: "Nisar ",
      lastName: "Khokhar",
      role: "Ex. BBC Correspondent & Founder of Digital Magazine Lahooot ",
      img: Images7,
      text: "The work provided by Icreativez Technologies has been instrumental in the digital existence of the project. ",
    },
    {
      name: "Habib",
      lastName: "Syed",
      role: "CEO, Stratesfy, Inc. Washington, USA",
      img: Images8,
      text: "ICreativez Technologies created a dynamic web app for our business that transformed how we interact with our customers. Their attention to detail and post-launch support are commendable!",
    },
    {
      name: "Another",
      lastName: "Person",
      role: "Another Role",
      img: Images9,
      text: "",
    },
    {
      name: "Seddra ",
      lastName: "Zaigham ",
      role: "Owner, Alif Insurance",
      img: Images10,
      text: "Great team, great learning experience. Team leaders help the team members at every step. I would definitely recommend this company to all those interested to work in marketing as we learn so much while working like one big family here, and everyone is willing to teach other new techniques or even help when needed.",
    },
  ];

  return (
    <div className="testimonial-container custom ">
      <h4 className=" ps-md-5  ps-sm-5   ms-4 text-start">Testimonials</h4>
      <div className="testimonial-header container">
        <h2 className="">Our Global Clients</h2>
        <div className="testimonial-nav">
          <div className="custom-swiper-button-prev hover-effect">
            <BsArrowLeft size={24} />
          </div>
          <div className="custom-swiper-button-next hover-effect">
            <BsArrowRight size={24} />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        centeredSlides={true}
        // initialSlide={Math.floor(teamData.length / 1)}
        spaceBetween={10}
        slidesPerView={3.5}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-swiper"
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card">
              <img src={member.img} alt={member.name} />
              <h3>
                {member.name} <span>{member.lastName}</span>
              </h3>
              <p>{member.role}</p>

              {member.text && (
                <div className="hover-text">
                  <span>"{member.text}"</span>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsTestimonial;
