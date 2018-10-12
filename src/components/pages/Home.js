import React from "react";
import './pages.css'
import Particles from 'react-particles-js';
import Github from '../../Assets/github.png';
import Linkedin from '../../Assets/linkedin.png';
import Stack from '../../Assets/stackOverflow.png';
import ResumeIcon from '../../Assets/resumeIcon.png';
import Pdf from '../../Assets/Waleed_Hamza_Site_Resume.pdf'
// import Slide from "../SlidePan/Slide";
// import Particles from "../Particles/Particles"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="wrapper">
                <Particles></Particles>
                <div className="home">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container title">
                            <h1 className="display-4">Waleed Hamza</h1>
                            <br/>
                            <h1 className="display-4">Full Stack Developer</h1>
                            <br/>
                            <p className="lead ml2">HTML | CSS | JavaScript | JQuery | Node.js | Express.js | Mongo | React.js
                                <br/>
                                Node.js | Express | MongoDB | MYSQL</p>
                        </div>

                        <div className="socialMedia">
                            <div className="socialIcon">
                                <a href="https://github.com/WaleedHamza" target="_blank" rel="noopener noreferrer"><img src={Github} alt={'github'}/></a>
                            </div>
                            <div className="socialIcon">
                                <a href="https://www.linkedin.com/in/waleedhamza/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt={'linkedin'}/></a>
                            </div>
                            <div className="socialIcon">
                                <a href="https://stackoverflow.com/users/9254704/waleed-hamzah?tab=profile" target="_blank" rel="noopener noreferrer"><img src={Stack} alt={'stackoverflow'}/></a>
                            </div>
                            <div className="socialIcon">
                                <a href={Pdf} target="_blank"><img src={ResumeIcon} alt={'download resume'}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
