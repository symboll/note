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
          'structure/array',
          'structure/object',
          'structure/set',
          'structure/map',
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
          'scene/copy.md'
        ]
      }
    ]
  }
}