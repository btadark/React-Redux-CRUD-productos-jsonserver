import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { borrarProductoAction } from "../actions/productoActions";
import Swal from "sweetalert2";

export const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  // Confirmar si desea Eliminar
  const confirmarEliminarProducto = (id) => {
    // Preguntar al usuario
    Swal.fire({
      title: "Estas seguro?",
      text: "Un producto eliminado no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Pasarlo al action
        dispatch(borrarProductoAction(id));
      }
    });
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold"> $ {precio}</span>
      </td>
      <td className="acciones">
        <Link to={`productos/editar/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
