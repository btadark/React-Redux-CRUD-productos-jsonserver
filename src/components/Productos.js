import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";
import { Producto } from "./Producto";

export const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la api
    dispatch(obtenerProductosAction());
  }, [dispatch]);

  // Obtener el state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>

      {error && (
        <p className="font-weight-bold alert alert-danger text-center">
          Hubo un Error
        </p>
      )}

      {cargando && <p className="text-center">Cargando...</p>}

      <table className="table table-striped">
        <thead className="bg-dark table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? "No hay productos"
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </>
  );
};
