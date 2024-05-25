import React, { useState, useEffect } from "react";
import axios from "axios";
import "./review.css"; // Импорт стилей

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:5001/reviews"); // Make sure the port matches your server
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData); // Log to check form submission
    try {
      await axios.post("http://localhost:5001/reviews", formData); // Make sure the port matches your server
      setFormData({ name: "", email: "", message: "" });
      fetchReviews();
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/reviews/${id}`); // Make sure the port matches your server
      fetchReviews();
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <br></br>
      <h2 class="center-text">Напишите свой отзыв</h2>
      <br></br>
      <form onSubmit={handleSubmit} className="reviews__form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="handleSubmit">Добавить</button>
      </form>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <li key={review.id} className="reviews__item">
            <div>
              <strong>{review.name}</strong> - {review.email}: {review.message}
            </div>
            <div>
              <button onClick={() => handleDelete(review.id)}>Удалить</button>
             
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
