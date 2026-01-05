# SupplyDrop - MERN Stack Group Buy Platform

[![GitHub License](https://img.shields.io/github/license/tongweizj/drop-clone-mern)](https://github.com/tongweizj/drop-clone-mern/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/tongweizj/drop-clone-mern/pulls)

**SupplyDrop** 是一个基于 MERN 栈开发的电商平台，旨在克隆并致敬 [Drop.com](https://drop.com) (原 Massdrop)。它通过“社区驱动”和“阶梯团购”机制，联结全球爱好者与高品质装备。

---

## 🌟 核心功能 (Core Features)

- **🛒 阶梯定价系统 (Tiered Pricing)**: 模拟真实的团购逻辑。随着购买人数的增加，商品价格会自动降至更低的阶梯档次。
- **📊 社区投票 (Community Polls)**: 用户可以发起投票或参与投票，由社区决定下一个“Drop”的商品。
- **⏳ 倒计时团购**: 每个项目都有严格的时间限制，增强抢购体验。
- **🔐 完整认证流程**: 采用 JWT 实现安全的登录、注册以及基于角色的权限管理（用户/管理员）。
- **📦 订单管理**: 包含完整的购物车流程、地址管理以及模拟支付对接。

## 🛠️ 技术栈 (Tech Stack)

### 前端
- **React.js (v18)**: 函数式组件与 Hooks 应用。
- **Redux Toolkit**: 全局状态管理（处理购物车、用户信息等）。
- **Tailwind CSS**: 响应式 UI 布局设计。
- **Axios**: 与后端 API 进行异步交互。

### 后端
- **Node.js & Express**: 高性能服务端运行环境。
- **MongoDB & Mongoose**: 灵活的非关系型数据库建模。
- **JWT (JSON Web Token)**: 无状态身份验证。
- **Multer & Cloudinary**: 处理商品图片的上传与云端存储。

---

## 📂 项目结构 (Project Structure)

```text
drop-clone-mern/
├── client/           # React 前端代码
│   ├── src/
│   │   ├── components/  # 公用组件
│   │   ├── pages/       # 页面 (Home, Product, Polls, Admin)
│   │   ├── store/       # Redux Toolkit 切片
│   │   └── utils/       # 工具函数
├── server/           # Node.js 后端代码
│   ├── controllers/  # 业务逻辑
│   ├── models/       # Mongoose 模型 (User, Product, Poll, Order)
│   ├── routes/       # API 路由
│   └── middleware/   # 认证与错误处理中间件
└── README.md

```

---

## 🚀 快速开始 (Getting Started)

### 1. 克隆项目

```bash
git clone [https://github.com/tongweizj/drop-clone-mern.git](https://github.com/tongweizj/drop-clone-mern.git)
cd drop-clone-mern

```

### 2. 后端配置

进入 `server` 目录，安装依赖并配置 `.env`:

```bash
cd server
npm install

```

创建 `.env` 文件并填入以下内容：

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_url

```

启动后端：

```bash
npm run dev

```

### 3. 前端配置

进入 `client` 目录，安装依赖：

```bash
cd ../client
npm install
npm start

```

---

## 📸 界面预览 (Screenshots)

*(开发完成后建议在此处上传 2-3 张核心页面截图)*

* **首页**: 动态展示进行中的 Drop 项目。
* **商品页**: 包含价格阶梯图表和倒计时。
* **管理后台**: 管理员发布新产品和查看订单的入口。

---

## 🤝 贡献说明

欢迎提交 Issue 或 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

---

## 📧 联系方式

* **作者**: Max Tong
* **GitHub**: [@tongweizj](https://github.com/tongweizj)
* **项目地址**: [https://github.com/tongweizj/drop-clone-mern](https://github.com/tongweizj/drop-clone-mern)