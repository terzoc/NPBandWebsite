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
        case "B1":
            window.open('drill/B1.pdf', '_blank');
            break;
        case "B2":
            window.open('drill/B2.pdf', '_blank');
            break;
        case "B3":
            window.open('drill/B3.pdf', '_blank');
              break;
        case "B4":
              window.open('drill/CB.pdf', '_blank');
              break;
        case "B5":
              window.open('drill/CB.pdf', '_blank');
              break;
        case "B6":
             window.open('drill/B6.pdf', '_blank');
                break;
              case "B7":
                window.open('drill/B7.pdf', '_blank');
                break;
              case "B8":
                window.open('drill/B8.pdf', '_blank');
                break;
          case "C1":
              window.open('drill/C1.pdf', '_blank');
              break;
          case "C2":
              window.open('drill/C2.pdf', '_blank');
              break;
          case "C3":
              window.open('drill/C3.pdf', '_blank');
              break;
          case "C4":
              window.open('drill/C4.pdf', '_blank');
              break;
          case "C5":
              window.open('drill/C5.pdf', '_blank');
            break;
          case "C6":
            window.open('drill/C6.pdf', '_blank');
            break;
          case "C7":
            window.open('drill/C7.pdf', '_blank');
            break;
          case "C8":
            window.open('drill/C8.pdf', '_blank');
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
