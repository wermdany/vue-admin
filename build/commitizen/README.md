# commitizen

> 使用 [commitizen](https://github.com/commitizen/cz-cli) 来规范 commit 记录

## 使用方法

如果你使用 `npm`

```shell
npm run commit
```

或者使用 `yarn`

```shell
yarn commit
```

接下来就会一步步的引导你来创建 commit message 。

> 在提交前会进行 lint ，请确保代码已经 lint 过，不然你可能需要再次提交~

## 功能

### 支持中文和英文

你只需要去 [`/scripts/commitizen/index`](/scripts/commitizen/index.js) 修改语言即可。

## 配置

具体配置使用了 `cz-customizable` 插件。

1. 详细 [查看](https://github.com/leoforfree/cz-customizable)

2. 配置项 [查看](https://github.com/leoforfree/cz-customizable#options)

## 不足

没有对必填项的强制要求，不过目前已经有人提出了 [issues](https://github.com/leoforfree/cz-customizable/issues/150)
