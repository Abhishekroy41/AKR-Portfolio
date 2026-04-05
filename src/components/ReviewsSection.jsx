import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, UserCircle } from 'lucide-react';
import { initialReviews } from '../data/portfolioData';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });
  const [reviewFormResult, setReviewFormResult] = useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      setReviewFormResult("Please fill out all fields.");
      return;
    }
    const newEntry = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([newEntry, ...reviews]);
    setNewReview({ name: "", comment: "", rating: 5 });
    setReviewFormResult("Thank you for your review!");
    setTimeout(() => setReviewFormResult(""), 3000);
  };

  return (
    <section id="reviews" className="reviews-section">
      <motion.div
        className="reviews-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="center-title">
          <h2 className="section-title">Reviews & <span>Ratings</span></h2>
          <p className="section-subtitle">What do you think about my portfolio? I'd love to hear your feedback!</p>
        </div>

        <div className="reviews-layout">
          <div className="reviews-form-container premium-card">
            <h3 className="review-card-title">Leave a Review</h3>
            <form className="review-form" onSubmit={handleReviewSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  required
                />
              </div>
              <div className="rating-select">
                <span className="rating-label">Rating:</span>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={28}
                      className={star <= newReview.rating ? 'star-filled' : 'star-empty'}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      fill={star <= newReview.rating ? "currentColor" : "none"}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </div>
              </div>
              <div className="input-group">
                <textarea
                  placeholder="Your Comment..."
                  rows="4"
                  className="contact-input contact-textarea"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" className="primary-btn submit-review-btn">Post Review</button>
              {reviewFormResult && (
                <p className={`form-result-message ${reviewFormResult.includes("Thank you") ? 'success' : 'error'}`}>
                  {reviewFormResult}
                </p>
              )}
            </form>
          </div>

          <div className="reviews-list">
            <h3 className="review-list-title">Recent Feedback</h3>
            <div className="reviews-scroll">
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  className="review-item premium-card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="review-header">
                    <div className="review-user">
                      <UserCircle size={42} className="user-avatar" />
                      <div className="review-user-info">
                        <strong>{review.name}</strong>
                        <span className="review-date">{review.date}</span>
                      </div>
                    </div>
                    <div className="review-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill={star <= review.rating ? "#f59e0b" : "none"}
                          color={star <= review.rating ? "#f59e0b" : "rgba(255, 255, 255, 0.1)"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReviewsSection;
