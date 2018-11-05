describe ('Bubble Sort', function() {
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with one element', function(){
    let testArr = [1];
    expect (bubbleSort(testArr)).toEqual([1])
  })
  it('sorts an unsorted array with two elements', function () {

    expect (bubbleSort([2,1])).toEqual([1, 2])
  })
  it ('handles an unsorted array with three or more elements', function () {
    expect (bubbleSort([4, 2, 3, 1, 6, 5])).toEqual([1, 2, 3, 4, 5, 6])
  })
});
