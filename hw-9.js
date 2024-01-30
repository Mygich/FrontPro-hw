
/*let array = [1, 2, 3, 4, 5, 6, 7];

console.log(array.indexOf(5));

array.splice(4, 1);

console.log(array);*/



let array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

function removeElement(array, item) {
    console.log(array.indexOf(5));
    array.splice(4, 1);
}



