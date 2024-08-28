$(document).ready(function () {
 
  $(".section-one li a").hover(
    function () {
      $(this).css("color", "#FFFFFF");
    },
    function () {
      $(this).css("color", "#8D91A3");
    }
  );

  
  $(".buy-button").click(function () {
    alert("Thank you for your purchase!");
  });

 
  $(".star-rating .star").hover(
    function () {
      $(this).css({
        transform: "scale(1.2)",
        transition: "transform 0.1s ease-in-out",
      });
    },
    function () {
      $(this).css("transform", "scale(1)");
    }
  );

  
  $(".text-1").click(function () {
    $(".text-3").toggle(500);
  });

 
  $(".section-one li a").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });

  
  function animateScore(score) {
    const $scoreText = $(".score-text");
    let currentScore = 0;

    const scoreInterval = setInterval(function () {
      if (currentScore < score) {
        currentScore += 0.1;
        $scoreText.text(currentScore.toFixed(1));
      } else {
        clearInterval(scoreInterval);
        $scoreText.text(score.toFixed(1));
      }
    }, 20);

    $(".score-container").css({
      transform: "rotate(360deg)",
      transition: "transform 1s",
    });
  }

  animateScore(8.7);

  
  function animateStars() {
    $(".star").each(function (index) {
      $(this)
        .delay(index * 100)
        .fadeIn(200);
    });
  }

  $(".star").hide();
  animateStars();


  $(".star").hover(
    function () {
      $(this).css({
        transform: "scale(1.2)",
        transition: "transform 0.1s ease-in-out",
      });
    },
    function () {
      $(this).css("transform", "scale(1)");
    }
  );

  
  $(".score-container").hover(
    function () {
      $(this).find(".score").css({
        transform: "scale(1.2)",
        transition: "transform 0.3s ease-in-out",
        "box-shadow": "0 0 10px 2px rgba(0, 255, 200, 0.8)",
      });
    },
    function () {
      $(this).find(".score").css({
        transform: "scale(1)",
        "box-shadow": "none",
      });
    }
  );
});
