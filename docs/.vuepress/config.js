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
          'basic/flatten.md',
          'basic/unique.md',
          'basic/isEmptyobj.md',
          'basic/dataType.md',
        ]
      }
    ]
  }
}