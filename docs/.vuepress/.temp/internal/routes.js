export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/wangkai/PycharmProjects/langchain-chinese-document/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/components.html", { loader: () => import(/* webpackChunkName: "components.html" */"/Users/wangkai/PycharmProjects/langchain-chinese-document/docs/.vuepress/.temp/pages/components.html.js"), meta: {"title":"Get Start333ed"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/wangkai/PycharmProjects/langchain-chinese-document/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/get.html", { loader: () => import(/* webpackChunkName: "get.html" */"/Users/wangkai/PycharmProjects/langchain-chinese-document/docs/.vuepress/.temp/pages/get.html.js"), meta: {"title":"Get"} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/wangkai/PycharmProjects/langchain-chinese-document/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"Home"} }],
  ["/components/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/wangkai/PycharmProjects/langchain-chinese-document/docs/.vuepress/.temp/pages/components/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/wangkai/PycharmProjects/langchain-chinese-document/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
