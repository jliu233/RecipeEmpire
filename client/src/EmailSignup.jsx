import React, { useState } from "react";
import axios from "axios";

function EmailSignup({ variant }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/signup", { email, variant });
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 rounded border border-gray-300 w-64"
          />
          <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Get Early Access
          </button>
        </form>
      ) : (
        <p className="text-green-700 font-semibold">Thanks for signing up!</p>
      )}
    </>
  );
}

export default EmailSignup;
