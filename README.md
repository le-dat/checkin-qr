# Client Check-In Application

This is a client check-in application built with React, TypeScript, and Tailwind CSS. It allows users to check in to an event by scanning a QR code and view the list of checked-in users.

## Features

- QR code scanning for event check-in
- Display list of checked-in users
- User detail view
- Page transitions and animations using Framer Motion

## Project Structure

## Getting Started

```sh
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│ ├── App.tsx
│ ├── assets/
│ ├── components/
│ │ ├── animations/
│ │ │ ├── FadeIn.tsx
│ │ │ ├── PageTransition.tsx
│ │ │ ├── SlideIn.tsx
│ │ ├── CheckInList.tsx
│ │ ├── CheckInScanner.tsx
│ │ ├── TabNavigation.tsx
│ ├── index.css
│ ├── main.tsx
│ ├── pages/
│ │ ├── Error.tsx
│ │ ├── Home.tsx
│ │ ├── Loading.tsx
│ │ ├── NotFound.tsx
│ │ ├── UserDetail.tsx
│ ├── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Prerequisites

Make sure you have the following installed:

- Node.js (v20)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/client-checkin.git
cd client-checkin

npm install

```

2. 🏁 Run app in your browser

```sh
npm run dev
```

### Linting

To lint the code, run:

```sh
npm run lint
```

Feel free to customize the content as needed.

## 📝 Version

0.1.0

## Author

Le Quoc Dat. See the [Website Portfolio](https://ledat-portfolio.vercel.app/) for details.
