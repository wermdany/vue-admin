module.exports = {
  types: [
    { value: "feat", name: "feat    :一个新功能" },
    { value: "fix", name: "fix     :修复了一个 Bug" },
    { value: "docs", name: "docs    :修改了文档信息" },
    {
      value: "style",
      name: "style   :修改了不影响代码的部分（缩进、格式化等等）"
    },
    {
      value: "refactor",
      name: "refactor:既不修复 Bug 也不添加特性的代码更改（重构）"
    },
    {
      value: "perf",
      name: "perf    :  提高性能的代码更改"
    },
    { value: "test", name: "test    :添加测试代码（单元测试等）" },
    {
      value: "chore",
      name: "chore   :对构建过程或辅助工具的更改"
    },
    { value: "revert", name: "revert  :代码回退的提交" },
    { value: "WIP", name: "WIP     :正在进行的工作" }
  ],
  // select scopes list
  scopes: [],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "请选择需要提交的类型:",
    scope: "\n选择此次更改的范围 (可选):",
    // used if allowCustomScopes is true
    customScope: "填写此次更改的范围(选填)\n:",
    subject: "对此次提交的简短描述(必填):\n",
    body: '对此次提交的详细描述(选填). 使用"|"换行:\n',
    breaking: "请列出此次更改破坏性的变化 (选填):\n",
    footer: "列出此次更改解决的问题 (选填). 例如: #31, #34:\n",
    confirmCommit: "是否使用上方内容并提交?"
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["body", "breaking"],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
