import projectList from './projecList';

const app = Vue.createApp({
  data() {
    return {
      projectList,
    };
  },
});

app.component('project-card', {
  props: ['id', 'name', 'img', 'keywords'],
  template: `
    <li class="card">
      <img class="card-img" :src="img" :alt="name + ' screenshot'">
      <div class="title card-title">{{ name }}</div>
    </li>
  `,
});

const vm = app.mount('#vue-projects');
