# **CISC3140 Lab 4**
<!-- Shields -->
![GitHub repo size](https://img.shields.io/github/repo-size/ogre2/cisc3140_lab4)
![Code size](https://img.shields.io/github/languages/code-size/ogre2/cisc3140_lab4)
![GitHub contributors](https://img.shields.io/github/contributors/ogre2/cisc3140_lab4)
![Node version](https://img.shields.io/static/v1?label=node&message=v16.15.0&color=success)
![npm version](https://img.shields.io/static/v1?label=npm&message=v8.8.0&color=orange)
![License](https://img.shields.io/static/v1?label=license&message=Apache%20v2.0&color=blue)
![GitHub stars](https://img.shields.io/github/stars/ogre2/cisc3140_lab4?style=social)
<!-- ![GitHub forks](https://img.shields.io/github/forks/ogre2/cisc3140_lab4?style=social) -->

CIS3140 Lab 4 is a `<Node/Express API>` that uses SQL and JavaScript to enable users to view  
and update data about cars that is stored in a database. You can view the API here: **[https://cisc3140lab4.herokuapp.com/](https://cisc3140lab4.herokuapp.com)**.
***

## **Prerequisites**

Before you begin, make sure you have met the following prerequisites:
- You have installed `<Node>` version 14.15.4 and above.
  - You can download the latest LTS version here: **[https://nodejs.org/en/](https://nodejs.org/en/)**.
- You have installed `<npm>` version 8.8.0 and above.
  - You can download the latest version here: **[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)**.
- You have installed the latest version of Git.
  - You can download Git here: **[https://git-scm.com/downloads](https://git-scm.com/downloads)**.
***

## **Installing CIS3140 Lab 4**

To download the `<CIS3140 Lab 4>` API repo, follow the following instrunctions for your OS.

### **1) Using Git** (Recommended)
Run the following command in your terminal/CLI to clone the API repo.
```
git clone https://github.com/ogre2/cisc3140_lab4.git
```

### **2) Windows**
If you're a Windows OS user, you can install the CISC3140 Lab 4 project using Git by following the instrunctions above.  
You can also install the project using the **[latest release version](https://github.com/ogre2/cisc3140_lab4/releases)** and downloading the zipped source code folder.

### **3) Linux and MacOS**
If you're a Linux or MacOS user, with the aforementioned prerequisites installed and running on your machine. You can employ the Git method  
to install/clone the repo locally on your machine and test the API.

You can also install the project using the **[latest release version](https://github.com/ogre2/cisc3140_lab4/releases)** and downloading the `<tar.gz>` folder.  
Then in your terminal run the following command to unzip and extract
```
tar -xzf tarfile
```

### **4) Web Browser**
Alternatively, you can view the API on your browser by visiting **[https://cisc3140lab4.herokuapp.com/](https://cisc3140lab4.herokuapp.com/)**.  
Note: The API's HTTP requests are limited to `<GET>` requests only, this is due to the database solution employed in the API being SQLite.  
SQLite is a serverless database solution, and therefor changes to the database done through HTTP requests such as `<POST>` or `<PATCH>` cannot work  
on the web version. It is recommended that you install and run the project **locally** to take advantage of all created endpoints.

## **Launching/Using API**
1. Using your terminal/CLI, navigate to the **cisc3140_lab4-vX.X.X** folder.
2. Using your terminal/CLI, run the `<npm install>` command to automatically download all dependencies for the project.
3. Using your terminal/CLI, run the `<npm start>` command to launch the API server.
   1. Your console will log '**<span style="color:#15a766">server is running on port:4000</span>**', to indicate that the API has launched successfully.
   2. Your console will log '**<span style="color:#3f70b8">Connected to database...</span>**', to indicate that the API has successfully connected to the database.
4. On your browser, navigate to `<localhost:4000>`.
5. You should see `<{"message":"Ok"}>`, which will indicate that the API is working.
6. Visit the various API end points at your leisure.
   1. View the **[API documentation](https://documenter.getpostman.com/view/15181657/UyrHftTK)** for details on endpoints.
***

## **Contributing to this project**

To contribute to `<CISC3140 Lab 4>`, follow these steps:
- Fork this repository.
- Create a branch: git checkout -b <branch_name>.
- Make your changes and commit them: `<git commit -m <commit_message>>`.
- Push to the original branch: `<git push origin cisc3140_lab4 main>`.
- Create the pull request.
  - View the GitHub documentation on **[creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)**.
***

## **Known Bugs**

- When updating an entry's fields such as `racer_turbo` or `car_overall` with a `PATCH` request, the score does not update to reflect the changes.
- `POST` and `PATCH` requests do not work on the web version of the API.
***
## **Contributors**

Thanks to the following people who have contributed to building this API:
- **[@ogre2](https://github.com/ogre2/)** 💪

***

## **License**

This project uses the following license: **[Apache License 2.0](https://github.com/Olivr/app-node-js/blob/main/LICENSE)**.