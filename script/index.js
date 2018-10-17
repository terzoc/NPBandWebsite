function test(){
  var instrument = document.getElementById("instrument").value;
  var number = document.getElementById("number").value;
  if (number = "") {
    alert("Please enter a Drill Number");
  }else {
    var drillNum = instrument+number;
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
