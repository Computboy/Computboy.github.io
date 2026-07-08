# Computboy's Personal Site

这是 Computboy 的个人技术作品集与知识库源码。项目基于
[Zensical](https://zensical.org/)，围绕 Graphics、Agents 和 Creative Systems
组织项目、技术笔记、研究记录与个人信息。

## 本地预览

需要 Python 3.10 或更高版本。

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install zensical
zensical serve
```

浏览器访问 `http://127.0.0.1:8000/`。

## 构建

```powershell
zensical build --clean
```

构建结果位于 `site/`，该目录不会纳入 Git 版本控制。

## 项目结构

```text
.
├── .github/workflows/  # GitHub Pages 自动部署
├── docs/
│   ├── projects/       # 项目总览与详情
│   ├── notes/          # Algorithms / Graphics / AI / HCI
│   ├── research/       # 研究记录与论文阅读
│   └── assets/         # 图片、视频、字体和样式
├── zensical.toml       # Zensical 站点配置
└── README.md
```

推送到 `main` 分支后，GitHub Actions 会构建并部署站点。仓库的 GitHub Pages
来源需要设置为 **GitHub Actions**。
