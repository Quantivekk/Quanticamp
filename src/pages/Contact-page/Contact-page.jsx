import React from 'react';
import './Contact-page.css';

// Main Contact Page Component for QuantiCamp
function ContactPage() {
	return (
		<div className="contact4-container">
			{/* Hero Section with main heading and contact prompt */}
			<section className="hero4-section">
				<div className="hero4-content">
					<h1 className="hero4-title">We're here to help.</h1>
					<p className="hero4-subtitle">
						Visit our FAQ page to find answers, about us an email, send us a WhatsApp message, or visit one of our physical locations.
					</p>
				</div>
			</section>

			{/* Contact Options Section with 4 cards */}
			<section className="features4-section">
				<div className="features4-grid">
					{/* Feature Card 1: FAQ Page */}
					<div className="feature4-card">
						<div className="feature4-icon">❓</div>
						<h3 className="feature4-heading">Visit FAQ page</h3>
						<p className="feature4-description">
							Most of your pressing questions already been answered.
						</p>
					</div>

					{/* Feature Card 2: Email Contact */}
					<div className="feature4-card">
						<div className="feature4-icon">✉️</div>
						<h3 className="feature4-heading">Send an email</h3>
						<p className="feature4-description">
							Expect a response from one of our staff within 2 to 3 hours.
						</p>
					</div>

					{/* Feature Card 3: WhatsApp Contact */}
					<div className="feature4-card">
						<div className="feature4-icon">💬</div>
						<h3 className="feature4-heading">Hello! WhatsApp</h3>
						<p className="feature4-description">
							You can connect with us if you are already on WhatsApp.
						</p>
					</div>

					{/* Feature Card 4: Physical Location */}
					<div className="feature4-card">
						<div className="feature4-icon">📍</div>
						<h3 className="feature4-heading">Visit our School</h3>
						<p className="feature4-description">
							No 42, Montgomery Road, Yaba Lagos, Nigeria.
						</p>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="cta4-section">
				<div className="cta4-content">
					<h2 className="cta4-title">Ready to transform your career?</h2>
					<a href="/courses" className="cta4-button">Browse Courses</a>
				</div>
			</section>
		</div>
	);
}

export default ContactPage;