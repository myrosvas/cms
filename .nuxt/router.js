import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1621bba8 = () => interopDefault(import('../pages/create.vue' /* webpackChunkName: "pages/create" */))
const _fdaa2268 = () => interopDefault(import('../pages/preview.vue' /* webpackChunkName: "pages/preview" */))
const _730bc9d6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1621bba8,
    name: "create"
  }, {
    path: "/preview",
    component: _fdaa2268,
    name: "preview"
  }, {
    path: "/",
    component: _730bc9d6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
