# AI Product Ads Generator

[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![ImageKit](https://img.shields.io/badge/ImageKit-121212?logo=imagekit&logoColor=39FF14)](https://imagekit.io/)
[![Gemini API](https://img.shields.io/badge/Gemini%20API-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

A cutting-edge AI-powered web application that generates high-quality product advertisements using modern technologies including **Next.js 14**, **React**, **TypeScript**, **Firebase**, **ImageKit**, and **Google Gemini API**.

---

## ✨ Features

- **🤖 AI-Generated Content** – Leverage Google Gemini API to create compelling product descriptions and advertisement copy
- **🖼️ Advanced Image Processing** – Utilize ImageKit for optimized image delivery, transformation, and CDN capabilities
- **🔐 Secure Authentication** – Firebase Authentication with comprehensive user management
- **💾 Real-time Database** – Firestore integration for seamless data storage and retrieval
- **⚡ Modern Architecture** – Built with Next.js 14 App Router, React Server Components, and TypeScript
- **📱 Responsive Design** – Fully optimized for desktop, tablet, and mobile devices
- **🎨 Professional UI/UX** – Clean, modern interface with intuitive user experience

---

## 🛠️ Technology Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** – React framework with App Router
- **[React 18](https://react.dev/)** – Component-based UI library
- **[TypeScript](https://www.typescriptlang.org/)** – Type-safe JavaScript

### Backend & Services
- **[Firebase](https://firebase.google.com/)** – Authentication, Firestore database, and hosting
- **[ImageKit](https://imagekit.io/)** – Image optimization and delivery CDN
- **[Google Gemini API](https://ai.google.dev/)** – Advanced AI text generation

### Deployment
- **[Vercel](https://vercel.com/)** – Recommended deployment platform

---

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js 18.0 or higher
- npm or yarn package manager
- Firebase project with Authentication and Firestore enabled
- ImageKit account with API keys
- Google Gemini API key

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-product-ads-generator.git
cd ai-product-ads-generator
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory and add your credentials:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# ImageKit Configuration
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key

# AI Configuration
GEMINI_API_KEY=your_gemini_api_key
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

### 5. Open Application

Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 🔧 Usage

1. **Authentication**: Sign in using Firebase Authentication
2. **Image Upload**: Upload product images with automatic optimization via ImageKit
3. **Product Details**: Enter comprehensive product information
4. **AI Generation**: Generate professional ad copy using Google Gemini AI
5. **Management**: Save, edit, and organize your generated advertisements

---

## 📁 Project Structure

```
ai-product-ads-generator/
├── src/
│   ├── app/                 # Next.js 14 App Router pages
│   ├── components/          # Reusable React components
│   │   ├── ui/             # UI components (buttons, forms, etc.)
│   │   └── layout/         # Layout components
│   ├── lib/                # Utility functions and configurations
│   │   ├── firebase.ts     # Firebase configuration
│   │   ├── imagekit.ts     # ImageKit setup
│   │   └── gemini.ts       # Gemini API integration
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   └── styles/             # Global styles and Tailwind config
├── public/                 # Static assets
├── .env.local             # Environment variables (create this)
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md             # Project documentation
```

---

## 🔒 Security & Privacy

- **Environment Variables**: All sensitive API keys are stored securely in environment variables
- **Firebase Security Rules**: Configured to allow read access to all users and write access only to authenticated users
- **Data Protection**: User data is encrypted and stored securely in Firebase Firestore
- **Image Security**: ImageKit provides secure image transformations and delivery

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Environment Variables**: Add all environment variables in Vercel dashboard
3. **Deploy**: Automatic deployment on every push to main branch

```bash
# Alternative: Deploy using Vercel CLI
npm install -g vercel
vercel --prod
```

### Deploy to Other Platforms

The application can also be deployed to:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 🐛 Issues & Support

- **Bug Reports**: [Create an issue](https://github.com/your-username/ai-product-ads-generator/issues)
- **Feature Requests**: [Submit a feature request](https://github.com/your-username/ai-product-ads-generator/issues)
- **Documentation**: Check our [Wiki](https://github.com/your-username/ai-product-ads-generator/wiki)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google Gemini Team** for providing advanced AI capabilities
- **Firebase Team** for robust backend services
- **ImageKit Team** for excellent image optimization tools
- **Next.js Team** for the amazing React framework
- **Vercel Team** for seamless deployment experience

---

## 📊 Project Status

- **Version**: 1.0.0
- **Status**: Active Development
- **Last Updated**: January 2025

---

*Built with ❤️ by Shahriar Ferdous*
