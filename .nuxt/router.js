import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b9436b42 = () => interopDefault(import('../pages/create.vue' /* webpackChunkName: "pages/create" */))
const _c8ff9216 = () => interopDefault(import('../pages/preview.vue' /* webpackChunkName: "pages/preview" */))
const _2991ef82 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/create",
    component: _b9436b42,
    name: "create"
  }, {
    path: "/preview",
    component: _c8ff9216,
    name: "preview"
  }, {
    path: "/",
    component: _2991ef82,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
