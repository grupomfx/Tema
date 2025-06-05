function servicetask219(attempt, message) {
	
	integraProtheus('4')
	
}

function integraProtheus(indice) {
	
	var n = indice
	var codEmpresa      = hAPI.getCardValue("codEmpresa"); 
	var codFilial       = hAPI.getCardValue("codFilial");
	var tipoOperacao    = "001"//hAPI.getCardValue("tipoOperacao"); 
	var Solicitacao     = hAPI.getCardValue("numSolicitacao")
	var cMsg            = ''
	var email            = hAPI.getCardValue("email_"+indice)
	var nome             = hAPI.getCardValue("nomeSolicitante") 
	var emailSolicitante = hAPI.getCardValue("emailSolicitante")
		
    log.info("integraProtheus inicio indice = "+indice)
	//var idUsuario = getValue("WKUser");
	
    	var numPedido       = hAPI.getCardValue("CR_NUM_"+n).trim();
    	var codAprovador    = hAPI.getCardValue("CR_APROV_"+n).trim();
    	var usuarioProtheus = hAPI.getCardValue("CR_USER_"+n).trim();
    	var tipoPedido      = hAPI.getCardValue("CR_TIPO_"+n).trim();
    	var nivel           = hAPI.getCardValue("CR_NIVEL_"+n).trim();
    	
    	log.info("Dados Aprovador => "+numPedido+"||"+codAprovador+"||"+usuarioProtheus+"||"+tipoPedido)
    	
	    try {
	    	 
	    	log.info("#Primeiro try")
	    	 
			 var endpointStr = "/alcadas?"
		     endpointStr += "Operacao="+tipoOperacao //Valor Fixo até segunda ordem
		     endpointStr += "&Numero="+numPedido
		     endpointStr +=	"&Tipo="+tipoPedido    //Valor Fixo até segunda ordem
		     endpointStr +=	"&Aprovador="+codAprovador
		     endpointStr +=	"&Usuario="+usuarioProtheus
		     endpointStr += "&Fluig="+Solicitacao
		     endpointStr += "&Nivel="+nivel
		     
		     log.info( "Requisição SCR ==> "+endpointStr)
		     
		     var clientService = fluigAPI.getAuthorizeClientService();
			 var tenantid = codEmpresa + "," + codFilial;
			 var data = {
	            companyId: '' + getValue("WKCompany"),
	            serviceCode: 'WsProtheus',
	            endpoint: endpointStr,
	            method: 'post',
	            timeoutService: '100',
	            headers: {
	                'tenantid': '' + tenantid,
	                'Content-Type':'application/json'
	            }
			 
	        }
	//
			 try {
		            
				 	log.info("#Segundo try")
				 
				 	var vo = clientService.invoke(JSON.stringify(data));
		            log.info("======= RESULTADO V.O" + vo.getResult());
		            var resultado = JSON.parse(vo.getResult());
		            log.info("======= RESULTADO PARSEADO" + resultado);
		            log.info("======= Numero de registros = " + resultado.length);
		            log.info("======= Mensagem do erro (ERRADO) = " + resultado[0].Mensagem_do_erro);
		            log.info("======= Mensagem do erro (CERTO) = " + resultado[0].message);
		            
		            if(resultado[0].Mensagem_do_erro !='undefined' && resultado[0].Mensagem_do_erro != null ){ 
		            	//throw resultado[0].Mensagem_do_erro
		            	log.info("Deu erro, mas aprovou = "+resultado[0].Mensagem_do_erro)
		            	
		            		cMsg = resultado[0].Mensagem_do_erro            
			            	if(resultado[0].Mensagem_do_erro.trim()  == "Status do documento nao permite acao selecionada."){
			            		return true
			            	}else{
			            		throw "Retorno da integração com Protheus = "+cMsg
			            	}
			            		            	
		            }else{
		            	log.info("Aprovado com sucesso => "+resultado[0].message)
		            	/*Enviar email*/
		            	obs = "O aprovador: "+usuarioProtheus +" aprovou o pedido - "+ resultado[0].message
		            	enviarEmail(emailSolicitante,nome,"Aprovado",obs,numPedido)
		            	/**/
		            }
		            
		            //sleep(15000)
		        } catch (e) {
		            log.info(" CATH -> Erro 1 aprovação - " + e);
		            //sleep(1500);
		            throw " CATH -> Erro 2 aprovação - " + e
		        }
		        
		} catch (e) {
			log.info("Erro ao Aprovar Pedido [" + numPedido + "] no Protheus. Verifique o log e WebService. ->"+e);
			throw "Retorno da integração com Protheus = "+ cMsg +" Erro serviço = "+e
		}
	return true
}