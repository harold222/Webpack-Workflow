ExecuteEvents();

function ExecuteEvents() {
    document.addEventListener('DOMContentLoaded', iniciar);
    
}

function iniciar() {
    alert("primera");

    const nestedArray = [1, 2, [3, 4]];
    const flattened = nestedArray.flat();
    console.log(flattened);
}