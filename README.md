---

<div align="left" style="position: relative;">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>DATE-QUOTE-USING-ESP</h1>
<p align="left">
	<em><code>A lightweight Node.js and Socket.IO application to control an ESP display for showing the current time and random quotes.</code></em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/last-commit/root2j/Date-Quote-using-ESP?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/root2j/Date-Quote-using-ESP?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/root2j/Date-Quote-using-ESP?style=default&color=0080ff" alt="repo-language-count">
</p>
</div>
<br clear="right">

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

<code>A lightweight application that leverages Node.js, Express, and Socket.IO to control an ESP display. Date-Quote-using-ESP enables an ESP8266 device to dynamically display either the current time or a random quote, based on real-time commands sent via a simple web interface.</code>

---

##  Features

- **Real-Time Communication:** Utilizes Socket.IO for instant command transmission between the web interface and the ESP device.
- **Minimalistic Frontend:** A clean and straightforward HTML interface with buttons to trigger display commands.
- **Express Server:** Serves static files and API endpoints, facilitating both web and ESP interactions.
- **Easy Integration:** Designed for seamless integration with ESP8266 devices to display dynamic content.

---

##  Project Structure

```sh
└── Date-Quote-using-ESP/
    ├── frontend
    │   └── index.html
    ├── package-lock.json
    ├── package.json
    └── server.js
```

###  Project Index
<details open>
	<summary><b><code>DATE-QUOTE-USING-ESP/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/root2j/Date-Quote-using-ESP/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>Automatically generated file that locks the versions of project dependencies to ensure consistent installations.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/root2j/Date-Quote-using-ESP/blob/master/package.json'>package.json</a></b></td>
				<td><code>Contains project metadata, dependencies (Express and Socket.IO), and scripts for building and running the application.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/root2j/Date-Quote-using-ESP/blob/master/server.js'>server.js</a></b></td>
				<td><code>Main server file that sets up an Express server and Socket.IO for real-time communication between clients and the ESP device.</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- frontend Submodule -->
		<summary><b>frontend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/root2j/Date-Quote-using-ESP/blob/master/frontend/index.html'>index.html</a></b></td>
				<td><code>Frontend HTML file providing a user interface with buttons to trigger commands for displaying time or a random quote.</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---

##  Getting Started

###  Prerequisites

Before getting started with Date-Quote-using-ESP, ensure your environment meets the following requirements:

- **Runtime:** Node.js (version 12 or above)
- **Package Manager:** npm
- **ESP Device:** An ESP8266 (or compatible) device for receiving display commands (optional for testing the web interface)

###  Installation

Install Date-Quote-using-ESP using one of the following methods:

**Build from source:**

1. Clone the Date-Quote-using-ESP repository:
```sh
❯ git clone https://github.com/root2j/Date-Quote-using-ESP
```

2. Navigate to the project directory:
```sh
❯ cd Date-Quote-using-ESP
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ npm install
```

###  Usage

Run Date-Quote-using-ESP using the following command:

**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ npm start
```

###  Testing

Run the test suite using the following command:

**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ npm test
```
*(Note: A test script may be added in the future as the project evolves.)*

##  Contributing

- **💡 [Submit Pull Requests](https://github.com/root2j/Date-Quote-using-ESP/blob/main/CONTRIBUTING.md)**: Review open PRs and contribute your improvements.

---

##  License

This project is licensed under the **MIT License**. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for full details.
