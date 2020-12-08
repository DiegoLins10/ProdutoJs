//@Author Diego Lins

function produto(array){
    multi = 1;
    for(var i = 0; i < array.length; i++){
      multi *= array[i];
    }
    return multi
  }
  console.log(produto([10, 10]));