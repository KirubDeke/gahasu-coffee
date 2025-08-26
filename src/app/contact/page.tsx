"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCoffee,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitMessage("Failed to send. Please try again.");
    }
  } catch (err) {
    setSubmitMessage("Something went wrong. Try again later.");
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 5000);
  }
};


  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mt-25 mb-6 flex items-center justify-center gap-3">
            Get in Touch <FaCoffee className="text-foreground" />
          </h1>
          <div className="w-24 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="text-xl text-customWhite max-w-3xl mx-auto leading-relaxed">
            Have questions or want to work together? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Contact Information
            </h2>
            <p className="text-lg text-customWhite leading-relaxed">
              Whether you're interested in our coffee, want to collaborate, or
              just want to say hi, here's how you can reach us.
            </p>

            <div className="flex items-start space-x-4 p-4 rounded-lg bg-foreground/10 backdrop-blur-sm">
              <div className="bg-foreground/20 p-3 rounded-full">
                <FaMapMarkerAlt className="text-foreground text-xl" />
              </div>
              <div>
                <p className="font-medium text-foreground">Address:</p>
                <p className="text-customWhite">Hawassa, Ethiopia</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg bg-foreground/10 backdrop-blur-sm">
              <div className="bg-foreground/20 p-3 rounded-full">
                <FaEnvelope className="text-foreground text-xl" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email:</p>
                <p className="text-customWhite">gahasucoffee@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg bg-foreground/10 backdrop-blur-sm">
              <div className="bg-foreground/20 p-3 rounded-full">
                <FaPhone className="text-foreground text-xl" />
              </div>
              <div>
                <p className="font-medium text-foreground">Phone:</p>
                <p className="text-customWhite">+251 911 123 456</p>
                <p className="text-customWhite">+251 911 348 127</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="mt-10 p-6 bg-foreground/15 rounded-2xl border border-foreground/20">
              <h3 className="text-xl font-medium text-foreground mb-3 flex items-center gap-2">
                <FaCoffee className="text-foreground" /> Visit Our Washing
                Station
              </h3>
              <p className="text-customWhite">
                Explore where our coffee journey begins. Visit our washing
                station to see how freshly harvested beans are carefully
                processed, washed, and prepared to bring out the unique flavors
                of Ethiopian coffee.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-customWhite shadow-xl rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-foreground/10"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-foreground/15"></div>

            <h2 className="text-3xl font-semibold text-customBlack mb-8 relative z-10 flex items-center gap-2">
              Send us a message <FaPaperPlane className="text-foreground" />
            </h2>

            {submitMessage && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-customBlack mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-customBlackLighter rounded-lg focus:ring-2 focus:ring-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-customBlack mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-customBlackLighter rounded-lg focus:ring-2 focus:ring-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-customBlack mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-customBlackLighter rounded-lg focus:ring-2 focus:ring-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-foreground text-customWhite font-medium py-3 px-6 rounded-lg hover:bg-foreground/90 transition-colors flex items-center justify-center ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FaPaperPlane className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
