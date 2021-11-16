export const About = () => import('../..\\components\\about.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const Achievements = () => import('../..\\components\\achievements.vue' /* webpackChunkName: "components/achievements" */).then(c => wrapFunctional(c.default || c))
export const CatalogItem = () => import('../..\\components\\catalogItem.vue' /* webpackChunkName: "components/catalog-item" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LoginModal = () => import('../..\\components\\loginModal.vue' /* webpackChunkName: "components/login-modal" */).then(c => wrapFunctional(c.default || c))
export const MainSection = () => import('../..\\components\\mainSection.vue' /* webpackChunkName: "components/main-section" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
