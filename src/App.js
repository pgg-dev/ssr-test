import React, { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";

export default App = (props) => {
  const [page, setPage] = useState(props.page);

  useEffect(() => {
    window.onpopstate = (e) => {
      setPage(e.state);
    };
  }, []);

  const onChangePage = (e) => {
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, "", `/${newPage}`);
    setPage(newPage);
  };

  const PageComponent = page === "home" ? Home : About;

  return (
    <div className="container">
      <button data-page="home" onClick={onChangePage}>
        Home
      </button>
      <button data-page="about" onClick={onChangePage}>
        About
      </button>
      <PageComponent />
    </div>
  );
};
