// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Vishal ",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am currently a final year computer science and engineering student from IIIT Vadodara. I also am a machine learning and android development enthusiast who also has a great hunger to explore new techmologies. I am also an ardent problem solver who loves challenges and works hard to get to solutions.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Java",
    // faClass: "fab fa-html5",
     // faClass: "fab fa-html5",
  },
  {
    name: "Python",
    //faClass: "fab fa-css3",
  },
  {
    name: "C/C++",
    //faClass: "fab fa-js",
  },
  
  {
    name: "Machine Learning",
    //faClass: "fab fa-node",
  },
  {
    name: "Data Analytics",
    //faClass: "fab fa-python",
  },
  {
    name: "Flutter",
    //faClass: "fab fa-java",
  },
  {
    name: "DataBase",
    //faClass: "fab fa-f3cd",
  },
  {
    name: "OOPS",
    //faClass: "fas fa-database",
  },
  {
    name: "Dart",
    //faClass: "fab fa-OOPS",
  },
  {
    name: "Pandas",
    //faClass: "fab fa-f03e",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Verselet",
    skills: ["Pandas, CNN, Scrapy"],
    url: "https://github.com/Sherlock-dev/Verselet",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "No Mask",
    skills: ["Python, CNN, OpenCV"],
    url: "https://github.com/Sherlock-dev/ML-project",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Home Sweet Home",
    skills: ["Flutter, FireBase, Regression"],
    url: "https://github.com/Sherlock-dev/HomeSweetHome",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Dwell",
    skills: ["Algorithms, Native React, Google API"],
    url: "https://github.com/Sherlock-dev/Tournify",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Tournify",
    skills: ["Java, JavaSwing, OOPS"],
    url: "https://github.com/Sherlock-dev/Tournify",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Weather",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Sherlock-dev/Weather",
  },
  {
    // Add image in './styles/images.css' in #project7
    id: "project7",
    name: "Snakes",
    skills: ["HTML, JS"],
    url: "https://github.com/Sherlock-dev/SnakeGame",
  },
  {
    // Add image in './styles/images.css' in #project8
    id: "project8",
    name: "CVirtura",
    skills: ["HTML, JS, MySQL ,Apache"],
    url: "https://github.com/Sherlock-dev/Cvirtura",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Designs";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Wandered",
    url: "",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "landscape",
    url: "",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "To the stars",
    url: "",
  },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "I am open to any interaction and collaborations in the field of machine learning and flutter development.",
  copyright: "Vishal Singh Rajput",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Sherlock-dev",
  facebook: "https://www.facebook.com/profile.php?id=100004568946223",
  linkedin: "https://www.linkedin.com/in/vishal-singh-rajput-a77551204/",
  resume: "https://drive.google.com/file/d/1h3PXIUPyn62jNHDCpmgScSjIY6CQ33DB/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
