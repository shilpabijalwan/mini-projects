function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ totalpages, handlepageChange, currentpage }) {
  let pages = createArrayOfSize(totalpages).map((a, i) => {
    return (
      <button
        data-testid="page-btn"
        onClick={() => handlepageChange(i + 1)}
        disabled={currentpage == i + 1}
      >
        {i + 1}
      </button>
    );
  });
  return (
    <div>
      {pages}
      <br />
    </div>
  );
}

export default Pagination;
