# ⚡ Aryan Sarda | Interactive Portfolio & Living Data Hub

An immersive, highly animated personal portfolio built to showcase advanced front-end engineering and automated data integration. This project serves as a cinematic user experience while acting as a "living data hub," pulling real-time personal metrics from external APIs via custom serverless ETL pipelines.

---

## 🚀 Overview

This repository is split into two core architectural domains:
1. **The Client (Frontend):** A high-performance Next.js application leveraging Framer Motion and complex, math-driven CSS keyframes (including SVG displacement and chromatic aberration) to create an app-like, interactive experience.
2. **The Data Pipelines (ETL):** Automated serverless workflows that extract personal activity data from the Strava and Spotify APIs, transform the payloads, and load them as static JSON files into the repository for rapid frontend consumption.

---

## 🛠 Tech Stack & Tools

**Frontend & UI:**
* **Framework:** Next.js (App Router, Turbopack) / React
* **Styling:** Tailwind CSS
* **Animation:** Framer Motion, Advanced CSS Keyframes, SVG Filters (Turbulence & Displacement)
* **Assets:** Custom cursors, custom scrollbar logic, and programmatic particle backgrounds

**Data Engineering & Backend:**
* **Languages:** Python 3.11
* **Databases:** DuckDB, SQLite
* **Orchestration & CI/CD:** GitHub Actions
* **Data Validation & Manipulation:** Pandas, Pandera
* **APIs:** Spotify Web API, Strava API

---

## ✨ Frontend Engineering Highlights

* **Spider-Verse Style Chromatic Aberration:** Custom-built glitch effects that utilize `mix-blend-mode: screen` and staggered React re-rendering to create a rolling, erratic text distortion wave.
* **App-like Interactions:** Globally disabled text-selection and custom SVG cursors to force a native-app feel within the browser.
* **Responsive & Performant:** Heavily optimized animations that run smoothly on mobile devices without causing layout thrashing or white-screen overscroll.

---

## ⚙️ The Serverless Data Pipelines

Rather than forcing the client to authenticate and fetch from external APIs on every page load, this repository utilizes scheduled ETL scripts to populate the frontend.

### 🏃‍♂️ Strava Activity ETL
This Serverless Strava ETL Pipeline automates the synchronization of fitness data.
* **Extract:** The pipeline uses a "Golden Ticket" refresh token to generate a fresh access token for every run. It fetches the latest activities and stores them in a local SQLite database (`strava.db`) to prevent duplicates.
* **Transform:** Using `pandas`, the script converts raw SI units into athlete-friendly metrics like miles and feet.
* **Load:** GitHub Actions commits the updated database back to the repository and pushes a lightweight `metrics.json` directly to the portfolio's data folder.

### 🎧 Spotify Analytics ETL
A production-grade Data Engineering project that extracts personal listening history and delivers fresh weekly analytics.
* **Architecture:** Utilizes a Star Schema to decouple granular event data (`fact_listening_history`) from track metadata (`dim_tracks`) using DuckDB. 
* **Validation & Resiliency:** Raw JSON is flattened and validated against a Pandera schema. It also integrates `tenacity` for exponential backoff to respect Spotify's API limits.
* **State Management:** Implements dynamic GitHub Action cache keys to automate weekly schema resets without manual intervention.
* **SQL Windowing:** Utilizes DuckDB's interval arithmetic (`INTERVAL '7 days'`) to ensure analytics are strictly bound to the rolling week.

---

## 💻 Local Development

This repository is decoupled. You can run the frontend completely independently of the data pipelines using the pre-existing JSON files mapped in the `/data` directory.

### 1. Running the Frontend
No API credentials or backend configuration are required to run the UI locally.

```bash
git clone [https://github.com/yourusername/portfolio.git](https://github.com/yourusername/portfolio.git)
cd portfolio
npm install
npm run dev
```
Open `http://localhost:3000` in your browser to view the application.

### 2. Running the ETL Pipelines (Optional)
If you wish to test, modify, or manually trigger the data pipelines to fetch fresh data, they must be configured separately. 

Please refer to their individual documentation for local Python setup instructions and `.env` credential requirements:
* [Strava ETL Pipeline Guide](https://github.com/sardaaryan/strava_etl/blob/main/README.md)
* [Spotify ETL Pipeline Guide](https://github.com/sardaaryan/spotify_etl/blob/main/README.md)