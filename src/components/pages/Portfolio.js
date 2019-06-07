import React, {Component} from "react";
import Card from "../Card/card"
import Mongo_Scraper from '../../Assets/Mongo_Scraper.png';
import Audition from '../../Assets/Audition.png';
import Bro_Finder from '../../Assets/Bro_Finder.png';
import burger from '../../Assets/burger.png';
import Giftastic from '../../Assets/Giftastic.png';
import React_memory_game from '../../Assets/React_memory_game.png';
import Scale_UP from '../../Assets/Scale_UP.png';
import Train_Schedule from '../../Assets/Train_Schedule.png';
import trivia from '../../Assets/trivia.png';
import Wrapper from "../../components/Wrapper";
import Particles from 'react-particles-js';
import Row from '../Row/Row';

class Portfolio extends Component {
render (){
  return (
    <Wrapper>
     <Particles></Particles>
  <Row>
  <div className="card">
    <div className="img-container">
    <a href="https://sheltered-meadow-20126.herokuapp.com/">
    <img alt="Mongo Scraper" src={Mongo_Scraper}/>
    </a>
    <div className="projectName">
                <a href="https://sheltered-meadow-20126.herokuapp.com/">
                    <h3>Mongo Scraper</h3>
                </a>
            </div>  
        </div>
        </div>
    
        <div className="card">
    <div className="img-container">
    <a href="https://uncauditionapp.herokuapp.com/">
    <img alt="Audition" src={Audition}/>
    </a>
    <div className="projectName">
                <a href="https://uncauditionapp.herokuapp.com/">
                    <h3>Audition</h3>
                </a>
            </div>  
        </div>
        </div>

        <div className="card">
    <div className="img-container">
    <a href="https://memory-game-react-v1.herokuapp.com/">
    <img alt="React Memory Game" src={React_memory_game}/>
    </a>
    <div className="projectName">
                <a href="https://memory-game-react-v1.herokuapp.com/">
                    <h3>React Memory Game</h3>
                </a>
            </div>  
        </div>
        </div>

          <div className="card">
    <div className="img-container">
    <a href="https://facebook-like-friend-finder-v1.herokuapp.com/">
    <img alt="Bro Finder" src={Bro_Finder}/>
    </a>
    <div className="projectName">
                <a href="https://glacial-beyond-19940.herokuapp.com/">
                    <h3>Bro Finder</h3>
                </a>
            </div>  
        </div>
        </div>

     <div className="card">
    <div className="img-container">
    <a href="https://eat-the-burger-v1.herokuapp.com/">
    <img alt="Burger" src={burger}/>
    </a>
    <div className="projectName">
                <a href="https://eat-the-burger-v1.herokuapp.com/">
                    <h3>Burger</h3>
                </a>
            </div>  
        </div>
        </div>

        <div className="card">
    <div className="img-container">
    <a href="https://waleedhamza.github.io/GifTastic/">
    <img alt="Giftastic" src={Giftastic}/>
    </a>
    <div className="projectName">
                <a href="https://waleedhamza.github.io/GifTastic/">
                    <h3>Giftastic</h3>
                </a>
            </div>  
        </div>
        </div>

        <div className="card">
    <div className="img-container">
    <a href="https://sleepy-river-20789.herokuapp.com/">
    <img alt="Scale UP" src={Scale_UP}/>
    </a>
    <div className="projectName">
                <a href="https://sleepy-river-20789.herokuapp.com/">
                    <h3>Scale UP</h3>
                </a>
            </div>  
        </div>
        </div>

        <div className="card">
    <div className="img-container">
    <a href="https://waleedhamza.github.io/Train-Schedule/">
    <img alt="Train Schedule" src={Train_Schedule}/>
    </a>
    <div className="projectName">
                <a href="https://waleedhamza.github.io/Train-Schedule/">
                    <h3>Train Schedule</h3>
                </a>
            </div>  
        </div>
        </div>

        <div className="card">
    <div className="img-container">
    <a href="https://waleedhamza.github.io/TriviaGame/">
    <img alt="Trivia" src={trivia}/>
    </a>
    <div className="projectName">
                <a href="https://waleedhamza.github.io/TriviaGame/">
                    <h3>Trivia</h3>
                </a>
            </div>  
        </div>
        </div>
  </Row>
</Wrapper>
  );
  
}
}
export default Portfolio;
