module.exports = {
  base: '',
  dest: './dist',
  title: '数据结构与算法',
  description: '',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '数据结构',
        collapsable: false,
        children: [
          'structure/basic',
          'structure/symbol',
          'structure/array',
          'structure/object',
          'structure/math',
          'structure/set',
          'structure/map',
          'structure/extends',
        ]
      },
      {
        title: '基础算法',
        collapsable: false,
        children: [
          'basic/dataType.md',
          'basic/isEmptyobj.md',
          'basic/flatten.md',
          'basic/unique.md',
          'basic/listNode.md',
          'basic/treeNode.md',
          'basic/recursion.md',
          'basic/search.md',
          'basic/debounce.md',
        ]
      },
      {
        title: '场景算法',
        collapsable: false,
        children: [
          'scene/currying.md',
          'scene/compare.md',
          'scene/deepClone.md',
          'scene/combination.md'
        ]
      },
      {
        title: 'react原理',
        collapsable: false,
        children: [
          'react/redux.md'
        ]
      },
      {
        title: 'koa原理',
        collapsable: false,
        children: [
          'koa/koa.md'
        ]
      }
    ]
  }
}