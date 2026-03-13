# AIOps Node.js Log Monitor 🚀

![Node.js](https://img.shields.io/badge/Node.js-18-green)
![PM2](https://img.shields.io/badge/PM2-Process_Manager-blue)
![License](https://img.shields.io/badge/license-MIT-yellow)
![DevOps](https://img.shields.io/badge/DevOps-AIOps-orange)
![Machine Learning](https://img.shields.io/badge/ML-Anomaly_Detection-purple)
![Status](https://img.shields.io/badge/status-active-success)
![GitHub stars](https://img.shields.io/github/stars/Viswanath-DevOps-1/aiops-nodejs-monitor)
![GitHub forks](https://img.shields.io/github/forks/Viswanath-DevOps-1/aiops-nodejs-monitor)
![GitHub issues](https://img.shields.io/github/issues/Viswanath-DevOps-1/aiops-nodejs-monitor)

A lightweight **AIOps log monitoring system** for Node.js microservices running with PM2.

This tool monitors application logs in **real time**, detects **error spikes**, calculates **service health**, performs **machine learning–based anomaly detection**, and sends automated alerts to Slack.

This project demonstrates **DevOps → AIOps → MLOps monitoring architecture using open-source tools**.

---

# Architecture

```
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
ML Anomaly Detection
        ↓
Slack Alert System
```

---

# Features

* Real-time PM2 log monitoring
* Error spike detection
* Service health scoring
* ML-based anomaly detection
* Automated Slack alerts
* Multi-service monitoring
* Lightweight architecture
* Fully open-source implementation

---

# Machine Learning Capabilities

This project includes **basic ML-based anomaly detection** for identifying unusual error patterns.

ML features include:

* Statistical anomaly detection using historical log patterns
* Error spike detection using dynamic thresholds
* Predictive monitoring for abnormal service behaviour
* Early incident detection using log pattern analysis

The system can be extended to integrate with advanced ML pipelines for **predictive incident detection**.

---

# Tech Stack

* Node.js
* PM2
* Chokidar (file watcher)
* Axios (HTTP client)
* Dotenv (environment variables)
* Slack Webhooks
* Simple Statistics (ML anomaly detection)

---

# Project Structure

```
aiops-nodejs-monitor
│
├── config
│   └── config.js
│
├── services
│   ├── logWatcher.js
│   ├── logParser.js
│   ├── spikeDetector.js
│   ├── anomalyDetector.js
│   ├── healthScore.js
│   └── slackNotifier.js
│
├── utils
│   └── logger.js
│
├── monitor.js
├── ecosystem.config.js
├── package.json
├── .env.example
└── README.md
```

---

# Folder Description

### config/

Contains configuration settings such as:

* Log paths
* Slack webhook configuration
* Error pattern rules

### services/

Core monitoring services including:

* **logWatcher.js** → Watches PM2 logs
* **logParser.js** → Parses log entries
* **spikeDetector.js** → Detects error spikes
* **anomalyDetector.js** → ML anomaly detection
* **healthScore.js** → Calculates service health
* **slackNotifier.js** → Sends alerts to Slack

### utils/

Utility helper functions used by the monitoring system.

### monitor.js

Main entry point that starts the monitoring process.

### ecosystem.config.js

Configuration file used by PM2 to run the monitoring service in production.

---

# Installation

Clone the repository

```
git clone https://github.com/Viswanath-DevOps-1/aiops-nodejs-monitor.git
```

Navigate to the project directory

```
cd aiops-nodejs-monitor
```

Install dependencies

```
npm install
```

---

# Environment Configuration

Create environment configuration file

```
cp .env.example .env
```

Edit `.env` and add your Slack webhook URL.

```
SLACK_WEBHOOK=https://hooks.slack.com/services/XXXX/XXXX/XXXX
```

---

# Running the Application

Run using Node.js

```
node monitor.js
```

Run using PM2 (recommended)

```
pm2 start ecosystem.config.js
```

Check running processes

```
pm2 status
```

---

# Example Slack Alert

When an error occurs in logs, Slack receives an alert automatically.

Example alert:

```
🚨 AIOps Alert

Service: app-workflow-api-error.log
Issue: RabbitMQ connection timeout

Error spike detected: 15 errors in last minute
```

---

# Use Cases

* Node.js microservice monitoring
* DevOps log observability
* Incident detection automation
* Learning AIOps concepts
* Infrastructure monitoring experiments
* ML-powered anomaly detection for logs

---

# Future Improvements

Possible enhancements for this project:

* Advanced ML anomaly detection models
* Grafana observability dashboards
* Prometheus metrics integration
* Kubernetes log monitoring
* Root cause analysis
* Predictive incident detection
* AI-based log clustering

---

# License

MIT License

This project is open-source and free to use.

---

# Author

Viswanath Reddy
Senior DevOps Engineer

GitHub
https://github.com/Viswanath-DevOps-1
