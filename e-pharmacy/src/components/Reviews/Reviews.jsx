import useReviews from "../../hook/useReviews";

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
  const fetchReviews = useReviews();

  return (
    <>
      <Container>
        <HomeReviewsTitle>Reviews</HomeReviewsTitle>
        <HomeReviewsDesc>
          Search for Medicine, Filter by your location
        </HomeReviewsDesc>
        <HomeReviewsCardList>
          {fetchReviews.length > 0 ? (
            fetchReviews.map((item) => (
              <HomeReviewsList key={item.id}>
                <HomeReviewsCardTitle> {item.name}</HomeReviewsCardTitle>
                <HomeReviewsCardDesc>{item.testimonial}</HomeReviewsCardDesc>
              </HomeReviewsList>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </HomeReviewsCardList>
      </Container>
    </>
  );
};

export default Reviews;
