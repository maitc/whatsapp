$(document).ready(function(){
	$(".fa-microphone").click(function(){
		var input = $(".input-c").val();
		//se imprime
		$(".mensaje").append("<div class='row'><div class='offset-m7 col m5 burbu'><div class='burbuja-propia'><p>" + input + "</p></div></div></div>");
		//Se limpia input
		$('.input-c').val("");
	})

	//redireccionando conversaciones
	$(".primera-conversacion").click(function(){
		$(".primera-conversacion").attr("href", "index.html");
	})
	$(".segunda-conversacion").click(function(){
		$(".segunda-conversacion").attr("href", "index-dos.html");
	})
})