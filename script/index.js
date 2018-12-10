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
      case "A1":
        console.log("download A1");
        window.open('drill/A1.pdf', '_blank');
        break;
      case "C1":
          window.open('drill/C1.pdf', '_blank');
          break;
      case "T2":
        console.log("downlad T2");
        window.open('drill/T2.pdf', '_blank');
        break;
      default:

    }
    // $('#link').attr({
    //   target: '_blank',
    //   href : "http://localhost:drill/a1.pdf"
    // })
}
