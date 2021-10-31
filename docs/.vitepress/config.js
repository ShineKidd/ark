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
      { text: 'Weekly', link: '/weekly/' },
      { text: 'Java', link: '/java/class' },
      { text: 'JavaScript', link: '/javascript/webpack' },
      { text: 'Server', link: '/server/shell' },
      { text: 'Misc', link: '/misc/' },
      { text: 'Git', link: '/git/' },
      { text: 'Algorithm', link: '/algorithm/' },
      { text: 'Code', link: '/code/' },
    ],

    sidebar: {
      '/weekly/': getWeeklySidebar(),
      '/java/': getJavaSidebar(),
      '/javascript/': getJavaScriptSidebar(),
      '/css/': getCSSSidebar(),
      '/server/': getServerSidebar(),
      '/misc/': getMiscSidebar(),
      '/git/': getGitSidebar(),
      '/algorithm/': getAlgorithmSidebar(),
      '/code/': getCodeSidebar(),
    }
  }
}

function getWeeklySidebar () {
  return [
    { text: '第1期', link: '/weekly/2021-10-31' }
  ]
}

function getJavaSidebar() {
  return [
    { text: 'Interface', link: '/java/interface' },
    { text: 'Class', link: '/java/class' },
    { text: 'Thread', link: '/java/thread' },
    { text: 'Enum', link: '/java/enum' },
    { text: 'Annotation', link: '/java/annotation' },
    { text: 'Collection Map', link: '/java/collection-map' },
    { text: 'IO', link: '/java/io' },
    { text: 'Generic', link: '/java/generic' },
    { text: '🛠 Date Time', link: '/java/util-date-time' },
  ]
}

function getJavaScriptSidebar() {
  return [
    { text: 'Webpack', link: '/javascript/webpack' },
    { text: 'Vue', link: '/javascript/vue' },
    { text: 'Vitepress', link: '/javascript/vitepress' },
    { text: 'vite', link: '/javascript/vite' },
    { text: 'chrome', link: '/javascript/chrome' },
    { text: 'execution-context', link: '/javascript/execution-context' },
  ]
}
function getCSSSidebar() {
  return [
    { text: 'CSS2', link: '/css/css2' },
    { text: 'CSS next', link: '/css/css-next' },
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
    { text: 'FE Team', link: '/misc/fe-team' },
    { text: 'Start YML', link: '/misc/start-yml' },
    { text: 'Computer Words', link: '/misc/words' },
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
    { text: '算法实战', link: '/algorithm/practice' },
  ]
}

function getCodeSidebar() {
  return [
    { text: 'Loadsh', link: '/code/loadsh' },
    { text: 'Tapable', link: '/code/tapable' },
  ]
}
