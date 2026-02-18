import css from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

interface Props {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (selected: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: Props) {
  return (
    <div className={css.paginationContainer}>
      <button
        className={`${css.firstPage} ${currentPage === 1 ? css.disabled : ""}`}
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        {"<<"}
      </button>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        onPageChange={({ selected }) => setCurrentPage(selected + 1)}
        forcePage={currentPage - 1}
        containerClassName={css.pagination}
        activeClassName={css.active}
        disabledClassName={css.disabled}
        nextClassName={css.next}
        previousClassName={css.previous}
        nextLabel=">"
        previousLabel="<"
        breakLabel="..."
      />
      <button
        className={`${css.lastPage} ${currentPage === totalPages ? css.disabled : ""}`}
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        {">>"}
      </button>
    </div>
  );
}
