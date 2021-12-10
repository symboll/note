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
        title: '代办事项',
        collapsable: true,
        children: [
          'todolist/todolist.md',
        ]
      },
      {
        title: '基本数据结构',
        collapsable: true,
        children: [
          'structure/dataType.md',
          'structure/string.md',
          'structure/other.md',
          'structure/object.md',
          'structure/array.md',
          'structure/regexp.md',
          'structure/func.md',
          'structure/math.md',
          'structure/blob.md',
        ]
      },
      {
        title: 'ECMAscript6',
        collapsable: true,
        children: [
          'es6/symbol.md',
          'es6/promise.md',
          'es6/set.md',
          'es6/map.md',
          'es6/class.md',
        ]
      },
      {
        title: '设计模式',
        collapsable: true,
        children: [
          'design_pattern/singleton.md',
          'design_pattern/eventEmitter.md',
          'design_pattern/observable.md',
        ]
      },
      {
        title: '算法',
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
          'dart/basicType.md',
          'dart/operator.md',
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
        title: '源码分析',
        collapsable: true,
        children: [
          'sourcecode/redux.md',
          'sourcecode/koa.md'
        ]
      }
    ]
  }
}