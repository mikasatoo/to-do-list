import './style.css';
import {createHeader, createMainContent, createFooter} from './page-load.js';

function component() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMainContent());
    content.appendChild(createFooter());

    return content;
}

document.body.appendChild(component());