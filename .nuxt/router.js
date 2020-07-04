import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69eaa0d0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2e4a0018 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _01630c81 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _69eaa0d0,
    name: "login"
  }, {
    path: "/profile",
    component: _2e4a0018,
    name: "profile"
  }, {
    path: "/",
    component: _01630c81,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
