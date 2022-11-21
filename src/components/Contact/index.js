import React from "react";
import Swal from "sweetalert2";
const Contact = ({ message }) => {
  const submitHandler = () => {
    Swal.fire({
      icon: "success",
      text: "Your message was sent to Mr. Marquez",
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="contact-title">
            <div className="pt-4"></div>
            <div
              className="card wow jackInTheBox"
              style={{ backgroundColor: "#00ccff" }}
              data-wow-delay="1s"
            >
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={message}
                    alt="Get In Touch"
                    className="mt-5 ml-5 wow fadeInUp"
                    data-wow-delay="2s"
                  />
                </div>
                <div className="col-md-6">
                  <div className="col-md-10">
                    <h1
                      className="wow bounceIn text-uppercase title-h1 pt-5 text-center"
                      data-wow-delay="2s"
                    >
                      Quick Message
                    </h1>
                    <div
                      className=" form-group wow fadeInUp"
                      data-wow-delay="2s"
                    >
                      <label> Company Name</label>
                      <input
                        type="text"
                        name="company_name"
                        className="form-control "
                        placeholder="(optional)"
                      />
                    </div>

                    <div
                      className="form-group wow fadeInUp"
                      data-wow-delay="2s"
                    >
                      <label htmlFor="full_name"> Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="full_name"
                        placeholder="(optional)"
                      />
                    </div>

                    <div
                      className="form-group wow fadeInUp"
                      data-wow-delay="2s"
                    >
                      <label htmlFor="email"> Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required
                        placeholder="sample@gmail.com"
                      />
                    </div>

                    <div
                      className="form-group wow fadeInUp"
                      data-wow-delay="2s"
                    >
                      <label htmlFor="message"> Message</label>
                      <textarea
                        className="form-control"
                        cols="5"
                        rows="5"
                        name="message"
                        placeholder="Sample message here...."
                        required
                      ></textarea>
                    </div>
                    <div className="text-center mb-3">
                      <button
                        className="wow jackInTheBox btn btn-outline-primary mt-2"
                        data-wow-delay="2.5s"
                        onClick={submitHandler}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
