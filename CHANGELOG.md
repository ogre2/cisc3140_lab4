# **Changelog**
<!-- Shields -->
![GitHub project](https://img.shields.io/static/v1?label=project&message=cisc3140%20lab4&color=blue)
![GitHub contributors](https://img.shields.io/github/contributors/ogre2/cisc3140_lab4)
![License](https://img.shields.io/static/v1?label=license&message=Apache%20v2.0&color=blue)

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] &mdash; (2022/05/02)
### Added
- Created GET all cars router in `<src/routes/cars.js>`.
- Created GET car by ID router in `<src/routes/cars.js>`.
- Installed `<csvtojson>` dependency.
- Created API database `<src/db/db.sqlite3>`.
- Seeded API database with sample data from submodule.

### Changes
- Issues with `<src/data>` submodule. Re-added to project.
- Enabled cars router in `<src/server.js>` for API use.

## [1.1.0] &mdash; (2022/05/02)
### Added
- Created dedicated `<src/routes>` directory to house different API routers.
- Created `<cars.js>` for the cars router.
- Sample JSON response added to `</api/cars>` endpoint.
- Added the sample data as a git submodule.

### Changes
- Moved index router to dedicated `<index.js>` file under `<src/routes/>`.
- Added db name configuration in the `<src/config/index.js>` file.

## [1.0.1] &mdash; (2022/05/02)
### Added
- Created `<Procfile>`, configured with path to `<server.js>` file.
  - API is now alive on Heroku: [https://cisc3140lab4.herokuapp.com/](https://cisc3140lab4.herokuapp.com/).

## [1.0.0] &mdash; (2022/05/02)
### Added
- Installed dependencies
  - `<Express>` as our Node framework.
  - `<sqlite3>` as our API database solution.
  - `<nodemon>` for server auto-restarting during development.
  - `<dotenv>` for our API environment variables.
  - `<colors>` for console highlighting.
  - `<helmet>` HTTP headers configuration and API security.
- Created `<src>` directory to house API code.
- Created `<src/config>` subdirectory to house API configuration info.
- Created `<server.js>` file for API build.
  - Created test GET request.

### Changes
- Updated [README.md](https://github.com/ogre2/cisc3140_lab4/blob/main/README.md) with more project details.


## [0.0.1] &mdash; (2022/05/02)
### Added
- Initial project build.
- Added `<.gitignore>` file.
- Added GitHub `<LICENSE>` document.
- Added `README.md>`.

[Unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.0.0...HEAD
[1.2.0]: https://github.com/ogre2/cisc3140_lab4/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/ogre2/cisc3140_lab4/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/ogre2/cisc3140_lab4/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/ogre2/cisc3140_lab4/compare/v0.0.1...v1.0.0
[0.0.1]: https://github.com/ogre2/cisc3140_lab4/releases/tag/v0.0.1