import React from "react";
import { Switch, Route } from "react-router";

import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import WhatWeDo from "../components/WhatWeDo";
import Login from "../components/Login";
import SignIn from "../components/SignIn";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/whatwedo" component={WhatWeDo} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
};

export default AppLayout;
