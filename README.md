# 🧠 Ahmed-Deaf-11: Real-Time ASL Recognition Ahmed-Deaf-11

![Banner](./Ahmed-Deaf-11.png)

[![Release](https://img.shields.io/github/v/release/CodeWithInferno/Ahmed-Deaf-11)](https://github.com/CodeWithInferno/Ahmed-Deaf-11/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 🚀 Overview

Ahmed-Deaf-11 is a cross-platform American Sign Language (ASL) recognition platform that:

* 🕒 **Detects ASL signs in real-time** via your device camera
* 📱 **Runs on mobile devices** (iOS & Android) using React Native + Expo
* 🤖 **Processes frames** on a Python Flask backend with MediaPipe, OpenCV, and trained ML models
* 🏗️ **Dockerized** for one‑command deployment (development or production)

> 🎥 **Model Demo**: [Watch proof video](./Model_proof.mp4)

---

## 📋 Table of Contents

- [🧠 Ahmed-Deaf-11: Real-Time ASL Recognition Ahmed-Deaf-11](#-Ahmed-Deaf-11)-time-asl-recognition-Ahmed-Deaf-11)
  - [🚀 Overview](#-overview)
  - [📋 Table of Contents](#-table-of-contents)
  - [🔥 Features](#-features)
  - [🗂 Project Structure](#-project-structure)
  - [⚙️ Getting Started](#️-getting-started)
    - [Prerequisites](#prerequisites)
    - [Local Development](#local-development)
    - [🐳 Docker Deployment](#-docker-deployment)
  - [🖼️ Assets](#️-assets)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🤝 Contributing](#-contributing)
  - [📖 License](#-license)
  - [📞 Contact](#-contact)

---

## 🔥 Features

* **Real-Time Recognition**: 30+ frames per second hand detection with MediaPipe
* **Multiple Strategies**:

  * Keypoint-based classification
  * CNN-powered image classification
  * Optional YOLOv5 object detection pipeline
* **Session Recording**: Start/stop sessions, save raw frames, export metadata
* **Cross-Platform UI**: Shared codebase for iOS, Android, and Web via Expo
* **Scalable Backend**: Containerized Flask API, ready for production with Gunicorn + Nginx

---

## 🗂 Project Structure

```
Ahmed-Deaf-11/
├── UI_expo/           # React Native (Expo) mobile app
│   ├── components/    # UI & camera overlay
│   ├── services/      # API wrappers & data handling
│   └── app.json       # Expo config
├── server/            # Flask backend API
│   ├── App.py         # Main application
│   ├── recordings/    # Stored session data
│   └── requirements.txt
├── models/            # Pretrained ML models & label files
│   ├── random_forest_model.pkl
│   └── label_classes.txt
├── deploy/            # Docker & Nginx configs
│   └── docker-compose.yml
├── assets/
│   ├── Ahmed-Deaf-11.png       # README banner
│   ├── ASL Alphabet.jpg    # ASL chart reference
│   └── Model_proof.mp4     # Demo video
├── docs/              # (Optional) Extended documentation
├── Scripts/           # Training & preprocessing scripts
└── README.md          # This file
```

---

## ⚙️ Getting Started

### Prerequisites

* [Node.js & npm](https://nodejs.org/) (v14+)
* [Python 3.8+](https://www.python.org/)
* [Docker & Docker Compose](https://docs.docker.com/)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/CodeWithInferno/Ahmed-Deaf-11.git
   cd Ahmed-Deaf-11
   ```

2. **Backend**

   ```bash
   cd server
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   python App.py
   ```

   The API will run at: `http://localhost:5050`

3. **Mobile App**

   ```bash
   cd UI_expo
   npm install
   npx expo start
   ```

   * Open the Expo Go app on your phone and scan the QR code, or launch on an emulator.

---

### 🐳 Docker Deployment

1. **Start with Docker Compose**

   ```bash
   docker-compose up --build -d
   ```
2. **Verify services**

   ```bash
   docker-compose ps
   ```
3. **Access UI** on your LAN at `http://<your-host-ip>:19006`

---

## 🖼️ Assets

* **Banner**: `./Ahmed-Deaf-11.png`

* **ASL Alphabet Chart**:

  ![ASL Alphabet](./ASL%20Alphabet.jpg)

* **Model Proof Video**:

  <video width="400" controls>
    <source src="./Model_proof.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>

---

## 🛠️ Tech Stack

| Layer      | Technology                                         |
| ---------- | -------------------------------------------------- |
| Frontend   | React Native (Expo)                                |
| Backend    | Python, Flask, Flask-CORS                          |
| CV/ML      | MediaPipe Hands, OpenCV, scikit-learn (RF), YOLOv5 |
| Deployment | Docker, Docker Compose, Gunicorn                   |
| Platform   | Android, iOS & Web (Progressive)                   |

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add YourFeature"`)
4. Push (`git push origin feature/YourFeature`)
5. Open a Pull Request

For major changes, open an issue first to discuss what you’d like to change.

---

## 📖 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## 📞 Contact

* GitHub Issues: [codewithinferno/Ahmed-Deaf-11](https://github.com/CodeWithInferno/Ahmed-Deaf-11/issues)
* Discussions: [GitHub Discussions](https://github.com/CodeWithInferno/Ahmed-Deaf-11/discussions)
* Email: [Ahmed01095956350@gmail.com](mailto:Ahmed01095956350@gmail.com)

---


> Made with ❤️ by Raahil Desai, Pratham Patel & Tashvi Patel

