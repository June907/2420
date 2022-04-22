import React from "react";
import './aboutpage.css';

function Blocks() {
    return <div>
        
    <div className="block">
        <p className = "text-light" >
        This website was created by the team named '2 for 20' as their senior project at the University of Northern Colorado. The team is made of five students from both the Business Admin: Computer Information Systems and the Software Engineering majors. 
        [Insert Webisite Name Here] is the culmination of one whole school year dedicated to learning how to develop a project from start to finish. The goal of this webisite was to fill the social media void for stock trading. 
        Through the expressed need for a dedicated sight seen through the many reddit threds and facebook groups, [Insert Webisite Name Here] was born. 
        </p>
    </div>
    <div className="block">
        <div className="blocks-text">
            <p className = "text-light">                    
                <b><u>Isaac Ingalls</u>: Project Lead</b><br/>
                Isaac is a third year Business Computer Information Systems Major interested in data analytics and large scale backend calculations. He took the lead roll in this project 
                using management skills and large scale ideas to guide the more technical members of the team to create the website we planned and invisioned. Outside of school he participates 
                in weightlighting and a competitive bowling league. <br/>
                <a href = "https://www.linkedin.com/in/isaac-ingalls-5609a017b/" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
        </div>
        <div className="blocks-picture">
            <img src= "frontend\src\components\aboutPage\ProfileImages\Isaac.jpg" alt="Isaac Picture"></img>         
        </div>
    </div>
    <div className="block">
        <div className="blocks-picture">
            <img src= "../frontend/src/components/aboutPage/ProfileImages/Jun.jpg" alt="Junwen Picture"></img>         
        </div>
        <div className="blocks-text">
            <p className = "text-light">
                <b><u>Junwen Huang</u>: Frontend Developer</b><br/>
                Junwen is a fouth year studnet studying both Software Engineering and Applied Mathematics at UNC, graduating in Dec 2022. As the only person that knows React frame work,
                He took a frontend role, implenting React framework as well as intergrating external API into the websiteProfessionally, Junwen is working as an Intern in RedVan Workshop as SFCC developr. 
                In his free time, he like play Souls series games.
                <br/>
                <a href = "https://www.linkedin.com/in/junwen-huang-658aaa202/" target="_blank" rel="noreferrer">LinkedIn</a>
            </p> 
        </div>
    </div>
    <div className="block">
            <div className="blocks-text">
                <p className = "text-light">                    
                    <b><u>Erik Halenkamp</u>: Backend Developer</b><br/>
                    Isaac is a third year Business Computer Information Systems Major interested in data analytics and large scale backend calculations. He took the lead roll in this project 
                    using management skills and large scale ideas to guide the more technical members of the team to create the website we planned and invisioned. Outside of school he participates 
                    in weightlighting and a competitive bowling league. <br/>
                    <a href = "https://www.linkedin.com/in/erik-halenkamp-4b49451a6/" target="_blank" rel="noreferrer">LinkedIn</a>
                </p>
            </div>
            <div className="blocks-picture">
                <img src= "ProfileImages\Erik.jpg" alt="Erik Picture"></img>          
            </div>
        </div>
        <div className="block">
        <div className="blocks-picture">
            <img src= "frontend\src\components\aboutPage\ProfileImages\Yusuf.jpg" alt="Yusuf Picture"></img>          
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
            <img src= "frontend\src\components\aboutPage\ProfileImages\Floyd.jpg" alt="Floyd Picture"></img>       
        </div>
    </div>
</div>

}
export default Blocks;
