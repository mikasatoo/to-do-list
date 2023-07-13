function createHeader() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    header.textContent = '✅ To Do';

    return header;
}

function createMainContent() {
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');

    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav-bar');
    navBar.textContent = 'Navigate views ...';
    mainContent.appendChild(navBar);

    const display = document.createElement('div');
    display.setAttribute('id', 'display');
    display.textContent = 'To do items ...';
    mainContent.appendChild(display);
    
    return mainContent;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = 'Copyright ...';
    
    return footer;
}

export {
    createHeader,
    createMainContent,
    createFooter
}