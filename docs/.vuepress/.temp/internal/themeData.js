export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[{\"text\":\"组件\",\"link\":\"/components\"},{\"text\":\"集成\",\"link\":\"/integrations\"},{\"text\":\"指导\",\"link\":\"/guides\"},{\"text\":\"API接口\",\"link\":\"/apiReference\"},{\"text\":\"更多\",\"link\":\"/more\"}],\"sidebar\":{\"/components\":[{\"title\":\"指南\",\"collapsable\":true,\"sidebarDepth\":1,\"link\":\"/\",\"children\":[{\"title\":\"前端内容\",\"path\":\"/get-started\"},{\"title\":\"前端01\",\"path\":\"/get-started1\"},{\"title\":\"前端02\",\"path\":\"/get-started2\"},{\"title\":\"前端03\",\"path\":\"/get-started\"}]}],\"/integrations\":[{\"title\":\"指南\",\"collapsable\":true,\"sidebarDepth\":2,\"children\":[{\"title\":\"vue\",\"path\":\"framework/vue\"},\"/get\",\"/get\",\"/get\",\"/get\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
