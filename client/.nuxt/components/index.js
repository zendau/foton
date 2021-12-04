export { default as About } from '../..\\components\\about.vue'
export { default as Achievements } from '../..\\components\\achievements.vue'
export { default as CatalogItem } from '../..\\components\\catalogItem.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as Header } from '../..\\components\\header.vue'
export { default as LoginModal } from '../..\\components\\loginModal.vue'
export { default as MainSection } from '../..\\components\\mainSection.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as AdminContact } from '../..\\components\\admin\\contact.vue'
export { default as AdminSection } from '../..\\components\\admin\\section.vue'
export { default as UIModal } from '../..\\components\\UI\\modal.vue'

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
