import firstimage from "../../assets/profile.jpg";
import "./body.css"

function Body() {
    return (
    <div className="body">
        <div className="profile">
        <img src={ firstimage } alt="Profile" />
        </div>
        <div className="info">
        <h1>pankaj kumar</h1>
        <h3>Full Stack Developer more focused on backend development with some handson data analytics</h3>
        <h4>Skills: python, excel sql, nosql fastapi</h4>
        <p>Passionate about building web applications and learning new technologies.</p>
        <div className="socials">
            <a href="https://github.com/pankaj8700">GitHub</a>
            <a href="https://www.linkedin.com/in/pankaj-kumar-9ab974240/">LinkedIn</a>
        </div>
        </div>
    </div>
);
}

export default Body;