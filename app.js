"use strict";
require(["matrix"], function(Matrix) {
    var m = new Matrix(2, 2);
    m.setRow(0, [[1],[2],[3]]);
    m.setRow(1, [[4],[5],[6]]);
    m.setRow(2, [[7],[8],[9]]);
    m.setRow(3, [[0],[18],[9]]);
    console.log(m.getN());
    console.log(m.getM());
//    m.setCol(2, [[4],[4],[4]]);
    console.log(m.getData());
    console.log(m.getRow(0));
    console.log(m.getCol(1));


});