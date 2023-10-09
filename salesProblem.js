let pa = document.getElementById("pa");
let pb = document.getElementById("pb");
let pc = document.getElementById("pc");
let pd = document.getElementById("pd");
let pe = document.getElementById("pe");
let pf = document.getElementById("pf");
let err = document.getElementById("err");
const btn = document.getElementById("btn");
let top1 = document.getElementById("top");
let bottom = document.getElementById("bottom");
let zero = document.getElementById("zero");


let prodParameters = ["a", "b", "c", "d", "e", "f"];

function topProduct(prodArray, prodValues){


    let topP = Math.max(...prodValues);

    for (let i = 0; i < prodArray.length; i++){
      
        if(prodArray[i].value == topP){

            console.log(prodArray[i].name)

            top1.innerHTML = prodArray[i].name
            // return productArray[i].name;

        }
     
    }

}

function bottomProduct(prodArray, prodValues){
    let min = Math.min(...prodValues);
    for (let i = 0; i < prodArray.length; i++){
      
      if(prodArray[i].value == min){

          bottom.innerHTML = prodArray[i].name;

      }
   
  }
}

function zeroProfitProduct(prodArray, prodValues){
    let minZ = Math.min(...prodValues);
    for (let i = 0; i < prodArray.length; i++){
      
      if(prodArray[i].value == minZ){

          zero.innerHTML = prodArray[i].name;

      }
   
  }
  
}

function getPositiveValues(arr){
    return arr.filter(function(num){
        return num >= 0;
    })
}




btn.addEventListener("click", function(e){

    if(pa.value=="" || pb.value==="" || pc.value=="" || pd.value=="" || pe.value=="" || pf.value==""){
        err.innerHTML = "No Data";
    }
    else{
        err.innerHTML = "";
     

        
        let productArray = [pa, pb, pc, pd, pe, pf];
        let productValues = [pa.value, pb.value, pc.value, pd.value, pe.value, pf.value];
        let productPositive = getPositiveValues(productValues);    
        topProduct(productArray, productValues);
        bottomProduct(productArray, productValues);
        zeroProfitProduct(productArray, productPositive);
    }
})