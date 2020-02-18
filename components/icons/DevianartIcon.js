export default {
  name: 'deviantart-icon',

  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) =>
        !isNaN(s) ||
        (s.length >= 2 &&
          !isNaN(s.slice(0, s.length - 1)) &&
          s.slice(-1) === 'x')
    }
  },
  functional: true,
  render(_h, ctx) {
    const size =
      ctx.props.size.slice(-1) === 'x'
        ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em'
        : parseInt(ctx.props.size) + 'px'
    const attrs = ctx.data.attrs || {}
    attrs.width = attrs.width || size
    attrs.height = attrs.height || size
    ctx.data.attrs = attrs

    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...ctx.data}
      >
        <title>DeviantArt icon</title>
        <path d="M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.925-.646.436H4.58v5.993h4.04l.36.436-4.175 7.98-.24.43V24H8.93l.436-.44 2.07-3.925.644-.436h7.35v-5.993h-4.05l-.36-.438 4.186-7.977z" />
      </svg>
    )
  }
}
