### babel配置

    https://babel.docschina.org/setup#installation

    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        "plugins": [
            // https://babel.docschina.org/docs/en/babel-plugin-transform-runtime
            "@babel/plugin-transform-runtime",
            // https://babeljs.io/docs/en/babel-plugin-proposal-decorators
            ["@babel/plugin-proposal-decorators", { "legacy": true }],//用于编译 class 修饰器语法，依赖 @babel/plugin-proposal-class-properties 插件
            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
            "@babel/plugin-syntax-dynamic-import",//动态语法导入，用于按需加载组件代码和样式的 babel 插件
        ]
    }

### 安装

    npm install

### 启动

    npm start

### 编译生成

    npm run build:prod
