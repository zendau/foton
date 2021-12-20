import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _78b0d632 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _089115da = () => interopDefault(import('..\\pages\\catalog.vue' /* webpackChunkName: "pages/catalog" */))
const _2c84ddd8 = () => interopDefault(import('..\\pages\\feedback.vue' /* webpackChunkName: "pages/feedback" */))
const _3fc6f881 = () => interopDefault(import('..\\pages\\admin\\add.vue' /* webpackChunkName: "pages/admin/add" */))
const _30fa374e = () => interopDefault(import('..\\pages\\admin\\content.vue' /* webpackChunkName: "pages/admin/content" */))
const _46a1a00a = () => interopDefault(import('..\\pages\\admin\\delete.vue' /* webpackChunkName: "pages/admin/delete" */))
const _64debeda = () => interopDefault(import('..\\pages\\admin\\edit.vue' /* webpackChunkName: "pages/admin/edit" */))
const _635f10f0 = () => interopDefault(import('..\\pages\\item\\_id.vue' /* webpackChunkName: "pages/item/_id" */))
const _80389f5a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _78b0d632,
    name: "admin"
  }, {
    path: "/catalog",
    component: _089115da,
    name: "catalog"
  }, {
    path: "/feedback",
    component: _2c84ddd8,
    name: "feedback"
  }, {
    path: "/admin/add",
    component: _3fc6f881,
    name: "admin-add"
  }, {
    path: "/admin/content",
    component: _30fa374e,
    name: "admin-content"
  }, {
    path: "/admin/delete",
    component: _46a1a00a,
    name: "admin-delete"
  }, {
    path: "/admin/edit",
    component: _64debeda,
    name: "admin-edit"
  }, {
    path: "/item/:id?",
    component: _635f10f0,
    name: "item-id"
  }, {
    path: "/",
    component: _80389f5a,
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
