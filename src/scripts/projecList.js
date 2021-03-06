/* eslint-disable dot-notation */
// eslint-disable-next-line import/no-unresolved
import images from '../assets/*.png';

const projectList = [
  {
    id: 'fe-mp',
    name: 'Markdown Previewer',
    img: images['sh_markdown-previewer'],
    tags: ['React', 'SCSS', 'Marked'],
    url: 'https://theforbiddenpool.github.io/fcc-projects/front-end-libraries/markdown-previewer/',
    gh: 'https://github.com/theforbiddenpool/fcc-projects/tree/master/front-end-libraries/markdown-previewer',
    description: `
      <p>
        It was my first React project. It was done as one of the <a href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer">FreeCodeCamp challenges</a> for the Frontend Libraries Certification.
      </p>
      <p>
        The goal of this project was to build a live markdown previewer. Marked was the markdown compiler used for the parsing. Most of my work was put into building the interface. I wanted to have two movable "windows" - one for the editor, the other for the previewer - with the style reminiscent of Windows 98. Being my first React project, it was probably one of the FreeCodeCamp projects I struggled the most with. I remember searching for hours on how I could make movable divs - and it most definitely needs improvement.
      </p>
    `,
  },
  {
    id: 'fe-pc',
    name: 'Pomodoro Clock',
    img: images['sh_pomodoro-clock'],
    tags: ['React', 'React Hooks', 'SCSS'],
    url: 'https://theforbiddenpool.github.io/fcc-projects/front-end-libraries/pomodoro-clock/',
    gh: 'https://github.com/theforbiddenpool/fcc-projects/tree/master/front-end-libraries/pomodoro-clock',
    description: `
      <p>
        The <a href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock">Pomodoro Clock project</a> was the last project of the Front End Libraries FCC Certification. It was my first time using a custom React Hook. I didn't learn about them in FreeCodeCamp, but they seemed the "new default" for React, so I decided to try them out.
      </p>
      <p>
        I wanted the timer to be as precise as possible, and I remember reading about <code>setTimeout</code> and <code>setInterval</code> not being entirely accurate. In one of my previous personal projects, I'd built a accurate timer using <code>setTimeout</code> and a drift calculated with <code>Date.now()</code> and an expected variable. But React brought challenges I wasn't expecting, and my inexperience with it certainly didn't help. Eventually I was able to make it work as I wanted, with the ability to start and stop the timer.
      </p>
    `,
  },
  {
    id: 'fe-et',
    name: 'Ethmoid',
    img: images['sh_ethmoid'],
    tags: ['TypeScript', 'Webpack', 'BEM', 'FileReader'],
    url: 'https://www.theforbiddenpool.com/ethmoid/',
    gh: 'https://github.com/theforbiddenpool/ethmoid',
    description: `
      <p>
        In one of my freelance projects I was required to work with the <a href="https://github.com/gitbrent/PptxGenJS/">PptxGenJS</a> library. To learn how to use it I made this project.
      </p>
      <p>
        I had also just started learning TypeScript, and had read about BEM. It seemed like the perfect opportunity to put some of my knowledge in work. Besides taking in data, and shooting out a PowerPoint, I added some customization options, which forced me to work with the <code>FileReader</code> Browser API. I would also have liked to be able to add a previewer, but after hours of investigation I couldn't find a way without changing too much of my current implementation. I hope one day to be able to implement such thing.
      </p>
    `,
  },
  {
    id: 'rd-pl',
    name: 'Product Landing Page',
    img: images['sh_product-landing-page'],
    tags: ['HTML', 'SCSS', 'JavaScript'],
    url: 'https://theforbiddenpool.github.io/fcc-projects/responsive-web-design/product-landing-page/',
    gh: 'https://github.com/theforbiddenpool/fcc-projects/tree/master/responsive-web-design/product-landing-page',
    description: `
      <p>
        It was one of the first projects I've ever built for FreeCodeCamp. This was the <a href="https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-product-landing-page">3rd project</a> for the first FCC certification.
      </p>
      <p>
        It's honestly amazing how much I've evolved as a developer since then. In this case, this is a product landing page for trombones. I built my own scrollspy with a bit of JavaScript. The rest of the project is just good old plain HTML and SCSS. At the time, this was the best I could do, but now I can see so many places where I could improve this project.
      </p>
    `,
  },
  {
    id: 'dv-cm',
    name: 'Choropleth Map',
    img: images['sh_choropleth-map'],
    tags: ['JavaScript', 'D3.js', 'topojson'],
    url: 'https://theforbiddenpool.github.io/fcc-projects/data-visualization/choropleth-map/',
    gh: 'https://github.com/theforbiddenpool/fcc-projects/tree/master/data-visualization/choropleth-map',
    description: `
      <p>
        The Choropleth Map project is part of the <a href="https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-choropleth-map">D3.js FreeCodeCamp module</a>. It is the 4th challenge.
      </p>
      <p>
        This was my first time working with creating paths with D3.js. I had been working with D3 for a few weeks, and the previous projects were all kinda similar. It took me out of the routine of creating a <code>rect</code> or <code>circle</code>, and placing it on the SVG. I also put a bit more effort into the look of the website itself. It was surprisingly hard to wrap my head around <code>topojson</code> and how D3.js created the paths. Creating the label was also not easy.
      </p>
    `,
  },
  {
    id: 'am-et',
    name: 'Exercise Tracker',
    img: images['sh_exercise-tracker'],
    tags: ['Node.js', 'Express.js', 'Mongoose'],
    url: 'https://tfp-fcc-exercise-tracker.herokuapp.com/',
    gh: 'https://github.com/theforbiddenpool/fcc-projects/tree/master/apis-and-microservices/exercise-tracker',
    description: `
      <p>
        The Exercise Tracker project is part of the <a href="https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker">APIs and Microservices FreeCodeCamp</a> module. 
      </p>
      <p>
        It was the first backend project I struggled a lot with. I had to use Mongoose functionalities I hadn't previously worked with. But it taught me a lot about using Mongoose and Express. I got to try <code>express.Router()</code> for the first time and to use a better architecture. Overall, I think it works really well. Some time after I finished FCC, I decided to build a better frontend for it.
      </p>
    `,
  },
];
Object.freeze(projectList);

export default projectList;
