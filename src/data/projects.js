import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

// screen-case syntax; (uppercase) used for global variables/values in a JS project;
// The PROJECTS array is an array of objects, with each object or array item, being an individual project.
const PROJECTS = [
   {
      id: 1,
      title: "Example React Application",
      description: "A React App that I built involvong JS and core web dev concepts",
      link: "https://github.com/juliezimmer",
      image: project1
   },
   {
      id: 2,
      title: "API",
      description: "A Rest API with GET and POST requests that I built", 
      link: "https://github.com/juliezimmer",
      image: project2
   },
   {
      id: 3,
      title: "Final Project",
      description: "A project built while taking a course", 
      link: "https://github.com/juliezimmer",
      image: project3
   }
]; 

export default PROJECTS;