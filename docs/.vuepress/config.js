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
          'utils/debounce.md',
          'utils/deepClone.md',
          'utils/currying.md',
        ]
      },
      {
        title: 'interview',
        collapsable: true,
        children: [
          'interview/palindrome.md',
          'interview/combination.md',
          'interview/permutation.md',
          'interview/listNode.md',
          'interview/compare.md',
          'interview/template.md',
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
      //   title: "Dart",
      //   collapsable: true,
      //   children: [
      //     'dart/emulators.md',
      //     'dart/operator.md',
      //     'dart/list.md',
      //     'dart/set.md',
      //     'dart/map.md',
      //     'dart/function.md',
      //     'dart/oop.md',
      //   ]
      // },
      {
        title: "node",
        collapsable: true,
        children: [
          'node/fs.md',
        ]
      },
      {
        title: 'git',
        collapsable: true,
        children: [
          'git/basic.md'
        ]
      },
      {
        title: 'source',
        collapsable: true,
        children: [
          'sourceCode/react.md',
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