colors = ["#173F5F", "#20639B", "#3CAEA3", "#F6D55C", "#ED553B", "#f7929d"];
prev_index = 0;
$(".page-link").on("mouseenter", SwitchColor);
$(".page-link").on("mouseout", ResetColor);

function SwitchColor() {
  index = prev_index;
  while(index == prev_index) {
    index = Math.floor(Math.random()*colors.length);
  }
  prev_index = index;
  $("body").css("background-color", colors[index]);
  // $("svg text").css("fill", "red");
}

function ResetColor() {
  $("body").css("background-color", "#2c2c2c");
  // $("svg text").css("fill", "black");
}