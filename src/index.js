import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeadProvider, Link } from 'react-head';
import App   from './App';
import './App.css';
import appleIcon from './images/favicon/apple-touch-icon.png';
import fav32 from './images/favicon/apple-touch-icon.png';
import fav16 from './images/favicon/apple-touch-icon.png';
import siteManifest from './images/favicon/apple-touch-icon.png';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <HeadProvider>
            <Link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
            <Link rel="icon" type="image/png" sizes="32x32" href={fav32} />
            <Link rel="icon" type="image/png" sizes="16x16" href={fav16} />
            <Link rel="manifest" href={siteManifest} />
            <App/>
        </HeadProvider>
    </Router>
)
