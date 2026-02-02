import React from "react";
import bannerImage from "/assets/images/common/training-system-main-img.png";


export default function TrainingSystem(){

    const defaultSectionContent = {
       titleHighlight: "Rise",
     };
     const sectionContent = defaultSectionContent;
   
     return (
       <section className="training-system-section">
         <div className="training-system-wrap">
           <div className="training-system-content">
             <h2 className="training-system-title">
               <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  {sectionContent.titleHighlight}
               </span>{" "}
                  is the online training system
               your employees will love
             </h2>  
            <p className="training-system-subtitle">           
             It’s an all-in-one system that makes training easy to create, enjoyable to take, and simple to manage
            </p>   
             <div className="training-system-buttons">
               <button className="training-system-primary-btn">
                Contact Us{" "}
               </button>
             </div>
             <div className="training-system-image">
               <img src={bannerImage} alt="Banner" />
             </div>
           </div>
         </div>
       </section>
    )
}