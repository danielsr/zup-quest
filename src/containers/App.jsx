import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { store, history } from "../store/store";
import { Header, Footer, Toast } from "../components";
import Refund from "./Refund";
import Login from "./Login";
import Register from "./Register";
import Refunds from "./Refunds";
import Approval from "./Approval";
import Users from "./Users";
import ApprovalDetail from "./ApprovalDetail";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Toast />
            <Header />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute exact path="/" component={Refunds} />
            <PrivateRoute exact path="/refunds" component={Refunds} />
            <PrivateRoute exact path="/refund" component={Refund} />
            <PrivateRoute path="/refund/:id" component={Refund} />
            <PrivateRoute path="/approval" component={Approval} />
            <PrivateRoute path="/approval/:id" component={ApprovalDetail} />
            <PrivateRoute path="/users" component={Users} />
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
