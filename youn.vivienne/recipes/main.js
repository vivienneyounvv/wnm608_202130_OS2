$(document).ready(function() {
	$("article:first").show().siblings().hide();

		$("li").on("click", function() {


		let i = $(this).index();
		$("article").eq(i).show().siblings().hide();
			$(this).addClass("active").siblings().removeClass("active");
		});
});