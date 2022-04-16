# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


# eslint
1. install
    npm install eslint --save-dev
2. config
    npx eslint --init

opts producess:
? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style

? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
  
 ? Which framework does your project use? ...
  React
> Vue.js
  None of these
  
? Does your project use TypeScript? » No / Yes
  
? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
√ Node

? How would you like to define a style for your project? ...
> Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)
  
? Which style guide do you want to follow? ...
  Airbnb: https://github.com/airbnb/javascript
> Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo
  
 ? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON
  
 Checking peerDependencies of eslint-config-standard@latest
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^7.12.1 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1 || ^5.0.0 @typescript-eslint/parser@latest
? Would you like to install them now with npm?

+ eslint-plugin-import@2.23.4
+ eslint-plugin-node@11.1.0
+ eslint-config-standard@16.0.3
+ eslint-plugin-vue@7.11.1
+ eslint@7.29.0
+ @typescript-eslint/parser@4.27.0
+ @typescript-eslint/eslint-plugin@4.27.0
+ eslint-plugin-promise@5.1.0

3.  .eslintrc.js config
extends: [
    // 使用 Vue3 规则
    'plugin:vue/vue3-strongly-recommended',
    'standard'
]

4. package.json scripts add config
    "lint": "eslint './src/**/*.{js,jsx,vue,ts,tsx}' --fix"

5.ide plugins
    ● 禁用 Vetur
    ● 安装 eslint 插件
    ● 安装 volar 插件