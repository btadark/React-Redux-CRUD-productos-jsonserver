export const EditarProducto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card  pt-md-4 pb-md-4 pl-md-5 pr-md-5">
          <div className="card-body">
            <h2 className="text-center mb-4">Editar Producto</h2>

            <form>
              <div className="form-group">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  autoComplete="off"
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
