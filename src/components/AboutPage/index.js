import {Component} from 'react'

import './index.css'

import Header from '../Header'
import Footer from '../Footer'
import SkillSection from '../skill-section'

class About extends Component{

  state = {imageSrc : '' , imageDisplayType : 'none'}

    componentDidMount(){
    }

    getData = async () => {
        try{
            const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCmSsdHLiNRiUrOaO5r_ohU9vRUdBBmn2E'
            const options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                        {
                            text: `You are an AI assistant on the personal website of John Doe. Only answer questions related to John Doe's portfolio.
                            
                John Doe's Profile:
                - Education: B.Tech in Computer Science from XYZ University (2021)
                - Experience: Frontend Developer Intern at ABC Corp, Freelance React Projects
                - Skills: React, Node.js, Express, MongoDB, HTML, CSS, JavaScript, Python
                - Projects: Mood Tracker App, Portfolio Website, AI Career Assistant
                - Certifications: Full Stack Developer from XYZ Platform
                
                Now answer the user question truthfully based on this profile only.`
                          },
                          { text: "Do you know about Movies? which movie do you like most?" }
                    ]
                  }
                ]
              })
            }
            const response = await fetch(url,options)
            console.log(response)
            const data = await response.json()
            console.log(data)
            
        }catch(e){
            console.log(e)
        }
    }

    onChange = () =>{
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          // preview.src = e.target.result;
          // preview.style.display = 'block';
          this.setState({imageSrc : e.target.result, imageDisplayType : 'block'})
          console.log("hello")
        };
        reader.readAsDataURL(file);
      }
    }

    render(){
        const {imageSrc, imageDisplayType} = this.state
        return(
            <div className='bg-container'>
              <Header />

              <div className='about-me-container' >
              <h3>OBJECTIVE:</h3>
                <p>Hello! I’m Sai Babu, a passionate software developer with a strong foundation in HTML, CSS, JavaScript, React.js, Node.js, Python, and SQL. I have experience building web applications, including user authentication, API integrations, and interactive features.

                  I completed my B.Sc. in Computer Science and a marketing internship at Kubera Chitfund, where I gained insights into business strategies. My technical expertise, combined with my problem-solving mindset, helps me develop efficient and user-friendly solutions.
                </p>
                 <h3>💡 What I’m Working On:</h3> 
                 <p>
                  Building web and mobile applications that connect users with workers.

                  Exploring innovative ideas and turning them into real-world solutions.

                  Learning and growing in the field of full-stack development.
                  </p>

                 <h3>🤝 Looking to Connect!</h3> 
                 <p>
                  I’m open to collaborations, job opportunities, and networking with like-minded professionals. If you're interested in discussing tech ideas, working on projects, or hiring a dedicated developer, feel free to reach out!

                  Let’s connect and create something amazing together! 🚀</p>

                  <SkillSection />
              </div>
                
                 <Footer />
            </div>
        )
    }
}

export default About