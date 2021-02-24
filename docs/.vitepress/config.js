module.exports = {
  lang: 'zh-CN',
  title: '🚀',
  // logo: '',
  description: 'blog',
  base: '/',

  themeConfig: {
    repo: null,
    docsDir: 'docs',

    // editLinks: true,
    // editLinkText: 'Edit this page on GitHub',
    // lastUpdated: 'Last Updated',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    carbonAds: {
      // carbon: 'CEBDT27Y',
      // custom: 'CKYD62QM',
      // placement: 'vuejsorg'
    },

    nav: [
      { text: 'Java', link: '/java/class' },
      { text: 'JavaScript', link: '/javascript/webpack' },
      { text: 'Server', link: '/server/shell' },
      { text: 'Misc', link: '/misc/' },
      { text: 'Git', link: '/git/' },
      { text: 'Algorithm', link: '/algorithm/' },
    ],

    sidebar: {
      '/java/': getJavaSidebar(),
      '/javascript/': getJavaScriptSidebar(),
      '/server/': getServerSidebar(),
      '/misc/': getMiscSidebar(),
      '/git/': getGitSidebar(),
      '/algorithm/': getAlgorithmSidebar(),
    }
  }
}

function getJavaSidebar() {
  return [
    { text: 'Interface', link: '/java/interface' },
    { text: 'Class', link: '/java/class' },
    { text: 'Thread', link: '/java/thread' },
  ]
}

function getJavaScriptSidebar() {
  return [
    { text: 'Webpack', link: '/javascript/webpack' },
    { text: 'Vue', link: '/javascript/vue' },
    { text: 'Vitepress', link: '/javascript/vitepress' },
    { text: 'vite', link: '/javascript/vite' },
    { text: 'chrome', link: '/javascript/chrome' },
  ]
}

function getServerSidebar() {
  return [
    { text: 'server', link: '/server/shell' },
    { text: 'server', link: '/server/my-sql' },
  ]
}
function getMiscSidebar() {
  return [
  ]
}
function getGitSidebar() {
  return [
  ]
}
function getAlgorithmSidebar() {
  return [
    { text: '《算法图解》', link: '/algorithm/book-grokking-algorithms' },
    { text: '《JS 数据结构与算法》', link: '/algorithm/book-js-data-structure-and-algorithms' },
  ]
}
