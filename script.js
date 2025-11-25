let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
	return arr.map(num=>++num);
}

alert(incrementArray(arr));
