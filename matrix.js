"use strict";
define(function() { 

    function Matrix(N, M){
    this.N = N;
    this.M = M;
    var matrix = [];

//    this.create_Matrix = function(){
//        for (var i = 0; i == index; i++){

 //       }
//    };

    this.getN = function(){ // Number of Rows
        return this.N;
    };

    this.getM = function(){ // Number of Cols
        return this.M;
    };

    this.getRow = function(index){
        return matrix[index];
    };

    this.getCol = function(index){
        var a = [];
        for(var i = 0; i <= this.N - 1; i++){
            a[i] = matrix[i][index];
        }
        return a;
    };

    this.setRow = function(index, row){
        if (index === this.N - 1){
            this.N = this.N + 1;
            matrix.push(row);
        }
        else{
            matrix[index]=row;
        }
    };

    this.setCol = function(index, col){
        if (index === this.M - 1){
            this.M = this.M + 1;
            col.forEach(function(i){
                matrix[i][index]= col[i];
            });
        }
        else{
            col.forEach(function(i){
                matrix[i][index] = col[i];
            });
        }
    };

    this.getAt = function(i, j){
        return matrix[i][j];
    };

    this.setAt = function(i, j, value){
        matrix[i][j].push(value);
        return matrix[i][j];
    };

    this.getData = function(){
        var copy = matrix.slice(0);
        return copy;
    };

    this.toString = function(){
        var m = matrix.toString();
        return m;

    };
}    return Matrix;
});