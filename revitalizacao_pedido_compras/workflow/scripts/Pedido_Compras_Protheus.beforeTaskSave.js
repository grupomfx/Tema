function beforeTaskSave(colleagueId,nextSequenceId,userList){

	var reprovar = 18
	var IntegraReprovacao = 102
	var solictacao = hAPI.getCardValue('numSolicitacao')
	var atividade = getValue("WKCurrentState");
	var user = getValue("WKUser");
	var idfluig = getValue("WKNumProces");
	var status="";
	var obs ="";
	var numPedido =hAPI.getCardValue("numPedido");
	var valorLib =hAPI.getCardValue("totalPedido");
	var filial =hAPI.getCardValue("codFilial");
	var data = new Date();
	// Guarda cada pedaço em uma variável
	var dia	 = data.getDate();		   // 1-31
	var mes  = data.getMonth()+1;		  // 0-11 (zero=janeiro)
	if(mes<=9){
		mes ="0"+mes;
	}
	var ano	= data.getFullYear();	   // 4 dígitos
	var dataFormat = ano+""+mes+""+dia;
	
	log.info("Inicio do beforeTaskSave - Pedido de Compras")
	log.info("IntegraReprovacao = "+nextSequenceId)
	log.info("reprovar = "+nextSequenceId)
	
	if( nextSequenceId == reprovar || nextSequenceId == IntegraReprovacao || nextSequenceId == '18' || nextSequenceId == '102' ){
		if((hAPI.getCardValue("justificativa")==null || hAPI.getCardValue("justificativa") == "" || hAPI.getCardValue("justificativa") == "undefined" )){
	    	throw "<strong>Favor informar o motivo da reprovação</strong>";
	    }else{
	    	obs = getValue("WKUserComment")
	    	hAPI.setCardValue('WKUserComment',hAPI.getCardValue("justificativa") ) 
	    	status = "Reprovado"
	    	//enviarEmail(user,nome,status,responsavel, obs,numPedido,solictacao)
	    	}
	    }
	if (atividade == '21' ){
			log.info("Iniciou o Anexo")
//			anexar(filial,numPedido)
			log.info("Finalizou anexo")
	}
	
	if(atividade == "254" || atividade == 254 ){

		var attachments = hAPI.listAttachments(); 
		var hasAttachment = attachments.size() > 0 ? true : false;

	if (!hasAttachment) { 
			throw "Caro Usuario, favor adicionar o anexo relacionado a sua solicitacao de aprovação."; 
		} 
	}
	
	log.info("Fim do beforeTaskSave")

}

function formatValorProtheus(valor){
	valor =valor.replace(".","");
	valor = valor.replace(",",".")
	return valor;
}

