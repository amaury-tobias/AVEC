declare module '*.md' {
  import { Component } from 'vue'
  interface FrontMatterContent {
    attributes: any
    body: string
    vue: {
      component: Component
    }
  }
  const content: FrontMatterContent
  export default content
}

declare module '*.yaml' {
  const yamlToJsonToObject: any
  export default yamlToJsonToObject
}

declare module '*.jpg' {
  const urlOrBase64: string
  export default urlOrBase64
}
