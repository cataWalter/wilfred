# Wilfred - Portfolio & Services

This is a bespoke website built for **Wilfred**, a South African creative professional living in Italy. It serves as a dual-purpose platform showcasing his photography portfolio and offering official translation services.

## 📋 Project Requirements

This project was built based on the following specifications:

1.  **Persona:** Wilfred, a South African living in Italy.
2.  **Core Functionality:**
    *   **Photography Page:** A gallery to display local photographs, divided into specific sections:
        *   Reportage
        *   Landscapes
        *   Marriages
    *   **Translations Page:** A professional services page for official translations, featuring different types and pricing plans (e.g., Standard, Certified/Sworn).
3.  **Tech Stack:** Next.js (React framework).
4.  **Data Management:** No database required (images and data are handled locally).
5.  **Aesthetic:** "Work of Art" — utilizing cinematic typography, motion animations, and a minimalist design.

## 🚀 Tech Stack

*   **Framework:** Next.js 14 (App Router)
*   **Styling:** Tailwind CSS
*   **Typography:** Cormorant Garamond (Headers) & Montserrat (Body) via Google Fonts
*   **Animations:** Framer Motion
*   **Icons:** Lucide React

## 📂 Project Structure

*   **`app/`**: Contains the routes (Home, Photography, Translations, About, Contact).
*   **`components/`**: Reusable UI components (Navbar, Footer, FadeIn).
*   **`lib/data.ts`**: **Important!** This file acts as the "CMS". Edit this file to change text, pricing, or add new photo categories without touching code.
*   **`public/images/`**: Place your local images here.

## 🛠️ Setup & Run

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

3.  **Build for Production:**
    ```bash
    npm run build
    npm start
    ```

## 🖼️ How to Add Photos

Since there is no database, photos are loaded from the `public` folder.

1.  Go to `public/images/photography/`.
2.  You will find folders for `reportage`, `landscapes`, and `marriages`.
3.  Paste your `.jpg` or `.png` files there.
4.  (Optional) To update the number of placeholders or category descriptions, edit `lib/data.ts`.

## 🎨 Design Notes

*   **Colors:** Stone/Earth palette reflecting the connection between South African terrain and Italian architecture.
*   **Layout:** Masonry grids for photography to break the monotony of standard squares.
*   **Typography:** Serif headings for elegance, Sans-serif body for readability.

---
*Created for Wilfred.*
