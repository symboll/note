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
        title: '基本数据结构',
        collapsable: true,
        children: [
          'structure/dataType.md',
          'structure/string.md',
          'structure/other.md',
          'structure/object.md',
          'structure/array.md',
          'structure/math.md',
          'structure/regexp.md',
          'structure/func.md',
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
      //   title: 'git操作',
      //   collapsable: true,
      //   children: [
      //     // 'git/note.md',
      //     // 'git/interview.md',
      //     'pamphlet/0什么是版本控制系统（VCS）.md',
      //     'pamphlet/1什么是分布式版本控制系统（DVCS).md',
      //     'pamphlet/2上手 1：新公司用 Git 管理代码，怎么快速上手？.md',
      //     'pamphlet/3上手 2：团队工作的基本工作模型.md',
      //     'pamphlet/4进阶 1：HEAD、master 与 branch.md',
      //     'pamphlet/5进阶 2：push 的本质.md',
      //     'pamphlet/6进阶 3：merge：合并 commits.md',
      //     'pamphlet/7进阶 4：Feature Branching：最流行的工作流.md',
      //     'pamphlet/8进阶 5：关于 add.md',
      //     'pamphlet/9进阶 6：看看我都改了什么.md',
      //     'pamphlet/10高级 1：不喜欢 merge 的分叉？用 rebase 吧.md',
      //     'pamphlet/11高级 2：刚刚提交的代码，发现写错了怎么办？.md',
      //     'pamphlet/12高级 3：写错的不是最新的提交，而是倒数第二个？.md',
      //     'pamphlet/13高级 4：比错还错，想直接丢弃刚写的提交？.md',
      //     'pamphlet/14高级 5：想丢弃的也不是最新的提交？.md',
      //     'pamphlet/15高级 6：代码已经 push 上去了才发现写错？.md',
      //     'pamphlet/16高级 7：reset 的本质——不止可以撤销提交.md',
      //     'pamphlet/17高级 8：checkout 的本质.md',
      //     'pamphlet/18高级 9：紧急情况：「立即给我打个包，现在马上！」.md',
      //     'pamphlet/19高级 10：branch 删过了才想起来有用？.md',
      //     'pamphlet/20额外说点：.gitignore——排除不想被管理的文件和目录.md',
      //     'pamphlet/21总结.md',
      //   ]
      // },
      // {
      //   title: 'style',
      //   collapsable: true,
      //   children: [
      //     'style/css.md',
      //     'style/less.md',
      //     'style/scss.md',
      //     'style/stylus.md',
      //   ]
      // },
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