onReady = function() {

  FastClick.attach(document.body);

  var $content = $(".content");
  var words = $content.html().trim().split(" ");

  $content.html("");

  for(var i = 0; i < words.length; i++) {
    var wordTag = '<div class="word">' + words[i] + '</div>';
    $content.append(wordTag);
  }

  // $(".word").hammer({})
  //   .on("dragstart", function(event) {
  //     $(this).addClass("word-hover");
  //   });


  // $(".word").hammer({})
  //   .on("dragend", function(event) {
  //     $(this).removeClass("word-hover");
  //   });


  // $(".word").hammer({})
  //   .on("touch", function(event) {
  //     // debugger;
  //     console.log($(event.target).html());
  //     $(event.currentTarget).addClass("word-hover");
  //   });


  // $(".word").hammer({})
  //   .on("hold", function(event) {
  //     // debugger;
  //     console.log($(event.target).html());
  //     $(event.currentTarget).addClass("word-hover");
  //   });

  // $(".word").on("touchstart", function(event){
  //   event.preventDefault();
  //   $(this).addClass('word-hover');
  // });


  // $(document).on("touchmove", function(event){
  //   event.preventDefault();
  //   $(".word").removeClass('word-hover');
  //   alert($(event.changedTouches[0].target));
  // });


  // $(".word").on("touchleave", function(event){
  //   alert("left");
  //   event.preventDefault();
  //   $(this).removeClass('word-hover');
  // });

}

$(document).ready(onReady);
