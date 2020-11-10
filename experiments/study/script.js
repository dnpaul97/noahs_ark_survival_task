// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "\u002Fsave",
      "encoding": "form",
      "updates": {
        "incremental": false
      },
      "callbacks": {
        "setup": function(){this.headers["X-CSRFToken"]=window.csrf_token},
        "full": function(e){e&&e.ok&&(window.location="/next")}
      },
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "messageHandlers": {
    "epilogue": function anonymous(
) {
var resultJson = study.options.datastore.exportJson();
jatos.submitResultData(resultJson, jatos.endStudy);
}
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n  \u003Clabel\u003E Please enter your assigned participant number: \u003C\u002Flabel\u003E\n  \u003Cinput type=number name=\"PARTICIPANT NUMBER\" required min=\"100\" max=\"199\"\u003E\n  \u003Cbutton type=\"submit\"\u003ECLICK TO CONTINUE\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "PARTICIPANT NUMBER"
    },
    {
      "type": "lab.html.Form",
      "content": " \u003Chtml\u003E\u003Chead\u003E\n      \u003C\u002Fhead\u003E\n    \u003Cbody\u003E\n        \u003Cp\u003E Thank you very much for your interest in this research. We would like for you to complete a task. It is very important that you read the information provided to understand the nature of the task and what we require. Of course, you can take as much time as you would like. If there is anything not clear and require more information, please do not hesitate to ask us.  \u003C\u002Fp\u003E\n         \u003Cp\u003E You have been invited to this study as a student of Cardiff University. Please note that participation in the study is voluntary and you can withdraw your participation at any point until September 1st 2020 (where data will be anonymized so nobody will be able to trace your data back to you) without reason.  \u003C\u002Fp\u003E\n         \u003Cp\u003EThe study itself requires you to complete two novel tasks simultaneously to the best of your ability within a given time limit.  \u003C\u002Fp\u003E\n         \u003Cp\u003E As compensation for your time, you will either be given 1 participation course credit or have the option to be entered in to a £50 Amazon Voucher prize draw. The session will take approximately 10 minutes to complete.  \u003C\u002Fp\u003E\n\n              \u003Cbr\u003E\n        I hereby fully and freely consent to my participation in this study  (PLEASE CHECK EACH BOX IF YOU AGREE WITH THE TERMS)\n        \u003Cbr\u003E\n\n\u003Cform\u003E\n\n        \u003Cinput type=\"checkbox\" name=\"consent\" value=\"purpose\" required\u003E I understand the nature and purpose of the procedures involved in the study. These have been communicated to me on the information sheet.\u003Cbr\u003E\n\n        \u003Cinput type=\"checkbox\" name=\"condition2\" value=\"knowledge\" required\u003E I understand and acknowledge that the study is designed to promote scientific knowledge and that Cardiff University will use dat I provide for no other purpose than research.\u003Cbr\u003E\n\n        \u003Cinput type=\"checkbox\" name=\"condition3\" value=\"confidential\" required\u003E I understand that the data I provide will be kept confidential and that on completion of the study my data will be anonymised by September 1st 2020 and before any presentation or publication my data.\u003Cbr\u003E\n\n        \u003Cinput type=\"checkbox\" name=\"condition4\" value=\"open_data\" required\u003E I understand that the study will be made “open data” after anonymization. I understand that this means the anonymised data will be publicly available and may be used for purposes not related to study, and it will not be possible to identify me from these data.\u003Cbr\u003E\n        \u003Cbr\u003E\n\n  \u003Cfieldset\u003E\n                \u003Cp\u003E\n                  \u003Clabel\u003EPlease type 'I AGREE' if you agree to the terms\u003C\u002Flabel\u003E\n  \u003Cinput type=\"text\" id=\"myText\" required\u003E\n  \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n  \u003C\u002Fp\u003E \u003C\u002Ffieldset\u003E\n\u003C\u002Fform\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "CONSENT"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "INSTRUCTIONS 1",
      "content": "\u003Chtml\u003E\u003Chead\u003E\r\n    \r\n    \u003C\u002Fhead\u003E\r\n\r\n    \u003Ch1\u003E Instructions (I) \u003C\u002Fh1\u003E\r\n\r\n    \u003Cbody\u003E\r\n        You have finally boarded Noah’s Ark and are delighted that you have escaped the flooding. You are now working as Noah’s assistant on the boat. \u003Cstrong\u003E He has given you two tasks to complete simultaneously within a certain time limit \u003C\u002Fstrong\u003E:\r\n        \u003Col\u003E\r\n            \u003Cli\u003E\r\n                Weather forecasts suggest that high tides are approaching. It is your job to work out which direction (North, East, South, West) to sail the Ark in to survive the flooding.\r\n                The MACKEREL fish have agreed to help you out! If they are fed, the mackerel are willing to travel across the sea in search of high tides and come back with an observation to let you know whether the direction you picked is safe to travel in. The only problem is that mackerels have bad eyesight. \r\n                Therefore the more food given to mackerel, the more mackerel that will go out, the greater the accuracy of their observation.\r\n        \u003C\u002Fli\u003E\r\n            \u003Cli\u003E\r\n                Noah has given the animals important chores to complete as part of the Arks maintenance. However, the animals have formed a union and decided to go on strike if they are not fed. This is not good for the boat if you want to survive the flooding. \r\n                It is your job to feed the animals and to make them go unstarved. \r\n\r\n                To do this you must split the food using a slider between both the mackerel fish and the animals on the boat.\r\n\r\n            \u003C\u002Fli\u003E\r\n        \u003C\u002Fol\u003E\r\n\r\n        \u003Cbr\u003E\r\n        Noah needs you to complete these tasks simultaneously. NOAH DEPENDS ON YOU!\r\n        \r\n    \r\n        \u003Cbutton id=\"redirect\" onclick=\"redirect()\"\u003EPRESS SPACE TO CONTINUE\u003C\u002Fbutton\u003E\r\n\r\n    \r\n\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "INSTRUCTIONS 2",
      "content": "\u003Chtml\u003E\u003Chead\u003E\r\n        \u003Cscript\u003E\r\n            function redirect() {\r\n            window.location.href = \"task.html\";\r\n            }\r\n        \u003C\u002Fscript\u003E\r\n    \u003C\u002Fhead\u003E\r\n\r\n       \u003Ch1\u003E Instructions (II) \u003C\u002Fh1\u003E\r\n\r\n    \u003Cbody\u003E\r\n        Sick of counting animals on the boat, Noah has grown a strong distaste for numerical values and insisted on numbers being translated into colours of varying saturations. He has given you a special device which will translate all numerical values into colour saturations.\r\n\u003Cbr\u003E\r\n        The device will measure:\r\n\u003C\u002Fbr\u003E\r\n\u003Cli\u003EThe food slider you will split the resources on between the MACKEREL and the ANIMALS ON THE boat \u003C\u002Fli\u003E\r\n\u003Cli\u003EThe mackerel observation on how safe the direction is to travel in \u003C\u002Fli\u003E\r\n\u003Cli\u003EHow starved the animals are on the boat \u003C\u002Fli\u003E\r\n\u003Cli\u003EThe amount of time you have left \u003C\u002Fli\u003E\r\n\r\n\u003Cbr\u003E  Small numbers are whitish and large numbers are deeper colours. \u003C\u002Fbr\u003E\r\n\r\n        \u003Cp\u003E REMEMBER: \u003C\u002Fp\u003E\r\n\r\n        \u003Cli\u003E The darker the \u003Cstrong\u003E \u003Cspan style=\"color: blue;\"\u003Eblue\u003C\u002Fspan\u003E \u003C\u002Fstrong\u003E of the slider, the more food you have given\r\n          \u003C\u002Fli\u003E\r\n        \u003Cli\u003E The darker the \u003Cstrong\u003E \u003Cspan style=\"color: red;\"\u003Ered\u003C\u002Fspan\u003E \u003C\u002Fstrong\u003E of the slider, the higher degree of accuracy that the direction you've chosen is safe to travel in \u003C\u002Fli\u003E \r\n        \u003Cli\u003E The darker the \u003Cstrong\u003E \u003Cspan style=\"color: green;\"\u003Egreen\u003C\u002Fspan\u003E \u003C\u002Fstrong\u003E square, the more starved the animals are on the boat \u003C\u002Fli\u003E \r\n        \u003Cli\u003E The darker the \u003Cstrong\u003E \u003Cspan style=\"color: yellow;\"\u003Eyellow\u003C\u002Fspan\u003E \u003C\u002Fstrong\u003E square, the less time you have to complete both tasks \u003C\u002Fli\u003E\r\n\r\n\u003Cp\u003E \u003C\u002Fp\u003E\r\n      \r\n        \u003Cbutton id=\"redirect\" onclick=\"redirect()\"\u003EPress SPACE to start the task\u003C\u002Fbutton\u003E\r\n\r\n    \r\n\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "INSTRUCTIONS 3",
      "content": "\u003Chtml\u003E\u003Chead\u003E\r\n\r\n    \u003C\u002Fhead\u003E\r\n\r\n       \u003Ch1\u003E PLEASE READ \u003C\u002Fh1\u003E\r\n\r\n    \u003Cbody\u003E\r\n     Your task is to find the safest direction to travel Noah's Ark in and stop the animals starving on the boat. THERE IS A TIME LIMIT.\r\n\u003Cbr\u003E\r\n      On the next page there will be a TWO SLIDERS. This is used to split the food resource Noah has given you. You must move the slider to assign how much of the resource you will liked to give out to either the MACKEREL or the ANIMALS ON THE BOAT.\r\n\u003C\u002Fbr\u003E\r\n\u003Cbr\u003E\r\nYou must then select a direction you would like to send the mackerel fish out in. The directions you must choose out of are NORTH, EAST, SOUTH & WEST.\r\nThen you must press the SUBMIT button.  Please press this button ONCE.\r\nYou must wait until the mackerel observation comes up on the screen. When it does, a pop up will appear asking you to decide when which direction you would like to travel in so far. \u003C\u002Fbr\u003E\r\n\r\n\u003Cp\u003E After you save your responses you must repeat the process again. Keep on repeating this procedure until the time has run out.  \u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E \u003C\u002Fp\u003E\r\n      \r\n        \u003Cbutton id=\"redirect\" onclick=\"redirect()\"\u003EPress SPACE to start the task\u003C\u002Fbutton\u003E\r\n\r\n    \r\n\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
 debugger
 var direction = 'newstring';

 //sliders
 
 updateOne = function(val) {
    document.getElementById("myRange").value=10-val;
    document.getElementById("demo").innerHTML=10-val;
    document.getElementById("demo2").innerHTML=val;
  }
  updateTwo = function(val) {
    document.getElementById("myRange2").value=10-val;
    document.getElementById("demo2").innerHTML=10-val;
    document.getElementById("demo").innerHTML=val;
  }

//when you click on a direction, it updates the direction
 updateDirectionNorth = function() {
    direction = 'north';
  }

 updateDirectionEast = function()  {
    direction = 'east';
  }

updateDirectionSouth = function() {
    direction = 'south';
  }

updateDirectionWest = function() {
    direction = 'west'; 
  }

//when pressing the submit button where to fire the circle
 submit = function() {
    reset();

    var effect_size = .7;

    localStorage.setItem("value mac", document.getElementById('demo'));
    localStorage.setItem("value animals", document.getElementById('demo2'));
    localStorage.setItem("direction", direction);

    //var y = document.getElementById("myCanvas")
    //const context = y.getContext('2d');
    //context.clearRect(0, 0, y.width, y.height);
    console.log(direction);
    
    console.log ('check????')

    var y = document.getElementById("myCanvas");
    var cir = y.getContext("2d");
    var value_global = document.getElementById('myRange').value;

    console. log(value_global)
    var min_val = (value_global > 1) * ((value_global-1)*.1 - .05);
    if(value_global>1 && value_global<9){
        var range_val = 0.3;
    }else if(value_global==1 || value_global==9){
        var range_val = 0.25;
    }else{
        var range_val = 0.15;
    }
    
    if (direction === 'east') {
      var cen_x = 480-150*value_global/100;
      var cen_y = 300;
      min_val = min_val * effect_size;
    }else if(direction === 'north'){
      var cen_x = 300;
      var cen_y = 70+200*value_global/100;
      min_val = min_val * .2;
    }else if(direction === 'west'){
      var cen_x = 240-150*value_global/100;
      var cen_y = 300;
      min_val = min_val * .2;
    }else if(direction === 'south'){
      var cen_x = 300;
      var cen_y = 322+200*value_global/100;
      min_val = min_val * .2;
    }else{
      alert("Error: Invalid direction.")
    }
    
    cir.globalAlpha = Math.random()*range_val + min_val;

 setTimeout(function() {
    cir.beginPath();
    cir.arc(cen_x, cen_y, 20, 0, 2 * Math.PI);

    cir.fillStyle = "red";
    cir.fill();
    cir.stroke();
 }, value_global*1000)

 }

  //increases the yellow square by 5%
reset = function() {
    check_time()
    var y = document.getElementById("timeCanvas")
    var context = y.getContext('2d');
    context.clearRect(0, 0, y.width, y.height);

    //var squaretime = document.getElementById("timeCanvas");
    var sqt= y.getContext("2d");
    console.log(sqt.globalAlpha)
    check_time()
    sqt.globalAlpha = sqt.globalAlpha + 0.05;
    sqt.beginPath();
    sqt.rect(0, 0, 80, 80);
    sqt.fillStyle = 'orange';
    sqt.fill();
    sqt.stroke();

//green square increases by 5 and is subtracted from value
    var y = document.getElementById("starveCanvas")
    var context = y.getContext('2d');
    context.clearRect(0, 0, y.width, y.height);

    var opacity_val = document.getElementById('myRange2').value;

    if (opacity_val >= 5) {
      opacity_val == 10;
    } 

    //var squaretime = document.getElementById("starveCanvas");
    var sqt= y.getContext("2d");
    sqt.globalAlpha = (10-opacity_val)/10;

    sqt.beginPath();
    sqt.rect(0, 0, 80, 80);
    sqt.fillStyle = 'green';
    sqt.fill();
    sqt.stroke();

    console.log(sqt.globalAlpha);
// updates modal dialogue timeout
    if (sqt.globalAlpha >= 0.5) {
      setTimeout(alert("Animals are about to starve soon..."), 1000);
    }
  }


//finished the task at 95% saturation of yellow square
check_time = function() {
 var y = document.getElementById("timeCanvas")
  var sqt= y.getContext("2d");
 if (sqt.globalAlpha >= 0.95) {
 console.log(sqt.globalAlpha);
   window.location.href = "https://cardiffunipsych.eu.qualtrics.com/jfe/form/SV_9FR5gy1WPYEPToh";
 }
}


},
        "run": function anonymous(
) {
debugger
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(300, 300, 250, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(125,125);
ctx.lineTo(475,475);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(125,475);
ctx.lineTo(475, 125);
ctx.stroke();


  var squaretime = document.getElementById("starveCanvas");
  var sqt= squaretime.getContext("2d");
  sqt.globalAlpha = 0.1;
  sqt.beginPath();
  sqt.rect(0, 0, 80, 80);
  sqt.fillStyle = "green";
  sqt.fill();
  sqt.stroke();


    var squaretime = document.getElementById("timeCanvas");
  var sqt= squaretime.getContext("2d");
  sqt.globalAlpha = 0.1;
  sqt.beginPath();
  sqt.rect(0, 0, 80, 80);
  sqt.fillStyle = "yellow";
  //cir.globalAlpha = 0.4;
  sqt.fill();
  sqt.stroke();




var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
 var value_global = document.getElementById('myRange').value;


function toggleModal() {
    setTimeout(function() {
        modal.classList.toggle("show-modal");
    }, value_global*1000)
}

function closeModalNow() {
  modal.classList.toggle("show-modal");
  document.querySelector('input[name="conf1d3nce"]').value = null;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, 600, 600);

ctx.globalAlpha = 1.0;
ctx.beginPath();
ctx.arc(300, 300, 250, 0, 2 * Math.PI);
ctx.stroke();

ctx.globalAlpha = 1.0;
ctx.beginPath();
ctx.moveTo(125,125);
ctx.lineTo(475,475);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(125,475);
ctx.lineTo(475, 125);
ctx.stroke();
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", closeModalNow);

}
      },
      "title": "TASK",
      "content": "\r\n    \r\n    \u003Cdiv class=\"panel panel-info\"\u003E\r\n    \u003Cstrong\u003E  \u003Cdiv class=\"panel-heading\"\u003EReminder\u003C\u002Fdiv\u003E \u003C\u002Fstrong\u003E\r\n      \u003Cdiv class=\"panel-body\"\u003E    \r\n        \u003Cli\u003EYou must find the safest direction to travel the Ark in and stop the animals from starving on the boat\u003C\u002Fli\u003E\r\n      \u003Cstrong\u003E Remember \u003C\u002Fstrong\u003E  \r\n            \u003Cli\u003E The darker the \u003Cstrong\u003E \u003Cspan style=\"color: blue;\"\u003Eblue\u003C\u002Fspan\u003E \u003C\u002Fstrong\u003E of the slider, the more food you have given\r\n          \u003C\u002Fli\u003E\r\n        \u003Cli\u003E The darker the \u003Cstrong\u003E \u003Cspan style=\"color: red;\"\u003Ered\u003C\u002Fspan\u003E \u003C\u002Fstrong\u003E mackerel observation the safer the direction is to travel in \u003C\u002Fli\u003E \r\n        \u003Cli\u003E The darker the \u003Cstrong\u003E \u003Cspan style=\"color: green;\"\u003Egreen\u003C\u002Fspan\u003E \u003C\u002Fstrong\u003E square, the more starved the animals are on the boat \u003C\u002Fli\u003E \r\n        \u003Cli\u003E The darker the \u003Cstrong\u003E \u003Cspan style=\"color: orange;\"\u003Eorange\u003C\u002Fspan\u003E \u003C\u002Fstrong\u003E square, the less time you have to complete both tasks \u003C\u002Fli\u003E\u003C\u002Fdiv\u003E\r\n        \u003Cbr\u003E\r\n        Please wait for \u003Cstrong\u003EBOTH\u003C\u002Fstrong\u003E the \u003Cstrong\u003EMACKEREL OBSERVATION\u003C\u002Fstrong\u003E and the \u003Cstrong\u003EPOP-UP\u003C\u002Fstrong\u003E to show on your screen before you continye\r\n    \u003C\u002Fdiv\u003E\r\n\r\n\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1\"\u003E\r\n\u003Cstyle\u003E\r\n.slidecontainer {\r\n  width: 100%;\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 25px;\r\n  background: linear-gradient(to right, white, blue);\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: .2s;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider2 {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 25px;\r\n  background: linear-gradient(to right, white, blue);\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: .2s;\r\n  transition: opacity .2s;\r\n}\r\n.slider2:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider2::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #4CAF50;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider2::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #4CAF50;\r\n  cursor: pointer;\r\n}\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #4CAF50;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #4CAF50;\r\n  cursor: pointer;\r\n}\r\n\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cstrong\u003E \u003Cp\u003EMove the slider to split the food resource.\u003C\u002Fp\u003E \u003C\u002Fstrong\u003E\r\n\r\n\u003Cstrong\u003E Food for the MACKEREL \u003C\u002Fstrong\u003E\r\n\r\n\u003Cdiv class=\"slidecontainer\"\u003E\r\n  \u003Cinput type=\"range\" min=\"0\" max=\"10\" value=\"5\" class=\"slider\" id=\"myRange\" onchange=\"updateTwo(this.value);\"\u003E\r\n  \u003Cspan id=\"demo\" visibility: hidden\u003E\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cstrong\u003E Food for the ANIMALS ON THE BOAT \u003C\u002Fstrong\u003E\r\n\r\n\u003Cdiv class=\"slidecontainer\"\u003E\r\n  \u003Cinput type=\"range\" min=\"0\" max=\"10\" value=\"5\" class=\"slider2\" id=\"myRange2\" onchange=\"updateOne(this.value);\"\u003E\r\n\u003Cspan id=\"demo2\" visibility: hidden\u003E\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv class=\"styling\"\u003E\r\n\u003Cdiv class=\"general_text_2\"\u003E\r\n\u003Cp\u003ETime left \u003C\u002Fp\u003E\r\n\u003Ccanvas id=\"timeCanvas\" width=\"80\" height=\"80\" style=\"border:1px solid #d3d3d3;\"\u003E\r\n\u003C\u002Fcanvas\u003E\r\n\r\n\u003Cp\u003EStarvation\u003C\u002Fp\u003E\r\n\u003Ccanvas id=\"starveCanvas\" width=\"80\" height=\"80\" style=\"border:1px solid #d3d3d3;\"\u003E\r\n\u003C\u002Fcanvas\u003E\r\n\r\n\u003Cbr\u003E\r\n\u003Cstrong\u003E \u003Cp\u003EPlease select a direction\u003Cspan id=\"demo\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E \u003C\u002Fstrong\u003E\r\n\u003Cbutton id=\"north\" onclick=\"updateDirectionNorth()\"\u003ENORTH\u003C\u002Fbutton\u003E\r\n\u003Cbutton id=\"west\" onclick=\"updateDirectionWest()\"\u003EWEST\u003C\u002Fbutton\u003E\r\n\u003Cbutton id=\"east\" onclick=\"updateDirectionEast()\"\u003EEAST\u003C\u002Fbutton\u003E\r\n\u003Cbutton id=\"south\" onclick=\"updateDirectionSouth()\"\u003ESOUTH\u003C\u002Fbutton\u003E\r\n\u003Cbr\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cstyle\u003E\r\n\r\n  .modal {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: scale(1.1);\r\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\r\n}\r\n.modal-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 20%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    padding: 1rem 1.5rem;\r\n    width: 24rem;\r\n    border-radius: 0.5rem;\r\n}\r\n.close-button {\r\n    float: right;\r\n    width: 1.5rem;\r\n    line-height: 1.5rem;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    border-radius: 0.25rem;\r\n    background-color: lightgray;\r\n}\r\n.close-button:hover {\r\n    background-color: darkgray;\r\n}\r\n.show-modal {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: scale(1.0);\r\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\r\n}\r\n\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cstrong\u003E \u003Cp\u003EPlease press ONCE after moving the slider and selecting a direction\u003C\u002Fp\u003E \u003C\u002Fstrong\u003E\r\n\r\n\u003Cbutton id=\"submit\" class=\"trigger\" onclick=\"submit()\"\u003ESUBMIT\u003C\u002Fbutton\u003E\r\n\u003Cdiv class=\"modal\"\u003E\r\n    \u003Cdiv class=\"modal-content\"\u003E\r\n          \u003Clabel\u003E\u003Cb\u003EBased on the information so far, please state the direction you would travel in if you had to make a decision? \u003C\u002Fb\u003E\u003C\u002Flabel\u003E\r\n        \u003Cp\u003E  \r\n     \r\n \u003Cinput class=\"topaftertrialquestions\" type=\"radio\" name=\"trialdirection\" id=\"northtrial unchecked=\"checked\"\u003E NORTH\r\n          \u003Cinput class=\"topaftertrialquestions\" type=\"radio\" name=\"trialdirection\" id=\"easttrial\" \"unchecked=\"checked\"\u003E EAST\r\n          \u003Cinput class=\"topaftertrialquestions\" type=\"radio\" name=\"trialdirection\" id=\"southtrial unchecked=\"checked\"\u003E SOUTH\r\n          \u003Cinput class=\"topaftertrialquestions\" type=\"radio\" name=\"trialdirection\" id=\"westtrial unchecked=\"checked\"\u003E WEST\r\n          \u003C\u002Fp\u003E\r\n        \u003Ch1\u003E\r\n          \u003Clabel\u003E\u003Cb\u003EPlease state your confidence with this decision (0-100%)\u003C\u002Fb\u003E\u003C\u002Flabel\u003E\r\n          \u003Cp\u003E\r\n         \u003Cinput class=\"bottomaftertrialquestions\" type=\"number\" placeholder=\"Type here\" name=\"conf1d3nce\"min=\"0\" max=\"100\" required\u003E\r\n          \u003C\u002Fp\u003E\r\n          \u003Cp\u003E\u003C\u002Fh1\u003E\r\n            \u003Cbutton type=\"submit\" class=\"close-button\"\u003ESAVE\u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cstyle\u003E\r\n\r\n.myCanvas {\r\n  position: absolute;\r\n  right: 100px;\r\n  top: 350px;\r\n}\r\n\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ccanvas class=\"myCanvas\" id=\"myCanvas\" width=\"600\" height=\"600\" style=\"border 12px solid black\" \u003E\r\n\u003C\u002Fcanvas\u003E \r\n\r\n\r\n\r\n\r\n\r\n\r\n"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain\u003E\n\u003Cform\u003E\n  \u003Clabel\u003E \u003Cb\u003E TIME IS UP. Noah needs an answer on which direction to sail the Ark. Based on all the evidence you have, please state the direction is the safest to travel in? \u003C\u002Fb\u003E \u003C\u002Flabel\u003E\n  \u003Cp\u003E\n  \u003Cinput class=\"finaltime\" type=\"radio\" name=\"modaldirection\" id=\"northmodal\"\n  unchecked=\"checked\"\u003E NORTH\n          \u003Cinput class=\"finaltime\" type=\"radio\" name=\"modaldirection\" id=\"eastmodal\" \"unchecked=\"checked\"\u003E EAST\n          \u003Cinput class=\"finaltime\" type=\"radio\" name=\"modaldirection\" id=\"southmodal\" unchecked=\"checked\"\u003E SOUTH\n          \u003Cinput class=\"finaltime\" type=\"radio\" name=\"modaldirection\" id=\"westmodal\" unchecked=\"checked\"\u003E WEST\n          \u003C\u002Fp\u003E\n\n          \u003Clabel\u003E\u003Cb\u003EPlease state your confidence with this decision (0-100%)\u003C\u002Fb\u003E\u003C\u002Flabel\u003E\n          \u003Cp\u003E\n         \u003Cinput class=\"finaltime\" type=\"number\" placeholder=\"Type here\" name=\"conf1d3nce\"min=\"0\" max=\"100\" required\u003E\n          \u003C\u002Fp\u003E\n    \u003Cp\u003E\n  \u003Cbutton class=\"finaltime\" type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n  \u003C\u002Fp\u003E\n\u003C\u002Fform\u003E\n\n\u003C\u002Fmain\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "POST TRIAL QUESTIONS"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain\u003E\n\u003Cform\u003E\n \u003Cp\u003E What was your general strategy for completing the study? \u003C\u002Fp\u003E\n  \u003Ctextarea name=\"lots_of_space\" type=\"text\" rows=\"15\" cols=\"75\"\u003E\n  \u003C\u002Ftextarea\u003E\n\n   \u003Cbutton type=\"submit\"\u003ECLICK TO CONTINUE\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "1) GENERAL STRATEGY"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain\u003E\n\u003Cform\u003E\n  \u003Cp\u003E What was the most salient information that informed your decision? \u003C\u002Fp\u003E\n  \u003Ctextarea name=\"lots_of_space\" type=\"text\" rows=\"15\" cols=\"75\"\u003E\n  \u003C\u002Ftextarea\u003E\n    \u003Cbutton type=\"submit\"\u003ECLICK TO CONTINUE\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "2) MOST SALIENT INFO"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain\u003E\n\u003Cform\u003E\n  \u003Cp\u003E If you had to guess the aim of the study, what would it be? \u003C\u002Fp\u003E\n  \u003Ctextarea name=\"lots_of_space\" type=\"text\" rows=\"15\" cols=\"75\"\u003E\n  \u003C\u002Ftextarea\u003E\n \u003Cbutton type=\"submit\"\u003ECLICK TO CONTINUE\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "3) GUESS AIM"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain\u003E\n  \u003Cform id=\"demographic1\"\u003E\n      \u003Cp\u003E What is your gender? \u003C\u002Fp\u003E\n  \u003Cinput name=\"gender\" required\u003E\n  \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "a) GENDER"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain\u003E\r\n  \u003Cform id=\"demographic2\"\u003E\r\n      \u003Cp\u003E What is your age? \u003C\u002Fp\u003E\r\n  \u003Cinput name=\"age\" type=\"number\" required\u003E\r\n  \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n\u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "b) AGE"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain\u003E\n  \u003Cform id=\"demographic3\"\u003E\n      \u003Cp\u003E What degree are you studying? \u003C\u002Fp\u003E\n  \u003Cinput name=\"undergraduate\"\u003E\n  \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "c) DEGREE CHOICE"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain\u003E\n  \u003Cform id=\"demographic4\"\u003E\n      \u003Cp\u003E Please rate how comfortable you are with your mathematical\u002Fstatistical abilites from 0 (\"I am not confident at all\") to 100 (\"I am very confident in my abilities\")\u003C\u002Fp\u003E\n      \n  \u003Cinput name=\"stats\"type=\"number\" min=\"0\" max=\"100\" required\u003E\n  \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "d) ABILITIES"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(q)": "continues"
      },
      "messageHandlers": {},
      "title": "DEBRIEF",
      "content": "\u003Chtml\u003E\u003Chead\u003E\r\n        \u003Cscript\u003E\r\n            function redirect() {\r\n            window.location.href = \"consentform.html\";\r\n            }\r\n        \u003C\u002Fscript\u003E\r\n    \u003C\u002Fhead\u003E\r\n    \u003Cbody\u003E\r\n\r\n\r\n    \u003Ch1\u003E Debrief \u003C\u002Fh1\u003E\r\n\u003Cdiv\u003E\u003Cbold\u003E \u003Cstrong\u003EPlease read the DEBRIEF. You have one final question after. If you have any questions please contact the experimenter.\u003C\u002Fstrong\u003E\u003C\u002Fbold\u003E\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv\u003EThank you very much for your participation. We would now like to tell you more about the research.\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv\u003EA lot of reviews have claimed that a lot of studies are underpowered and are unreplicable. Power is important in research as it tells us about the probability of finding a significant results. Many journals are now asking authors to provide a sample size justification based on statistical power. This can be staggering for first time researchers who have little or to no experience for what to expect.\u003C\u002Fdiv\u003E\r\n&nbsp;\r\n\r\n\u003Cdiv\u003EUndergraduates, Masters and PhD students can find it hard to transition between undergraduate and further education. They will be expected to perform multiple high-powered studies whilst managing time and resources. Though power analysis testing itself neglects lack of resources and time that a student might have to consider.Consequently, students may come to conclusion that the effect size they were examining is nowhere near to the expected amount they were led to believe.\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv\u003E&nbsp;\u003C\u002Fdiv\u003E\r\nAs a results, this study was devised to test participant behaviours when balancing resources between tasks under timer pressure. In fact, there was no time limit in this task, and we told you this as incentive to complete the study. To address our research question, participants were assigned to one of three conditions. This was either \u003Cp\u003E\u003C\u002Fp\u003E \u003Cli\u003E \u003Cstrong\u003E a high powered condition\u003C\u002Fstrong\u003E \u003C\u002Fli\u003E  \u003Cli\u003E  \u003Cstrong\u003Ea medium powered condition\u003C\u002Fstrong\u003E  \u003C\u002Fli\u003E  \u003Cli\u003E \u003Cstrong\u003Ea low powered condition\u003C\u002Fstrong\u003E  \u003C\u002Fli\u003E \u003Cp\u003E \u003C\u002Fp\u003E This was reflected in the task through the saturation of the circles fired onto the grid. The saturation reflected a loose equivalent to the statistical power of the observations the mackerel fish made.\u003Cbr\u003E\r\n&nbsp;\r\n\u003Cdiv\u003EIn the high powered condition the saturation of the circles in the correct direction generally had a greater red saturation than the saturation of the circles in the other directions.\u003Cbr\u003E\r\n\u003Cbr\u003E\r\nIn the medium powered condition the saturation of the circles in the correct direction generally had a intermediate&nbsp;red saturation than the saturation of the circles in the other directions.\u003Cbr\u003E\r\n\u003Cbr\u003E\r\nIn the lowpowered condition the saturation of the circle sin the correct direction&nbsp;generally had a low red saturation than the saturation of the circles in the other directions.\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cbr\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003EBased on this information, please answer the final question:\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cbr\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cbr\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cbr\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cbr\u003E\u003C\u002Fdiv\u003E\r\n      \u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E\r\n\r\n      \u003Cmain\u003E\r\n\u003Cform id=\"whatcondition\"\u003E\r\n\u003Ctable\u003E\r\n\u003Ctr\u003E\r\n  \u003Cth\u003E\r\n    \u003Clabel for=\"whatcondition\"\u003EBased on what you have learned from reading the debrief, what condition tdo you think you were randomly assigned to?\u003C\u002Flabel\u003E\r\n  \u003C\u002Fth\u003E\r\n  \u003Ctd\u003E\r\n    \u003Cselect name=\"whatcondtion\" id=\"whatcondition\"\u003E\r\n      \u003Coption disabled selected value\u003E -- select an option -- \u003C\u002Foption\u003E\r\n\u003Coption values=\"highpower\"\u003EThe HIGH POWERED condition\u003C\u002Foption\u003E\r\n\u003Coption values=\"mediumpower\"\u003EThe MEDIUM POWERED condtion\u003C\u002Foption\u003E\r\n\u003Coption values=\"lowpower\"\u003EThe LOW POWERED condition\u003C\u002Foption\u003E\r\n\r\n\u003C\u002Fselect\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003C\u002Ftable\u003E\r\n     \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n\u003C\u002Fform\u003E\r\n\u003C\u002Fmain\u003E"
    }
  ]
})

// Let's go!
study.run()