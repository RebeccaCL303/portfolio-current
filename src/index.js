const projectsElement = document.getElementById("project-display");
const projects = [
 {
  title: "Weather App",
  image: "./images/weather-project.png",
  alt: "weather application",
  description: "",
  "source-code": "https://github.com/RebeccaCL303/weather-application-revamp",
  "project-link": "https://sage-halva-a3063b.netlify.app",
 },
 {
  title: "Weather App (React)",
  image: "./images/weather-react.png",
  alt: "weather application",
  description: "",
  "source-code": "https://github.com/RebeccaCL303/weather-react",
  "project-link": "https://spiffy-banoffee-229707.netlify.app",
 },
 {
  title: "Twin Peaks",
  image: "./images/twin-peaks-project.jpg",
  alt: "twin peaks landing page",
  description: "",
  "source-code": "https://github.com/RebeccaCL303/twin-peaks-project",
  "project-link": "https://extraordinary-crostata-3cdf8f.netlify.app/",
 },
 {
  title: "Dictionary App",
  image: "./images/dictionary-react.png",
  alt: "dictionary application",
  description: "",
  "source-code": "https://github.com/RebeccaCL303/dictionary-react",
  "project-link": "https://euphonious-centaur-38b24d.netlify.app/",
 },
 {
  title: "FAERS Database",
  image: "./images/FAERS.png",
  alt: "application for the federal adverse event reporting system",
  description: "",
  "source-code": "https://github.com/RebeccaCL303/fda-adverse-reports",
  "project-link": "https://jovial-meringue-5d040c.netlify.app/",
 },
 {
  title: "Survey Form",
  image: "./images/survey-form.png",
  alt: "survey form about videogames",
  description: "",
  "source-code": "https://github.com/RebeccaCL303/survey-form",
  "project-link": "https://imaginative-boba-df8742.netlify.app/",
 },
 {
  title: "AI Movie / TV Show Generator",
  image: "./images/movie-tv-generator.png",
  alt: "ai movie and tv generator app",
  description: "",
  "source-code": "https://github.com/RebeccaCL303/movie-tv-generator",
  "project-link": "https://movietvgenerator.netlify.app/",
 },
 {
  title: "Palindrome Checker",
  image: "./images/palindrome-project.png",
  alt: "palidrome checker app",
  description: "",
  "source-code": "https://github.com/RebeccaCL303/palindrome-checker",
  "project-link": "https://rebeccas-palindrome-checker.netlify.app/",
 },
];

projects.forEach((project) => {
 projectsElement.innerHTML += ` <section class="row project">
        <div class="col-md-6 description">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project["project-link"]}" class="border-link">Launch Project</a>
            <a href="${project["source-code"]}" class="border-link">Source Code</a>
        </div>
        <div class="col-md-6 project-img">
            <img src="${project.image}" alt="${project.alt}" />
        </div>
    </section>`;
});