import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Symboll'note",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Front', link: '/' }
    ],

    sidebar: [
      {
        text: 'Basic',
        items: [
          { text: 'Array', link: '/src/basic/array.md' },
          { text: 'Object', link: '/src/basic/object.md' },
          { text: 'String', link: '/src/basic/string.md' },
          { text: 'Regexp', link: '/src/basic/regexp.md' },
          { text: 'Function', link: '/src/basic/function.md' },
          { text: 'Symbol', link: '/src/basic/symbol.md' },
          { text: 'Other', link: '/src/basic/other.md' },
          { text: 'Promise', link: '/src/basic/promise.md' },
          { text: 'Set', link: '/src/basic/set.md' },
          { text: 'Map', link: '/src/basic/map.md' },
          { text: 'Proxy', link: '/src/basic/proxy.md' },
          { text: 'Reflect', link: '/src/basic/reflect.md' },
          { text: 'Class', link: '/src/basic/class.md' },
          { text: 'Math', link: '/src/basic/math.md' },
          { text: 'Date', link: '/src/basic/date.md' },
        ]
      },
      {
        text: 'Utils',
        items: [
          { text: 'DataType', link: '/src/utils/dataType.md' },
          { text: 'Flatten', link: '/src/utils/flatten.md' },
          { text: 'Unique', link: '/src/utils/unique.md' },
          { text: 'Compose', link: '/src/utils/compose.md' },
          { text: 'Currying', link: '/src/utils/currying.md' },
          { text: 'DeepClone', link: '/src/utils/deepClone.md' },
          { text: 'Sort', link: '/src/utils/sort.md' },
          { text: 'Debounce', link: '/src/utils/debounce.md' },
 
        ]
      },
      {
        text: 'Interview',
        items: [
          { text: 'Palindrome', link: '/src/interview/palindrome.md' },
          { text: 'Combination', link: '/src/interview/combination.md' },
          { text: 'Permutation', link: '/src/interview/permutation.md' },
          { text: 'ListNode', link: '/src/interview/listNode.md' },
          { text: 'Compare', link: '/src/interview/compare.md' },
          { text: 'Template', link: '/src/interview/template.md' },
          { text: 'CustomArrayfn', link: '/src/interview/customArrayfn.md' },
          { text: 'NumFormat', link: '/src/interview/numFormat.md' },
        ]
      },
      {
        text: 'Design',
        items: [
          { text: 'Singleton', link: '/src/design/singleton.md' },
          { text: 'EventEmitter', link: '/src/design/eventEmitter.md' },
          { text: 'Observable', link: '/src/design/observable.md' },
        ]
      },
      {
        text: 'Git',
        items: [
          { text: 'Baisc', link: '/src/git/basic.md' }
        ]
      },
      {
        text: 'Npm',
        items: [
          { text: 'Basic', link: '/src/npm/version.md' }
        ]
      },
      {
        text: 'Business Note',
        items: [
          { text: 'commodity', link: '/src/business_notes/commodity.md' }
        ]
      },
      {
        text: 'Source',
        items: [
          { text: 'Redux', link: '/src/sourcecode/redux.md' },
          { text: 'Koa', link: '/src/sourcecode/koa.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
