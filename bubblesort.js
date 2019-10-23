var swapped;

function bubblesort(arr) {
  let end = arr.length - 1;
  let newarray = [];
  swapped = false;

  for (let i = 0; i < end; i++) {
    if (arr[i] > arr[i + 1]) {
      swapped = true;
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  if (!swapped) {
    return arr;
  } else {
    console.log(arr);
    return bubblesort(arr);
  }
}

bubblesort([-2, -3, 69, 420, 0]);

export default bubblesort;
