# 路由规则

> 此系统路由设置为页面完全可配置，用户可以根据自己的需要，动态设置其需要的页面路由，并能更各种相关参数

## 页面组织结构

规定在 `src/views` 下每一个文件夹为一个模块，文件名为模块名。

在一个模块下 分别拥有以下结构：

```tree
│  view.vue  //嵌套路由文件
│
├─lang  //国际化
│      en_US.ts
│      zh_CN.ts
│
├─pages  //页面
│      login.vue
│
├─route  //路由映射配置
│      map.ts
│      route.ts
│
└─widgets  //此模块独有的公共业务组件
```

由以上基本结构可以得出几个硬性要求：

1. 国际化要按照模块按需加载
2. 路由分为结构配置 `route/route.ts` 和 映射配置 `route/map.ts` 会自动提取所有的配置文件，供用户随意组装和修改。

## 配置文件

目前提供了两个公用的路由配置，这两个配置在初始化时会自动加入路由。

1. 首页重定向
2. 全局 404 匹配

## 相关方法

1. addRoutes
2. removeRoute
3. getRoutes
4. hasRoute

其他方法可以参考[官方文档](https://next.router.vuejs.org/api/#router-methods)自行添加
