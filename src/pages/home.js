import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Link
  } from "react-router-dom";
import { animated, useSpring } from '@react-spring/web';
import "./profilePic_CIF.jpg";
import { HashLink } from 'react-router-hash-link';

const ll_sent = "Social networking site to fight the invasive lantern fly species"
const aa_sent = "Interactive database of fine art sales from major auction houses"
const census_sent = "Web app for interactive query building built as a Coding It Forward fellow at the U.S. Census Bureau"
const unicc_sent = "Chatbot built with LLaMA and fine-tuned with LoRA and RAG as a Break Through Tech Fellow"

const Home = () => {
    
    return (

    <div>

        <div className="navbar">
          <a> <HashLink smooth to="/#about"> About </HashLink> </a>
          <a> <HashLink smooth to="/#projects"> Projects </HashLink> </a>
          <a> <HashLink smooth to="/#contact"> Contact </HashLink> </a>
        </div>

        <br />
        <br />
        <br />

        <div className = "content">
            <div class = "title-box" id="title">
                <title> Hello, I'm Lucy 

                <div style={{ display: 'flex', gap: '30px', padding: '20px 0px'}} >
                    <button class ="button-28" role="button"> <a href="https://github.com/lucyking140" target="_blank" >GitHub</a> </button>
                    <button class ="button-28" role="button"> <a href="https://www.linkedin.com/in/lucyking140/" target="_blank" >Linkedin</a></button>
                    <button class ="button-28" role="button"> <a href="mailto:lk2936@columbia.edu" > Email Me </a> </button>
                </div>

                </title>
                <img src="./profilePic.jpg" />
            </div>
            
            <p> I’m a Computer Science and Math major at Columbia University interested in a career in software engineering, data science, and machine learning. I'm especially interested in the intersections of computer science and economics, and I have a passion for applying my technical skills to public policy. I’ve created this page to compile my personal projects. Thank you for checking it out! </p>
            
            <h2 id="projects" style={{padding: '5px 0px 15px'}}> Projects </h2>

            <div className = "project-list">
                <Link to="/census"> <Project title="International Trade API Query Builder" desc = {census_sent}> </Project> </Link>
                <Link to="/unicc"> <Project title="UNICC Climate Change Chatbot" desc = {unicc_sent}> </Project> </Link>
                <Link to="/lanternDie"> <Project title="Lantern Die" desc = {ll_sent} > </Project> </Link>
                <Link to="/auctionAlchemy"> <Project title="AuctionAlchemy" desc = {aa_sent}> </Project> </Link>
            </div> 

            <br />

            <h2> Primary Technical Skills </h2>
            
            <div style={{ padding: '20px 0px 20px', }}>
                <div class = "skill-list">
                    <skill> Web Development </skill>
                    <skill> Relational Database Management </skill>
                    <skill> Machine learning </skill>
                </div>
                <br />
                <div class = "skill-list">
                    <skill> Python (Django, Flask) </skill>
                    <skill> Java </skill>
                    <skill> SQL (PostgreSQL, MySQL) </skill>
                    <skill> React </skill>
                    <skill> JavaScript </skill>
                    <skill> HTML/CSS </skill>
                </div>
            </div>

            <br />

            <h2> More About Me </h2>
            <br />
            <div className="content" id="about" style={{padding: '0px 10px'}}>
                <strong> Relevant Coursework: </strong>
                <ul>
                    <li>Data Structures (Teaching Assistant) </li>
                    <li> Artificial Intelligence </li>
                    <li> Introduction to Databases </li>
                    <li> Machine Learning for Genomics </li>
                    <li> Advanced Programming (Systems Programming, C, Bash) </li>
                </ul>
                <br />
                
                <strong> Community Involvement: </strong>
                <ul>
                    <li> Columbia Women in Computer Science (DivHacks Hackathon 2023 Organizing Team)</li>
                    <li> Columbia Data Science Society (Executive Board) </li>
                    <li> Columbia EcoReps (volunteer) and Greenborough (sustainable community member) </li>
                    <li> Columbia Economics Society (Economics Department Representative 2022 - 2023) </li>
                    <li> Washington State Representative Tarra Simmons (campaign intern) </li>
                    <li> Washington State Representative Emily Randall (youth councilmember) </li>
                    <li> Chicago Justice Project (volunteer data collector and analyst; 2022 Transparency Trailblazer Award for committing >150 hours) </li>
                </ul>
                <br />

                <strong> Interests and Hobbies: </strong>
                <ul>
                    <li> Public policy and government </li>
                    <li> Tech for social good </li>
                    <li> Computational Biology and Biotech </li>
                    <li> Women/LGBTQ voices in tech </li>
                    <li> Hobbies: running and biking, sewing, pacific northwest hiking </li>
                </ul>
                <br />
            </div>
        </div>

    </div>
    );
};

function Project({ title, desc }) {
    
   return (
      <div className="project">
          <img src={`./${title.toLowerCase()}_cover.png`} alt={title} />
          <caption>
            <div className="project-title"> {title}  </div>
            {desc}
          </caption> 
      </div>
   );
  }
  
function showskills({skills}) {

}
 
export default Home;