# EstateHub

EstateHub is a static real estate management and property listing system designed to help users browse, search, filter, save, and manage property listings.

The system provides a property catalogue for potential buyers and a simple administrative dashboard for managing property listings.

## Live Demo

[View EstateHub Live](https://is-project-2026.github.io/estatehub-151442/)

## Features

### Property Browsing

- Browse available property listings.
- View detailed information about individual properties.
- View property location, type, price, bedrooms, bathrooms, images, and descriptions.

### Search and Filtering

- Search properties by title or location.
- Filter properties by location.
- Filter properties by property type.
- Filter properties using minimum and maximum price ranges.

### Favourites

- Add properties to favourites.
- Remove properties from favourites.
- Prevent duplicate favourites.
- Persist favourites using browser LocalStorage.
- View saved properties on a dedicated favourites page.

### Property Management

- View property statistics from the admin dashboard.
- Add new property listings.
- Validate property submission data.
- Persist administrator-created properties using LocalStorage.
- Delete custom property listings with confirmation.
- Automatically update property statistics.

### Responsive Design

EstateHub is designed to work across:

- Desktop devices
- Tablets
- Mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage
- Git
- GitHub
- GitHub Actions
- GitHub Pages

## Project Structure

```text
estatehub-151442/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── assets/
│   └── images/
│
├── css/
│   └── styles.css
│
├── js/
│   ├── app.js
│   ├── properties.js
│   ├── favourites.js
│   └── admin.js
│
├── index.html
├── properties.html
├── property-details.html
├── favourites.html
├── admin.html
└── README.md

Git Workflow

This project follows a feature-branch workflow.

Development is not committed directly to the main branch. Each feature or task is developed on a separate branch linked to a GitHub Issue.

Example branch naming:
feat/issue-number-short-description
fix/issue-number-short-description
style/issue-number-short-description
docs/issue-number-short-description

Changes are committed using the Conventional Commits specification.

Examples used in this project include:
feat(properties): implement property creation
feat(admin): implement property deletion
style(responsive): improve mobile layouts
ci(pages): configure GitHub Pages deployment
docs(readme): complete project documentation

Feature branches are merged into main through Pull Requests.

CI/CD Deployment

EstateHub uses GitHub Actions to automatically deploy the website to GitHub Pages.

The deployment workflow:

Runs when changes are pushed to main.
Checks out the repository.
Configures GitHub Pages.
Uploads the static website files.
Deploys the website to GitHub Pages.
Project Management

Development was planned and tracked using:

GitHub Milestones
GitHub Issues
GitHub Project Kanban Board

The project is divided into three development milestones:

Foundation & Property Catalogue
Search, Filters & Favourites
Property Management & Deployment
Author

Isaac Irungu

Admission Number: 151442

License

This project was developed as an academic mini-project.