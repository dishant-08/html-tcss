// ─── Technology icon map ──────────────────────────────────────────────────────
// Maps a technology name (used in createStackIcons calls) to its Devicon SVG URL.
// Add new entries here when introducing additional technologies to the projects list.

const techIconMap = {
  ReactJS:      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Node.js":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  PostgreSQL:   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Supabase:     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  Redux:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "OpenAI API": "https://www.vectorlogo.zone/logos/openai/openai-icon.svg",
  JavaScript:   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  Sequelize:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
  NextJS:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
};

// ─── Utility ─────────────────────────────────────────────────────────────────

/**
 * Converts a comma-separated technology string into an array of icon URLs.
 * Unrecognised technology names resolve to `undefined` and are filtered out.
 *
 * @param {string} techString  e.g. "ReactJS, Node.js, PostgreSQL"
 * @returns {string[]}         Array of SVG icon URLs
 */
function createStackIcons(techString) {
  return techString
    .split(", ")
    .map((tech) => techIconMap[tech.trim()])
    .filter(Boolean); // drop any technologies not in techIconMap
}

// ─── Project data ─────────────────────────────────────────────────────────────
// Each object represents one portfolio project card.
// Fields used by createProjectCard:
//   title, liveLink, githubLink, description, learned, imageSrc, stackIcons

const projects = [
  {
    title: "100x Microblogging Platform",
    liveLink: "https://react-week-1-dishant-08-hbrg.vercel.app/",
    githubLink: "https://github.com/dishant-08/100x-microblogging",
    description:
      "Developed a full-stack microblogging platform with ReactJS, enhancing platform responsiveness. Deployed a robust Node.js API integrated with PostgreSQL and Supabase.",
    learned: "Modular development with ReactJS, secure API creation, Supabase integration",
    imageSrc:
      "https://github.com/100x-Engineers/react-week-1-dishant-08/assets/60565337/d7772b6c-3c73-4663-84e8-df309b0313aa",
    stackIcons: createStackIcons("ReactJS, Node.js, PostgreSQL, Supabase"),
  },
  {
    title: "My YouTube App Clone",
    liveLink: "https://my-youtube-lime.vercel.app/",
    githubLink: "https://github.com/dishant-08/myYoutube.git",
    description:
      "Developed a YouTube clone with React, Redux, and Tailwind CSS, optimising API calls through search debouncing. Integrated real-time chat and Shimmer UI.",
    learned: "Applied search debouncing, implemented real-time interaction, and applied Shimmer UI",
    imageSrc:
      "https://github.com/dishant-08/myYoutube/assets/60565337/1e0f2a03-7911-4f7e-ad9a-77d627de7ef3",
    stackIcons: createStackIcons("ReactJS, Redux, Tailwind CSS"),
  },
  {
    title: "Ecommerce Website",
    liveLink: "https://ecommwebsite08.netlify.app/",
    githubLink: "https://github.com/dishant-08/Ecommerce-Assigment.git",
    description:
      "Crafted an ecommerce website with responsive design catering to both mobile and desktop screens. Integrated local storage for persistent cart and wishlist management.",
    learned: "Responsive design implementation, local storage utilisation",
    imageSrc:
      "https://github.com/dishant-08/Ecommerce-Assigment/assets/60565337/fa689756-dc8a-4f80-b421-13959e2e981b",
    stackIcons: createStackIcons("ReactJS, Tailwind CSS"),
  },
  {
    title: "Video Chatting App",
    liveLink: null,
    githubLink: "https://github.com/dishant-08/i-meet.git",
    description:
      "Developed a video chatting app with NextJS, Tailwind CSS, Socket.io, and PeerJS. Integrated chat functionality for real-time communication during video calls.",
    learned: "Real-time communication, UI design refinement, proficiency in PeerJS WebRTC and Socket.io",
    imageSrc:
      "https://github.com/dishant-08/i-meet/assets/60565337/71c60b65-6e51-4956-8403-0be4861659e1",
    stackIcons: createStackIcons("NextJS, Tailwind CSS"),
  },
  {
    title: "AI Resume Generator",
    liveLink: "https://ai-resume-xi.vercel.app/",
    githubLink: "https://github.com/dishant-08/ai-resume-generator",
    description:
      "Developed an AI-powered Resume Generator using React, Tailwind CSS, and OpenAI API. Implemented a user-controlled API throttling button for server load management.",
    learned: "OpenAI API integration, server load management, React form handling",
    imageSrc:
      "https://github.com/dishant-08/aiResume/assets/60565337/e64204f5-65c9-4aa2-9591-65fac7ff43e8",
    stackIcons: createStackIcons("ReactJS, Tailwind CSS, OpenAI API"),
  },
  {
    title: "JavaScript Snakes and Ladders Game",
    liveLink: null,
    githubLink: "https://github.com/dishant-08/snakesAndLadders",
    description:
      "Led the development of a dynamic Snakes and Ladders game in JavaScript. Optimised gameplay using the Map data structure for a 20% increase in efficiency.",
    learned: "Map data structure, array-based logic, game optimisation",
    imageSrc:
      "https://github.com/dishant-08/snakesAndLadders/assets/60565337/efc9b97a-c77b-4714-82a2-8b7ae39071dd",
    stackIcons: createStackIcons("JavaScript"),
  },
  {
    title: "Tic Tac Toe Game (JavaScript)",
    liveLink: null,
    githubLink: "https://github.com/dishant-08/ticTacToe",
    description:
      "Engineered a dynamic two-player Tic Tac Toe game using JavaScript. Implemented advanced data structures for game logic, ensuring a seamless experience for players.",
    learned: "Player interaction, move validation, turn-based gameplay",
    imageSrc:
      "https://github.com/dishant-08/ticTacToe/assets/60565337/438224c3-2af0-4f5d-8bfa-70642494c223",
    stackIcons: createStackIcons("JavaScript"),
  },
  {
    title: "Tweet API in Node.js",
    liveLink: null,
    githubLink: "https://github.com/dishant-08/tweet_database.git",
    description:
      "Engineered an Express.js API for a social media platform, featuring seamless post management. Implemented cookie-based authentication for enhanced security and user privacy.",
    learned: "Express.js routing, cookie-based authentication, and user interactions",
    imageSrc:
      "https://github.com/dishant-08/tweet_database/assets/60565337/cd70444c-79e2-4665-a4d2-08e1b34f437d",
    stackIcons: createStackIcons("Node.js, Express.js, Sequelize, PostgreSQL"),
  },
  {
    title: "Truecaller API",
    liveLink: null,
    githubLink: "https://github.com/dishant-08/asliCaller-api",
    description:
      "Developed a REST API for a Truecaller-like application. Implemented features such as registration, login, profile management, spam reporting, and search functionality.",
    learned: "Managing database interactions and implementing search and spam reporting functionality",
    imageSrc:
      "https://github.com/dishant-08/asliCaller-api/assets/60565337/08fbb370-449a-4cdf-869f-9e7f47f31a39",
    stackIcons: createStackIcons("Node.js, Express.js, Sequelize, PostgreSQL"),
  },
  {
    title: "Crypto Dashboard App",
    liveLink: "https://crypto-dashb.netlify.app/",
    githubLink: "https://github.com/dishant-08/KoinxAssignment",
    description:
      "Built a crypto dashboard application using React and Tailwind CSS, following a responsive Figma design. Integrated live cryptocurrency data from the CoinGecko API.",
    learned: "Implemented Figma designs, dynamic routing, and integrated live crypto data from CoinGecko API",
    imageSrc:
      "https://github.com/dishant-08/KoinxAssignment/assets/60565337/f5e117c7-bfbf-4bd0-aaca-828ac49a2c85",
    stackIcons: createStackIcons("ReactJS, Tailwind CSS"),
  },
];

// ─── Rendering ───────────────────────────────────────────────────────────────

/**
 * Builds the HTML string for a single project card.
 * Styles come from the .project-card CSS component defined in input.css.
 *
 * @param {Object} project  A project entry from the `projects` array
 * @returns {string}        HTML markup for the card
 */
function createProjectCard(project) {
  const stackIconsHTML = project.stackIcons
    .map(
      (iconSrc, index) => `
        <div class="p-2 dark:bg-zinc-800 bg-zinc-100 rounded-md w-fit">
          <img class="rounded-sm md:hidden"  width="18" height="18" src="${iconSrc}" alt="tech icon ${index + 1}" />
          <img class="rounded-sm hidden md:block" width="23" height="20" src="${iconSrc}" alt="tech icon ${index + 1}" />
        </div>
      `
    )
    .join("");

  const liveBadge = project.liveLink
    ? `<a href="${project.liveLink}" target="_blank"
          class="rounded bg-green-100 text-green-800 border-2 border-bgclr-100x
                 animate-pulse font-bold text-base md:text-xl px-2.5 py-0.5">
         Live
       </a>`
    : "";

  return `
    <div class="project-card">
      <a href="${project.liveLink || project.githubLink}" target="_blank">
        <img
          class="object-contain w-full rounded-xl max-h-[280px]"
          src="${project.imageSrc}"
          alt="${project.title}"
        />
      </a>

      <div class="p-4">
        <div class="flex justify-between items-center my-4">
          <strong class="text-base md:text-xl border-b-4 border-black text-black rounded-[0.1rem] hover:text-violet-500">
            ${project.title}
          </strong>
          ${liveBadge}
        </div>

        <p class="opacity-80 hidden md:block">${project.description}</p>

        <div class="my-4">
          <span class="font-bold text-bgclr-100x">Learned: </span>
          <span class="opacity-90">${project.learned}</span>
        </div>

        <div class="flex justify-between items-center mt-3 gap-1">
          <div class="flex flex-wrap gap-2 md:gap-3">${stackIconsHTML}</div>
          <a
            href="${project.githubLink}"
            target="_blank"
            class="p-2 text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-950 rounded-md"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  `;
}

// ─── DOM manipulation ────────────────────────────────────────────────────────

/**
 * Renders the given project list into the #app container.
 *
 * @param {Object[]} projectList  Subset (or all) of the `projects` array
 */
function generateProjectCards(projectList) {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = projectList.map(createProjectCard).join("");
}

// ─── Show More / Show Less toggle ────────────────────────────────────────────

const MAX_VISIBLE = 4;
let showAll = false;

const showMoreBtn = document.getElementById("showMoreBtn");

function toggleShowMore() {
  showAll = !showAll;
  generateProjectCards(showAll ? projects : projects.slice(0, MAX_VISIBLE));
  showMoreBtn.textContent = showAll ? "Show Less" : "Show More";
}

showMoreBtn.addEventListener("click", toggleShowMore);

// ─── Initial render ───────────────────────────────────────────────────────────
generateProjectCards(projects.slice(0, MAX_VISIBLE));
