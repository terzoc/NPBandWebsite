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
    download(drillNum);
  }


}

function download(drillNum) {
    switch (drillNum) {
      case "T2":
        console.log("downlad T2")
        break;
      default:

    }
    // $('#link').attr({
    //   target: '_blank',
    //   href : "http://localhost:drill/a1.pdf"
    // })
}
