import React, { useEffect } from "react";
import { Link, ScrollRestoration } from 'react-router-dom';
import '../App.css';
//import Caro from "/Users/lucyking/Projects/portfolio/lk-portfolio/src/components/Caro"
import Caro from "../components/Caro";
import ReactPlayer from 'react-player';
import ReactGoogleSlides from "react-google-slides";

 
const ProjectPage = ({title, desc, skillList, url, github, photo1, photo2, photo3}) => {
    
    // overrides router behavior of matching scroll across pages
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    return (
        <div className = "content" style={{padding: '0px 50px'}}>
            <br />

            <div class="title-back-button">

                <h1 id="title" class="proj-title">{title}</h1>

                <Link to="/" replace ="True"> <button class="back-button"> Home </button> </Link>

            </div>

            <div class="skill-list" style={{padding: '15px 0px 0px 0px'}}>
                {skillList.map((str, index) => (
                    <skill>
                    {str}
                    </skill>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '20px', padding: '25px 0px 35px 0px', width: '50%'}} >
                {/* { title !== "Auction Alchemy" && <button><a href={url}> View the site </a></button> } */}
                <button> <a href={github}> Github Repo </a></button>
            </div>
            
            {desc}

            <br />
            <br />
            
             {/* displaying demo vid for CIF page */}
            { title == "Coding It Forward: International Trade API Query Builder" && 
                <div style={{width: '100%'}}> 
                    <h2> Demo Video: </h2>
                    <ReactPlayer playing="true" controls="true" style={{ width: '100%', padding: '0px 0px 20px 0px'}} url='../final_demo2_census.mp4' /> 

                    {/* from https://github.com/ajhenry/react-google-slides?tab=readme-ov-file */}
                    <h2 style={{padding: '0px 0px 10px 0px'}}> Intern Demo Day Presentation: </h2>
                    <ReactGoogleSlides
                        width={'100%'}
                        slidesLink="https://docs.google.com/presentation/d/1nMllqrMBkGMRkuQC1VNjDgN48LXD2vJjlZrBmfwT59Y/edit#slide=id.g3e5ee9627c_7_1"
                        slideDuration={5}
                        position={0}
                        showControls={'True'}
                        loop
                    />

                </div>
            }

            {/* Displaying slides and demo for BTAI project */}
            { title == "Break Through Tech: Chatbot for the UN Economic Council for Europe's Climate Change Database" && 
                
                <div style={{width: '100%'}}> 
                    <h2> Demo Video: </h2>
                    <ReactPlayer playing="true" controls="true" style={{ width: '100%', padding: '0px 0px 20px 0px'}} url='../unicc_final_demo.mp4' /> 

                    {/* from https://github.com/ajhenry/react-google-slides?tab=readme-ov-file */}
                    <h2 style={{padding: '0px 0px 10px 0px'}}> Break Through Tech AI Studio Presentation: </h2>
                    <ReactGoogleSlides
                        width={'100%'}
                        slidesLink="https://docs.google.com/presentation/d/1gmSbhlCR3CIWdqWZgVO8u7OE4kVqYFTAzqklc1O0d7s/edit#slide=id.g316ff678b04_0_0"
                        slideDuration={5}
                        position={0}
                        showControls={'True'}
                        loop
                    />

                </div>
            
            }

            { title !==  "Coding It Forward: International Trade API Query Builder" && title !== "Break Through Tech: Chatbot for the UN Economic Council for Europe's Climate Change Database" && 
            
                <Caro photo1={photo1} photo2={photo2} photo3={photo3} />

            }  

        </div>
    );
};
 
export default ProjectPage;
