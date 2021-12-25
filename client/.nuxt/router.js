import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7a528f2c = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _8c369ebc = () => interopDefault(import('..\\pages\\catalog.vue' /* webpackChunkName: "pages/catalog" */))
const _62dd4f4c = () => interopDefault(import('..\\pages\\feedback.vue' /* webpackChunkName: "pages/feedback" */))
const _201fee8e = () => interopDefault(import('..\\pages\\admin\\add.vue' /* webpackChunkName: "pages/admin/add" */))
const _3fb91891 = () => interopDefault(import('..\\pages\\admin\\content.vue' /* webpackChunkName: "pages/admin/content" */))
const _5174d67a = () => interopDefault(import('..\\pages\\admin\\delete.vue' /* webpackChunkName: "pages/admin/delete" */))
const _8c5094bc = () => interopDefault(import('..\\pages\\admin\\edit.vue' /* webpackChunkName: "pages/admin/edit" */))
const _79288050 = () => interopDefault(import('..\\pages\\item\\_id.vue' /* webpackChunkName: "pages/item/_id" */))
const _b52145ca = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _7a528f2c,
    name: "admin"
  }, {
    path: "/catalog",
    component: _8c369ebc,
    name: "catalog"
  }, {
    path: "/feedback",
    component: _62dd4f4c,
    name: "feedback"
  }, {
    path: "/admin/add",
    component: _201fee8e,
    name: "admin-add"
  }, {
    path: "/admin/content",
    component: _3fb91891,
    name: "admin-content"
  }, {
    path: "/admin/delete",
    component: _5174d67a,
    name: "admin-delete"
  }, {
    path: "/admin/edit",
    component: _8c5094bc,
    name: "admin-edit"
  }, {
    path: "/item/:id?",
    component: _79288050,
    name: "item-id"
  }, {
    path: "/",
    component: _b52145ca,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
