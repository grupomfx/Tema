$(function () {

	top.$('[data-send][type="button"]').html('Aprovar');

});

/*Atualização de lista via campo*/

$(document).ready(function () {

	var atividade = $("#atividade").val();

	if (!getMobile()) {
		inicializarDados()
	} else {

		inicializarDadosMobile()
		$('.dtr-expanded').css('border-top', '7px solid black');
	}

	var camposMoedas = ["valorMercadoria", "totalPedido", "totalDesc", "frete"];

	for (var index in camposMoedas) {
		var campo = camposMoedas[index];
		if ($("#" + campo).val()) {
			var valor = formatarMoeda($("#" + campo).val());
			$("#" + campo).val(valor);
		}
	}

})

window.addEventListener('resize', function () {


	var table = $('#tabelaItens').DataTable();
	table.destroy();
	if (!getMobile()) {
		inicializarDados()
	} else {
		inicializarDadosMobile()
		$('.dtr-expanded').css('border-top', '7px solid black');
	}
});

function loadAnexo() {
	let codAnexo = $("#codAnexo").val();
	if (codAnexo != "") {
		$("#anexo").attr("href", "http://138.219.100.154:8090/portal/p/1/ecmnavigation?app_ecm_navigation_doc=" + codAnexo)
		//$("#anexo").attr("href","http://138.219.100.154:8090/portal/p/1/ecmnavigation?app_ecm_navigation_doc="+nr)
	} else {
		var myModal = FLUIGC.modal({
			title: 'ANEXO',
			content: '<h1>Não existe anexo!</h1>',
			id: 'fluig-modal',
			actions: [{
				'label': 'Save',
				'bind': 'data-open-modal',
			}, {
				'label': 'Close',
				'autoClose': true
			}]
		}, function (err, data) {
			if (err) {
				// do error handling
			} else {
				// do something with data
			}
		});
		FLUIGC.modal("divAnexo");
	}
}

function formataValorMoedaCampo(campo) {

	//Para valores não convertidos - já preenchidos	
	var valorCampo = parseFloat(campo.value).toFixed(2);

	txt = somenteNumeros(valorCampo);

	//	txt = somenteNumeros(campo.value);

	while (txt.indexOf("0") == 0 && txt.length >= 0) {
		txt = txt.substring(1);
	}
	if (txt.length == 0) {
		saida = "0,00";
	} else if (txt.length == 1) {
		saida = "0,0" + txt;
	} else if (txt.length == 2) {
		saida = "0," + txt;
	} else {
		var r = (txt.length - 2) % 3;
		saida = txt.substring(0, r);
		for (var i = r; i < txt.length - 2; i += 3) {
			if (saida.length > 0)
				saida += ".";
			saida += txt.substring(i, i + 3);
		}
		saida += "," + txt.substring(txt.length - 2);
	}
	campo.value = saida;
}

function formataValorMoedaTexto(txt) {

	//Para valores não convertidos - já preenchidos
	txt = parseFloat(txt).toFixed(2);

	if (isNaN(txt)) {

		return "0,00";
	}

	txt = txt + "";
	txt = txt.replace(/\,/g, '').replace(/\./g, '');
	while (txt.indexOf("0") == 0 && txt.length >= 0) {
		txt = txt.substring(1);
	}
	if (txt.length == 0) {
		saida = "0,00";
	} else if (txt.length == 1) {
		saida = "0,0" + txt;
	} else if (txt.length == 2) {
		saida = "0," + txt;
	} else {
		var r = (txt.length - 2) % 3;
		saida = txt.substring(0, r);
		for (var i = r; i < txt.length - 2; i += 3) {
			if (saida.length > 0)
				saida += ".";
			saida += txt.substring(i, i + 3);
		}
		saida += "," + txt.substring(txt.length - 2);
	}
	return saida;
}

function formatarCampoComoMoeda(campo) {
	var valorAtual = campo.value;
	var valorNumerico = valorAtual.replace(/[^0-9]/g, '');
	var valorFormatado = (Number(valorNumerico) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	campo.value = formatarMoeda(valorFormatado);
}

function somenteNumeros(txt) {

	//Verifica se não é um digito
	var er = /\D/;
	var valor = txt.replace(/\,/g, '').replace(/\./g, '').replace(/ /g, '');

	if (valor.search(er) >= 0) {

		valor = valor.substr(0, valor.search(er));
	}

	return valor;
}

function removerCaracteresEspeciais(campo) {
	var textoAtual = campo.value;
	campo.value = textoAtual.replace(/[^a-zA-Z0-9]/g, '');
}

function montaConstraintItensCotacao() {


	var itens = $('[name^="vlrUnitario___"]');
	var indiceItem;
	var qtdItem;
	var valorItem;
	var valorFrete;
	var listaItens = [];
	var item;

	for (var i = 0; i < itens.length; i++) {

		item = {};

		indiceItem = itens[i].name.split("___")[1];
		valorItem = parseFloat(itens[i].value.replace(/\./g, '').replace(/\,/g, '.'));
		valorFrete = parseFloat($('#vlrFrete___' + indiceItem).val().replace(/\./g, '').replace(/\,/g, '.'));
		qtdItem = parseFloat($('#qtdProduto___' + indiceItem).val().replace(/\./g, '').replace(/\,/g, '.'));

		item.indiceFluig = indiceItem;
		item.vlrFrete = parseFloat(valorFrete).toFixed(2);
		item.vlrUnitario = parseFloat(valorItem).toFixed(2);
		//	    item.vlrTotalItem = ((valorItem*qtdItem)+valorFrete).toFixed(2);
		item.vlrTotalItem = ((valorItem * qtdItem)).toFixed(2);
		item.obs = removeAcentoMantemNumero($('#obs___' + indiceItem).val());

		listaItens.push(item);

	}

	return (JSON.stringify(listaItens));

}

function totalPedidoCompra() {

	var totaisItens = $('[name^="totalItem___"]');
	var total = 0.00;

	for (var i = 0; i < totaisItens.length; i++) {

		indiceItem = totaisItens[i].name.split("___")[1];

		total += parseFloat(totaisItens[i].value.replace(/\./g, '').replace(/\,/g, '.'));
	}

	$('#totalPedido').val(formataValorMoedaTexto(parseFloat(total).toFixed(2)));

}

function beforeSendValidate(numState, nextState) {
	$('#proximaAtividade').val(nextState);

}

function inicializarDados() {

	var empresa = $("#codEmpresa").val();
	var filial = $("#codFilial").val();

	//Atividade analisa aprovação 
	if (atividade.value != '157' && atividade.value != 'undefined') {

		var nivel = retornaNivel(atividade.value)
		var usuarioProtheus = $("#CR_USER_" + nivel).val();
		var aprovadorProtheus = $("#CR_APROV_" + nivel).val();
	}

	var pedido = $("#numPedido").val();
	var j = 0
	var i = 0
	var lContinua = false

	// Obtém o valor do campo hidden
	var jsonStr = $("#itens").val();

	//Consultas
	var centoCustoAprovador = DatasetFactory.getDataset("dsRestRetornoCustoPorAprovador", [empresa, filial, usuarioProtheus, aprovadorProtheus], null, null);

	if (pedido != '') {
		var valorRatiado = DatasetFactory.getDataset("dsRestRetornoValorRatiado", [empresa, filial, pedido, centoCustoAprovador.values[0].DBL_CC], null, null);
		lContinua = true
	}

	// Converte o JSON para um objeto JavaScript
	var json = JSON.parse(jsonStr);
	var totalSaldos = 0;

	//Altera Valor total ratiado
	if (lContinua) {

		for (var i = 0; i < json.length; i++) {

			for (var j = 0; j < valorRatiado.values.length; j++) {

				if (json[i].C7_ITEM == valorRatiado.values[j].C7_ITEM) {

					json[i].C7_TOTAL = valorRatiado.values[j].C7_TOTAL

				}
			}

		}
	}


	$('#tabelaItens').DataTable({
		autoWidth: false,
		pageLength: 50,
		responsive: false,
		scrollX: true,
		dom: "t",
		columns: [
			{ "data": "C7_ITEM", "title": "Item" },
			{ "data": "C7_PRODUTO", "title": "Produto" },
			{ "data": "C7_DESCRI", "title": "Descrição" },
			{ "data": "C7_QUANT", "title": "Qtd." },
			{ "data": "C7_UM", "title": "UM" },
			{ "data": "C7_PRECO", "title": "Preço&nbsp&nbsp&nbsp" },
			{ "data": "C7_TOTAL", "title": "Total&nbsp&nbsp&nbsp&nbsp&nbsp" },
			{ "data": "C7_CC", "title": "C.Custo" },
			{ "data": "Budget", "title": "Budget" },
			{ "data": "Ult_PRECO", "title": "UltPreço" },
			{ "data": "C7_NUMSC", "title": "Solicitação" },
			{ "data": "C7_NUMCOT", "title": "Cotação" },
			{ "data": "C7_OBS", "title": "Observação" }
		],
		columnDefs: [
			{ "targets": 0 },
			{ "targets": 1 },
			{ "targets": 2 },
			{ "targets": 3 },
			{ "targets": 4 },
			{
				"targets": 5, "render": function (data, type, row, meta) {
					return '<span style="white-space:nowrap">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
				}
			},
			{
				"targets": 6, "render": function (data, type, row, meta) {
					return '<span style="white-space:nowrap">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
				}
			},
			{ "targets": 7 },
			{
				"targets": 8, "render": function (data, type, row, meta) {
					return '<span style="white-space:nowrap">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
				}
			},
			{
				"targets": 9, "render": function (data, type, row, meta) {
					return '<span style="white-space:nowrap">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
				}
			},
			{ "targets": 10 },
			{ "targets": 11 },
			{ "targets": 12 }

		],
		data: json,
	});

}

// function inicializarDados() {

// 	var empresa = $("#codEmpresa").val();
// 	var filial = $("#codFilial").val();

// 	//Atividade analisa aprovação 
// 	if (atividade.value != '157' && atividade.value != 'undefined') {

// 		var nivel = retornaNivel(atividade.value)
// 		var usuarioProtheus = $("#CR_USER_" + nivel).val();
// 		var aprovadorProtheus = $("#CR_APROV_" + nivel).val();
// 	}

// 	var pedido = $("#numPedido").val();
// 	var j = 0
// 	var i = 0
// 	var lContinua = false

// 	// Obtém o valor do campo hidden
// 	var jsonStr = $("#itens").val();

// 	//Consultas
// 	var centoCustoAprovador = DatasetFactory.getDataset("dsRestRetornoCustoPorAprovador", [empresa, filial, usuarioProtheus, aprovadorProtheus], null, null);

// 	if (pedido != '') {
// 		var valorRatiado = DatasetFactory.getDataset("dsRestRetornoValorRatiado", [empresa, filial, pedido, centoCustoAprovador.values[0].DBL_CC], null, null);
// 		lContinua = true
// 	}

// 	// Converte o JSON para um objeto JavaScript
// 	var json = JSON.parse(jsonStr);
// 	var totalSaldos = 0;

// 	//Altera Valor total ratiado
// 	if (lContinua) {

// 		for (var i = 0; i < json.length; i++) {

// 			for (var j = 0; j < valorRatiado.values.length; j++) {

// 				if (json[i].C7_ITEM == valorRatiado.values[j].C7_ITEM) {

// 					json[i].C7_TOTAL = valorRatiado.values[j].C7_TOTAL

// 				}
// 			}

// 		}
// 	}


// 	$('#tabelaItens').DataTable({
// 		autoWidth: false,
// 		pageLength: 50,
// 		responsive: {
// 			details: {
// 				display: DataTable.Responsive.display.childRowImmediate,
// 				target: '',
// 				type: 'none'
// 			}
// 		},
// 		 dom: "<'row'<'col-xs-12't>><'row tabela-rodape'<'col-xs-12 col-md-5'i><'col-xs-12 col-md-7'p>>",
// 		 language: {
// 		 	thousands: ".",
// 		 	zeroRecords: "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Nenhum item localizado",
// 		 	emptyTable: "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Nenhum item localizado",
// 		 	info: "Exibindo _TOTAL_ itens",
// 		 	infoEmpty: "Nenhum item localizado",
// 		 	infoFiltered: '(50)',
// 		 	paginate: {
// 		 		first: "Primeira",
// 		 		previous: "Anterior",
// 		 		next: "Próxima",
// 		 		last: "Última"
// 		 	},
// 		 },
// 		 "searching": true,
// 		columns: [
// 			{ "data": "C7_ITEM", "title": "Item" },
// 			{ "data": "C7_PRODUTO", "title": "Produto" },
// 			{ "data": "C7_DESCRI", "title": "Descrição" },
// 			{ "data": "C7_QUANT", "title": "Qtd." },
// 			{ "data": "C7_UM", "title": "UM" },
// 			{ "data": "C7_PRECO", "title": "Preço&nbsp&nbsp&nbsp" },
// 			{ "data": "C7_TOTAL", "title": "Total&nbsp&nbsp&nbsp&nbsp&nbsp" },
// 			{ "data": "C7_CC", "title": "C.Custo" },
// 			{ "data": "Budget", "title": "Budget" },
// 			{ "data": "Ult_PRECO", "title": "UltPreço" },
// 			{ "data": "C7_NUMSC", "title": "Solicitação" },
// 			{ "data": "C7_NUMCOT", "title": "Cotação" },
// 			{ "data": "C7_OBS", "title": "Observação" }
// 		],
// 		columnDefs: [
// 			{ "targets": 0 },
// 			{ "targets": 1 },
// 			{ "targets": 2 },
// 			{ "targets": 3 },
// 			{ "targets": 4 },
// 			{
// 				"targets": 5, "render": function (data, type, row, meta) {
// 					return '<span style="white-space:nowrap">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
// 				}
// 			},
// 			{
// 				"targets": 6, "render": function (data, type, row, meta) {
// 					return '<span style="white-space:nowrap">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
// 				}
// 			},
// 			{ "targets": 7 },
// 			{
// 				"targets": 8, "render": function (data, type, row, meta) {
// 					return '<span style="white-space:nowrap">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
// 				}
// 			},
// 			{
// 				"targets": 9, "render": function (data, type, row, meta) {
// 					return '<span style="white-space:nowrap">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
// 				}
// 			},
// 			{ "targets": 10 },
// 			{ "targets": 11 },
// 			{ "targets": 12 }

// 		],
// 		data: json,
// 	});

// }

function inicializarDadosMobile() {

	var empresa = $("#codEmpresa").val();
	var filial = $("#codFilial").val();

	if (atividade.value != '157' && atividade.value != 'undefined') {
		var nivel = retornaNivel(atividade.value);
		var usuarioProtheus = $("#CR_USER_" + nivel).val();
		var aprovadorProtheus = $("#CR_APROV_" + nivel).val();
	}
	if (atividade.value != '137') {
		lContinua = true;
	}

	var pedido = $("#numPedido").val();
	var j = 0;
	var i = 0;
	var lContinua = false;

	var jsonStr = $("#itens").val();

	var centoCustoAprovador = DatasetFactory.getDataset("dsRestRetornoCustoPorAprovador", [empresa, filial, usuarioProtheus, aprovadorProtheus], null, null);

	if (pedido != '') {
		var valorRatiado = DatasetFactory.getDataset("dsRestRetornoValorRatiado", [empresa, filial, pedido, centoCustoAprovador.values[0].DBL_CC], null, null);
		lContinua = true;
	}

	var json = JSON.parse(jsonStr);
	var totalSaldos = 0;

	if (lContinua) {
		for (var i = 0; i < json.length; i++) {
			for (var j = 0; j < valorRatiado.values.length; j++) {
				if (json[i].C7_ITEM == valorRatiado.values[j].C7_ITEM) {
					json[i].C7_TOTAL = valorRatiado.values[j].C7_TOTAL;
				}
			}
		}
	}

	let tabela = $('#tabelaItens').DataTable({
		autoWidth: false,
		pageLength: 50,
		responsive: {
			details: {
				display: DataTable.Responsive.display.childRowImmediate
			}
		},
		dom: "<'row'<'col-xs-12't>><'row tabela-rodape'<'col-xs-12 col-md-5'i><'col-xs-12 col-md-7'p>>",
		language: {
			thousands: ".",
			zeroRecords: "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Nenhum item localizado",
			emptyTable: "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Nenhum item localizado",
			info: "Exibindo _TOTAL_ itens",
			infoEmpty: "Nenhum item localizado",
			infoFiltered: '(50)',
			paginate: {
				first: "Primeira",
				previous: "Anterior",
				next: "Próxima",
				last: "Última"
			},
		},
		searching: true,
		columns: [
			{ "data": "C7_ITEM", "title": "Item", "className": "itemIndice" },
			{ "data": "C7_PRODUTO", "title": "Produto" },
			{ "data": "C7_DESCRI", "title": "Descrição" },
			{ "data": "C7_QUANT", "title": "Qtd." },
			{ "data": "C7_UM", "title": "UM" },
			{
				"data": "C7_PRECO",
				"title": "Preço",
				"render": function (data) {
					return `<span style="white-space:nowrap;">R$ ${parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>`;
				}
			},
			{
				"data": "C7_TOTAL",
				"title": "Total",
				"render": function (data) {
					return `<span style="white-space:nowrap;">R$ ${parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>`;
				}
			},
			{ "data": "C7_CC", "title": "C.Custo" },
			{ "data": "Budget", "title": "Budget" },
			{
				"data": "Ult_PRECO",
				"title": "UltPreço",
				"render": function (data) {
					return `<span style="white-space:nowrap;">R$ ${parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>`;
				}
			},
			{ "data": "C7_NUMSC", "title": "Solicitação" },
			{ "data": "C7_NUMCOT", "title": "Cotação" },
			{ "data": "C7_OBS", "title": "Observação" }
		],
		data: json
	});

	// Aplica estilos nos títulos e dados do modo responsivo mobile
	tabela.on('responsive-display.dt', function () {
		// $('.dtr-title, .dtr-data').css({
		// 	'text-align': 'left',
		// 	'padding-left': '10px',
		// 	'display': 'block'
		// });

		// segunda aplicacao css

		// $('.dtr-title').css({
		// 	'text-align': 'left',
		// 	'padding-left': '6px',
		// 	'font-weight': 'bold',
		// 	'display': 'inline-block',
		// 	'min-width': '35%', // reserva espaço fixo para o título
		// 	'vertical-align': 'top'
		// });

		// $('.dtr-data').css({
		// 	'text-align': 'left',
		// 	'display': 'inline-block',
		// 	'width': '63%', // ocupa o restante da linha
		// 	'padding-left': '2px',
		// 	'vertical-align': 'top'
		// });

		// terceira aplicacáo css

		$('.dtr-title').css({
			'text-align': 'left',
			'padding-left': '6px',
			'font-weight': 'bold',
			'display': 'inline-block',
			'min-width': '35%',
			'vertical-align': 'top',
			'white-space': 'normal', // permite quebra de linha no título, se necessário
			'word-wrap': 'break-word'
		});

		$('.dtr-data').css({
			'text-align': 'left',
			'display': 'inline-block',
			'width': '60%',
			'padding-left': '2px',
			'vertical-align': 'top',
			'white-space': 'normal', // permite quebra de linha no conteúdo
			'word-wrap': 'break-word',
		});

	});

	// Aplica na carga inicial também
	setTimeout(() => {
		// $('.dtr-title, .dtr-data').css({
		// 	'text-align': 'left',
		// 	'padding-left': '10px',
		// 	'display': 'block'
		// });

		// segunda aplicacao

		$('.dtr-title').css({
			'text-align': 'left',
			'padding-left': '6px',
			'font-weight': 'bold',
			'display': 'inline-block',
			'min-width': '35%', // reserva espaço fixo para o título
			'vertical-align': 'top'
		});

		$('.dtr-data').css({
			'text-align': 'left',
			'display': 'inline-block',
			'width': '63%', // ocupa o restante da linha
			'padding-left': '2px',
			'vertical-align': 'top'
		});

		// terceira aplicacao

		$('.dtr-title').css({
			'text-align': 'left',
			'padding-left': '6px',
			'font-weight': 'bold',
			'display': 'inline-block',
			'min-width': '35%',
			'vertical-align': 'top',
			'white-space': 'normal', // permite quebra de linha no título, se necessário
			'word-wrap': 'break-word'
		});

		$('.dtr-data').css({
			'text-align': 'left',
			'display': 'inline-block',
			'width': '60%',
			'padding-left': '2px',
			'vertical-align': 'top',
			'white-space': 'normal', // permite quebra de linha no conteúdo
			'word-wrap': 'break-word',
		});

	}, 500);

	$(".itemIndice").css("font-weight", 'bold');
	$(".descricaoProd").css("word-wrap", 'break-word');
}

// function inicializarDadosMobile() {

// 	var empresa = $("#codEmpresa").val();
// 	var filial = $("#codFilial").val();

// 	//Atividade analisa aprovação 
// 	if (atividade.value != '157' /*&& atividade.value != '137'*/ && atividade.value != 'undefined') {

// 		var nivel = retornaNivel(atividade.value)
// 		var usuarioProtheus = $("#CR_USER_" + nivel).val();
// 		var aprovadorProtheus = $("#CR_APROV_" + nivel).val();
// 	}
// 	if (atividade.value != '137') {
// 		lContinua = true //Vê sempre o campo itens
// 	}

// 	var pedido = $("#numPedido").val();
// 	var j = 0
// 	var i = 0
// 	var lContinua = false

// 	// Obtém o valor do campo hidden
// 	var jsonStr = $("#itens").val();

// 	//Consultas
// 	var centoCustoAprovador = DatasetFactory.getDataset("dsRestRetornoCustoPorAprovador", [empresa, filial, usuarioProtheus, aprovadorProtheus], null, null);

// 	if (pedido != '') {
// 		var valorRatiado = DatasetFactory.getDataset("dsRestRetornoValorRatiado", [empresa, filial, pedido, centoCustoAprovador.values[0].DBL_CC], null, null);
// 		lContinua = true
// 	}

// 	// Converte o JSON para um objeto JavaScript
// 	var json = JSON.parse(jsonStr);
// 	var totalSaldos = 0;

// 	//Altera Valor total ratiado
// 	if (lContinua) {

// 		for (var i = 0; i < json.length; i++) {

// 			for (var j = 0; j < valorRatiado.values.length; j++) {

// 				if (json[i].C7_ITEM == valorRatiado.values[j].C7_ITEM) {

// 					json[i].C7_TOTAL = valorRatiado.values[j].C7_TOTAL

// 				}
// 			}

// 		}
// 	}

// 	$('#tabelaItens').DataTable({
// 		autoWidth: false,
// 		pageLength: 50,
// 		responsive: {
// 			details: {
// 				display: DataTable.Responsive.display.childRowImmediate
// 			}
// 		},
// 		dom: "<'row'<'col-xs-12't>><'row tabela-rodape'<'col-xs-12 col-md-5'i><'col-xs-12 col-md-7'p>>",
// 		language: {
// 			thousands: ".",
// 			zeroRecords: "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Nenhum item localizado",
// 			emptyTable: "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Nenhum item localizado",
// 			info: "Exibindo _TOTAL_ itens",
// 			infoEmpty: "Nenhum item localizado",
// 			infoFiltered: '(50)',
// 			paginate: {
// 				first: "Primeira",
// 				previous: "Anterior",
// 				next: "Próxima",
// 				last: "Última"
// 			},
// 		},
// 		"searching": true,
// 		columns: [
// 			{ "data": "C7_ITEM", "title": "Item", "className": "itemIndice" },
// 			{ "data": "C7_PRODUTO", "title": "Produto" },
// 			{ "data": "C7_DESCRI", "title": "Descrição" },
// 			{ "data": "C7_QUANT", "title": "Qtd." },
// 			{ "data": "C7_UM", "title": "UM" },
// 			{ "data": "C7_PRECO", "title": "Preço   " },
// 			{ "data": "C7_TOTAL", "title": "Total   " },
// 			{ "data": "C7_CC", "title": "C.Custo" },
// 			{ "data": "Budget", "title": "Budget" },
// 			{ "data": "Ult_PRECO", "title": "UltPreço" },
// 			{ "data": "C7_NUMSC", "title": "Solicitação" },
// 			{ "data": "C7_NUMCOT", "title": "Cotação" },
// 			{ "data": "C7_OBS", "title": "Observação" }
// 		],
// 		columnDefs: [
// 			{ "targets": 0 },
// 			{ "targets": 1 },
// 			{ "targets": 2 },
// 			{ "targets": 3 },
// 			{ "targets": 4 },
// 			{
// 				"targets": 5, "render": function (data, type, row, meta) {
// 					return '<span style="white-space:nowrap;">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
// 				}
// 			},
// 			{
// 				"targets": 6, "render": function (data, type, row, meta) {
// 					return '<span style="white-space:nowrap">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
// 				}
// 			},
// 			{ "targets": 7 },
// 			{ "targets": 8 },
// 			{
// 				"targets": 9, "render": function (data, type, row, meta) {
// 					return '<span style="white-space:nowrap">R$ ' + parseFloat(data).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + "</span>"
// 				}
// 			},
// 			{ "targets": 10 },
// 			{ "targets": 11 },
// 			{ "targets": 12 }

// 		],
// 		data: json,
// 	});

// 	$(".itemIndice").css("font-weight", 'Bold');
// 	$(".descricaoProd").css("word-wrap", 'break-word');

// }

function dataAtualFormatada() {
	var data = new Date(),
		dia = data.getDate().toString(),
		diaF = (dia.length == 1) ? '0' + dia : dia,
		mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
		mesF = (mes.length == 1) ? '0' + mes : mes,
		anoF = data.getFullYear();
	return diaF + "/" + mesF + "/" + anoF;
}

function formataValor(valor) {
	valor = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 });
	return valor
}

function formatarMoeda(valor) {
	// Verifica se o valor já contém "R$"
	if (!valor.includes("R$")) {
		// Se não contém, adiciona "R$" antes do valor
		valor = "R$ " + valor;
	}
	return valor;
}

function retornaNivel(atividade) {

	var expr = atividade;
	var nivel = ''

	switch (expr) {
		case '21':
			nivel = "1"
			break;
		case '22':
			nivel = "2"
			break;
		case '11':
			nivel = "3"
			break;
		case '15':
			nivel = "4"
			break;
		case '18':
			nivel = "5"
			break;
		case '20':
			nivel = "6"
			break;
		default:
			console.log("Campo de rateio nao encontrado");
	};
	return nivel
}

/*  */
function lerTabela() {
	var tabelaDiv = document.getElementById('tabelaItens');
	var tabela = tabelaDiv.getElementsByTagName('tableBody')[0];
	var linhas = tabela.getElementsByTagName('tr');

	for (var i = 1; i < linhas.length; i++) {  // Começa do índice 1 para ignorar o cabeçalho
		var colunas = linhas[i].getElementsByTagName('td');
		var cotacao = colunas[0].innerText;

		console.log('Cotação: ' + cotacao);
	}
}

/* funoes para deixar de exibir e voltar a exibir as headers */

// painel de etapas
function abrirFecharModalEtapa() {

	const painel = $('#col-painel-etapas');

	if (painel.hasClass('hide')) {
		painel.css('transition', 'all 0.2s ease');
		painel.removeClass('hide');
	} else {
		painel.css('transition', 'all 0.2s ease');
		painel.addClass('hide');
	}

};

// painel de dados do pedido
function abrirFecharModalDados() {

	const painel = $('#col-painel-dados');

	if (painel.hasClass('hide')) {
		painel.css('transition', 'all 0.2s ease');
		painel.removeClass('hide');
	} else {
		painel.css('transition', 'all 0.2s ease');
		painel.addClass('hide');
	}

};

/* funções dos botoes de aprovação e reprovação */
function abrirModalAprovar() {

	var modalAprovar = $('#modal-aprovar')
	var overlay = $('#overlay')

	overlay.removeClass('hide')
	modalAprovar.removeClass('hide')

}

function abrirModalReprovar() {

	var modalReprovar = $('#modal-reprovar')
	var overlay = $('#overlay')

	overlay.removeClass('hide')
	modalReprovar.removeClass('hide')

}

function abrirModalAprovarSim() {

	var modalAprovar = $('#modal-aprovar')
	var overlay = $('#overlay')
	var atividade_destino = $('#sl_atividade_destino').val()

	if (atividade_destino == '') {

		FLUIGC.toast({
			message: 'Selecione uma atividade de destino',
			type: 'warning'
		});

		return

	}

	modalAprovar.addClass('hide')
	overlay.addClass('hide')

	$('#aprovacao-sim').val(atividade_destino)

	// Simula o clique no botão de envio do Fluig
	window.parent.$('button[data-send]').first().click();

}

function abrirModalAprovarNao() {

	var modalAprovar = $('#modal-aprovar')
	var overlay = $('#overlay')

	modalAprovar.addClass('hide')
	overlay.addClass('hide')

}

function abrirModalReprovarSim() {

	var modalReprovar = $('#modal-reprovar')
	var overlay = $('#overlay')

	modalReprovar.addClass('hide')
	overlay.addClass('hide')

	$('#reaprovacaoSim').val('sim')

	// Simula o clique no botão de envio do Fluig
	$('#send-process-button').click();
	// window.parent.$('button[data-send]').first().click();

}

function abrirModalReprovarNao() {

	var modalReprovar = $('#modal-reprovar')
	var overlay = $('#overlay')

	modalReprovar.addClass('hide')
	overlay.addClass('hide')

}

/* carregamento dos dados nos paineis */
$(document).ready(function () {

	// informações pedido
	let filial = getInputValue("#nomeFilial");
	let numeroPedido = getInputValue("#numPedido");
	let tipoCompra = getInputValue("#tipoCompra");
	let comprador = getInputValue("#nomeSolicitante")
	let emissao = getInputValue("#dataEmissaoSolicitacao")
	let obra = getInputValue("#descGrupobra")
	let fornecedor = getInputValue("#nomeFornecedor")

	// carregando informações no painel informações do pedido
	document.querySelector('#lbl-filial').innerText = filial
	document.querySelector('#lbl-numero-pedido').innerText = numeroPedido
	document.querySelector('#lbl-tipo-compra').innerText = tipoCompra
	document.querySelector('#lbl-comprador').innerText = comprador
	document.querySelector('#lbl-emissao').innerText = emissao
	document.querySelector('#lbl-obra').innerText = obra
	document.querySelector('#lbl-fornecedor').innerText = fornecedor

	// valores pedido
	let condPagamento = getInputValue("#nomeCondPagto")
	let valorMercadoria = getInputValue("#valorMercadoria")
	let tipoFrete = getInputValue("#tipoFrete")
	let frete = getInputValue("#frete")
	let despesa = getInputValue("#despesa")
	let seguro = getInputValue("#SeguroCarga")
	let totalDesconto = getInputValue("#totalDesc")
	let totalPedido = getInputValue("#totalPedido")

	// tratativa de valores do tipo frete
	if(tipoFrete == 'C'){
		tipoFrete = 'CIF'
	}
	if(tipoFrete == 'F'){
		tipoFrete = 'FOB'
	}
	if(tipoFrete == 'T'){
		tipoFrete = 'Por conta terceiros'
	}
	if(tipoFrete == 'R'){
		tipoFrete = 'Por conta remetente'
	}
	if(tipoFrete == 'D'){
		tipoFrete = 'Por conta destinatário'
	}
	if(tipoFrete == 'S'){
		tipoFrete = 'Sem frete'
	}

	document.querySelector('#lbl-cond-pagamento').innerText = condPagamento
	document.querySelector('#lbl-valor-mercadoria').innerText = validaValores(valorMercadoria)
	document.querySelector('#lbl-tipo-frete').innerText = tipoFrete
	document.querySelector('#lbl-frete').innerText = validaValores(frete)
	document.querySelector('#lbl-despesas').innerText = validaValores(despesa)
	document.querySelector('#lbl-seguro').innerText = validaValores(seguro)
	document.querySelector('#lbl-total-desconto').innerText = validaValores(totalDesconto)
	document.querySelector('#lbl-total-pedido').innerText = validaValores(totalPedido)

})

function validaValores(value){
	value = value.replace('R$ ', '')
	value = 'R$ ' + value
	return value
}

function getInputValue(id) {
	const element = getSelector(id)

	const tagElement = element.prop('tagName')

	if (tagElement == 'SPAN' || tagElement == 'span') {
		let val = element.html() == '&nbsp;' || element.html() == '' ? '' : element.html()

		return val
	} else if (tagElement == 'SELECT' || tagElement == 'select') {
		let val = getSelector(`${id} option:selected`).length > 0 ?
			getSelector(`${id} option:selected`).html() : ''

		return val
	} else if (tagElement == 'INPUT' || tagElement == 'input') {
		return getSelector(id).val()
	} else if (tagElement == 'TEXTAREA' || tagElement == 'textarea') {
		return getSelector(id).text()
	}
}

function getSelector(elementInfo) {
	try {
		if (typeof elementInfo == 'string') {
			return $(`${elementInfo}`)
		} else {
			return $(elementInfo);
		}
	} catch (error) {
		return error;
	}
}