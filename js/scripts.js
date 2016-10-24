var newArray = [];
var split_sentence = function(sentence) {

  sentence = sentence.split(' ');
  return sentence;
};
var three_or_more = function(split) {
  split.forEach(function(str) {
    if(str.length > 3){

      newArray.push(str);
      alert(newArray);
    }

    return newArray;


  });
};


//
$(document).ready(function() {

  $("form").submit(function(event) {


    var sentence = $("#sentence").val();

    var split = split_sentence(sentence);


    three_or_more(split);

    event.preventDefault();
  });

});
