import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import app from "../fierbase/fierbase";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchReviews = async () => {
      const pharmaciesQuery = query(collection(db, "reviews"));
      const querySnapshot = await getDocs(pharmaciesQuery);
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(dataArray);
    };
    fetchReviews();
  }, [db]);

  return reviews;
};

export default useReviews;
