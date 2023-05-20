import React from "react";
import './resume.css';
class Resume extends React.Component{
  state= [{'meet':'meet'}];
  render(){
    return(<div>
    <div className="container">
        <div className="item-1">
            <img src="chrome://branding/content/about-logo.png" alt="meet"></img>
        </div>
        <div className="item-2 bag">
            <div ><h2>cotact information:</h2></div>
                <div className="packet">
                    <div className="container"><b >NAME:</b><p className="name">Meet H Patel</p><br/></div>
                    <div className="container"><b >EMAIL: </b><p>meetonfire@gmail.com</p><br/></div>
                    <div className="container"><b >LINKEDIN: </b><p className="email">LINC LINKDEN</p><br></br></div>
                    <div className="container"><b >GITHUD: </b><p className="email">GITHUB</p><br></br></div>
                    <div className="container"><b >PHONE NUM: </b><p className="email">9662567756</p><br></br></div>
                    
                 </div>
          </div>
      </div>
    <div>
     <div className="bag">
        <h4>TECHNICAL SKILL</h4>
        <div className="packet">
            <ul>
                <li>	Programming Languages: JavaScript, HTML, CSS
	</li><li>Front-end Technologies: React.js, Redux, HTML5, CSS3, Bootstrap, Material-UI
	</li><li>Back-end Technologies: Node.js, Express.js
	</li><li>Databases: MongoDB, MySQL
	</li><li>Tools: Git, GitHub, Visual Studio Code, Postman
	</li><li>Other skills: RESTful APIs, Agile Methodologies, UI/UX Design, Responsive Web Design
     </li>
</ul>
            
        </div>
        <div className="bag">
            <h4>EDUCATION:</h4>
            <div className="packet">
                <table border={1}>
                    <thead>
                        <th>YEAR</th>
                        <th>COURSE</th>
                        <th>UNIVERSITY/INSTITUTION</th>
                        <th>CGPA/PRT%</th>

                    </thead>
                    <tr>
                        <td>2017</td>
                        <td>10</td>
                        <td>NEW EDUCATION HIGHSCHOOL(GSED)</td>
                        <td>57%</td>
                    </tr><tr>
                        <td>2019</td>
                        <td>12</td>
                        <td>NEW EDUCATION HIGHSCHOOL(GSED)</td>
                        <td>57%</td>
                        </tr><tr>
                        <td>2023</td>
                        <td>B.E in computer engineering
                        </td>
                        <td>(KITE) Gujarat Technological</td>
                        <td>57%</td>                   
                    </tr>
                </table>
            </div>
        </div>
        <div className="bag">
            <h4>CERTIFICATION</h4>
            <div className="packet">
                <table>
                    <thead>
                        <th>YEAR</th>
                        <th>INSTITUTION</th>
                        <th>CR LINk</th>
                        
                    </thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>                 
                    </tr>
                </table>
            </div>
        </div>
     </div><div className="bag">
            <h4>PROJECTS</h4>
            <div className="packet">
                <table>
                    <thead>
                        
                        <th>PROJECT NAME</th>
                        <th>Technologies/laibrery</th>
                        <th>PR LINk</th>
                        <th>GIT LINK</th>
                        
                    </thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>                 
                    </tr>
                </table>
            </div>
        </div>
        <div  className="bag">
        <div>
            <h4>SUMMARY</h4>
        </div>
        <div  className="packet">
            <p>Highly skilled Full Stack Developer with [0] years of experience in building web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and expertise in React.js. Proficient in designing and developing scalable, responsive, and user-friendly web applications. Strong problem-solving skills and ability to work collaboratively in agile environments. Passionate about creating efficient and high-performing applications that deliver exceptional user experiences.</p>
        </div>
    </div>
    <div className="bag">
            <h3>REFERENCES</h3>
            <div className="packet">
                <p>none</p>
            </div>
        </div>
        
     </div>

</div>

    )
  }
  

}
export default Resume;