# Crypto_Tracker
l-grade real-time cryptocurrency price tracker built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This app simulates live updates to prices and other market stats, providing a responsive and visually appealing dashboard inspired by platforms like CoinMarketCap and Binance.

![crypto-demo](demo.gif) <!-- Replace with your actual GIF or video -->

---

## 🚀 Features

- 📊 **Live Crypto Dashboard** – Displays BTC, ETH, USDT, and more in a responsive table layout.
- 🔁 **Simulated Real-Time Updates** – Prices, % changes, and volume update every 1–2 seconds using Redux and `setInterval`.
- 🧠 **Redux Toolkit Powered** – Centralized state management with `createSlice` and selectors.
- 🌈 **Color-coded Trends** – Green for gains 📈, red for losses 📉.
- 📉 **7D Chart** – Static SVG/chart visual for 7-day performance.
- 📱 **Mobile Responsive** – Optimized layout using Tailwind's responsive utilities.
- 🌙 **Dark Mode** – Sleek trading UI with theme toggle.
- 🔍 **Filter & Sort (Bonus)** – Sort by top gainers, losers, volume, and more.
- 💾 **Optional TypeScript Support** – Strong typing for better DX (if enabled).
- 🧪 **Bonus** – Easy to add unit tests, localStorage persistence, or WebSocket integration.

---

## 🛠️ Tech Stack

- ⚛️ **React** (with Vite)
- 🧰 **Redux Toolkit** – `createSlice`, `configureStore`
- 💨 **Tailwind CSS** – Utility-first responsive design
- 📈 **Recharts** (or SVG) – Simple 7-day line charts
- ⏱ **setInterval** – Simulated WebSocket data stream
- 🌐 **Optional**: TypeScript, unit tests, dark mode toggle

---

## 📁 Folder Structure

```

src/
├── app/             # Redux store configuration
├── features/        # Crypto slice (reducers, actions)
├── components/      # UI components (table, rows, chart)
├── assets/          # Logos, images
├── utils/           # Helper functions, formatters
├── styles/          # Global and component-level styles
└── App.tsx

````

---

## 🧩 Architecture

- Redux holds all **crypto asset state**
- Simulated WebSocket via `setInterval` triggers Redux actions
- State flows from slice → selector → component
- Table dynamically re-renders optimized rows only

---

## 📷 Demo Preview

[![Demo Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)  
🎥 Click to watch the full walkthrough!

---

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 🔮 Upcoming Enhancements

* ✅ Real WebSocket support (Binance, CoinGecko)
* 💾 localStorage support for theme/data
* 🧪 Unit tests for reducers, selectors
* 🧑‍💻 TypeScript migration
* 📊 Filtering by gainers/losers/volume

---

## 🤝 Contributing

Pull requests and issues are welcome! Let's build better tools for crypto fans together 💪

---


