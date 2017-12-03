import React                                from 'react';
import ReactDOM                             from 'react-dom';
import { createApp }                        from "@phenomic/preset-react-app/lib/client";
import { Router, Route, browserHistory }    from "react-router";
import styled                               from 'styled-components';

import Pages            from './src/Pages';
import Components       from './src/Components';
import './index.css';

export default createApp(() => (
    <div>
        <Components.Navbar/>
        <Router history={browserHistory}>
            <Route path="/" component={Pages.Landing} />
        </Router>
    </div>
));