// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
import Designers from './components/Designers'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Collective from './components/Collective'
// import the vueresource component
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
const routes = [
  { path: '/', component: Home },
  { path: '/designers', component: Designers },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },
  { path: '/designer/:username', component: Collective, props: true}
]
// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes,
  mode: 'history' // short for `routes: routes`
})
// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.

// tell Vue to use vue-resource
Vue.use(VueResource)
Vue.use(VueRouter)
//instatinat the vue instance
new Vue({
  router,
	//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
}).$mount('#app')//mount the router on the app
