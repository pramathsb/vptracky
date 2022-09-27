import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";

const HomeTemplate = (props) => {
  const { store } = props;
  const { TXT } = store;
  return (
    <section className={store.loader ? "loading" : undefined}>
      <div className="container py-4">
        {TXT.common.welcome}
        <h1 className="mb-5">
          <strong>{TXT.common.fullName}</strong>
        </h1>
        <Navigation />
        <hr />
        <div className="my-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HomeTemplate;
