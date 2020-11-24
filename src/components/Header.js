import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="text-white">CRUD - React, Redux, Rest API & Axios</h2>
        <Link
          to={"/productos/nuevo"}
          className="btn btn-success nuevo-post d-block d-md-inline-block"
        >
          Agregar Producto &#43;
        </Link>
      </div>
    </nav>
  );
};
