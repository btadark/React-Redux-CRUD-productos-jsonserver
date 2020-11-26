import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editarProductoAction } from "../actions/productoActions";
import { useForm } from "../hooks/useForm";

export const EditarProducto = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [producto, formOnChange, , guardarProducto] = useForm({
    nombre: "",
    precio: "",
  });

  //Producto a editar
  const productoEditar = useSelector((state) => state.productos.productoEditar);

  useEffect(() => {
    guardarProducto(productoEditar);
  }, [productoEditar]);

  if (!productoEditar) return null;
  const { nombre, precio } = productoEditar;

  const submitEditarProducto = (e) => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card  pt-md-4 pb-md-4 pl-md-5 pr-md-5">
          <div className="card-body">
            <h2 className="text-center mb-4">Editar Producto</h2>

            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  autoComplete="off"
                  defaultValue={nombre}
                  onChange={formOnChange}
                />
              </div>
              <div className="form-group">
                <label>Precio:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  autoComplete="off"
                  defaultValue={precio}
                  onChange={formOnChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-success font-weight-bold text-uppercase d-block w-100 mt-4 mt-md-5"
              >
                Editar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
