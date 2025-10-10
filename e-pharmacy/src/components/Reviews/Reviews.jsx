import useReviews from "../../hook/useReviews";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import app from "../../firebase/firebase.js";

import { Container } from "../Container/container.styled";
import {
  HomeReviewsCardDesc,
  HomeReviewsCardList,
  HomeReviewsCardTitle,
  HomeReviewsDesc,
  HomeReviewsList,
  HomeReviewsTitle,
} from "./Reviews.styled";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const db = getFirestore(app);
        const reviewsQuery = query(collection(db, "reviews"));
        const querySnapshot = await getDocs(reviewsQuery);
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReviews(dataArray);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchReviews();
  }, []);

  return (
    <>
      <Container>
        <HomeReviewsTitle>Reviews</HomeReviewsTitle>
        <HomeReviewsDesc>
          What our customers say about us
        </HomeReviewsDesc>
        <HomeReviewsCardList>
          {loading && <p>Loading reviews...</p>}
          {error && (
            <p style={{ color: "#c0392b" }}>
              Failed to load reviews: {error}
            </p>
          )}
          {!loading && !error && reviews.length === 0 && (
            <p>No reviews available.</p>
          )}
          {!loading && !error && reviews.length > 0 && 
            reviews.map((item) => (
              <HomeReviewsList key={item.id}>
                <HomeReviewsCardTitle> {item.name}</HomeReviewsCardTitle>
                <HomeReviewsCardDesc>{item.testimonial}</HomeReviewsCardDesc>
              </HomeReviewsList>
            ))
          }
        </HomeReviewsCardList>
      </Container>
    </>
  );
};

export default Reviews;
