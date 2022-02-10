let myImage = document.getElementById("imagen-cambiante");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if(mySrc === "https://w7.pngwing.com/pngs/864/304/png-transparent-firefox-web-browser-mozilla-add-on-google-chrome-firefox-orange-computer-wallpaper-sphere.png") {
    myImage.setAttribute ("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJ6F9TFq2VcPFgnbTBiWo18Lz_Z7z0285FQ&usqp=CAU");
  } else {
    myImage.setAttribute ("src", "https://w7.pngwing.com/pngs/864/304/png-transparent-firefox-web-browser-mozilla-add-on-google-chrome-firefox-orange-computer-wallpaper-sphere.png");
  }
}
