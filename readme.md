# 📁 File Organizer

A simple and efficient command-line tool built with **Node.js** to help you organize cluttered directories by automatically categorizing files based on their extensions. It also provides a tree view of your folder structure.

## Features

- 📂 Organizes files into folders like `media`, `documents`, `archives`, etc.
- 🌲 Displays folder hierarchy in a clean tree structure
- 🧭 Easy to use via command line
- 🧹 Helps keep your file system tidy and navigable
- 💡 No external dependencies — uses only Node.js core modules

## Technologies Used

- **Node.js**
- JavaScript (ES6)
- Built-in Node.js modules:
  - `fs` for file operations
  - `path` for path manipulation
  - `process` for reading CLI arguments


## Project Structure

```bash
FileOrganizer/
├── main.js         # Entry point that handles CLI input and routes commands
├── commands/
│   ├── help.js     # Displays list of available commands
│   ├── organize.js # Organizes files into category folders
│   └── tree.js     # Displays folder structure as a tree
├── utility/
│   └── fileTypes.js # Contains file extension mappings to categories
└── README.md       # This file
```

## Supported File Categories

| Category     | File Extensions                            |
| ------------ | ------------------------------------------ |
| Media        | `.mp4`, `.mp3`, `.jpg`, `.png`, `.jpeg`    |
| Archives     | `.zip`, `.rar`, `.tar`, `.7z`, `.gz`       |
| Documents    | `.pdf`, `.docx`, `.txt`, `.xlsx`, `.pptx`  |
| Applications | `.exe`, `.dmg`, `.pkg`, `.deb`             |
| Others       | Any file not matching the above categories |


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/chitwan6804/FileOrganizer.git
cd FileOrganizer
```

### 2. Run the Tool

```bash
node main.js <command> <path_to_directory>
```

## 🧪 Available Commands

| Command    | Description                                    |
| ---------- | ---------------------------------------------- |
| `help`     | Lists all available commands and their usage   |
| `organize` | Organizes files in the given directory by type |
| `tree`     | Displays folder structure in tree view         |

### Examples

```bash
# View help
node main.js help

# Organize files in Downloads
node main.js organize C:\Users\YourName\Downloads

# Show tree structure of Downloads
node main.js tree C:\Users\YourName\Downloads
```

## Example Output (Tree Command)

```bash
C:\Users\YourName\Downloads
├── organized_files
│   ├── media
│   │   └── video.mp4
│   ├── documents
│   │   └── resume.pdf
│   └── archives
│       └── files.zip
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Contributions

Contributions, issues, and suggestions are welcome!
Feel free to fork this repo, make improvements, and submit a pull request.
