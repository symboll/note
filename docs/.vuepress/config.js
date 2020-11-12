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
          'basic/search.md',
          'basic/recursion.md',
          'basic/listNode.md',
          'basic/treeNode.md',
          
        ]
      },
      {
        title: '场景算法',
        collapsable: false,
        children: [
          'scene/dataType.md',
          'scene/flatten.md',
          'scene/unique.md',
          'scene/isEmptyobj.md',
        ]
      }
    ]
  }
}