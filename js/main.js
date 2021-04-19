/***********************
    ICONS DISPLAY
***********************/

// Icons set (ipotetica sorgente esterna di dati)
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

// Colors
const colors = [
    '#001858',
    '#8bd3dd',
    '#f582ae',
];

// Icon container 
const container = document.querySelector('.icons');
//console.log(container);

// 1. Printare le icone a schermo
// printIcons(icons, container);

// 2. Printare icone colorate
const coloredIcons = colorIcons(icons, colors);
console.log(coloredIcons);
printIcons(coloredIcons, container);

// 3. Filter icons
// a. Gen select options
const select = document.querySelector('#type');
const types = getType(coloredIcons);
genOption(types, select);

// b. Filter on change 
select.addEventListener('change', () => {
    // console.log( select.value );
    const selected = select.value;

    const filteredIcons = filterIcons(coloredIcons, selected);
    printIcons(filteredIcons, container);

});



/***********************
    FUNCTIONS
***********************/

// Print icons on screen
function printIcons(icons, container) {
    // Generare il markup delle icone
    let html = '';
    icons.forEach( (icon) => {
        // destrutturazione
        const {family, prefix, name, color} = icon;

        html += 
        `<div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>`;
    });

    // Aggiunta delle icone all interno del container icons
    //console.log(html);
    container.innerHTML = html;
}

// Return color icons collection by type
function colorIcons(icons, colors) {
    const types = getType(icons);
    console.log(types);
    console.log(colors);

    // Assegnare un colore per tipo ad ogni icona 
    const coloredIcons = icons.map((icon) => {
        const indexType = types.indexOf(icon.type); // 0-1-2

        return {
            ...icon,
            color: colors[indexType],
        }
    });
    // console.log(coloredIcons);

    return coloredIcons;
}

// Get icons type (unique)
function getType(icons) {
    const types = [];
    icons.forEach((icon) => {
        if(! types.includes(icon.type)) {
            types.push(icon.type);
        }
    });

    return types;  
}

// Gen option for filter 
function genOption(types, select) {
    // gen option 
    let options = '';
    types.forEach((type) => {
        options += `<option value="${type}">${type}</option>`;
    });

    // non sovrascrivere all presente nell'html
    select.innerHTML += options;
}

// Filter icon set 
function filterIcons(icons, selected) {

    if(selected === 'all') {
        return icons;
    }

    const filtered = icons.filter((icon) => {
        // return iin base a una condizione
        return icon.type === selected;
    });

    return filtered;

}



