import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NuevoProducto } from "./components/NuevoProducto";
import { Productos } from "./components/Productos";
import { Header } from "./components/Header";
import { EditarProducto } from "./components/EditarProducto";

//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route path="/productos/nuevo" component={NuevoProducto} />
            <Route path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
