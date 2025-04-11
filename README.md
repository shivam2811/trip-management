# Angular Trip Visualizer

This project is part of a recruitment assignment to visualize multi-leg trips with specific display rules using Angular.

---

## Project Requirements

Design an Angular application with the following functionality:

### Input:
- A list of trips, each containing a **Start Point** and **End Point**.

### Output:
- Visual representation of each trip on a timeline using **levels** and **lines/arrows** based on logic.

---

## Trip Display Rules

1. **Continued Trip** (e.g., BLR → MAA, MAA → HYD):
   - Display as a **straight line** on **Level 1**.
   - No arrow.

2. **Not Continued Trip** (e.g., BLR → MAA, HYD → BLR):
   - Display as a **straight line with an arrow** on **Level 1**.

3. **Repeated Trip** (e.g., HYB → DEL, HYB → DEL):
   - Display on **Level 2** as a **curved line**.

---

## Technologies Used

- Angular 15+
- TypeScript
- HTML & SCSS
- SVG for drawing lines and curves

---

## How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/angular-trip-visualizer.git
   cd angular-trip-visualizer

2. **Install dependencies**

npm install
Run the application

ng serve
Open in Browser Navigate to http://localhost:4200

3. **Folder Structure**
cpp
Copy
Edit
src/
├── app/
│   ├── components/
│   │   └── trip-visualizer/
│   │       ├── trip-visualizer.component.ts
│   │       ├── trip-visualizer.component.html
│   │       ├── trip-visualizer.component.scss
│   └── app.module.ts
├── assets/
└── index.html