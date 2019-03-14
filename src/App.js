import React, { Component } from 'react';
import Projects from './Projects'; 
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg';



class App extends Component {
   state = {
      displayBio: false
   };
      
   toggleDisplayBio = () => {
      this.setState({ displayBio: !this.state.displayBio });
   }

   render () {
      return (
         <div>
            <img src={profile} alt="profile" className="profile"/>
            <h1>Hello!</h1>
            <p>My name is Julie. I am a web developer. </p>
            <p>I'm always looking for meaningful project work.</p>
            { 
               this.state.displayBio ? ( 
                  <div>
                     <p>I live in the Twin Cities and love to walk the trails and paths in my neighborhood.</p>
                     <p>My favorite JavaScript library is React.</p>
                     <p>In addition to coding, I love a little true crime TV and coffee!</p>  
                     <button onClick={this.toggleDisplayBio}> Show Less</button>
                  </div> 
               ) : (
                  <div>
                     <button onClick={this.toggleDisplayBio}>Learn More</button>
                  </div>
               )
            }
            <hr />
            <Projects />
            <hr/>
            <SocialProfiles />
         </div>
      )
   }
}

export default App;

