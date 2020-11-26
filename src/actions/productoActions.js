import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR,
} from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";
// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      // Insertar en la API
      await clienteAxios.post("/productos", producto);

      // Si todo sale bien actualizar el state
      dispatch(agregarProductoExito(producto));

      // Alerta
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError());

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error intenta denuevo",
      });
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

// Si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = () => ({
  type: AGREGAR_PRODUCTO_ERROR,
});

// Funcion que descarga los productos de la base de datos
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());

    try {
      const res = await clienteAxios.get("/productos");
      dispatch(descargaProductosExitosa(res.data));
    } catch (error) {
      dispatch(descargaProductosError());
    }
  };
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});

const descargaProductosExitosa = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos,
});

const descargaProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
});

// Seleccion y elimina el producto
export function borrarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id));

    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito());

      // Si se elimina mostrar alerta
      Swal.fire("Eliminado", "Producto Eliminado", "success");
    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError());
    }
    console.log(id);
  };
}

const obtenerProductoEliminar = (id) => ({
  type: ELIMINAR_PRODUCTO,
  payload: id,
});

const eliminarProductoExito = () => ({
  type: ELIMINAR_PRODUCTO_EXITO,
});

const eliminarProductoError = () => ({
  type: ELIMINAR_PRODUCTO_ERROR,
  payload: true,
});
