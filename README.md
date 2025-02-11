# 📌 Design Project

[Live Project](https://anastasiia-interior-design.netlify.app/)  
[Figma Design](https://www.figma.com/design/86n1clFmkWrpGlHdaftOH8/Untitled?node-id=0-1&t=u9mnCmfA3vFhOetz-1)

---

## 🚀 Project Overview

This project is a portfolio website for an interior designer, showcasing completed works and offering design services. It features an adaptive layout and supports four languages: **Russian, Ukrainian, English, and German**.

---

## 🔧 Technologies Used

- **React** – Frontend framework
- **React Router** – Navigation between pages
- **SCSS** – Styling
- **i18next** – Multi-language support
- **Yet Another React Lightbox** – Image gallery
- **EmailJS** – Form handling
- **Vite** – Project bundling

---

## 📄 Website Structure

### **1. Header**
- Navigation menu using `react-router-dom`
- Language switcher
- Burger menu for mobile devices

### **2. Home Page**
- **Hero section** with a welcome message and service order button (`Modal` popup)
- **"Best Projects" section** with links to detailed pages
- **About the Designer (About)** section
- **Services section** (displayed as cards)
- **Contact form**

### **3. Projects Page**
- Project filtering by category: "All", "Houses", "Apartments", "Business"
- Project cards linking to details
- Adaptive pagination for mobile and tablet devices

### **4. Project Details Page**
- Detailed project description and completed works
- Image gallery using `Yet Another React Lightbox`

### **5. Services Page**
- List of services with detailed descriptions
- Work showcase slider
- Contact form for inquiries

---

## 📂 Data Structure

Project data is stored in JSON format, containing both general and detailed project information.

### **Example: General Project Data JSON**

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

### **Example: Detailed Project Data JSON**

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

## 🌍 Multilingual Support

The project supports **Russian, Ukrainian, English, and German**.

### **Technologies Used:**
- **i18next** – Core internationalization library
- **react-i18next** – React integration for i18next
- **i18next-browser-languagedetector** – Auto-detects user language

All translations are stored in separate JSON files, making them easily expandable and editable.

---

## ⚙️ Custom Hooks

### **1. useFetchProjects (Fetching Project Data)**

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

### **2. useWindowSize (Detecting Screen Size)**

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

The project is fully responsive and adapted for various devices, including PCs, tablets, and mobile phones.

It follows a **mobile-first** approach, meaning styles are initially developed for mobile devices and then scaled up for larger screens.

---

## 📩 Contact Forms & EmailJS Integration

The project utilizes **EmailJS** for handling form submissions.

### **Forms Included:**
- **Modal Form** – Service order request
- **Contact Form** – Feedback from potential clients

### **Example: Handling Form Submission**

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

---

## 🌐 Deployment

The project is deployed on **Netlify** for easy access and scalability.

[Live Project](https://anastasiia-interior-design.netlify.app/)

