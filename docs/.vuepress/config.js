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
        title: 'TodoList',
        collapsable: true,
        children: [
          'todolist/todolist.md',
        ]
      },
      {
        title: 'JavaScript Basic',
        collapsable: true,
        children: [
          'javascript_basic/dataType.md',
          'javascript_basic/string.md',
          'javascript_basic/regexp.md',
          'javascript_basic/object.md',
          'javascript_basic/array.md',

          'javascript_basic/func.md',
          'javascript_basic/math.md',
          'javascript_basic/date.md',
          'javascript_basic/blob.md',
          'javascript_basic/other.md',

          'javascript_basic/symbol.md',
          'javascript_basic/promise.md',
          'javascript_basic/set.md',
          'javascript_basic/map.md',
          'javascript_basic/proxy.md',

          'javascript_basic/reflect.md',
          'javascript_basic/class.md',
        ]
      },
      {
        title: 'JavaScript Algorithm',
        collapsable: true,
        children: [
          'algorithm/debounce.md',
          'algorithm/listNode.md',
          'algorithm/circle.md',  
          'algorithm/treeNode.md',
          'algorithm/recursion.md',
          'algorithm/search.md',
          'algorithm/currying.md',
          'algorithm/compare.md',
          'algorithm/deepClone.md',
          'algorithm/combination.md',
          'algorithm/permutation.md',
          'algorithm/template.md',
        ]
      },
      {
        title: "Dart",
        collapsable: true,
        children: [
          'dart/emulators.md',
          'dart/operator.md',
          'dart/list.md',
          'dart/set.md',
          'dart/map.md',
          'dart/function.md',
          'dart/oop.md',
        ]
      },
      {
        title: 'Design',
        collapsable: true,
        children: [
          'design_pattern/singleton.md',
          'design_pattern/eventEmitter.md',
          'design_pattern/observable.md',
        ]
      },
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
          'sourcecode/redux.md',
          'sourcecode/koa.md'
        ]
      }
    ]
  }
}