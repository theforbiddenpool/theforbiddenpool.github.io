import projectList from './projecList';

const app = Vue.createApp({
  data() {
    return {
      projectList,
    };
  },
});

app.component('project-card', {
  props: ['id', 'name', 'img', 'tags'],
  template: `
    <li class="card">
      <img class="card-img" :src="img" :alt="name + ' screenshot'">
      <div class="title card-title">
        <span class="bracket" aria-hidden="true">&#60;</span>
        {{ name }}
        <span class="bracket" aria-hidden="true">&#47;&#62;</span>
      </div>
      <div class="card-tags" aria-label="technologies used">
        <span class="tag" v-for="tg in tags">
          {{ tg }}
        </span>
      </div>
    </li>
  `,
});

const vm = app.mount('#vue-projects');
