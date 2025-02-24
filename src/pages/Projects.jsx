import { NavLink } from "react-router-dom"
import data from "/src/api/data.json"
import { useState } from "react";

export const Projects = () => {
   const [noOfElement, setNoOfElement] = useState(3);
   const loadMore = () => {
      setNoOfElement((prev) => prev + 3);
   }

   const slice = data.slice(0, noOfElement);
    return(
        <>
        <div className="container-1">
        <p data-aos="fade-down" className="wai"><strong>What I Did ?</strong></p>
            <h1 className="heading" data-aos="fade-down"><strong>PROJECTS</strong></h1>
         
            <div className="box-container">

               {
                  slice.map((curElem) => {
                     const {id, image, title, description, link} = curElem;
                     return (
                        <div className="box" data-aos="fade-right" key={id}>
                  <div className="image">
                     <img src={image} />
                  </div>
                  <div className="content">
                     <h3>{title}</h3>
                     <p>{description}</p>
                     <NavLink to={link} target="_blank" ><button className="bton">Check Project <span aria-hidden="true">→</span></button></NavLink>
                  </div>
               </div>
                     )
                  })
               }
               </div>
               {noOfElement < data.length && (
                  <button className="load-more" onClick={loadMore}>
                     Load More
                  </button>
               )}
         </div>
        </>
    )
}