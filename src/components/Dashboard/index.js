import './index.css'

import Header from '../Header'
import Footer from '../Footer'
import SkillSection from '../skill-section'

const DashBoard = () =>(
    <div className='bg-container'>
        <Header />
        <div className='dashboard'>
            <div class="welcome-container">
                <div class="welcome-icon">
                    <i class="fas fa-hand-peace"></i>
                </div>
                <div class="welcome-heading">Welcome to My Portfolio!</div>
                <div class="welcome-text">
                    I'm a creative and curious developer passionate about building digital experiences that matter.<br />
                    Explore my work, skills, and projects – and feel free to connect!
                </div>
            </div>

            <h3>OBJECTIVE:</h3>
                <p>Hello! I’m Sai Babu, a passionate software developer with a strong foundation in HTML, CSS, JavaScript, React.js, Node.js, Python, and SQL. I have experience building web applications, including user authentication, API integrations, and interactive features.

                  I completed my B.Sc. in Computer Science and a marketing internship at Kubera Chitfund, where I gained insights into business strategies. My technical expertise, combined with my problem-solving mindset, helps me develop efficient and user-friendly solutions.
                </p>
            <SkillSection />
        </div>
        
        <Footer />
    </div>
    
)


export default DashBoard