// Image to PNG
let imgInput = document.getElementById('2png');
  imgInput.addEventListener('change', function(e) {
    fStart();
    if(e.target.files) {
      let imageFile = e.target.files[0]; //here we get the image file
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image(); // Creates image object
        myImage.src = e.target.result; // Assigns converted image to image object
        myImage.onload = function(ev) {
          var myCanvas = document.getElementById("myCanvas"); // Creates a canvas object
          var myContext = myCanvas.getContext("2d"); // Creates a contect object
          myCanvas.width = myImage.width; // Assigns image's width to canvas
          myCanvas.height = myImage.height; // Assigns image's height to canvas
          myContext.drawImage(myImage,0,0); // Draws the image on canvas
          let imgData = myCanvas.toDataURL("image/png",0.75); // Assigns image base64 string in jpeg format to a variable
          const img    = myCanvas.toDataURL('image/png');
          var a = document.createElement("a"); //Create <a>
          a.href = img; //Image Base64 Goes here
          a.download = "🦊 • FoxTools | Output.png"; //File name Here
          a.click(); //Downloaded file
          fDone();
        }
      }
    }
  });

/* Square crop
let sqInput = document.getElementById('sqin');
  sqInput.addEventListener('change', function(e) {
    if(e.target.files) {
      let imageFile = e.target.files[0]; //here we get the image file
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image(); // Creates image object
        myImage.src = e.target.result; // Assigns converted image to image object
        myImage.onload = function(ev) {
          var myCanvas = document.getElementById("sqcanvas"); // Creates a canvas object
          var myContext = myCanvas.getContext("2d"); // Creates a contect object
          myCanvas.width = 512;
          myCanvas.height = 512;
          myContext.drawImage(myImage,myCanvas.width / 2 - myImage.width / 2,myCanvas.height / 2 - myImage.height / 2); // Draws the image on canvas
          let imgData = myCanvas.toDataURL("image/png",0.75); // Assigns image base64 string in jpeg format to a variable
          const img    = myCanvas.toDataURL('image/png');
          var a = document.createElement("a"); //Create <a>
          a.href = img; //Image Base64 Goes here
          a.download = "🦊 • FoxTools | Output.png"; //File name Here
          a.click(); //Downloaded file
        }
      }
    }
  }); */

var b64in = document.getElementById('b64in');
b64in.addEventListener("change", function (e) {
  convert();
});
function convert() {
  fStart();
  console.log('Converting...');
 
  var fileInput = document.getElementById("b64in");

  // Get the selected file
  var file = fileInput.files[0];

  // Create a new FileReader object
  var reader = new FileReader();

  // Set the onload event handler for the reader
  reader.onload = function (event) {
    // Get the result of the read operation (the data URL)
    var dURL = event.target.result;
    document.getElementById("toArea").value = dURL;
    document.getElementById('toTitle').innerHTML='<i class="fa-solid fa-check"></i> Data URL Output';
    document.getElementById('textOut').style.scale='1';
    fDone();
  };

  // Start reading the file as a data URL
  reader.readAsDataURL(file);
}
