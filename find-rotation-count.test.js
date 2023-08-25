const findRotationCount = require("./find-rotation-count")

describe("#findRotationCount", function () {
  it("returns the number of rotations", function () {
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toStrictEqual({clockwise: 2, counterClockwise: 4})
    expect(findRotationCount([7, 9, 11, 12, 5])).toStrictEqual({clockwise: 4, counterClockwise: 1})
  })
})