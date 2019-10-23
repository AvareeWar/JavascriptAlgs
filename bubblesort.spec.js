describe("bubblesort sorts an unsorted array", () => {
  it("returns the sorted array", () => {
    let unsorted = [-2, -3, 69, 420, 0];

    expect(bubblesort(unsorted)).to.be.eql([-3, -2, 0, 69, 420]);
  });
});
