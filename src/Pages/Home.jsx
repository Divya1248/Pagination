import React, { Fragment, useState } from "react";
import JSON from "../Data.json";
import ReactPaginate from "react-paginate";

const Home = () => {
  let [state, setstate] = useState(JSON.slice(0, 50));
  let [page, setPage] = useState(0);

  let userPage = 10;

  let pageVisited = page + userPage;

  let display = state.slice(pageVisited, pageVisited + userPage).map(x => {
    return (
      <Fragment>
        <tr className="border-collapse">
          <td className="border border-gray-300 text-center w-[300px]">
            {x.id}
          </td>
          <td className="border border-gray-300 text-center w-[300px]">
            {x.firstName}
          </td>
          <td className="border border-gray-300 text-center w-[300px]">
            {x.lastName}
          </td>
          <td className="border border-gray-300 text-center w-[300px]">
            {x.email}
          </td>
        </tr>
      </Fragment>
    );
  });

  const pageCount = Math.ceil(state.length / userPage);

  const changePage = ({ selected }) => {
    setPage(selected);
  };
  return (
    <div className=" w-[80%] m-auto my-8 ">
      <table className="mx-6  border border-gray-400 ">
        <thead className="p-2">
          <tr className="p-2">
            <th className="border border-gray-300 text-center">id</th>
            <th className="border border-gray-300 text-center">FirstName</th>
            <th className="border border-gray-300 text-center">LastName</th>
            <th className="border border-gray-300 text-center">Email</th>
          </tr>
        </thead>
        <tbody className="border border-gray-300 text-center">{display}</tbody>
      </table>
      <div className="my-6 flex justify-center first-letter:bg-gray-500">
        <ReactPaginate
          className="flex justify-center items-centre p-2 border-2 w-[20%] first-letter:bg-gray-500"
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          // containerClassName={"paginationBttns"}
          // previousLinkClassName={"previousBttn"}
          // nextLinkClassName={"nextBttn"}
          // disabledClassName={"paginationDisabled"}
          // activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Home;
