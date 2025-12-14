# Physical AI & Humanoid Robotics — Docusaurus Textbook

## Overview

This repository contains a **Docusaurus-based AI-native textbook** developed as part of **Hackathon I: Create a Textbook for Teaching Physical AI & Humanoid Robotics**.

The project’s objective is to design, author, and publish a full technical course textbook that teaches **Physical AI, Embodied Intelligence, and Humanoid Robotics**, and to enhance the learning experience with an **integrated AI-powered RAG chatbot**.

This book is intended to be deployed on **GitHub Pages** and consumed as an interactive learning portal where readers can learn, search, ask questions, personalize content, and (optionally) translate chapters into Urdu.

---

## Hackathon Context

This project is part of the Panaversity Hackathon initiative, aligned with the broader vision of building **AI-native technical textbooks** supported by intelligent agents.

High-performing submissions may be invited to:

* Present live on Zoom
* Join the Panaversity core team
* Contribute as authors, instructors, or startup founders within the Panaversity ecosystem

---

## Core Deliverables

### 1. AI / Spec-Driven Book Creation

* Textbook authored using **Docusaurus**
* Content written in **Markdown / MDX**
* Spec-driven workflow using **Spec-Kit Plus**
* Assisted authoring using **Claude Code**
* Deployed as a static site on **GitHub Pages**

### 2. Integrated RAG Chatbot

* Embedded **Retrieval-Augmented Generation (RAG) chatbot** inside the book
* Capable of answering questions based on:

  * Entire book content
  * User-selected text only
* Technology stack:

  * OpenAI Agents / ChatKit SDKs
  * FastAPI backend
  * Neon Serverless Postgres
  * Qdrant Cloud (Free Tier)

### 3. Bonus Capabilities (Optional)

* Reusable intelligence via **Claude Code Subagents & Agent Skills**
* User authentication (Signup / Signin) using **Better Auth**
* Personalized chapter content based on user background
* One-click **Urdu translation** per chapter

---

## Course Covered by This Book

### Course Title

**Physical AI & Humanoid Robotics**

### Focus

* AI systems operating in the **physical world**
* Embodied intelligence bridging digital cognition and physical action
* Designing, simulating, and deploying humanoid robots

### Key Technologies

* ROS 2
* Gazebo & Unity
* NVIDIA Isaac Sim & Isaac ROS
* Vision-Language-Action (VLA)
* Large Language Models for robotics

---

## Module Structure

1. **The Robotic Nervous System (ROS 2)**

   * Nodes, Topics, Services, Actions
   * Python agents with `rclpy`
   * URDF for humanoid robots

2. **The Digital Twin (Gazebo & Unity)**

   * Physics simulation
   * Sensors: LiDAR, Depth Cameras, IMUs
   * Human–robot interaction

3. **The AI-Robot Brain (NVIDIA Isaac™)**

   * Isaac Sim & synthetic data
   * Isaac ROS and hardware-accelerated VSLAM
   * Navigation and path planning

4. **Vision-Language-Action (VLA)**

   * Voice-to-action using Whisper
   * LLM-based cognitive planning
   * Capstone: Autonomous humanoid robot

---

## Learning Outcomes

By completing this textbook/course, learners will be able to:

* Understand Physical AI and embodied intelligence
* Build ROS 2-based robotic systems
* Simulate robots in Gazebo and Unity
* Develop perception pipelines using NVIDIA Isaac
* Integrate LLMs into robotic decision-making
* Design humanoid robots for natural interaction

---

## Technology Stack

* Documentation Framework: **Docusaurus**
* Language: Markdown / MDX
* Frontend: Docusaurus Classic Theme + React components
* Backend (Chatbot): FastAPI
* Vector DB: Qdrant Cloud
* Database: Neon Serverless Postgres
* AI SDKs: OpenAI Agents / ChatKit
* Deployment: GitHub Pages

---

## Project Structure

```
project-root/
├── docs/                # Book chapters
├── blog/                # Optional blog posts
├── src/                 # Custom React components
├── static/              # Images and assets
├── rag/                 # RAG chatbot backend
├── docusaurus.config.js # Docusaurus configuration
├── sidebars.js          # Book sidebar structure
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```
## Screenshots
![alt text](image.png)

## Local Development

### Prerequisites

* Node.js (LTS)
* npm
* Git

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run start
```

The site will be available at:

```
http://localhost:3000
```

---

## Build & Deployment

### Build Static Site

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

Ensure `url`, `baseUrl`, `organizationName`, and `projectName` are correctly configured in `docusaurus.config.js`.

---

## Submission Checklist

* Public GitHub repository
* Deployed book link (GitHub Pages or Vercel)
* Demo video (≤ 90 seconds)
* WhatsApp contact number


## License

MIT License

## Maintainer

**noorthedev**
