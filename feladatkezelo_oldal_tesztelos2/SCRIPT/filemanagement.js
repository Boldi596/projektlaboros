async function loadFolders() {
    const response = await fetch('folders.json'); //itt töltöm be a feladatokat a json fájlból
    const folders = await response.json(); //itt szedem ki a json fájlból a feladatokat
    let htmlContent = '';

    folders.forEach(folder => { //végigmegyek a mappákon
        console.log(folder.title); //ellenőrzésképpen kiírom a mappa címét a konzolra
        htmlContent += `
            <div class="folder">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-folder-minus" viewBox="0 0 16 16">
                <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z"/>
                <path d="M11 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
                </svg>
                </button>
                <a href="CONTENT/bottomfolder.html" class="folder-link">
                        <p>${folder.title}</p>
                </a>
            </div>

        `; //itt helyezem el a mappa címét a megfelelő helyre
    });

    document.getElementById("folders").innerHTML = htmlContent;    //itt helyezem el a generált HTML tartalmat a megfelelő div-be
}


async function loadTasks() {
    const response = await fetch('tasks.json'); //itt töltöm be a feladatokat a json fájlból
    const files = await response.json(); //itt szedem ki a json fájlból a feladatokat
    let htmlContent = '';

    files.forEach(file => { //végigmegyek a fájlokon
        console.log(file.title); //ellenőrzésképpen kiírom a fájl címét a konzolra
        htmlContent += `
            <div class="tasks"><!--teljes div ad egy elemet-->  
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-earmark-minus" viewBox="0 0 16 16">
                        <path d="M5.5 9a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                    </svg>
                </button>
                <a href="#" class="file-link" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="taskview('${file.title}')">
                    <p>${file.title}</p>
                </a>
            </div>
        `; //itt helyezem el a fájl címét a megfelelő helyre
    });

    document.getElementById("file").innerHTML = htmlContent;    //itt helyezem el a generált HTML tartalmat a megfelelő div-be
}


function taskview(title) {
    // Itt írd meg a kódot, ami megjeleníti a feladat részleteit a modalban
    console.log("Feladat megtekintése: " + title);
    
}







// itt hívom meg a loadFiles függvényt, hogy betöltse a fájlokat
loadFolders();
// itt hívom meg a loadFiles függvényt, hogy betöltse a fájlokat
loadTasks();