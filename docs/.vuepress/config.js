module.exports = {
  base: '',
  dest: './dist',
  title: '前端笔记',
  description: '',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: 'Basic',
        collapsable: false,
        children: [
          'basic/array.md',
          'basic/object.md',
          'basic/string.md',
          'basic/regexp.md',
          'basic/function.md',
          'basic/symbol.md',
          'basic/other.md',
          'basic/promise.md',
          'basic/set.md',
          'basic/map.md',
          'basic/proxy.md',
          'basic/reflect.md',
          'basic/class.md',
          'basic/math.md',
          'basic/date.md',
          // 'basic/blob.md',
          // 'basic/listNode.md',
          // 'basic/stack.md',
          // 'basic/queue.md',
        ]
      },
      {
        title: 'Utils',
        collapsable: false,
        children: [
          'utils/dataType.md',
          'utils/flatten.md',
          'utils/unique.md',
          'utils/compose.md',
          'utils/currying.md',
          'utils/deepClone.md',
          'utils/sort.md',
          'utils/debounce.md'
        ]
      },
      {
        title: 'Interview',
        collapsable: false,
        children: [
          'interview/palindrome.md',
          'interview/combination.md',
          'interview/permutation.md',
          'interview/listNode.md',
          'interview/compare.md',
          'interview/template.md',
          'interview/customArrayfn.md',
          'interview/numFormat.md'
          // 'interview/treeNode.md',
          // 'interview/recursion.md',
          // 'interview/search.md',
        ]
      },
      // {
      //   title: 'Design',
      //   collapsable: false,
      //   children: [
      //     'design/singleton.md',
      //     'design/eventEmitter.md',
      //     'design/observable.md',
      //   ]
      // },
      // {
      //   title: "Node",
      //   collapsable: true,
      //   children: [
      //     'node/fs.md',
      //   ]
      // },
      {
        title: 'Git',
        collapsable: false,
        children: [
          'git/basic.md'
        ]
      },
      {
        title: 'Npm',
        collapsable: false,
        children: [
          'npm/version.md'
        ]
      },
      {
        title: 'business_note',
        collapsable: false,
        children: [
          'business_notes/commodity.md',
        ]
      },
      {
        title: 'Source',
        collapsable: false,
        children: [
          'sourcecode/redux.md',
          'sourcecode/koa.md'
        ]
      }
    ]
  }
}