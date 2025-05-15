import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import ProjectCard from '../ProjectCard'

const projects = [
    {id : 1,name: "Jobby App", url : "https://sai7272jobby.ccbp.tech", projectUrl : "https://res.cloudinary.com/df9k2fdct/image/upload/v1746517175/lflba7kczpxkb3ulpqee.jpg"},
    {id : 2,name: "Emoji Game", url : "https://sai7272emojig.ccbp.tech", projectUrl : "https://res.cloudinary.com/df9k2fdct/image/upload/v1747289623/qdsgtkow0wtiekopppme.jpg"},
    {id : 3,name: "Web Projects", url : "https://saiwebprojects.ccbp.tech", projectUrl : "https://res.cloudinary.com/df9k2fdct/image/upload/v1747287777/nmr8wksejwp2pbf2phfg.jpg"},
    {id : 4,name: "History Page", url : "https://bhistory7272.ccbp.tech", projectUrl : "https://res.cloudinary.com/df9k2fdct/image/upload/v1747291778/t2kfsevdqmefgwbnsopv.jpg"},
    {id : 5,name: "App Store", url : "https://saibabuappstore.ccbp.tech", projectUrl : "https://res.cloudinary.com/df9k2fdct/image/upload/v1747289047/jf6hpavprkgvuk0zd4m3.jpg"},
    {id : 6,name: "My Pet App", url : "https://petshow.ccbp.tech", projectUrl : "https://res.cloudinary.com/df9k2fdct/image/upload/v1747290024/pqnlaxcj69hopsopxvdw.jpg"},
    ]


const ProjectsPage = () => (
    <div className='bg-container'>
        <Header />
        <div className='projects-page'>
            <h1>MY PROJECTS</h1>
            <ul className='projects-container'>
                {projects.map(eachProject => <ProjectCard project={eachProject} key={eachProject.id} /> )}
            </ul>
        </div>
        <Footer />
    </div>
)

export default ProjectsPage