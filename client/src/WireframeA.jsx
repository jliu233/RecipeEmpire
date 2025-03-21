import React from "react";
import EmailSignup from "./EmailSignup";
import heroImage from "./assets/hero-image.png";

export default function WireframeA({ variant }) {
  return (
    <div className="bg-blue-50 text-gray-800 min-h-screen">
      <header className="bg-white p-4 shadow text-xl font-bold">Recipe Empire</header>
      <main className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Save your home planet starting from this meal</h1>
        <p className="mb-6">Join us and have early access to your planet-friendly recipes!</p>
        <img 
          src={heroImage} 
          style = {{width: "100%"}}
          alt="Food and Earth" 
        />
        <EmailSignup variant={variant} />
      </main>
      <footer className="bg-gray-200 p-4 text-sm text-center">
        © 2025 TCUS | About | Contact | Privacy
      </footer>
    </div>
  );
}
