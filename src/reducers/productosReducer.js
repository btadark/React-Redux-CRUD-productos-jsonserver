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
  OBTERNER_PRODUCTO_EDITAR,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
} from "../types";

// Cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
};

export const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };

    case AGREGAR_PRODUCTO_ERROR:
    case DESCARGA_PRODUCTOS_ERROR:
    case ELIMINAR_PRODUCTO_ERROR:
    case PRODUCTO_EDITADO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      };

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productoEliminar: action.payload,
      };

    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null,
      };

    case OBTERNER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoEditar: action.payload,
      };

    case PRODUCTO_EDITADO_EXITO:
      return {
        ...state,
        productoEditar: null,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        ),
      };

    default:
      return state;
  }
};
