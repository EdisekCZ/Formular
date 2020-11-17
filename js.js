
    let cas = 0;
    let draha = 0;
    function rychlost(cas, draha){
        return draha/cas;
    }
document.getElementById("tlacitko1").addEventListener("click", function(){
    cas = document.getElementById("cas").value;
    draha = document.getElementById("draha").value;
    document.getElementById("vysledek").innerHTML = "Rychlost je  " +  rychlost(cas, draha).toFixed(2) + " m/s";
});