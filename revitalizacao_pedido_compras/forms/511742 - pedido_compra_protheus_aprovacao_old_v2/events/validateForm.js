function validateForm(form){
	log.info("INFODEV Teste");
	log.dir(form);	

	//var proximaAtividade = form.getValue("proximaAtividade");
	var proximaAtividade = getValue("WKNextState")

	if(form.getFormMode() == "MOD" && 
	   (getValue("WKCompletTask") == "true") &&
	   (proximaAtividade == INTEGRA_REJEICAO) ){
		
		if(getValue("WKUserComment") == ""){
			throw "Necessário preencher o campo obsevação";	
		}
		
		
	}
	
	
}
