import React, {Component} from "react";
// import Particles from 'react-particles-js';
 

const particleOpt = {

    particles: {
        line_linked: {
            shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
            }
        }
    }
}


class Particles extends Component{
  
    // render(){
    //     return (
    //         <Particles 
    //         params={particleOpt}
    //         style={{
    //             width: '100%'
    //             // backgroundImage: `url(${logo})` 
    //           }}
    //         />
    //     );
    // };

    render(){
        return (
            <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                // backgroundImage: `url(${logo})` 
              }}
            />
        );
    };
 
}

export default Particles