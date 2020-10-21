import images from '../../assets/*.png';

const projectList = [
  {
    id: 'fe-mp',
    name: 'Markdown Previewer',
    img: images['sh_markdown-previewer'],
    tags: ['React', 'SCSS', 'Marked'],
  },
  {
    id: 'fe-pc',
    name: 'Pomodoro Clock',
    img: images['sh_pomodoro-clock'],
    tags: ['React', 'React Hooks', 'SCSS'],
  },
  {
    id: 'fe-jc',
    name: 'JavaScript Calculator',
    img: images['sh_javascript-calculator'],
    tags: ['React', 'SCSS'],
  },
  {
    id: 'rd-pl',
    name: 'Product Landing Page',
    img: images['sh_product-landing-page'],
    tags: ['HTML', 'SCSS'],
  },
  {
    id: 'dv-cm',
    name: 'Choropleth Map',
    img: images['sh_choropleth-map'],
    tags: ['JavaScript', 'D3.js', 'topojson'],
  },
  {
    id: 'am-et',
    name: 'Exercise Tracker',
    img: images['sh_exercise-tracker'],
    tags: ['Node.js', 'Express.js', 'Mongoose'],
  },
];
Object.freeze(projectList);

export default projectList;
