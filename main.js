var old_p;
$("document").ready(function(){
  $(".project > a > img").hover(
    function(){
       old_p = $(this).parent().parent().children("div").children("a").children("p").html();
      $(this).parent().parent().children("div").children("a").children("p").html("<p>View Live</p>");
    },
    function(){
      $(this).parent().parent().children("div").children("a").children("p").html(old_p);
    }
  );

  $(".project-description").hover(
    function(){
      old_p = $(this).children("a").children("p").html();
      $(this).children("a").children("p").html("<p>View Code</p>");
    },
    function() {
      $(this).children("a").children("p").html(old_p);
    }
  )

  // $(".project").hover(
  //   function(){
  //      old_p = $(this).children("div").children("p").html()
  //     $(this).children("div").children("p").html("<p>View Live</p>");
  //   },
  //   function(){
  //     $(this).children("div").children("p").html(old_p);
  //   }
  // );

  $(".")

})
