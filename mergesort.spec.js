describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect (split([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([[1, 2, 3, 4], [5, 6, 7, 8]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect (merge([[1, 2, 3, 4], [5, 6, 7, 8]])).toEqual( [1, 2, 3, 4, 5, 6, 7, 8])
  });
});

describe ('MergeSort function', function() {
  it ('is able to recursively split an array', function () {
    expect (mergeSort([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([[1], [2], [3], [4], [5], [6], [7], [8]])
  })
})
