var fgImages = null;
var bgImages = null;
var output;

function uploadFg(){
  var canv = document.getElementById("can");
  var input = document.getElementById("fgImage");
  fgImages = new SimpleImage(input);
  fgImages.drawTo(canv);
}

function uploadBg(){
  var canv2 = document.getElementById("can2");
  var input2 = document.getElementById("bgImage")
  bgImages = new SimpleImage(input2);
  bgImages.drawTo(canv2);
}



function greenScreen(){
  if(fgImages == null || ! fgImages.complete()){
    alert("Foreground image is not upload.");
  }
  if(bgImages == null || ! bgImages.complete()){
    alert("Background image is not upload.");
  }
  
  output = new  SimpleImage(fgImages.getWidth(), fgImages.getHeight());

  
var buttAlgo = document.getElementById("qs");

for(var pixel of fgImages.values()){
    
   var x = pixel.getX();
   var y = pixel.getY();
    if(pixel.getGreen() > pixel.getRed() + pixel.getBlue()){
        var pixelBg = bgImages.getPixel(x, y);
        
        output.setPixel(x, y, pixelBg);
        
    } else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
        
    }
}

var canvas = document.getElementById("can");
  var canvas2 = document.getElementById("can2");
  var cntx = canvas.getContext("2d");
  var cntx2 = canvas2.getContext("2d");
  cntx.clearRect(0,0,canvas.width,canvas.height); cntx2.clearRect(0,0,canvas2.width,canvas2.height);
  output.drawTo(canvas);
}

function clearFunc(){
  var canv = document.getElementById("can");
  var canv2 = document.getElementById("can2");
  var cntx = canv.getContext("2d");
  var cntx2 = canv2.getContext("2d");
  cntx.clearRect(0,0,canv.width,canv.height);
                            cntx2.clearRect(0,0,canv2.width,canv2.height);
  fgImages = null;
  bgImages = null;
 
}




// function doGray(){
  
//  for(var pixel of imageGray.values()){
//    var avarage = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
 
//    pixel.setRed(avarage);
//    pixel.setGreen(avarage);
//    pixel.setBlue(avarage);
// }
//   var imageCanvas = document.getElementById("can2");
  
//   imageGray.drawTo(imageCanvas);
// }