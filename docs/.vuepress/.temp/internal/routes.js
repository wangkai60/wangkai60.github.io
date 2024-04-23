export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/wangkai/PycharmProjects/langchain-chinese-document/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/wangkai/PycharmProjects/langchain-chinese-document/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/wangkai/PycharmProjects/langchain-chinese-document/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
