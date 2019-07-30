import React, { Fragment } from "react";
export default function Home() {
  return (
    <div>
      <main id="main">
        {/*==========================
  Facts Section
      ============================*/}
        <section id="facts" className="wow fadeIn">
          <div className="container">
            <header className="section-header">
              <h3>Facts</h3>
            </header>
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">274</span>
                <p>Clients</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">421</span>
                <p>Projects</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">1,364</span>
                <p>Hours Of Support</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">18</span>
                <p>Hard Workers</p>
              </div>
            </div>
            <div className="facts-img">
              <img src="img/facts-img.png" alt="" className="img-fluid" />
            </div>
          </div>
        </section>
        {/* #facts */}

        {/*==========================
  Contact Section
      ============================*/}
        <section id="contact" className="section-bg wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h3>Contact Us</h3>
            </div>
            <div className="row contact-info">
              <div className="col-md-4">
                <div className="contact-address">
                  <i className="ion-ios-location-outline" />
                  <h3>Address</h3>
                  <address>A108 Adam Street, Nairobi 535022, Kenya</address>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-phone">
                  <i className="ion-ios-telephone-outline" />
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+155895548855">+254 5589 55488 55</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-email">
                  <i className="ion-ios-email-outline" />
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@example.com">info@hudumaraltors.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* #contact */}
      </main>
      {/*==========================
      Footer
    ============================*/}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <h3>Huduma Realtores</h3>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="ion-ios-arrow-right" /> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="ion-ios-arrow-right" />{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="ion-ios-arrow-right" />{" "}
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  PO BOX 535022
                  <br />
                  Nairobi, Kenya
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@hudumaraltors.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright <strong>Huduma Realtors</strong>. All Rights Reserved
          </div>
        </div>
      </footer>
      {/* #footer */}
    </div>
  );
}
