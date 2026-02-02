import React from "react";
import bannerImage from "/assets/images/common/measure-ships-main-img.svg";


export default function MeasureShips(){

    const defaultSectionContent = {
       titleHighlight: "Measure",
     };
     const sectionContent = defaultSectionContent;
   
     return (
       <section className="measure-ships-section">
         <div className="measure-ships-wrap">
           <div className="measure-ships-content">
             <h2 className="measure-ships-title">
               <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  {sectionContent.titleHighlight}
               </span>{" "}
                 what ships. <br/>
              Ship what matters.
             </h2>  
            <p className="measure-ships-subtitle">           
             Test how each release - from features to AI-powered experiences - lands with customers, so you can protect trust and optimize at the speed of AI
            </p>   
             <div className="measure-ships-buttons">
               <button className="measure-ships-primary-btn">
                Create a free account{" "}
               </button>
   
               <button className="measure-ships-secondary-btn">
                 See how it works {" "}
                 <i className="icon icon-narrow unicon-arrow-right fw-bold" />
               </button>
             </div>
             <div className="measure-ships-image">
               <img src={bannerImage} alt="Banner" />
             </div>
           </div>
         </div>
       </section>
    )
}