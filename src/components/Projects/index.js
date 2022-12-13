import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ img_1, img_2, img_3, img_4, img_5 }) => {
  const projectsDetails = [
    {
      image: img_1,
      link: "https://jhay03.gitlab.io/b49_capstone1/",
      title: "Auto-Care",
      type: "Static-Website",
      label: "capstone-1",
      service: "Service-1",
    },
    {
      image: img_2,
      link: "https://fast-hamlet-89907.herokuapp.com/",
      title: "Book-on-the-Go",
      type: "Dynamic-Website",
      label: "capstone-2",
      service: "Service-2",
    },
    {
      image: img_3,
      link: "https://ramresort.netlify.app/",
      title: "RAM Resort",
      type: "MERN Stack",
      label: "capstone-3",
      service: "Service-3",
    },
    {
      image: img_4,
      link: "http://pareserve.herokuapp.com/",
      title: "Pares-Serve",
      type: "E-commerce ( PHP LARAVEL)",
      label: "capstone-4",
      service: "Service-4",
    },
    {
      image: img_5,
      link: "https://ram-clothing.netlify.app/",
      title: "RAM-Clothing",
      type: "E-commerce ( ReactJS with Firebase)",
      label: "capstone-5",
      service: "Service-5",
    },
  ];

  return (
    <div className="container">
      <div className="project-tilte pb-5">
        <h1
          className="wow slideInLeft text-uppercase title-h1 text-white text-center"
          data-wow-delay="1s"
        >
          My Projects
        </h1>
      </div>

      <div className="row grid text-white">
        {projectsDetails.map(({ image, link, title, type, label, service }) => {
          return (
            <div
              className={`col-lg-4 col-md-6 col-sm-12 element-item ${label}`}
            >
              <div className="our-project wow zoomInUp" data-wow-delay="2s">
                <div className="img">
                  <a
                    className="test-popup-link"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={image} alt={service} />
                  </a>
                </div>
                <div className="title py-4 text-center text-white">
                  <h4 className="text-uppercase">{title}</h4>
                  <span>{type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
