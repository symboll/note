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
        title: '数据结构',
        collapsable: true,
        children: [
          'structure/dataType.md',
          'structure/string.md',
          'structure/symbol.md',
          'structure/object.md',
          'structure/array.md',
          'structure/math.md',
          'structure/set.md',
          'structure/map.md',
          'structure/regexp.md',
          'structure/func.md',
          'structure/class.md',          
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
          'algorithm/exchange.md',
        ]
      },
      {
        title: "node",
        collapsable: true,
        children: [
          'node/fs.md',
        ]
      },
      // {
      //   title: '小程序',
      //   collapsable: true,
      //   children: [
      //     'mini/app.md',
      //     'mini/page.md',
      //     'mini/component.md',
      //   ]
      // },
      {
        title: 'git操作',
        collapsable: true,
        children: [
          'gitnote/note.md',
          'gitnote/interview.md'
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