import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7da498d0 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0099a87c = () => interopDefault(import('..\\pages\\catalog.vue' /* webpackChunkName: "pages/catalog" */))
const _1a715a9c = () => interopDefault(import('..\\pages\\feedback.vue' /* webpackChunkName: "pages/feedback" */))
const _2d66ca9f = () => interopDefault(import('..\\pages\\admin\\add.vue' /* webpackChunkName: "pages/admin/add" */))
const _7633c11d = () => interopDefault(import('..\\pages\\admin\\delete.vue' /* webpackChunkName: "pages/admin/delete" */))
const _2b39307c = () => interopDefault(import('..\\pages\\admin\\edit.vue' /* webpackChunkName: "pages/admin/edit" */))
const _33022cac = () => interopDefault(import('..\\pages\\item\\_id.vue' /* webpackChunkName: "pages/item/_id" */))
const _30d48375 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7da498d0,
    name: "admin"
  }, {
    path: "/catalog",
    component: _0099a87c,
    name: "catalog"
  }, {
    path: "/feedback",
    component: _1a715a9c,
    name: "feedback"
  }, {
    path: "/admin/add",
    component: _2d66ca9f,
    name: "admin-add"
  }, {
    path: "/admin/delete",
    component: _7633c11d,
    name: "admin-delete"
  }, {
    path: "/admin/edit",
    component: _2b39307c,
    name: "admin-edit"
  }, {
    path: "/item/:id?",
    component: _33022cac,
    name: "item-id"
  }, {
    path: "/",
    component: _30d48375,
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
