
/*sujet 1/*
const numbers1 = [10, 15, 3, 7];
const numbers2 = [1, 8, 10, 21];

function checkSum(numbers, k) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === k) {
                return true;
            }
        }
    }
    return false;
}

let k = 17;
console.log(`With k = ${k} : ${checkSum(numbers1, k)}`);

k = 19;
console.log(`With k = ${k} : ${checkSum(numbers2, k)}`);

*/



/*sujet 2/  function buildingsWithWesternViews(heights) {
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        let maxHeight = Math.max(...heights.slice(i));
        if (heights[i] >= maxHeight) {
            count++;
        }
    }
    return count;
}

console.log(buildingsWithWesternViews([3, 7, 8, 3, 6, 1])); // 3
console.log(buildingsWithWesternViews([1, 4, 5, 8])); // 1
*/





/*ex 1/*function hasSum(numbers, k) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === k) {
                return true;
            }
        }
    }
    return false;
}

console.log(hasSum([10, 15, 3, 7], 17)); // true
console.log(hasSum([1, 8, 10, 21], 19)); // false
*/   


/*ex 2/*
function buildingsWithWesternViews(heights) {
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[i] >= heights[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(buildingsWithWesternViews([3, 7, 8, 3, 6, 1])); // 3
console.log(buildingsWithWesternViews([1, 4, 5, 8])); // 1
*/

/*ex3/*
function has_sum(numbers, k) {
    // créer un tableau vide
    const numSet = new Set();
    // parcourir chaque élément du tableau
    for (const num of numbers) {
        // vérifier si k - num est dans le tableau
        if (numSet.has(k - num)) {
            return true;
        }
        // ajouter chaque numéro dans le tableau
        numSet.add(num);
    }
    return false;
}

let numbers = [10, 15, 3, 7];
let k = 17;
console.log(has_sum(numbers, k));  // true, car 10 + 7 = 17

numbers = [1, 8, 10, 21];
k = 19;
console.log(has_sum(numbers, k));
*/

/*ex4/*
function buildingsWithWestView(heights) {
    let westViewBuilding = 0;
    let maxHeight = -1;
    for (let i = heights.length-1; i >= 0; i--) {
        if (heights[i] > maxHeight) {
            westViewBuilding++;
            maxHeight = heights[i];
        }
    }
    return westViewBuilding;
}
let heights = [3, 7, 8, 3, 6, 1];
console.log(buildingsWithWestView(heights)); // retourne 3

heights = [1, 4, 5, 8];
console.log(buildingsWithWestView(heights)); // retourne 1
*/


/*ex5
function checkSum(numbers, k) {
    let set = new Set();
    for (let i = 0; i < numbers.length; i++) {
        if (set.has(k - numbers[i])) {
            return true;
        }
        set.add(numbers[i]);
    }
    return false;
}

let numbers1 = [10, 15, 3, 7];
let k = 17;
console.log(`With k = ${k} : ${checkSum(numbers1, k)}`);

let numbers2 = [1, 8, 10, 21];
k = 19;
console.log(`With k = ${k} : ${checkSum(numbers2, k)}`);




/*ex6/*function nb_immeubles_vue_ouest(liste) {
    let compteur = 0;
    let max_hauteur = 0;
    for (let i = liste.length -1 ; i >= 0 ; i--) {
        if (liste[i] >= max_hauteur) {
            max_hauteur = liste[i];
            compteur++;
        }
    }
    return compteur;
}


let liste1 = [3, 7, 8, 3, 6, 1];
console.log(nb_immeubles_vue_ouest(liste1)) // 3

let liste2 = [1, 4, 5, 8];
console.log(nb_immeubles_vue_ouest(liste2)) // 1
*/