import { useDispatch, useSelector } from "react-redux";
import { crearNuevoProductoAction } from "../actions/productoActions";
import { useForm } from "../hooks/useForm";

export const NuevoProducto = () => {
  const [state, formOnChange, reset] = useForm({
    nombre: "",
    precio: 0,
  });

  const { nombre, precio } = state;

  const dispatch = useDispatch();

  // const agregarProducto = () => dispatch(crearNuevoProductoAction);

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    // Validar Formulario
    const precioProducto = Number(precio);

    if (nombre.trim() === "" || precioProducto <= 0) {
      return;
    }

    // Si no hay Errores

    // agregar producto
    dispatch(crearNuevoProductoAction({ nombre, precioProducto }));

    reset();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card  pt-md-4 pb-md-4 pl-md-5 pr-md-5">
          <div className="card-body">
            <h2 className="text-center mb-4">Agregar Nuevo Producto</h2>

            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  autoComplete="off"
                  value={nombre}
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
                  value={precio}
                  onChange={formOnChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-success font-weight-bold text-uppercase d-block w-100 mt-4 mt-md-5"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
