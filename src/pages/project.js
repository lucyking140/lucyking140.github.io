import React from "react";
import '../App.css';
import Caro from "/Users/lucyking/Projects/portfolio/lk-portfolio/src/components/Caro"

 
const ProjectPage = ({title, desc, skillList, url, github, photo1, photo2, photo3}) => {
    return (
        <div className = "content" style={{padding: '0px 40px'}}>
            <br />

            <h1 id="title">{title}</h1>

            <div style={{ display: 'flex', gap: '20px', padding: '15px 0px'}} >
                { title !== "Auction Alchemy" && <button><a href={url}> View the site </a></button> }
                <button> <a href={github}> Github Repo </a></button>
            </div>
            
            <h3> Tools Used:  {skillList} </h3>

            {desc}

            <br />
            <br />

            <Caro photo1={photo1} photo2={photo2} photo3={photo3} />

            

            <div className="content"> </div>
        </div>
    );
};
 
export default ProjectPage;