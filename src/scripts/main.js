import projectList from './projecList';

const app = Vue.createApp({
  data() {
    return {
      projectList,
    };
  },
});

app.component('project-card', {
  props: ['id', 'name', 'img', 'tags', 'url', 'description'],
  template: `
    <li class="card" @click="modalOpen = true">
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

    <teleport to="body">
      <div v-if="modalOpen" v-body-no-scroll class="modal modal-full" @click.self="modalOpen = false">
        <div class="modal-inner">
          <div class="modal-header">
            <button type="button" class="close" aria-label="Close" @click="modalOpen = false">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </button>
          </div>
          <div class="modal-content">
            <div class="modal-title title">
              <h1>{{ name }}</h1>
            </div>
            <div class="modal-img-group">
              <img class="modal-img" :src="img" :alt="name + ' screenshot'">
              <a class="external-link" :href="url" aria-label="Visit project's website">
                <i class="fas fa-external-link-alt fa-lg"></i>
              </a>
            </div>
            <div class="modal-tags" aria-label="technologies used">
              <span class="tag" v-for="tg in tags">
                {{ tg }}
              </span>
            </div>
            <div class="modal-text" v-html="description">
            </div>
          </div>
        </div>
      </div>
    </teleport>
  `,
  data() {
    return {
      modalOpen: false,
      windowEventListener: null,
    };
  },
  watch: {
    modalOpen(isModalOpen) {
      if (isModalOpen) {
        this.windowEventListener = window.addEventListener('keyup', (e) => {
          if (e.key === 'Escape') this.modalOpen = false;
        });
      } else {
        window.removeEventListener('keyup', this.windowEventListener);
      }
    },
  },
  directives: {
    'body-no-scroll': {
      mounted() {
        document.body.classList.add('no-scroll');
      },
      unmounted() {
        document.body.classList.remove('no-scroll');
      },
    },
  },
});

app.mount('#vue-projects');

document.querySelector('#move-down > button').addEventListener('click', () => {
  const scroll = document.querySelector('#projects').getBoundingClientRect().y;
  window.scrollTo(0, scroll + window.pageYOffset);
});
