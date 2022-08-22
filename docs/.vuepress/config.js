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
        collapsable: true,
        children: [
          'basic/string.md',
          'basic/regexp.md',
          'basic/object.md',
          'basic/array.md',
          'basic/func.md',
          'basic/other.md',
          'basic/symbol.md',
          'basic/promise.md',
          'basic/set.md',
          'basic/map.md',
          'basic/proxy.md',
          'basic/reflect.md',
          'basic/class.md',
          'basic/math.md',
          'basic/date.md',
          'basic/blob.md',
          'basic/listNode.md',
          'basic/stack.md',
          'basic/queue.md',
        ]
      },
      {
        title: 'Utils',
        collapsable: true,
        children: [
          'utils/dataType.md',
          'utils/flatten.md',
          'utils/unique.md',
          'utils/compose.md',
          'utils/empty.md',
          'utils/debounce.md',
          'utils/deepClone.md',
          'utils/currying.md',
        ]
      },
      {
        title: 'Interview',
        collapsable: true,
        children: [
          'interview/palindrome.md',
          'interview/combination.md',
          'interview/permutation.md',
          'interview/listNode.md',
          'interview/compare.md',
          'interview/template.md',
          'interview/customArrayfn.md',
          'interview/sort.md',
          // 'interview/treeNode.md',
          // 'interview/recursion.md',
          // 'interview/search.md',
        ]
      },
      {
        title: 'Design',
        collapsable: true,
        children: [
          'design/singleton.md',
          'design/eventEmitter.md',
          'design/observable.md',
        ]
      },
      // {
      //   title: "Node",
      //   collapsable: true,
      //   children: [
      //     'node/fs.md',
      //   ]
      // },
      {
        title: 'Git',
        collapsable: true,
        children: [
          'git/basic.md'
        ]
      },
      {
        title: 'Source',
        collapsable: true,
        children: [
          'sourceCode/redux.md',
          'sourceCode/koa.md'
        ]
      },
      // {
      //   title: 'business_note',
      //   collapsable: true,
      //   children: [
      //     'business_notes/commodity.md',
      //   ]
      // }
    ]
  }
}