import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'langchain',
    description: 'langchain中文文档',

    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',
        navbar: [
            {
                text: '组件',
                link: '/components',
            },
            {
                text: '集成',
                link: '/integrations',
            },
            {
                text: '指导',
                link: '/guides',
            },
            {
                text: 'API接口',
                link: '/apiReference',
            }
            ,
            {
                text: '更多',
                link: '/more',
            }
        ],

        sidebar: {
            '/components': [
                {
                    title: '指南',   // 组织侧边栏分组的标题
                    collapsable: true, // 是否可折叠
                    sidebarDepth: 1,
                    link: "/",
                    children: [
                        {title: '前端内容', path: '/get-started'},
                        {title: '前端01', path: '/get-started1'},
                        {title: '前端02', path: '/get-started2'},
                        {title: '前端03', path: '/get-started'}
                    ]
                }
            ],
            '/integrations': [
                {
                    title: '指南',   // 组织侧边栏分组的标题
                    collapsable: true, // 是否可折叠
                    sidebarDepth: 2,
                    children: [
                        // 默认打开 /guide/ 目录下的 README.md 文件
                        {title: 'vue', path: 'framework/vue'}, // /guide/installation.md 文件
                        '/get',
                        '/get',
                        '/get',
                        '/get',
                    ]
                }
            ]
        }
    }),

    bundler: viteBundler(),
})
