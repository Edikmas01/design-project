# React + Vite

# 📌 Design Project

## 🚀 Project Description

This project is an interior designer's website with a responsive layout, available in four languages: **Russian, Ukrainian, English, and German**.

---

## 🔧 Technologies

- **React** (Frontend library)
- **React Router** (Navigation between pages)
- **SCSS** (Styling)
- **i18next** (Localization for 4 languages)
- **Yet Another React Lightbox** (Image gallery)
- **EmailJS** (Form data submission)
- **Vite** (Project bundling)

---

## 📄 Pages

### **1. Header**
- Site navigation using `react-router-dom`
- Language switch button
- Burger menu for mobile devices

### **2. Home Page**
- **Hero section** with a greeting and service order button (opens `Modal`)
- **"Best Projects" section** with links to detailed pages
- **About the Designer (About)**
- **Services section** (displayed as cards)
- **Contact form**

### **3. Projects Page**
- Project filtering ("All", "Houses", "Apartments", "Business")
- Project cards with links to detailed information
- Adaptive pagination for mobile devices and tablets

### **4. Project Details Page**
- Project description + completed work
- Image gallery using `Yet Another React Lightbox`

### **5. Services Page**
- List of services + description of each
- Detailed work showcase slider
- Contact form

---

## **Data Structure**

Project data is stored in JSON files containing both general and detailed information.

### **Example of a general JSON file**:
```json
[
  {
    "id": "2",
    "title": "Two-Bedroom Apartment in AVINION",
    "image": "../photo/apartments/apartment-two/blueprints/furniture-plan.png",
    "description": "Redesign project for a two-bedroom apartment...",
    "category": "apartment",
    "rank": false
  }
]
```

### **Example of a detailed JSON file**:
```json
[
  {
    "id": "2",
    "title": "Two-Bedroom Apartment in AVINION",
    "description": "Redesign project for a two-bedroom apartment...",
    "visualizations": [],
    "blueprints": [
      "../photo/apartments/apartment-two/blueprints/as-built-plan.png",
      "../photo/apartments/apartment-two/blueprints/furniture-plan.png"
    ]
  }
]
```

---

## **Multilingual Support**

The project supports four languages: **Russian, Ukrainian, English, and German**.

### **Technologies Used**:
- **i18next** – core internationalization library.
- **react-i18next** – React integration for i18next.
- **i18next-browser-languagedetector** – automatic language detection for users.

All translations are stored in separate JSON files, making them easily expandable and editable.

---

## ⚙️ Custom Hooks

### **1. useFetchProjects** (Fetching project list)
```js
import { useEffect, useState } from "react";

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("api/projects.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return projects;
};
```

### **2. useWindowSize** (Detecting screen size)
```js
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
```

---

## 📱 Responsive Design

The project is adapted for various devices: PC, tablets, and mobile phones.

---

## 📩 Form Handling (EmailJS)

The project uses **EmailJS** for submitting form data:
- **Modal** – service order form.
- **ContactForm** – feedback form.

### **Example of form submission handling**:
```js
then(
  () => {
    setStatus("Message sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  },
  (error) => {
    console.error("Submission error:", error);
    setStatus("Submission error. Please try again later.");
  }
);
```


