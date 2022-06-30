function renderHelp() {
    emptyInner('mainContent');
    document.getElementById('mainContent').innerHTML = /*html*/`
        <div class="board">
            <div class="headline">
                <div class="headlinetitle">Help</div>
                <span class="headlinetitletext">Learning Managment System Project</span>
            </div>
            <div>
                contactformular
                kleines tutorial?
                content

            </div>
        </div>        
    `;
}