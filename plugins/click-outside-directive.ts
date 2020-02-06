import { DirectiveBinding } from 'vue/types/options'
import Vue from 'vue'

const stopProp = (event: Event) => event.stopPropagation()
const event = (binding: DirectiveBinding) => {
  if (typeof binding.value === 'function') binding.value()
  else console.warn('expresion must be an Function')
}

Vue.directive('click-outside', {
  bind(el, binding, _vnode) {
    el.addEventListener('click', stopProp)
    document.body.addEventListener('click', () => event(binding))
  },
  unbind(el, binding, _vnode) {
    console.log('unbinding')
    el.removeEventListener('click', stopProp)
    document.body.removeEventListener('click', () => event(binding))
  }
})
