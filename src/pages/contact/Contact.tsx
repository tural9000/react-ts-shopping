import axios from "axios";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { boolean } from "yup";
import { Services } from "../../models/services";
import contactStyles from "./Contact.module.scss";
const Contact = () => {
  const [services, setServices] = useState<Services[]>();
  const baseUrl: string = "http://localhost:3500";
  useEffect(() => {
    axios.get<Services[]>(`${baseUrl}/services`).then((res) => {
      console.log(res.data);
      setServices(res.data);
    });
  }, []);
  return (
    <div className={`${contactStyles.contact} container`}>
      <div className="row">
        <div className="col-lg-4 col-md-4 mb-5">
          <h2>Bizim Maqaza</h2>
          <div className="contact-info">
            <div className="contact-info">
              <ul>
                <li>
                  <a href="" className="col-md-6 mb-3">
                    <i className="fas fa-mobile-alt"></i> <span>*6060</span>
                  </a>
                </li>

                <li>
                  <a href="" className="col-md-6">
                    <i className="fa fa-map-marker"></i>
                    <span>Mağazalarımız xəritədə</span>
                  </a>
                </li>

                <li>
                  <i
                    className="fa fa-phone"
                    style={{ marginRight: "15px;" }}
                  ></i>
                  <a type="button"> Mənə zəng et </a>
                </li>
              </ul>

              <ul className={`${contactStyles.social}`}>
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
            </div>
          </div>
        </div>

        <div className="col-lg-6 offset-lg-2 col-md-8 mt-4">
          <div className="contact-form">
            <Formik
              initialValues={{
                name: "",
                email: "",
                messages: "",
                disable: true,
              }}
              validate={(values) => {
                const errors: {
                  name?: string;
                  email?: string;
                  messages?: string;
                } = {};
                if (!values.email) {
                  errors.email = "email adressinizi daxil edin zehmet olmazsa";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Doqru email adressini yazin";
                }
                if (values.name.length < 3) {
                  errors.name = "Zəhmət olmazsa adınızı daxil edin";
                }
                if (values.messages.length < 7) {
                  errors.messages = "Zəhmət olmazsa Messajinizi yazin";
                }
                if (values.email && values.messages.length > 7 && values.name.length > 3) {
                  values.disable = false;
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="my-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Adiniz"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />

                    <div className="text-danger">
                      {errors.name && touched.name && errors.name}
                    </div>
                  </div>

                  <div className="my-1">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />

                    <div style={{ color: "red" }}>
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>
                  <div className="my-1">
                    <textarea
                      className="form-control"
                      name="messages"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.messages}
                    ></textarea>
                    <div style={{ color: "red" }}>
                      {errors.messages && touched.messages && errors.messages}
                    </div>
                  </div>

                  <div className="d-grid gap-2 my-2">
                    <button
                      className="btn btn-primary"
                      type="button"
                      disabled={values.disable}
                    >
                      Message Göndərin
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>

        <div className="col-12">
        <div className="contact-map my-4">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1Wav8yp4qpTQXzx3Oyl5u3sAeYLX-Y7XX"
          ></iframe>
        </div>

        <h1>Bakı şəhəri</h1>
        <div className="mb-3 pt-100 w-75">
        {services &&
          services.map((service) => (
            <>
              <h1>{service.city}</h1>
              <h3>{service.servicelink1}</h3>
              <p>{service.place1}</p>
              <p>{service.servicePhone1}</p>

              <h3>{service.servicelink2}</h3>
              <p>{service.place2}</p>
              <p>{service.servicePhone2}</p>

              <h3>{service.servicelink3}</h3>
              <p>{service.place3}</p>
              <p>{service.servicePhone3}</p>

              <h1>Regionlar</h1>
              <h3>{service.servicelink4}</h3>
              <p>{service.place4}</p>
              <p>{service.servicePhone4}</p>

              <h3>{service.servicelink5}</h3>
              <p>{service.place5}</p>
              <p>{service.servicePhone5}</p>
            </>
          ))}
      </div>



      </div>
      </div>
    </div>
  );
};

export default Contact;
