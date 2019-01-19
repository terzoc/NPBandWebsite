var number = 0;
function test(){
  var instrument = document.getElementById("instrument").value;
  download(instrument);
  // number = document.getElementById("number").value;
  // number = parseInt(number);
  // if (!Number.isInteger(number)) {
  //   alert("Please enter a Drill Number");
  // }else {
  //   var drillNum = instrument+number;
  //   drillNum = String(drillNum);
  //   console.log(drillNum);
    

  // }
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
      case "G":
          window.open('drill/G.pdf', '_blank');
          break;
      case "M":
          window.open('drill/M.pdf', '_blank');
          break;
      case "N":
          window.open('drill/N.pdf', '_blank');
          break;
      case "O":
        console.log("download A1");
        window.open('drill/o.pdf', '_blank');
        break;
      case "Q":
          console.log("download B1");
          window.open('drill/q.pdf', '_blank');
          break;
      case "R":
          window.open('drill/r.pdf', '_blank');
          break;
      case "S":
          window.open('drill/s.pdf', '_blank');
          break;
      case "T":
          window.open('drill/t.pdf', '_blank');
          break;
      case "U":
          window.open('drill/u.pdf', '_blank');
          break;
      case "Y":
          window.open('drill/y.pdf', '_blank');
          break;
      case "Z":
          window.open('drill/z.pdf', '_blank');
          break;
    }
    // $('#link').attr({
    //   target: '_blank',
    //   href : "http://localhost:drill/a1.pdf"
    // })
}
