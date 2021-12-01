import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import Home from './components/Home.vue'
import Page from './components/Page.vue'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/:link([a-zA-Z0-9-_]+)', component: Page,
      meta: { title: 'Go' }
    },
    {
      path: '/', component: Home,
      meta: { title: 'Home' }
    },
    {
      path: "*", component: Home,
      meta: { title: 'Home' }
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.mixin({
  data: () => ({
    menu: [
      { icon: "facebook", title: "Face", link: "https://www.facebook.com/attA.le.hophattai/" },
      { icon: "star", title: "Insta", link: "https://www.instagram.com/lehophattai" }
    ],
    year: new Date().getFullYear(),
    drawer: null
  })
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
