// Sample data array containing objects with film information
// const films = [
//   {
//     title: "Film Fl",
//     liveLink: "https://filmflicker.vercel.app/",
//     description: "Movie and Anime Discovery",
//     stackIcons: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
//     ],
//     githubLink: "https://github.com/ankitrajxd/filmflicker",
//     imageSrc:
//       "https://github.com/100x-Engineers/react-week-1-dishant-08/assets/60565337/84be5d99-77c0-48e0-9f88-03f4f6582258",
//   },
//   {
//     title: "Film Fl",
//     liveLink: "https://filmflicker.vercel.app/",
//     description:
//       "Developed a full-stack microblogging platform with ReactJS, enhancing platform responsiveness. Deployed a robust Node.js API integrated with PostgreSQL and Supabase.",
//     stackIcons: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
//     ],
//     githubLink: "https://github.com/ankitrajxd/filmflicker",
//     imageSrc: "filmflicker",
//   },
//   // Add more film objects as needed
// ];

// import { createProjectCard, projects } from "./projects";
function createProjectCard(project) {
  const stackIconsHTML = project.stackIcons
    .map(
      (iconSrc, index) => `
          <div class="p-2 px-2 dark:bg-zinc-800 bg-zinc-100 rounded-md w-fit">
            <img class="rounded-sm md:hidden " width="18" height="18" src="${iconSrc}" alt="${index}" />
            <img class="rounded-sm hidden md:block " width="23" height="20" src="${iconSrc}" alt="${index}" />
          </div>
        `
    )
    .join("");

  return `
      <div    style="
      border: 4px solid #ef5a3c;
      background-color: rgb(241, 243, 216);
    " class="overflow-hidden border dark:border-0  rounded-lg dark:bg-zinc-900   ">
        <a href="${project.liveLink}" target="_blank" >
          <img class=" object-contain w-full h-full rounded-xl  max-h-[280px] " src="${
            project.imageSrc
          }" alt="${project.title}" />
        </a>
        <div class="p-4">
          <div class="flex  justify-between items-center my-4 ">
            <div>
              <strong
              class=" text-base md:text-xl  border-b-4 text-black border-black rounded-[0.1rem] hover:text-violet-500 "
              >${project.title}</strong
            >
            </div>
            <a href=" ${project.liveLink}" target="_blank"  class="rounded  ${
    project.liveLink ? "" : "hidden"
  } bg-green-100 text-green-800 border-2 animate-pulse border-bgclr-100x text-base md:text-xl  font-bold me-2 px-2.5 py-0.5 dark:bg-green-900 dark:text-green-300">
            Live
            </a>
          </div>
          <p class="opacity-80 hidden md:block ">${project.description}</p>
          <div class=" my-4 " >
          <span class=" font-bold text-bgclr-100x "> Learned : </span>
          <span class="opacity-90  "> ${project.learned}</span>
          </div>
          
          <div class="flex justify-between items-center mt-3 gap-1">
            <div class="flex flex-wrap gap-2 md:gap-3">${stackIconsHTML}</div>
            <a href="${
              project.githubLink
            }" target="_blank" class="p-2 text-sm dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-md">GitHub</a>
          </div>
        </div>
      </div>
    `;
}

const techIconMap = {
  ReactJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Supabase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  Redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "OpenAI API": "https://www.vectorlogo.zone/logos/openai/openai-icon.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Map data structure":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  Sequelize:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
  NextJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  bcrypt:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bcrypt/bcrypt-original.svg",
  // Add more technologies and their icon URLs as needed
};

// Function to create stackIcons array based on techStack
function createStackIcons(techStack) {
  return techStack.split(", ").map((tech) => techIconMap[tech.trim()]);
}

// Array of project data
const projects = [
  {
    title: "100x Microblogging Platform",
    liveLink: "https://react-week-1-dishant-08-hbrg.vercel.app/",
    githubLink: "https://github.com/dishant-08/100x-microblogging",
    description:
      "Developed a full-stack microblogging platform with ReactJS, enhancing platform responsiveness. Deployed a robust Node.js API integrated with PostgreSQL and Supabase.",
    techStack: "ReactJS, Node.js, PostgreSQL, Supabase",
    learned:
      "Modular development with ReactJS, secure API creation, Supabase integration",
    imageSrc:
      "https://github.com/100x-Engineers/react-week-1-dishant-08/assets/60565337/d7772b6c-3c73-4663-84e8-df309b0313aa", // Dummy image source
    stackIcons: createStackIcons("ReactJS, Node.js, PostgreSQL, Supabase"),
  },
  {
    title: "My YouTube App Clone",
    liveLink: "https://my-youtube-lime.vercel.app/",
    githubLink: "https://github.com/dishant-08/myYoutube.git",
    description:
      "Developed YouTube clone with React, Redux, and Tailwind CSS, optimizing API calls through search denouncing. Integrated real-time chat,Shimmer UI.",
    techStack: "React, Redux, Tailwind CSS",
    learned:
      "Applied search denouncing techniques, implemented real-time interaction, and Applied Shimmer UI",
    imageSrc:
      "https://github.com/dishant-08/myYoutube/assets/60565337/1e0f2a03-7911-4f7e-ad9a-77d627de7ef3", // Dummy image source
    stackIcons: createStackIcons("ReactJS, Redux, Tailwind CSS"),
  },
  {
    title: "Ecommerce Website",
    liveLink: "https://ecommwebsite08.netlify.app/",
    githubLink: "https://github.com/dishant-08/Ecommerce-Assigment.git",
    description:
      "Crafted an ecommerce website with responsive design catering to both mobile and desktop screens. Integrated local storage for persistent cart and wishlist management.",
    techStack: "React, Tailwind CSS",
    learned: "Responsive design implementation, local storage utilization",
    imageSrc:
      "https://github.com/dishant-08/Ecommerce-Assigment/assets/60565337/fa689756-dc8a-4f80-b421-13959e2e981b", // Dummy image source
    stackIcons: createStackIcons("ReactJS, Tailwind CSS"),
  },

  {
    title: "Video Chatting App",

    githubLink: "https://github.com/dishant-08/i-meet.git",
    description:
      "Developed a video chatting app with NextJS, Tailwind CSS, Socket, and PeerJS. Integrated chat functionality for real-time communication during video .",
    techStack: "NextJS, Tailwind CSS, Socket, PeerJS",
    learned:
      "Real-time communication integration, UI design refinement, proficiency in PeerJS WebRTC and SocketJS",
    imageSrc:
      "https://github.com/dishant-08/i-meet/assets/60565337/71c60b65-6e51-4956-8403-0be4861659e1", // Dummy image source
    stackIcons: createStackIcons("NextJS, Tailwind CSS"),
  },

  {
    title: "AI Resume Generator",
    liveLink: "https://ai-resume-xi.vercel.app/",
    githubLink: "https://github.com/dishant-08/ai-resume-generator",
    description:
      "Developed an AI-powered Resume Generator using React, Tailwind CSS, and OpenAI API. Implemented a user-controlled API throttling button for server load management.",
    techStack: "React, Tailwind CSS, OpenAI API",
    learned:
      "OpenAI API integration, server load management, React form handling",
    imageSrc:
      "https://github.com/dishant-08/aiResume/assets/60565337/e64204f5-65c9-4aa2-9591-65fac7ff43e8", // Dummy image source
    stackIcons: createStackIcons("ReactJS, Tailwind CSS, OpenAI API"),
  },
  {
    title: "JavaScript Snakes and Ladders Game ",
    githubLink: "https://github.com/dishant-08/snakesAndLadders",
    description:
      "Leading the development of a dynamic Snakes and Ladders game in JavaScript. Optimized gameplay using the Map data structure for a 20% increase in efficiency.",
    techStack: "JavaScript, Map data structure",
    learned: "Map data structure, array-based logic, game optimization",
    imageSrc:
      "https://github.com/dishant-08/snakesAndLadders/assets/60565337/efc9b97a-c77b-4714-82a2-8b7ae39071dd", // Dummy image source
    stackIcons: createStackIcons("JavaScript"),
  },
  {
    title: "Tic Tac Toe Game (JavaScript)",
    githubLink: "https://github.com/dishant-08/ticTacToe",
    description:
      "Engineered a dynamic two-player Tic Tac Toe game using JavaScript, in graphical user interfaces. Implemented advanced data structures for game logic, ensuring a seamless experience for players.",
    techStack: "JavaScript",
    learned: "Player interaction, move validation, turn-based gameplay",
    imageSrc:
      "https://media.discordapp.net/attachments/1178073930192396388/1178074683669762100/image.png?ex=6611b50c&is=65ff400c&hm=4b863f57a8f524652b00141589c28d87baee3f827a068bbf46965291ca4f4ffd&", // Dummy image source
    stackIcons: createStackIcons("JavaScript"),
  },
  {
    title: "Tweet API in Node.js",
    githubLink: "https://github.com/dishant-08/tweet_database.git",
    description:
      "Engineered a powerful Express.js API for a dynamic social media platform, featuring seamless post management. Implemented cookies-based authentication for enhanced security and user privacy.",
    techStack: "Node.js, Express.js, Sequelize, bcrypt",
    learned: "Express.js, authentication, and user interactions",
    imageSrc:
      "https://github.com/dishant-08/tweet_database/assets/60565337/cd70444c-79e2-4665-a4d2-08e1b34f437d", // Dummy image source
    stackIcons: createStackIcons("Node.js, Express.js, Sequelize"),
  },
];
// Mapping of technologies to their respective icon URLs

function generateProjectCards(someProjects) {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = ""; // Clear previous content

  someProjects.forEach((project) => {
    const projectCardHTML = createProjectCard(project);
    const projectCardContainer = document.createElement("div");
    projectCardContainer.innerHTML = projectCardHTML;

    appContainer.appendChild(projectCardContainer);
  });
}
const showMoreBtn = document.getElementById("showMoreBtn");
let showAll = false;
const maxToShow = 4;

function toggleShowMore() {
  showAll = !showAll;
  if (showAll) {
    generateProjectCards(projects);
    showMoreBtn.textContent = "Show Less";
  } else {
    generateProjectCards(projects.slice(0, maxToShow));
    showMoreBtn.textContent = "Show More";
  }
}

// Event listener for the show more button click
showMoreBtn.addEventListener("click", toggleShowMore);

// Initial render
generateProjectCards(projects.slice(0, maxToShow));
// console.log(projects.slice(0, maxToShow));
