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
        title: 'JavaScript Utils',
        collapsable: true,
        children: [
          'javascript_utils/debounce.md',
          'javascript_utils/listNode.md',
          'javascript_utils/circle.md',  
          'javascript_utils/treeNode.md',
          'javascript_utils/recursion.md',
          'javascript_utils/search.md',
          'javascript_utils/currying.md',
          'javascript_utils/compare.md',
          'javascript_utils/deepClone.md',
          'javascript_utils/combination.md',
          'javascript_utils/permutation.md',
          'javascript_utils/template.md',
        ]
      },
      {
        title: 'JavaScript Design',
        collapsable: true,
        children: [
          'javascript_design/singleton.md',
          'javascript_design/eventEmitter.md',
          'javascript_design/observable.md',
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
      },
      {
        title: 'business_note',
        collapsable: true,
        children: [
          'business_notes/commodity.md',
        ]
      }
    ]
  }
}