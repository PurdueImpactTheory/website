import React            from 'react';
import ReactDOM         from 'react-dom';
import { createApp }    from "@phenomic/preset-react-app/lib/client";
import { Router, Route, browserHistory } from "react-router";

const Home = () => (
    <div>
      <p>This is a homepage</p>
    </div>
);

export default createApp(() => (
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
    </Router>
));