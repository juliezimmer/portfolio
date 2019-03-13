import React, { Component } from 'react';



class App extends Component {
   constructor() {
      super(); 
      this.state = {
         displayBio: false
      };
   }
   
   render () {
      return (
         <div>
            <h1>Hello!</h1>
            <p>My name is Julie. I am a web developer. </p>
            <p>I'm always looking for meaningful project work.</p>
            { 
               this.state.displayBio ? ( 
                  <div>
                     <p>I live in the Twin Cities and love to walk the trails and paths in my neighborhood.</p>
                     <p>My favorite JavaScript library is React.</p>
                     <p>In addition to coding, I love a little true crime TV and coffee!</p>  
                  </div> 
               ) : null
            }
         </div>
      );
   }
}

export default App;

