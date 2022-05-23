import axios from "axios";
import { useEffect, useState } from "react";
import { Services } from "../../models/services";

const About = () => {
  const [services, setServices] = useState<Services[]>();
  const baseUrl: string = "http://localhost:3500";
  useEffect(() => {
    axios.get<Services[]>(`${baseUrl}/services`).then((res) => {
      console.log(res.data);
      setServices(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="col-12">
        <div className="contact-map my-4">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1Wav8yp4qpTQXzx3Oyl5u3sAeYLX-Y7XX"
          ></iframe>
        </div>
      </div>

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
  );
};

export default About;
