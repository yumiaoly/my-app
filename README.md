### 项目配置

#### 1、初始化npm仓库

`npm init`

#### 2、安装依赖

- weback-cli 全局的命令行工具
- webpack 
- @babel/preset-react 解析jsx
- @babel/preset-env 
- loader
  - sass
  - style
  - css
- @alifd/next fusion组件
- react-router-dom

```
    "@babel/core": "^7.19.1",
    "@babel/preset-env": "^7.19.1",
    "@babel/preset-react": "^7.18.6",
    "babel-loader": "^8.2.5",
    "babel-plugin-import": "^1.13.5",
    "css-loader": "^6.7.1",
    "sass": "^1.55.0",
    "sass-loader": "^13.0.2",
    "style-loader": "^3.3.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.11.1"
```


const lines = ['### 项目配置', '```', '  "@babel/core": "^7.19.1",'```']



// 判断
const judgeType = (line)=>{

  // # 开头 => 单行
  // ``` 开头 => 多行判断
  // 渲染组件决定掉 
  return  {

  }
}


const result = [
  { index: 0, value: '### 项目配置' ,component:TitleRender },
  {index: 1, endIndex: 3, value: [ '```', '  "@babel/core": "^7.19.1",'```' ]}

  
  ]


# 12
## 12
### 44
```
12