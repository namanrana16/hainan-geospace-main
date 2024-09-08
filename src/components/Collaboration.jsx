import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText,collabText2 } from "../constants";

import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[155rem]">
          <h2 className="h2 mb-4 md:mb-8">
          About Us 
          </h2>

          <ul className="mb-10 md:mb-14 w-full">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h2 className="body-1 ml-5">{item.title}</h2>
                </div>
                {item.text && (
                  <ul className="mt-3 text-n-3">  
                  <h3 className="body-1 ml-5">
                    {item.text.map((text) => (
                      <li key={text.id} className="mb-1">
                        {text}
                      </li>
                    ))}
                    </h3>
                    
                </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">


          
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
