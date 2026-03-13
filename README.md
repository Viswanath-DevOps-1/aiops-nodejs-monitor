# AI Ops Log Monitoring for Node.js (Open Source)

AI-powered log monitoring system for Node.js microservices running on PM2.

This project detects:

- Error spikes
- Service health degradation
- Log anomalies
- Real-time incidents

Alerts are automatically sent to Slack.

Built using fully open-source tools.

---

# Architecture

PM2 Logs
/home/admin/.pm2/logs
        ↓
Node.js Log Watcher
        ↓
Log Parser
        ↓
Error Spike Detection
        ↓
Service Health Scoring
        ↓
Anomaly Detection (Python ML)
        ↓
Slack Alerts

---

# Features

Real-time PM2 log monitoring

Error spike detection

Service health scoring

Log anomaly detection

Slack alert integration

Multi-service monitoring

Lightweight and production ready

---

# Tech Stack

Node.js

PM2

Python

Scikit-learn

Chokidar

Axios

Slack Webhooks

All components are open source.

---

# Installation

Clone the repository

git clone https://github.com/yourname/aiops-nodejs-monitor.git

cd aiops-nodejs-monitor

Install dependencies

npm install

---

# Configure Environment

Create .env file

cp .env.example .env

Edit and add your Slack webhook

SLACK_WEBHOOK=https://hooks.slack.com/services/XXXXX

---

# Run Log Monitor

node monitor.js

Or run with PM2

pm2 start ecosystem.config.js

---

# Example Slack Alert

🚨 AIOps Alert

Service: app-workflow-api  
Issue: RabbitMQ connection timeout

Error spike detected: 22 errors in last minute

---

# Anomaly Detection (Optional AI)

Install Python dependencies

pip install scikit-learn numpy

Run anomaly detection service

python ai/anomaly.py

The AI model detects abnormal log patterns and alerts automatically.

---

# Folder Explanation

config

Application configuration files

services

Core monitoring logic

ai

Machine learning anomaly detection

utils

Helper utilities

monitor.js

Main application entry

---

# Use Cases

DevOps log monitoring

Microservice observability

AIOps experimentation

MLOps learning projects

Production Node.js monitoring

---

# Future Improvements

Grafana dashboards

Prometheus metrics

Kubernetes log monitoring

Root cause detection

AI-based incident prediction

---

# License

MIT License

Open source and free to use.

---

# Author

DevOps / AIOps Project

Built for learning AI infrastructure and modern DevOps monitoring.
