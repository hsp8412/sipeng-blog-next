import _ from "lodash";
import { Dispatch, SetStateAction } from "react";
import PageItem from "@/app/components/pagination/pageItem";

type Props = {
  pageCount: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const Pagination = ({ pageCount, currentPage, setCurrentPage }: Props) => {
  if (pageCount === 1 || pageCount === 0) {
    return <></>;
  }
  const pages = _.range(1, pageCount + 1);
  const maxPage = 5;
  const prevPage = () => {
    if (currentPage == 1) {
      return;
    }
    setCurrentPage((pre) => pre - 1);
  };
  const nextPage = () => {
    if (currentPage == pageCount) {
      return;
    }
    setCurrentPage((pre) => pre + 1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPages = () => {
    const maxPage = 5;
    const displayOneSideCount = 1;
    if (pageCount <= maxPage) {
      return pages.map((page) => (
        <PageItem
          key={page}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          label={page}
        />
      ));
    }
    let startIndex = currentPage - displayOneSideCount;
    let endIndex = currentPage + displayOneSideCount;
    if (endIndex >= pageCount) {
      endIndex = pageCount;
      return (
        <>
          <PageItem
            key={1}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            label={1}
          />
          <PageItem
            key="omit"
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            label="..."
          />
          {pages.slice(startIndex - 1, endIndex).map((page) => (
            <PageItem
              key={page}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
              label={page}
            />
          ))}
        </>
      );
    }
    if (startIndex <= 1) {
      startIndex = 1;
      return (
        <>
          {pages.slice(startIndex - 1, endIndex).map((page) => (
            <PageItem
              key={page}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
              label={page}
            />
          ))}
          <PageItem
            key="omit"
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            label="..."
          />
          <PageItem
            handlePageChange={handlePageChange}
            key={pageCount}
            currentPage={currentPage}
            label={pageCount}
          />
        </>
      );
    }

    return (
      <>
        <PageItem
          key={1}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          label={1}
        />
        {startIndex !== 2 && (
          <PageItem
            key="omit-start"
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            label="..."
          />
        )}
        {pages.slice(startIndex - 1, endIndex).map((page) => (
          <PageItem
            key={page}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            label={page}
          />
        ))}
        {endIndex !== pageCount - 1 && (
          <PageItem
            handlePageChange={handlePageChange}
            key="omit-end"
            currentPage={currentPage}
            label="..."
          />
        )}
        <PageItem
          handlePageChange={handlePageChange}
          key={pageCount}
          currentPage={currentPage}
          label={pageCount}
        />
      </>
    );
  };

  const renderOmit = () => {
    if (currentPage <= maxPage || currentPage == pageCount) {
      return (
        <>
          <PageItem
            key="omit"
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            label="..."
          />
          <PageItem
            key={pageCount}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            label={pageCount}
          />
        </>
      );
    }
    return (
      <>
        <PageItem
          key="omit-start"
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          label="..."
        />
        <PageItem
          key={currentPage}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          label={currentPage}
        />
        <PageItem
          key="omit-end"
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          label="..."
        />
        <PageItem
          key={pageCount}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          label={pageCount}
        />
      </>
    );
  };

  return (
    <ul className="flex justify-start md:justify-center items-center h-10 text-base">
      <li onClick={prevPage} className="cursor-pointer">
        <div className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white dark:bg-neutral-800 dark:border-transparent border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-500">
          <span className="sr-only">Previous</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </div>
      </li>
      {renderPages()}
      <li onClick={nextPage} className="cursor-pointer">
        <div className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white dark:bg-neutral-800 dark:border-transparent border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-500">
          <span className="sr-only">Next</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </div>
      </li>
    </ul>
  );
};

export default Pagination;
