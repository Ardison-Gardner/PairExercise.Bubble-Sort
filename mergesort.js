function split (array) {
  if (array.length === 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid)
  return [left, right];
}

function merge (left, right) {
  let final = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      final.push(left.shift())
    } else {
      final.push(right.shift())
    }
  }
  while (left.length) {
    final.push(left.shift())
  }
  while (right.length) {
    final.push(right.shift())
  }
  return final;
}

function mergeSort(array) {
  /* your code here */
  if (array.length < 2) {
    return array;
  }
  let left = split(array)[0]
  let right = split(array)[1]
  return merge(mergeSort(left), mergeSort(right))
}
