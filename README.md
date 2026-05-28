# KoinX Tax Loss Harvesting

A responsive React-based Tax Loss Harvesting dashboard built as part of the KoinX Frontend Internship Assignment.

---

# Live Demo

Add your deployed Vercel link here:

```txt id="n6zqru"
https://your-vercel-link.vercel.app
```

---

# GitHub Repository

Add your GitHub repository link here:

```txt id="8g7s9f"
https://github.com/yourusername/koinx-tax-harvesting
```

---

# Features

✅ Responsive React Dashboard
✅ Pre Harvesting & After Harvesting Cards
✅ Real-time Tax Loss Harvesting Calculations
✅ Dynamic Holdings Table
✅ Checkbox Selection Logic
✅ Select All Functionality
✅ Savings Calculation
✅ Modern Dark UI
✅ Mock API Integration
✅ Loading Spinner
✅ Mobile Responsive Design

---

# Tech Stack

* React.js
* Vite
* Tailwind CSS
* JavaScript
* Mock APIs

---

# Folder Structure

```txt id="88nsl7"
src/
│
├── components/
│   ├── GainCard.jsx
│   ├── HoldingsTable.jsx
│   └── HoldingRow.jsx
│
├── data/
│   ├── holdingsData.js
│   └── capitalGainsData.js
│
├── services/
│   └── mockApi.js
│
├── utils/
│   └── calculations.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Installation & Setup

## Clone Repository

```bash id="pn12fz"
git clone https://github.com/yourusername/koinx-tax-harvesting.git
```

---

## Move Into Project Folder

```bash id="lckf9m"
cd koinx-tax-harvesting
```

---

## Install Dependencies

```bash id="85njd4"
npm install
```

---

## Start Development Server

```bash id="tf5dko"
npm run dev
```

---

# Tax Harvesting Logic

The application calculates:

* Short-Term Capital Gains (STCG)
* Long-Term Capital Gains (LTCG)
* Realised Capital Gains
* Tax Savings

When users select assets with negative gains, the losses increase and reduce the overall taxable capital gains.

---

# Responsive Design

The application is fully responsive and supports:

* Desktop
* Tablet
* Mobile Devices

---

# Screenshots

Add screenshots here before submission.

Example:

```txt id="l41f11"
screenshots/dashboard.png
```

---

# Assumptions

* APIs are mocked locally using Promises.
* Tax calculations are simulated for frontend demonstration purposes.
* Currency values are displayed in INR format.

---

# Future Improvements

* Add backend integration
* Add authentication
* Add charts & analytics
* Add pagination
* Add filtering & sorting
* Add portfolio insights

---

# Author

KARAMPUDI Janardhan
