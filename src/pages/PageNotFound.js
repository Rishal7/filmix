import { useEffect } from "react";
import PageNot from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found - Filmix`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className=" text-4xl sm:text-7xl text-gray-700 font-bold my-10 dark:text-slate-200">
            404 | Not found
          </p>
          <div className="max-w-3xl">
            <img
              className="rounded"
              src={PageNot}
              alt="404 PAGE Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-44 text-slate-200 bg-gradient-to-r from-slate-400  via-slate-500 to-slate-600 hover:bg-gradient-to-br  py-3 rounded">
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
