# AboutMe

Demo: [点击查看](https://me.888421.xyz)

这是一个简洁、现代、响应式的个人主页模板，完全构建在一个 Vue 3 单文件组件中。它使用了 Vite 作为构建工具，实现了极速的开发体验。

这个模板非常适合开发者、研究人员和学生快速搭建一个专业的在线简历，而无需配置复杂的项目结构。

## ✨ 特性

- **单文件**：所有逻辑、结构和样式都在一个 `App.vue` 文件中，修改极其方便。
- **零配置启动**：使用 Vite，克隆项目后 `npm install && npm run dev` 即可开始。
- **动态 GitHub 数据**：自动获取并展示你指定 GitHub 仓库的 Star 数量。
- **完全响应式**：在桌面、平板和手机上都有完美的展示效果。
- **易于定制**：所有个人数据都集中在 `<script>` 区域，像填写表格一样简单。
- **现代化设计**：简洁的卡片式设计和清晰的布局，突出核心信息。
- **轻量级**：没有引入任何大型 UI 框架，保持项目小巧和快速。

## 🚀 快速开始

只需几个简单的步骤，你就可以拥有自己的个人主页。

### 1. 克隆项目

```bash
git clone https://github.com/KarlRaphel/AboutMe.git
cd AboutMe
```

### 2. 安装依赖

推荐使用 `npm` 或 `pnpm`。

```bash
npm install
```

### 3. 运行开发服务器

```bash
npm run dev
```

现在，在浏览器中打开提示的地址（通常是 `http://localhost:5173`），你就能看到模板页面了。

## 🎨 如何定制成你的主页

这是最关键的部分！所有的修改都集中在 `src/App.vue` 文件中。

### 第1步：修改个人信息

在 `<script setup>` 区域找到 `personalInfo` 对象，然后替换成你自己的信息。

```javascript
// src/App.vue

const personalInfo = ref({
  name: '你的名字',
  title: '你的职位',
  education_status: '你的教育状态',
  location: '你的城市',
  phone: '你的电话',
  email: '你的邮箱',
  avatar: avatarUrl, // 头像将在下一步修改
});
```

### 第2步：更换你的头像

1. 准备一张你的个人照片（建议为正方形）。
2. 将照片放到 `src/assets/` 目录下。
3. 将照片重命名为 `avatar.png`。
    > 代码已经自动导入 `src/assets/avatar.png`，所以你只需要替换文件即可。

### 第3步：更新“个人优势”和“技术栈”

找到 `aboutMe` 和 `skills` 变量，填入你的个人简介和掌握的技能。

```javascript
// src/App.vue

const aboutMe = ref(
  '在这里写下你的个人优势和简介...'
);

const skills = ref([
  'Python', 'Vue.js', 'React', 'Node.js', // 添加或删除你的技能
]);
```

### 第4步：编辑项目、教育和奖项等经历

你需要修改以下几个数组，它们都遵循相似的结构（对象数组）。只需按照示例格式添加、修改或删除条目即可。

- **项目经历** (`projects`)
- **教育背景** (`education`)
- **荣誉奖项** (`awards`)
- **学术成果** (`publications`)

**例如，修改项目经历：**

```javascript
// src/App.vue

const projects = ref([
  {
    title: '你的项目名称',
    role: '你在项目中的角色',
    date: '项目时间',
    description: '项目描述...',
    achievements: [
      '业绩1...',
      '业绩2...'
    ],
    tags: ['技术标签1', '技术标签2']
  },
  // 在这里添加更多项目...
]);
```

### 第5步：展示你的 GitHub 项目

这是本模板的亮点功能。找到 `targetRepos` 数组，将 `user` 和 `repo` 替换成你想展示的 GitHub 仓库信息。你可以添加任意多个。

```javascript
// src/App.vue

// 你的 GitHub 项目列表
const targetRepos = ref([
  { user: '你的GitHub用户名', repo: '你的仓库名1' },
  { user: '你的GitHub用户名', repo: '你的仓库名2' },
  // 例如:
  // { user: 'vuejs', repo: 'vue' },
  // { user: 'facebook', repo: 'react' },
]);
```

### 第6步（可选）：调整主题颜色

在 `<style>` 标签的顶部，我们定义了几个 CSS 变量来控制主色调。你可以轻松修改它们来改变整个网站的风格。

```css
/* src/App.vue */

:root {
  --primary-color: #007BFF;  /* 主题色 (链接、边框等) */
  --secondary-color: #43a047; /* 次要颜色 (标签、高亮等) */
  --dark-color: #333;       /* 主要文字颜色 */
  /* ... 其他颜色 */
}
```

## 部署上线

当你完成所有修改后，可以通过以下方式免费部署你的网站。

### 1. 生成静态文件

```bash
npm run build
```

这个命令会在项目根目录下生成一个 `dist` 文件夹，里面包含了所有部署所需的文件。

### 2. 部署平台

推荐使用 [Vercel](https://vercel.com/) 或 [Netlify](https://www.netlify.com/)，它们提供无缝的 Git 集成和免费的托管服务。

1. 将你的项目推送到 GitHub 仓库。
2. 在 Vercel 或 Netlify 上，授权并连接你的 GitHub 账户。
3. 选择你的项目仓库。
4. 平台会自动识别为 Vite 项目，使用默认设置直接部署即可！

## 📄 许可证

本项目使用 [MIT License](LICENSE)。你可以自由地使用、修改和分发。
