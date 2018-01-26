import React, { Component } from "react";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { store, history } from "../store/store";
import { Header, Footer, Toast } from "../components";
import Refund from "./Refund";
import Login from "./Login";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <Route exact path="/" component={Refund} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Toast />
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
