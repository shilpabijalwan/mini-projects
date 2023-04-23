import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantPage() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const fetcheddata = (id) => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  };
  console.log("data", data);
  useEffect(() => {
    fetcheddata(id);
  }, []);
  return (
    <div
      style={{
        border: "1px solid gray",
        width: "200px",
        margin: "auto",
        padding: "10px",
      }}
      data-testid="restaurant-container"
    >
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{data.type}</div>
      <div data-testid="restaurant-rating">Rating:{data.rating}</div>
      <div data-testid="restaurant-votes">Votes:{data.number_of_votes}</div>
      <div data-testid="restaurant-price">
        Starting Price:{data.price_starts_from}
      </div>
      <br />
      <div>
        <img
          data-testid="restaurant-image"
          src={data.image}
          width={"100px"}
        />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
