import React, { Component } from "react";
import Fade from "react-awesome-reveal";

class About extends Component {
  componentDidMount() {
    this.initPopup();
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.initPopup();
    }
  }

  initPopup = () => {
    if (window.$ && window.$.fn.magnificPopup) {
      setTimeout(() => {
        window.$(".image.popup").magnificPopup({
          type: "image",
          closeOnContentClick: true,
          mainClass: "mfp-img-mobile",
          image: {
            verticalFit: true
          }
        });
      }, 500); // Delay agar gambar sempat masuk ke DOM
    } else {
      console.warn("magnificPopup not available");
    }
  };

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "image/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumeDownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <a className="image popup" href={profilepic}>
                <img className="profile-pic" src={profilepic} alt="Profile" />
              </a>
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i> Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
