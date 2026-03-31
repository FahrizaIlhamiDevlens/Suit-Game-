// gamw suit
function pilihSuit(){
  let player = document.getElementById("inputSuit").value;

  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gunting";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "batu";
  } else {
    comp = "kertas"
  }

//rules
let inputHasil = ""
if (player == comp){
    inputHasil = "Anda Seri!!!"
} else if (player == "gunting") {
inputHasil = ( comp == "kertas") ? "ANDA MENANG" : "ANDA KALAH"
} else if (player == "batu") {
    inputHasil = (comp == "gunting") ? "ANDA MENANG" : "ANDA KALAH"
} else if (player == "kertas") {
    inputHasil = (comp == "batu") ? "ANDA MENANG" : "ANDA KALAH"; }
    else {
    inputHasil = "ANDA MEMASUKAN PEMILIHAN YANG SALAH"
}

document.getElementById("hasilSuitTangan").innerHTML = `Kamu memilih : ${player}, Computer memilih : ${comp}, hasilnya adalah : ${inputHasil}`

}



