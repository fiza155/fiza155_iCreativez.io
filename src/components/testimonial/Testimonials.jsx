import React, { useRef, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Testimonials.css";

const testimonials = [
  {
    title: "Dr OBT, CEO, Halcyon Clinic London",
    img: "https://icreativez.info/wp-content/uploads/2024/12/Halcyon-Medispa-Dr-OBT-Home.jpg-1.jpg",
    text: (
      <quote>
        "We approached ICreativez Technologies for a website redesign, and they
        transformed our vision into reality. Their designs are visually
        appealing and optimized for a great user experience."
      </quote>
    ),
    rating: 5,
  },
  {
    title: "Dr. Sahibjan Badar, Program Coordinator, AAP, Health",
    img: "https://www.icreativez.com/assets/images/Testimonials/PCAAP.jpg",
    text: (
      <quote>
        "The Icreativez management and team are highly cooperative and have the
        high level of experience & skill set to address our rapidly changing
        requirements. No doubt iCreativez is among the best IT outsourcing
        companies in the world. I would like to say that it is awesome company.
        "
      </quote>
    ),
  },
  {
    title: "Ton Groot, Founder bij Pluukz & Kuukz",
    img: "https://icreativez.info/wp-content/uploads/2024/12/Capture-1.png",
    text: (
      <quote>
        "ICreativez Technologies exceeded our expectations with their custom
        software development services. Their team delivered a robust and
        scalable solution that streamlined our business processes. Highly
        professional and efficient!"
      </quote>
    ),
  },
  {
    title: "Taqdir Ali, (Ph.D), Project Manager, UC Lab Kyung Hee University",
    img: "https://icreativez.info/wp-content/uploads/2024/11/1687902383129.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Card title 5",
    img: "https://codingyaar.com/wp-content/uploads/headshot-5-scaled.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Card title 6",
    img: "https://codingyaar.com/wp-content/uploads/headshot-6-scaled.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const Testimonial = () => {
  const innerRef = useRef();

  const scroll = (direction) => {
    const container = innerRef.current;
    const scrollAmount = container.offsetWidth / 2;

    if (direction === "next") {
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 10
      ) {
        // If we're at the end, scroll to the start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft === 0) {
        // If we're at the start, scroll to the end
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    innerRef.current.scrollTo({ left: 0 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("next");
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <div className="testimonial-slider p-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="testimonial-title">
              <div className="container">
                <i className="bi bi-quote display-1"></i>
                <h4 className="ms-3 mb-2">Testimonials</h4>
                <h2 className="fw-bold display-4">What our customers say</h2>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-start align-items-center gap-3 ">
              <button
                className="btn btn-light rounded-circle testimonial-btn"
                onClick={() => scroll("prev")}
              >
                <i className="bi bi-chevron-left fs-3"></i>
              </button>
              <button
                className="btn btn-light rounded-circle testimonial-btn"
                onClick={() => scroll("next")}
              >
                <i className="bi bi-chevron-right fs-3"></i>
              </button>
            </div>
          </div>

          <div className="col-md-8">
            <div
              className="carousel-inner d-flex overflow-auto mb-3"
              ref={innerRef}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="carousel-item active flex-shrink-0 px-2 "
                >
                  <div className="card h-100">
                    <div className="card-img">
                      <img src={testimonial.img} alt="..." className="w-100" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <cite>{testimonial.title}</cite>
                      </h5>
                      {testimonial.rating && (
                        <div className="mb-2">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <i
                                key={i}
                                className="bi bi-star-fill text-warning pe-1"
                              ></i>
                            )
                          )}
                        </div>
                      )}
                      <p className="card-text">
                        <blockquote>{testimonial.text} </blockquote>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons below cards */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
