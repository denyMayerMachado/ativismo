$('.creditos').on('click', function () {
    $('.tela-creditos').toggleClass('is-hidden');
    var divcredito = document.querySelector("#creditos");
    divcredito.classList.add("blurdiv");
    document.querySelector("#iframeCredito").src = "../../CREDITOS/creditos_iframe.html";
});
$('.fechar-creditos').on('click', function () {
    $('.tela-creditos').toggleClass('is-hidden');
    window.parent.document.querySelector("#iframeCredito").src = "";
});

$('.resposta').on('click', function(){
	$(this).parent().parent().parent().addClass('hidden');
	$(this).parent().parent().parent().next().removeClass('hidden');

	var resultado = $('.resultado h2').text();
	console.log(resultado);

	if (resultado == 150) {
		$('.feedback').text('Você é ativista, tem atitude e não tolera injustiças. Você assume uma posição ativa no seu próprio processo de desenvolvimento e aprendizagem, sem medo de opinar e defender seus ideais. Você já é a mudança que quer ver no mundo. Continue assim! ');
	} else if (resultado > 99 && resultado < 146 ) {
		$('.feedback').text('Você se identifica com o ativismo e acha que é muito importante agir ao invés de esperar que outras pessoas façam algo para que mudanças aconteçam. Que tal soltar ainda mais a sua voz? Seja você a mudança que você quer ver no mundo!');
		$('.again').text('');
	} else if (resultado > 49 && resultado < 96 ) {
		$('.feedback').text('Talvez você não se identifique com o ativismo e ache que ele não seja algo necessário. Contudo, é sempre importante lembrar que devemos agir quando notamos que os outros não farão aquilo que acreditamos ser necessário e justo. Seja você a mudança que você quer ver no mundo!');
		$('.again').text('');

	}
});

$('.resposta').on('click', function(){
	$('.resposta').removeClass('selecionado')
	$('.resposta').next('.bt-proximo').removeClass('hidden');
    $(this).addClass('selecionado');
});

$(".bt-proximo").click(function() {
    $("html").animate({ scrollTop: 0 }, "slow");
});

var backLog = [];

function calc(e){
	var $el = $(e);
	var val = $el.data('val');
	var pos = $el.data('pos');
	var calc;
	var expectativa = 0;

	backLog[pos] = val;
	for (var i = 0; i < backLog.length; i++ ){
		calc = calc + backLog[i];
	};

	expectativa = addbits(expectativa + calc);
	console.log(calc);

	$('.resultado h2').text(expectativa);
	console.log(backLog);
};

function addbits(s) {
    return (s.replace(/\s/g, '').match(/[+\-]?([0-9\.]+)/g) || [])
        .reduce(function(sum, value) {
            return parseFloat(sum) + parseFloat(value);
        });
}

$('.next').on('click', function () {
	$(this).parent().parent().parent().parent().addClass('hidden');
	$(this).parent().parent().parent().parent().next().removeClass('hidden');
});

$('.refresh').on('click', function () {
	location.reload();
})