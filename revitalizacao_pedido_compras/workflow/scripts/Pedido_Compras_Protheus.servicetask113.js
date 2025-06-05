function servicetask113(attempt, message) {
	var n = 0
	var codEmpresa      = hAPI.getCardValue("codEmpresa"); 
	var codFilial       = hAPI.getCardValue("codFilial");
	var tipoOperacao    = "005"//hAPI.getCardValue("tipoOperacao"); 
	var Obs             = getValue("WKUserComment")
	var Solicitacao     = hAPI.getCardValue("numSolicitacao")
	var msg             = ''
		
    log.info("#### Entrou ServiceDesk 113  ####")
	//var idUsuario = getValue("WKUser");
	
    for(i = 0 ; i < 6 ; i++){
    	n++
    	var numPedido       = hAPI.getCardValue("CR_NUM_"+n).trim();
    	var codAprovador    = hAPI.getCardValue("CR_APROV_"+n).trim();
    	var usuarioProtheus = hAPI.getCardValue("CR_USER_"+n).trim();
    	var tipoPedido      = hAPI.getCardValue("CR_TIPO_"+n).trim();
    	
    	log.info("Dados FOR => "+numPedido.trim()+"||"+codAprovador+"||"+usuarioProtheus+"||"+tipoPedido)
    	
	    try {
			
			 var endpointStr = "/alcadas?"
		     endpointStr += "Operacao="+tipoOperacao; //Valor Fixo até segunda ordem
		     endpointStr += "&Numero="+numPedido;
		     endpointStr +=	"&Tipo="+tipoPedido;  //Valor Fixo até segunda ordem
		     endpointStr +=	"&Aprovador="+codAprovador;
		     endpointStr +=	"&Usuario="+usuarioProtheus;
		     endpointStr += "&Fluig="+Solicitacao;
		     //
		     if(getValue("WKUserComment")!="" || getValue("WKUserComment")!=null){
		    	 endpointStr += "&Observacao="+Obs
		     }
		     		     
		     log.info( "Requisição Rejeição==> "+endpointStr)
		     
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
		            var vo = clientService.invoke(JSON.stringify(data));
		            log.info("======= RESULTADO V.O" + vo.getResult());
		            var resultado = JSON.parse(vo.getResult());
		            log.info("======= RESULTADO PARSEADO" + resultado);
		            log.info("======= Numero de registros = " + resultado.length);
		            log.info("======= Mensagem do erro (ERRADO) = " + resultado[0].Mensagem_do_erro);
		            log.info("======= Mensagem do erro (CERTO) = " + resultado[0].message);
		            
		            if(resultado[0].Mensagem_do_erro !='undefined' && resultado[0].Mensagem_do_erro != null ){
		            	//throw resultado[0].Mensagem_do_erro
		            	log.info("Erro servico113: "+Solicitacao+ " Pedido: "+numPedido)
		            }else{
		            	log.info("Aprovado com sucesso => "+resultado[0].message)
		            }
		            
		            //sleep(15000)
		        } catch (e) {
		            log.info(" CATH -> Erro Rejeita Pedido - " + e);
		            //sleep(1500);
		            // throw " CATH -> Erro Rejeita Pedido - " + e
		            msg += " CATH -> Erro Rejeita Pedido - " + e
		        }
		        
		} catch (e) {
			log.info("[[PEDIDO_COMPRA - NOVO]]==Erro ao rejeitar Pedido [" + numPedido + "] no Protheus. Verifique o log e WebService. ->"+e);
			//   throw "Erro ao rejeitar Pedido [" + numPedido + "] no Protheus. Verifique o log e WebService. ->"+e
			msg += "Erro ao rejeitar Pedido [" + numPedido + "] no Protheus. Verifique o log e WebService. ->"+e
		}
    }//Final do FOR
	if(msg != ''){
		throw msg
	}
}