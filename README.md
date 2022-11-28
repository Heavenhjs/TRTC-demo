# TRTC-demo
    └─quick-demo-vue3-ts                   # 前端项目目录
        ├─public
        └─src
            ├─api                   # 服务AIP配置
            ├─assets                # 静态资源（包含 公共样式、图片）
            │  ├─css                
            │  └─image
            ├─components		    # 组件封装
            │  ├─ui                 #一些次要ui组件
            │  other.vue   		    # 页面的主要组件
            ├─locales               # 语言模块
            │  ├─lang               # 语言选项（目前有英文和中文）
            ├─router                # 路由
            ├─store                 # axios 封装
            ├─types                 # 一些类的封装
            ├─views                 # 页面视图
            └─utils                 # 工具包


# run
首先使用git克隆项目：`git clone https://github.com/Heavenhjs/TRTC-demo.git`
然后输入`npm i`自动配置项目相关依赖，然后输入`npm run serve`启动服务。也可以直接`npm start`。
