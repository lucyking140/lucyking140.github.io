import React from "react";
import '/Users/lucyking/Projects/portfolio/lk-portfolio/src/App.css';
 
const ProjectPage = ({title, desc, skillList, photo1, photo2, photo3}) => {
    return (
        <div className = "content">

            <h1>{title}</h1>

            <h3> Tools Used:  {skillList} </h3>

            {desc}

            <h3> Example pages: </h3>
            <img src={photo1} alt = "Auction Alchemy Example" />
            <p></p> 
            <img src={photo2} alt = "Auction Alchemy Example" />
            <p></p> 
            <img src={photo3} alt = "Auction Alchemy Example" />
            
            <div className="content"> </div>
        </div>
    );
};
 
export default ProjectPage;