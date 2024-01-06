import React from "react";
import '/Users/lucyking/Projects/portfolio/lk-portfolio/src/App.css';
import Caro from "/Users/lucyking/Projects/portfolio/lk-portfolio/src/components/Caro"

 
const ProjectPage = ({title, desc, skillList, url, github, photo1, photo2, photo3}) => {
    return (
        <div className = "content">

            <h1>{title}</h1>

            <div style={{ display: 'flex', gap: '20px', padding: '15px 0px'}} >
                <button> <a href={url}> View the site </a></button>
                <button> <a href={github}> Github Repo </a></button>
            </div>
            
            <h3> Tools Used:  {skillList} </h3>

            {desc}

            <Caro photo1={photo1} photo2={photo2} photo3={photo3} />

            <div className="content"> </div>
        </div>
    );
};
 
export default ProjectPage;