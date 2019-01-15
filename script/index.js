var number = 0;
function test(){
  var instrument = document.getElementById("instrument").value;
  number = document.getElementById("number").value;
  number = parseInt(number);
  if (!Number.isInteger(number)) {
    alert("Please enter a Drill Number");
  }else {
    var drillNum = instrument+number;
    drillNum = String(drillNum);
    console.log(drillNum);
    download(instrument);

  }


}

function download(drillNum) {
    switch (drillNum) {
      case "A":
        console.log("download A1");
        window.open('drill/A1.pdf', '_blank');
        break;
      case "B":
          console.log("download B1");
          window.open('drill/B.pdf', '_blank');
          break;
      case "C":
          window.open('drill/C.pdf', '_blank');
          break;
      case "F":
          window.open('drill/F.pdf', '_blank');
          break;

    }
    // $('#link').attr({
    //   target: '_blank',
    //   href : "http://localhost:drill/a1.pdf"
    // })
}
