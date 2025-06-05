function displayFields(form,customHTML){
	
	
	 log.info("displayFields");
	 var mode = form.getFormMode();

	// form.setValue('modo', mode);
	 
	 customHTML.append("<script>");
	 customHTML.append("if(modo.value=='VIEW'){");
	 customHTML.append("$('#headFilial').text($('#nomeFilial').text().toUpperCase());");
	 customHTML.append("}else{");
	 customHTML.append("$('#headFilial').text($('#nomeFilial').val().toUpperCase());");
	 customHTML.append("}</script>");
	customHTML.append("<script>function getMobile(){ return " + form.getMobile() + "; }</script>");
	 
	 var processo = getValue("WKNumProces");
	 var atividadeAtual = parseInt(getValue("WKNumState"));
	 
	 form.setValue("numSolicitacao",processo)
	 form.setValue("atividade",atividadeAtual)

    
}