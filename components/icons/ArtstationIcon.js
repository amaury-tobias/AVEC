export default {
  name: 'ArtStation-icon',

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
        <title>ArtStation icon</title>
        <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
      </svg>
    )
  }
}
