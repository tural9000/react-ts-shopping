import React from "react";
import { XLink } from "../../../src/shared/x-lib/components//XLink";
import "./style.scss"
const Footer = () => {
  return (
    <>
      <div className="footer ">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h2>İnformasiya</h2>
                <ul>
                  <li>
                    <a href="#"> Konfidensiallıq siyasəti </a>
                  </li>
                  <li>
                    <a href="#">Hissə-hissə ödəniş şərtləri</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h2>Müştərilər</h2>
                <ul>
                  <li>
                    <a href="#"> Saytın istifadə şərtləri </a>
                  </li>
                  <li>
                    <a href="#"> Konfidensiallıq siyasəti </a>
                  </li>
                  <li>
                    <a href="#"> Geri qaytarma siyasəti </a>
                  </li>
                  <li>
                    <a href="#"> Korporativ satışlar </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h2>Şirkət</h2>
                <ul>
                  <li>
                    <a href="#"> Şirkət haqqında </a>
                  </li>
                  <li>
                    <a href="#"> Karyera </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 col-md-6">
              <div className="footer-widget">
                <h2>Əlaqə</h2>
                <div className="contact-info">
                  <ul>
                    <li className="row mb-3">
                      <XLink to="/contact" className="col-md-6 mb-3">
                        <i className="fas fa-mobile-alt"></i> <span>*6060</span>
                      </XLink>

                      <XLink to="/contact" className="col-md-6">
                        <i className="fa fa-map-marker"></i>
                        <span>Mağazalarımız xəritədə</span>
                      </XLink>
                    </li>
                    <li>
                      <i
                        className="fa fa-phone"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <button className="btn btn-primary" type="button">
                       
                        Mənə zəng et{" "}
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="footer-widget">
                  <h2>Bizimlə qalın</h2>
                  <div className="contact-info">
                    <ul className="social">
                      <li>
                        <a href="">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                    <img
                      src="https://cdn.trend.az/2015/06/02/visa_logo_020615.jpg"
                      style={{ width: "70px", marginRight: "10px" }}
                    />
                    <img
                      src="data:image/png;base64,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"
                      style={{ width: "83px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
