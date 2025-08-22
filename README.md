# Post Page Application

A React application that allows users to create new posts (questions or articles) with conditional rendering based on the selected post type.

## Features

- **Post Type Selection**: Choose between "Question" or "Article" using radio buttons
- **Conditional Rendering**: Different form fields appear based on the selected post type
- **Question Form**: Includes Title, Problem Description, and Tags fields
- **Article Form**: Includes Title, Abstract, Article Text, and Tags fields
- **Responsive Design**: Clean, modern UI using Semantic UI React
- **Modular Components**: Each component has a single responsibility

## Components

- `PostPage.js` - Main component with post type selection and conditional rendering
- `QuestionForm.js` - Form for creating questions
- `ArticleForm.js` - Form for creating articles
- `PostPage.css` - Styling for the main page
- `QuestionForm.css` - Styling for the question form
- `ArticleForm.css` - Styling for the article form

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. Select the post type (Question or Article) using the radio buttons
2. Fill in the appropriate form fields that appear based on your selection
3. Click the "Post" button (functionality to be implemented in future tasks)

## Technologies Used

- React 18.2.0
- Semantic UI React
- CSS3
- Create React App
