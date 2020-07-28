import React from 'react';
import Catalog from '../components/Catalog/Catalog';
import css from './CatalogViewer.module.css';

const catalogViewer = () => {
    return(
        <div className = {css.CatalogViewer}>
            <Catalog/>
        </div>
    );
}

export default catalogViewer;