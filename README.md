# Innovative Diagnosis of Dyslexia at an Early Stage

A web-based screening application designed to help parents and teachers identify potential dyslexia and dyscalculia in children aged 5-8 years through interactive, time-constrained multiple-choice assessments.

## Overview

This application provides a user-friendly interface for administering diagnostic tests using a combination of audio narration, visual stimuli (images), and interactive response selection. The test is designed to be engaging for young children while collecting data for early screening purposes.

## Features

- **Interactive Test Interface** - 20 multiple-choice questions with visual and audio components
- **Student-Friendly Design** - Colorful, child-appropriate UI with large, easy-to-click options
- **Audio Support** - Question narration via audio files for better accessibility
- **Result Tracking** - Records student responses for analysis
- **Quick Setup** - Simple name entry to begin testing

## Tech Stack

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework for routing and middleware
- **EJS** - Template engine for dynamic HTML rendering
- **body-parser** - Middleware for parsing form data

### Frontend
- **HTML/CSS** - Page structure and styling
- **Bootstrap** - Responsive CSS framework
- **JavaScript** - Client-side interactivity (audio playback)

## Project Structure

```
├── server.js              # Main Express server
├── package.json           # Dependencies
├── public/
│   └── bootstrap.min.css  # Bootstrap stylesheet
├── views/
│   ├── home.ejs           # Entry page (student name input)
│   ├── test.ejs           # Main test interface (20 questions)
│   └── results.ejs        # Results display page
└── README.md
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Innovative-Diagnosis-of-Dyslexia-at-an-Early-Stage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   node server.js
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## How It Works

1. **Home Page** - Student enters their name
2. **Test Page** - Presents 20 questions, each with:
   - Audio narration of the question
   - 4 image options to choose from
   - Radio button selection
3. **Results Page** - Displays all selected answers

## Current Limitations & Future Improvements

### Known Issues
- Question text is placeholder ("What is your favourite colour?")
- Answer key only partially defined (6 out of 20 answers)
- Time constraints not yet implemented despite being mentioned in description
- No scoring/diagnostic algorithm implemented
- Results page displays answers without analysis or diagnosis

### Planned Enhancements
- Complete and finalize all 20 test questions with appropriate content
- Implement answer validation and scoring logic
- Add timer functionality for time-constrained testing
- Develop dyslexia/dyscalculia screening algorithm
- Generate diagnostic reports
- Add data persistence (database storage)
- Implement parental/teacher dashboard for viewing results

## Usage Notes

- All test images and audio files should be placed in the `public/` directory
- Currently the application stores limited data (only student name and selected answers)
- Results are shown immediately but not persisted

## License

[Add your license information here]

## Contact & Support

[Add contact information here]
