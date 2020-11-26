import { useDispatch, useSelector } from "react-redux";
import { crearNuevoProductoAction } from "../actions/productoActions";
import { mostrarAlerta, ocultarAlertaAction } from "../actions/alertaActions";
import { useForm } from "../hooks/useForm";

export const NuevoProducto = ({ history }) => {
  const [state, formOnChange, reset] = useForm({
    nombre: "",
    precio: 0,
  });

  const { nombre, precio } = state;

  // utilizar use dispatch y te crea una funcio
  const dispatch = useDispatch();

  // Acceder al state del store
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  // const agregarProducto = () => dispatch(crearNuevoProductoAction);

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    // Validar Formulario
    if (nombre.trim() === "" || precio <= 0) {
      const alerta = {
        msg: "Ambos campos son obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };

      dispatch(mostrarAlerta(alerta));
      return;
    }

    // Si no hay Errores
    dispatch(ocultarAlertaAction());

    // agregar producto
    dispatch(crearNuevoProductoAction({ nombre, precio }));
    history.push("/");
    reset();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card  pt-md-4 pb-md-4 pl-md-5 pr-md-5">
          <div className="card-body">
            <h2 className="text-center mb-4">Agregar Nuevo Producto</h2>

            {alerta && <p className={alerta.classes}>{alerta.msg}</p>}
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

            {cargando && <p>Cargando...</p>}
            {error(
              <p className="alert alert-danger p2 text-center mt-4">
                Hubo un error
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
