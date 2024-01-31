
/*const array = [1, 2, 3, 4, 5, 6, 7];

console.log(array.indexOf(5));

array.splice(4, 1);

console.log(array);*/



const array = [1, 2, 3, 4, 5, 6, 7];


function removeElement(array, item) {
    if (array.indexOf(item)!== -1){
        let index = array.indexOf(item);
        array.splice(index, 1);
    } else {
        console.log('Error')
    }
}

removeElement(array, 5);
console.log(array);

