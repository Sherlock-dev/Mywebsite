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
    "I am currently a third year computer science and engineering student from IIIT Vadodara. I also am a web and android development enthusiast who alse has a great hunger to explore new techmologies. I also am a graphic designer with hands on experience on Adode Illustrator and Photoshop",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    faClass: "fab fa-java",
  },
  {
    name: "Flutter",
    faClass: "fab fa-f3cd",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "OOPs",
    faClass: "fab fa-OOPS",
  },
  {
    name: "Adobe Illustrator",
    faClass: "fab fa-f03e",
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
    name: "Tournify",
    skills: ["Java, JavaSwing, OOPS"],
    url: "https://github.com/Sherlock-dev/Tournify",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Weather",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Sherlock-dev/Weather",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Snakes",
    skills: ["HTML, JS"],
    url: "https://github.com/Sherlock-dev/SnakeGame",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "CVirtura",
    skills: ["HTML, JS, MySQL ,Apache"],
    url: "https://github.com/kaustubhai",
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
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "landscape",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "To the stars",
    url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "I am open to any interaction and collaborations in the field of web and android development.",
  copyright: "Vishal Singh Rajput",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Sherlock-dev",
  facebook: "https://www.facebook.com/profile.php?id=100004568946223",
  linkedin: "https://www.linkedin.com/in/vishal-singh-rajput-a77551204/",
  resume: "https://novoresume.com/",
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
