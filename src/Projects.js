import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
   // this Project component is using JSX to display what was originally in the .map() function in the Projects component below.
   render(){
      console.log(this.props);

      const { title, image, description, link } = this.props.project;
      
      return (
         <div style={{ display: 'Inline-block', width: 300, margin: 15 }}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width: 200, height: 120 }}/>
            <p>{description}</p>
            <a href={link}>{link}</a>

         </div>
      );
   }
}

class Projects extends Component {
   render(){
      return (
         <div>
            <h2>Highlighted Projects</h2>
            <div>
               {
                  PROJECTS.map((PROJECT) => {
                     return ( 
                        <Project 
                           key={PROJECT.id} 
                           project={PROJECT} 
                        />  
                     );   
                  })
               }
            </div>
         </div>
      );
   }
}

export default Projects;