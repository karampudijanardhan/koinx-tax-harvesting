# KoinX Tax Loss Harvesting

A responsive React-based Tax Loss Harvesting dashboard built as part of the KoinX Frontend Internship Assignment.

---

# Live Demo

https://koinx-tax-harvesting-8a5w.onrender.com/

---

# GitHub Repository

https://github.com/karampudijanardhan/koinx-tax-harvesting

---
## ScreenShot
public/dashboard.png
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

```txt
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

```bash
git clone https://github.com/karampudijanardhan/koinx-tax-harvesting.git
```

---

## Move Into Project Folder

```bash
cd koinx-tax-harvesting
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

# Build For Production

```bash
npm run build
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

## Dashboard

Add your dashboard screenshot here.

Example:

```txt
public/screenshots/dashboard.png
```

## Mobile View

Add your mobile screenshot here.

Example:

```txt
public/screenshots/mobile.png
```

---

# Assumptions

* APIs are mocked locally using Promises.
* Tax calculations are simulated for frontend demonstration purposes.
* Currency values are displayed in INR format.
* The application focuses mainly on frontend functionality and UI interactions.

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
Frontend Developer | React.js Enthusiast
