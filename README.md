# vue-mocker

现在的 mock 机制遇到的问题是什么？

优先级：

1. 先开发 yapi 的接口测试；
2. yapi 上面的数据结构和真实请求回来的数据之间的差异
3. 封装一个 业务 request

vue-mocker 设计 :最终要达到效果：不要联调！

1. 配置文件： .mock.js {platform:'yapi', options:{}}
2. 流程:before 之前进行注册，同时测试联通性和完整性，并且使用 node-cluster 缓存一部分数据下来，如果访问失败，使用 mockjs 来进行数据兜底；
3. 高级功能：提供 mock 模板；提供 mock 工具进行命令行测试；自动化接口测试; 提供接口测试报告；提供 api mocker ui; 集成一下代码测试
4. 最终功能：I am a LSP!
5. 使用方式：Vue.use(vue-mock);this.\$mock.use/get/post(url, opts)
6. roadmap:

- 初始化项目
- 组件成功读到 配置文件
- 插件成功挂载到 vue 实例
- 插件可以发送请求 到 get https://yapi.xxx.com/project/733/interface/api/72006, projectId 并且打印出数据, 绑定 Vscode 快捷键智能提示
- 待续

参考：mock.js easy-mock

使用流程：写静态页面-> 使用 this.\$mocker 参考 yapi 进行数据开发，免除自己造假数据-> 使用提供的工具进行线上接口测试，测试通过 -> 直接 来一个 webpack plugin 进行全局替换，或者切换全局变量，来 取 mock 而代之，置换为 request
,

首先获取到 vue 中的 axios 实例， 或者直接挂在 Vue ，或者挂在 vm 实例上，然后劫持它的 response 来进行校验

Vue.use(VueMocker, {
platform: 'yapi',

api: {
'/api/test': 'https://xxx/mock/1816/api/blogs/list',
},
});

useMook, connect(Mocker)()
