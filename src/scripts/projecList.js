import images from '../../assets/*.png';

const projectList = [
  {
    id: 'fe-mp',
    name: 'Markdown Previewer',
    img: images['sh_markdown-previewer'],
    tags: ['React', 'SCSS', 'Marked'],
    url: 'https://theforbiddenpool.github.io/fcc-projects/front-end-libraries/markdown-previewer/',
  },
  {
    id: 'fe-pc',
    name: 'Pomodoro Clock',
    img: images['sh_pomodoro-clock'],
    tags: ['React', 'React Hooks', 'SCSS'],
    url: 'https://theforbiddenpool.github.io/fcc-projects/front-end-libraries/pomodoro-clock/',
  },
  {
    id: 'fe-jc',
    name: 'JavaScript Calculator',
    img: images['sh_javascript-calculator'],
    tags: ['React', 'SCSS'],
    url: 'https://theforbiddenpool.github.io/fcc-projects/front-end-libraries/javascript-calculator/',
  },
  {
    id: 'rd-pl',
    name: 'Product Landing Page',
    img: images['sh_product-landing-page'],
    tags: ['HTML', 'SCSS'],
    url: 'https://theforbiddenpool.github.io/fcc-projects/responsive-web-design/product-landing-page/',
  },
  {
    id: 'dv-cm',
    name: 'Choropleth Map',
    img: images['sh_choropleth-map'],
    tags: ['JavaScript', 'D3.js', 'topojson'],
    url: 'https://theforbiddenpool.github.io/fcc-projects/data-visualization/choropleth-map/',
  },
  {
    id: 'am-et',
    name: 'Exercise Tracker',
    img: images['sh_exercise-tracker'],
    tags: ['Node.js', 'Express.js', 'Mongoose'],
    url: 'https://guillermo-meardon.glitch.me/',
  },
];
Object.freeze(projectList);

export default projectList;
