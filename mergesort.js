function split (wholeArray) {
  if (wholeArray.length === 1) {
    return wholeArray;
  }
  const mid = Math.floor(wholeArray.length / 2)
  const firstHalf = wholeArray.slice(0, mid)
  const secondHalf = wholeArray.slice(mid)
  return [firstHalf, secondHalf];
}

function merge (first, second) {
  let finalArr = [];
  while (first.length && second.length) {
    if (first[0] <= second[0]) {
      finalArr.push(first.shift())
    } else {
      finalArr.push(second.shift())
    }
    while (left.length) {
      finalArr.push(first.shift())
    }
    while (second.length) {
      finalArr.push(second.shift())
    }
    console.log(finalArr)
    return finalArr;
  }
}

function mergeSort(array) {
  /* your code here */
  return merge(split(firstHalf), split(secondHalf))
}
