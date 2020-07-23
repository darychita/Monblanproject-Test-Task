const initSwitcher = (gridMode, listMode, content) => {
    const activeClass = 'active';
    const displayList = 'display_list';
    const displayGrid = 'display_grid';

    const toggleSwitch = (btn, className) => {
        btn.classList.toggle(activeClass);
        content.classList.toggle(className);
    };

    let active = listMode;

    const eventListener = (oldBtn, oldClass, newBtn, newClass) => {
        return () => {
            if(active !== newBtn) {
                active = newBtn;
                // remove old state
                toggleSwitch(oldBtn, oldClass);
                // add new state
                toggleSwitch(newBtn, newClass);
            }
        };
    };

    gridMode.addEventListener('click', eventListener(listMode, displayList, gridMode, displayGrid));
    listMode.addEventListener('click', eventListener(gridMode, displayGrid, listMode, displayList));
};

initSwitcher(
    document.getElementById('mode-switcher-grid'),
    document.getElementById('mode-switcher-list'),
    document.getElementById('content')
);
