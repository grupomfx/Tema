function inputFields(form){
	
	if (form.getMobile()){ 
		ajustaDataMobile(form);
	}

}

function ajustaDataMobile(form){
	
	if (form.getMobile()){ 
		var dataEmissao = form.getValue("dataEmissaoSolicitacao").split("-");
		var dataConvertida = dataEmissao[2]+"/"+dataEmissao[1]+"/"+dataEmissao[0];
		form.setValue("dataEmissaoSolicitacao", dataConvertida);
		
	}
	
}