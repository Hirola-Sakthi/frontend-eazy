import React from "react";
import bannerImage from "/assets/images/common/possibilities-section-main-image.webp";


export default function Possibilities(){

    const defaultSectionContent = {
       titleHighlight: "One",
     };
     const sectionContent = defaultSectionContent;
   
     return (
       <section className="possibilities-section">
         <div className="possibilities-wrap">
           <div className="possibilities-content">
                        <div className="d-flex align-items-center justify-center">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                 creators of Proton Mail
                </span>
              </div>
            </div>
             <h2 className="possibilities-title">
               <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  {sectionContent.titleHighlight}
               </span>{" "}
               VPN. Limitless<br/>
              possibilities.
             </h2>  
            <p className="possibilities-subtitle">
             Experience true freedom online. Gain unrestricted access to global content, block annoying ads, and safeguard your privacy with a fast and secure VPN.
            </p>   
             <div className="possibilities-buttons">
               <button className="possibilities-primary-btn">
                 Get Proton VPN{" "}
               </button>
   
               <button className="possibilities-secondary-btn">
                 Business VPN {" "}
                 <i className="icon icon-narrow unicon-arrow-right fw-bold" />
               </button>
             </div>

             <p className="possibilities-guarantee-subtitle">30-day money-back guarantee</p>
   
             <div className="possibilities-image">
               <img src={bannerImage} alt="Banner" />
             </div>
           </div>
         </div>
       </section>
    )
}