# REM Waste - Skip Hire Booking Platform

![REM Waste Logo](./public/logo.png)

## Overview

REM Waste is a modern, user-friendly web application that streamlines the process of hiring skips for waste disposal. Built with React and Framer Motion, it provides an intuitive interface for customers to select skip sizes and complete their booking.

## Features

- **Interactive Skip Selection**: Visually appealing interface for selecting different skip sizes
- **Smooth Animations**: Engaging user experience with Framer Motion animations
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop devices
- **Multi-step Booking Process**: Guided workflow from postcode entry to payment
- **Visual Feedback**: Clear indicators for selected items and completion status

## Tech Stack

- **React**: Frontend UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React
- **Vite**: Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/rem-waste.git
   cd rem-waste
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```bash
rem-waste/
├── public/                  # Static assets
│   ├── logo.png             # Logo image
│   └── ...                  # Other public assets
├── src/
│   ├── components/          # Reusable components
│   ├── pages/               # Page components
│   ├── styles/              # Global styles
│   ├── App.tsx              # Main app component
│   └── index.tsx            # Entry point
├── .gitignore               # Git ignore file
├── package.json             # npm package configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Contributing

We welcome contributions to REM Waste! To get started, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Open a pull request

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Vite](https://vitejs.dev/) - For fast development and builds
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS styling
