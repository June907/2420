import React from "react";
import './aboutpage.css';

function Blocks() {
    return (
    <div>
                

    <div className="block">
        <p className = "text-light" >
        This website was created by the team named '2 for 20' as their senior project at the University of Northern Colorado. The team is made of five students from both the Business Admin: Computer Information Systems and the Software Engineering majors. 
        The Stock App is the culmination of one whole school year dedicated to learning how to develop a project from start to finish. The goal of this webisite was to fill the social media void for stock trading. 
        Through the expressed need for a dedicated site seen through the many reddit threads and facebook groups, The Stock App was born. 
        </p>
    </div>
    <br></br>
    <div className="block">
        <div className="blocks-text">
            <p className = "text-light">                    
                <b><u>Isaac Ingalls</u>: Project Lead</b><br/>
                Isaac is a third year Business Computer Information Systems Major interested in data analytics and large scale backend calculations. He took the lead role in this project 
                using management skills and large scale ideas to guide the more technical members of the team to create the website we planned and invisioned. Outside of school he participates 
                in weightlighting and a competitive bowling league. <br/>
                <a href = "https://www.linkedin.com/in/isaac-ingalls-5609a017b/" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
        </div>
        <div className="blocks-picture">
            <img src= "/static/img/ProfileImages/Isaac.jpg" alt="Isaac Picture"></img>         
        </div>
    </div>
    <br></br>
    <div className="block">
        <div className="blocks-picture">
            <img src= "/static/img/ProfileImages/Jun.jpg" alt="Junwen Picture"></img>         
        </div>
        <div className="blocks-text">
            <p className = "text-light">
                <b><u>Junwen Huang</u>: Frontend Developer</b><br/>
                Junwen is a fourth-year student studying software engineering and applied mathematics, who will be graduating in December 2022. Junwen had the most experience with the react framework, so he took the lead frontend role. He used this knowledge to develop the frontend and integrate it with an external API. Professionally, Junwen is working as an intern at RedVan workshop with his primary role being SFCC development.
                <br/>
                <a href = "https://www.linkedin.com/in/junwen-huang-658aaa202/" target="_blank" rel="noreferrer">LinkedIn</a>
            </p> 
        </div>
    </div>
    <br></br>
    <div className="block">
            <div className="blocks-text">
                <p className = "text-light">                    
                    <b><u>Erik Halenkamp</u>: Backend Developer</b><br/>
                    Erik is a senior Software Engineering major interested in backend design and system architecture. He worked to create a REST API for the site using his experience as 
                    lead developer for the music app RecordWall. He works as a tutor for the university and plays on one of their competitive eSports teams.<br/>
                    <a href = "https://www.linkedin.com/in/erik-halenkamp-4b49451a6/" target="_blank" rel="noreferrer">LinkedIn</a>
                </p>
            </div>
            <div className="blocks-picture">
                <img src= "/static/img/ProfileImages/Erik.jpg" alt="Erik Picture"></img>          
            </div>
        </div>
        <br></br>
        <div className="block">
        <div className="blocks-picture">
            <img src= "/static/img/ProfileImages/Yusuf.jpg" alt="Yusuf Picture"></img>          
        </div>
        <div className="blocks-text">
            <p className = "text-light">
                <b><u>Yusuf Kortobi</u>: Frontend Developer</b><br/>
                Yusuf is a 4th year student studying Software Engineering at UNC, graduating in May 2022. He took a frontend role, taking on many of the web design tasks 
                while using many of the skills he learned while studying computer science. Professionally, Yusuf has worked with National STEM Honor Society as an web design intern, and as 
                an RA in housing at UNC.  Outside of school he participates in competitve swim, as well as weightlifting and climbing for fun. <br/>
                <a href = "https://www.linkedin.com/in/yusuf-kortobi-aa496b19b/" target="_blank" rel="noreferrer"> LinkedIn</a>  
            </p> 
        </div>
    </div>
    <br></br>
    <div className="block">
        <div className="blocks-text">
            <p className = "text-light">                    
                <b><u>Floyd Haslett</u>: System Security</b> <br/>
                Floyd is a third year Business Computer Information Systems Major interested in Network and Securirty Systems Administration. He started this project with minimal knowledge in 
                C# and worked with the team to learn aditional languages of HTTP, CSS, JavaScript, and React. In his free time he enjoys rock climbing, swimming, and is a network admin intern at
                a local Greeley Business <br/>
                <a href = "https://www.linkedin.com/in/floyd-haslett/" target="_blank" rel="noreferrer"> LinkedIn</a>
            </p>
        </div>
        <div className="blocks-picture">
            <img src= "/static/img/ProfileImages/Floyd.jpg" alt="Floyd Picture"></img>       
        </div>
    </div>
</div>
    );
}
export default Blocks;
