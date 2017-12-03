import React            from 'react';
import ReactDOM         from 'react-dom';
import { createApp }    from "@phenomic/preset-react-app/lib/client";
import { Router, Route, browserHistory } from "react-router";
import Pages            from './src/Pages';

export default createApp(() => (
    <Router history={browserHistory}>
        <Route path="/" component={Pages.Landing} />
    </Router>
));