var old_p;
$("document").ready(function(){
  $(".project > a > img").hover(
    // change the paragraph below the image to view live when the image is hovered over
    function(){
       old_p = $(this).parent().parent().children("div").children("a").children("p").html();
      $(this).parent().parent().children("div").children("a").children("p").html("<p>View Live</p>");
    },
    function(){
      $(this).parent().parent().children("div").children("a").children("p").html(old_p);
    }
  );

  $(".project-description").hover(
    // change the paragraph below the image to view code when the paragraph block is hovered over
    function(){
      old_p = $(this).children("a").children("p").html();
      $(this).children("a").children("p").html("<p>View Code</p>");
    },
    function() {
      $(this).children("a").children("p").html(old_p);
    }
  )


})
