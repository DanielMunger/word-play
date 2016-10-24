
var split_sentence = function(sentence) {

  sentence = sentence.split(' ');
  return sentence;
};
var three_or_more = function(split) {
  split.forEach(function(str) {
    if(str.length > 3){
      alert(str);
      // var newArray = str.map(function(st) {
      //   return newArray;
      // });
    }
    else;
  });
};


//
$(document).ready(function() {

  $("form").submit(function(event) {


    var sentence = $("#sentence").val();

    var split = split_sentence(sentence);

    alert(split);
    three_or_more(split);


    event.preventDefault();
  });

});
