import Vue from 'vue'

export default Vue.component('NavbarMenuButton', {
  name: 'NavbarMenuButton',
  functional: true,
  props: {
    isOpened: {
      type: Boolean,
      required: true,
    },
  },
  render(h, { props, listeners }) {
    const line = {
      fill: ' none',
      transition: 'stroke-dasharray 500ms, stroke-dashoffset 500ms',
      stroke: 'currentColor',
      'stroke-width': '5.5',
      'stroke-linecap': 'round',
    }

    const top = {
      'stroke-dasharray': '40 139',
    }
    const bottom = {
      'stroke-dasharray': '40 180',
    }

    return h(
      'button',
      {
        on: listeners,
        staticClass:
          'flex items-center justify-center h-10 w-10 focus:outline-none',
        attrs: { type: 'button', 'aria-label': 'menu' },
      },
      [
        h(
          'svg',
          {
            attrs: { viewBox: '0 0 100 100' },
            style: {
              ...(props.isOpened ? { transform: 'rotate(45deg)' } : {}),
            },
            staticClass:
              'h-6 w-6 fill-current inline-block relative select-none',
            staticStyle: {
              transition: 'transform 400ms',
            },
          },
          [
            h('path', {
              staticStyle: { ...line, ...top },
              style: {
                ...(props.isOpened ? { 'stroke-dashoffset': '-98px' } : {}),
              },
              attrs: {
                d:
                  'm 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40',
              },
            }),
            h('path', {
              staticStyle: { ...line },
              attrs: { d: 'm 30,50 h 40' },
            }),
            h('path', {
              style: {
                ...(props.isOpened ? { 'stroke-dashoffset': '-138px' } : {}),
              },
              staticStyle: { ...line, ...bottom },
              attrs: {
                d:
                  'm 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40',
              },
            }),
          ]
        ),
      ]
    )
  },
})
