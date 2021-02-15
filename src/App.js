import React,{ lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './components/Header/header.component'
import Spinner from "./components/spinner/spinner.component"
import ErrorBoundary from "./components/error-boundary/error-boundary.component"

const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const SubDepartment = lazy(() => import("./pages/sub-department/sub-department.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const LoginAndSignupPage = lazy(() => import("./pages/login-and-signup/login-and-signup.component"));

function App() {
  return (
    <div className="App mb-5">
      <Header/>
      <ErrorBoundary>
        <Suspense fallback={<Spinner/>}>
          <Switch>
            <Route exact path="/"  component={Homepage} />
            <Route exact path="/loginorsignup" component={LoginAndSignupPage } />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path={`/:particularDepartment/:departmentId`} component={SubDepartment} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;