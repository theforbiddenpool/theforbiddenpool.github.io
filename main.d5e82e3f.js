parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jbLM":[function(require,module,exports) {
module.exports="/logo192.1a6f93a8.png";
},{}],"rrEa":[function(require,module,exports) {
module.exports="/logo512.a430a0d1.png";
},{}],"AynT":[function(require,module,exports) {
module.exports="/sh_choropleth-map.127e8f57.png";
},{}],"VNST":[function(require,module,exports) {
module.exports="/sh_exercise-tracker.07d9d836.png";
},{}],"xYoh":[function(require,module,exports) {
module.exports="/sh_javascript-calculator.40fce09d.png";
},{}],"Zv41":[function(require,module,exports) {
module.exports="/sh_markdown-previewer.de083694.png";
},{}],"IbVZ":[function(require,module,exports) {
module.exports="/sh_pomodoro-clock.ef7f5546.png";
},{}],"Ibox":[function(require,module,exports) {
module.exports="/sh_product-landing-page.bb748bb4.png";
},{}],"fFPQ":[function(require,module,exports) {
module.exports={logo192:require("./logo192.png"),logo512:require("./logo512.png"),"sh_choropleth-map":require("./sh_choropleth-map.png"),"sh_exercise-tracker":require("./sh_exercise-tracker.png"),"sh_javascript-calculator":require("./sh_javascript-calculator.png"),"sh_markdown-previewer":require("./sh_markdown-previewer.png"),"sh_pomodoro-clock":require("./sh_pomodoro-clock.png"),"sh_product-landing-page":require("./sh_product-landing-page.png")};
},{"./logo192.png":"jbLM","./logo512.png":"rrEa","./sh_choropleth-map.png":"AynT","./sh_exercise-tracker.png":"VNST","./sh_javascript-calculator.png":"xYoh","./sh_markdown-previewer.png":"Zv41","./sh_pomodoro-clock.png":"IbVZ","./sh_product-landing-page.png":"Ibox"}],"jXjr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../assets/*.png"));function t(e){return e&&e.__esModule?e:{default:e}}var o=[{id:"fe-mp",name:"Markdown Previewer",img:e.default["sh_markdown-previewer"],tags:["React","SCSS","Marked"],url:"https://theforbiddenpool.github.io/fcc-projects/front-end-libraries/markdown-previewer/",description:'\n      <p>\n        It was my first React project. It was done as one of the <a href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer">FreeCodeCamp challenges</a> for the Frontend Libraries Certification.\n      </p>\n      <p>\n        The goal of this project was to build a live markdown previewer. Marked was the markdown compiler used for the parsing. Most of my work was put into building the interface. I wanted to have two movable "windows" - one for the editor, the other for the previewer - with the style reminiscent of Windows 98. Being my first React project, it was probably one of the FreeCodeCamp projects I struggled the most with. I remember searching for hours on how I could make movable divs - and it most definitely needs improvement.\n      </p>\n    '},{id:"fe-pc",name:"Pomodoro Clock",img:e.default["sh_pomodoro-clock"],tags:["React","React Hooks","SCSS"],url:"https://theforbiddenpool.github.io/fcc-projects/front-end-libraries/pomodoro-clock/",description:"\n      <p>\n        The <a href=\"https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock\">Pomodoro Clock project</a> was the last project of the Front End Libraries FCC Certification. It was my first time using a custom React Hook. I didn't learn about them in FreeCodeCamp, but they seemed the \"new default\" for React, so I decided to try them out.\n      </p>\n      <p>\n        I wanted the timer to be as precise as possible, and I remember reading about <code>setTimeout</code> and <code>setInterval</code> not being entirely accurate. In one of my previous personal projects, I'd built a accurate timer using <code>setTimeout</code> and a drift calculated with <code>Date.now()</code> and an expected variable. But React brought challenges I wasn't expecting, and my inexperience with it certainly didn't help. Eventually I was able to make it work as I wanted, with the ability to start and stop the timer.\n      </p>\n    "},{id:"fe-jc",name:"JavaScript Calculator",img:e.default["sh_javascript-calculator"],tags:["React","SCSS"],url:"https://theforbiddenpool.github.io/fcc-projects/front-end-libraries/javascript-calculator/",description:'\n      <p>\n        This project is the <a href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator">4th project</a> of the FreeCodeCamp Front End Libraries Projects Certification. The goal was to build a calculator. Seemed simple enough, right?\n      </p>\n      <p>\n        I only had used React once in my <a href="https://theforbiddenpool.github.io/fcc-projects/front-end-libraries/markdown-previewer/">Markdown Previewer project</a>, so the knowledge was still very raw. The idea of building a calculator seemed easy, but every time I thought I had it right there was another edge case I needed to cover. I had a great time with it. In the future, I want to go through the code and see what I can improve.\n      </p>\n    '},{id:"rd-pl",name:"Product Landing Page",img:e.default["sh_product-landing-page"],tags:["HTML","SCSS","JavaScript"],url:"https://theforbiddenpool.github.io/fcc-projects/responsive-web-design/product-landing-page/",description:"\n      <p>\n        It was one of the first projects I've ever built for FreeCodeCamp. This was the <a href=\"https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-product-landing-page\">3rd project</a> for the first FCC certification.\n      </p>\n      <p>\n        It's honestly amazing how much I've evolved as a developer since then. In this case, this is a product landing page for trombones. I built my own scrollspy with a bit of JavaScript. The rest of the project is just good old plain HTML and SCSS. At the time, this was the best I could do, but now I can see so many places where I could improve this project.\n      </p>\n    "},{id:"dv-cm",name:"Choropleth Map",img:e.default["sh_choropleth-map"],tags:["JavaScript","D3.js","topojson"],url:"https://theforbiddenpool.github.io/fcc-projects/data-visualization/choropleth-map/",description:'\n      <p>\n        The Choropleth Map project is part of the <a href="https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-choropleth-map">D3.js FreeCodeCamp module</a>. It is the 4th challenge.\n      </p>\n      <p>\n        This was my first time working with creating paths with D3.js. I had been working with D3 for a few weeks, and the previous projects were all kinda similar. It took me out of the routine of creating a <code>rect</code> or <code>circle</code>, and placing it on the SVG. I also put a bit more effort into the look of the website itself. It was surprisingly hard to wrap my head around <code>topojson</code> and how D3.js created the paths. Creating the label was also not easy.\n      </p>\n    '},{id:"am-et",name:"Exercise Tracker",img:e.default["sh_exercise-tracker"],tags:["Node.js","Express.js","Mongoose"],url:"https://guillermo-meardon.glitch.me/",description:'\n      <p>\n        The Exercise Tracker project is part of the <a href="https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker">APIs and Microservices FreeCodeCamp</a> module. \n      </p>\n      <p>\n        It was the first backend project I struggled a lot with. I had to use Mongoose functionalities I hadn\'t previously worked with. But it taught me a lot about using Mongoose and Express. I got to try <code>express.Router()</code> for the first time. Overall, I think it works really well. I hope one day to build a better frontend to go with it.\n      </p>\n    '}];Object.freeze(o);var r=o;exports.default=r;
},{"../assets/*.png":"fFPQ"}],"wgsO":[function(require,module,exports) {
"use strict";var n=e(require("./projecList"));function e(n){return n&&n.__esModule?n:{default:n}}var t=Vue.createApp({data:function(){return{projectList:n.default}}});t.component("project-card",{props:["id","name","img","tags","url","description"],template:'\n    <li class="card" @click="modalOpen = true">\n      <img class="card-img" :src="img" :alt="name + \' screenshot\'">\n      <div class="title card-title">\n        <span class="bracket" aria-hidden="true">&#60;</span>\n        {{ name }}\n        <span class="bracket" aria-hidden="true">&#47;&#62;</span>\n      </div>\n      <div class="card-tags" aria-label="technologies used">\n        <span class="tag" v-for="tg in tags">\n          {{ tg }}\n        </span>\n      </div>\n    </li>\n\n    <teleport to="body">\n      <div v-if="modalOpen" v-body-no-scroll class="modal modal-full" @click.self="modalOpen = false">\n        <div class="modal-inner">\n          <div class="modal-header">\n            <button type="button" class="close" aria-label="Close" @click="modalOpen = false">\n              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>\n            </button>\n          </div>\n          <div class="modal-content">\n            <div class="modal-title title">\n              <h1>{{ name }}</h1>\n            </div>\n            <div class="modal-img-group">\n              <img class="modal-img" :src="img" :alt="name + \' screenshot\'">\n              <a class="external-link" :href="url" aria-label="Visit project\'s website">\n                <i class="fas fa-external-link-alt fa-lg"></i>\n              </a>\n            </div>\n            <div class="modal-tags" aria-label="technologies used">\n              <span class="tag" v-for="tg in tags">\n                {{ tg }}\n              </span>\n            </div>\n            <div class="modal-text" v-html="description">\n            </div>\n          </div>\n        </div>\n      </div>\n    </teleport>\n  ',data:function(){return{modalOpen:!1,windowEventListener:null}},watch:{modalOpen:function(n){var e=this;n?this.windowEventListener=window.addEventListener("keyup",function(n){"Escape"===n.key&&(e.modalOpen=!1)}):window.removeEventListener("keyup",this.windowEventListener)}},directives:{"body-no-scroll":{mounted:function(){document.body.classList.add("no-scroll")},unmounted:function(){document.body.classList.remove("no-scroll")}}}}),t.mount("#vue-projects"),document.querySelector("#move-down > button").addEventListener("click",function(){var n=document.querySelector("#projects").getBoundingClientRect().y;window.scrollTo(0,n+window.pageYOffset)});
},{"./projecList":"jXjr"}]},{},["wgsO"], null)
//# sourceMappingURL=/main.d5e82e3f.js.map