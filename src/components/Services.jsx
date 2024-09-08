import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons, servicesContent } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";


const Services = () => {
  return (
    <Section id="pricing">
      <div className="container">
        <Heading
          title="Products & Services"
          text=""
        />

        <div className="relative">
          <div className="container lg:flex items-center  p-8 border border-n-1/10 rounded-3xl lg:p-20 ">
            <div className=" w-full h-full  xl:w-auto">
           
            </div>

            <div className=" ml-auto">
            
           

            <ul className="mb-10 md:mb-14 w-full">
            {servicesContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h2 className="body-1 ml-5">{item.title}</h2>
                </div>
                {item.text && (
                  <ol className="mt-3 text-n-3 list-disc">  
                  <h3 className="body-1 ml-5">
                    {item.text.map((text) => (
                      <li key={text.id} className="mb-1">
                          {text}
                        
                      </li>
                    ))}
                    </h3>
                    
                </ol>
                )}
              </li>
            ))}
          </ul>
            
             
            </div>

          </div>


          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
