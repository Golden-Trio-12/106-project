function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JHj0adXqb/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResuts);
}
var dog=0;
var cat=0;
var lion=0;
var mouse=0;

function gotResults(error, results) {
    if (error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;


        document.getElementById("result_label").innerHTML = 'Detected voice is of - '+result[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - ' +cat+ 'Detected Lion - ' +lion+ 'Detected Mouse' +mouse;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    img = document.getElementById('animal_image');

    if (results[0].label == "Dog") {
      img.src = dog.jpeg';
      dog = dog+1;
    } else if (results[0].label == "Cat") {
      img.src = 'cat.jpeg';
      cat = cat + 1;
    } else if (results[0].label == "Lion") {
        img.src = 'lion.jpeg';
        lion = lion + 1;
    } else if (results[0].label == "Mouse") {
        img.src = 'mouse.jpeg';
        mouse = mouse + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}

