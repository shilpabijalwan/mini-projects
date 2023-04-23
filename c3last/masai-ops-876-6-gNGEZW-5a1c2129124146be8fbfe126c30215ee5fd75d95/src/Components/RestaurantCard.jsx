import { Link } from "react-router-dom";

export function RestaurantCard({
  name,
  rating,
  type,
  number_of_votes,
  price_starts_from,
  id,
  loading,
}) {
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <tr
      data-testid="item"
      key={id}
    >
      <td>
        <Link
          to={`/singleproductspage/${id}`}
          data-testid="name"
        >
          {name}
        </Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{type}</td>
      <td data-testid="votes">{number_of_votes}</td>
      <td data-testid="price">{price_starts_from}</td>
    </tr>
  );
}
