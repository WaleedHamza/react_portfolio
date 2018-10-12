import React from "react";
import "./aboutme.css"
import Particles from "react-particles-js"

const About = () => (
    <div className="wrapper">
        <Particles></Particles>
        <div className="about container">
            {/* <div className="jumbotron jumbotron-fluid"> */}
                <div className="profilePic"></div>
                {/* <h1 className="title display-4">About Me</h1> */}
            {/* </div> */}

            <div className="container aboutMeDiv">
                
                <div className="content">
                    <h4 className="aboutMeText1">I have always been a lover of languages. My first
                        memories were teaching myself English while watching movies and then repeating
                        the words to anyone who would listen. This initial spark created a passion to
                        master English which lead me to become a translator for the US Army. Language,
                        has the power to create connections and influence people.
                    </h4>

                    <h4 className="aboutMeText2">My love of languages has evolved with my career
                        trajectory, so, it’s no surprise I found the same spark when introduced to
                        computer languages. In code, I have the same power to create connections and
                        influence people for good through my applications.
                    </h4>

                    <h4 className="aboutMeText3">I’m a solution focused developer eager to tackle
                        challenging issues and provide innovative solutions. My strengths are
                        persistence, personal integrity and a positive attitude. I’m a resourceful,
                        life-long learner, who enjoys collaborating across multidisciplinary teams, but
                        also can work independently. I’d love to grow as a user centered
                        developer, and improve the human condition by connecting users one digital
                        project at a time.
                    </h4>
                </div>
            </div>

        </div>
    </div>
);

export default About;
