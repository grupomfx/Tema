function servicetask102(attempt, message) {
	
	var n = 0
	var codEmpresa      = hAPI.getCardValue("codEmpresa"); 
	var codFilial       = hAPI.getCardValue("codFilial");
	var tipoOperacao    = "001"//hAPI.getCardValue("tipoOperacao"); 
	var Solicitacao     = hAPI.getCardValuegetValue("numSolicitacao")
		
    log.info("#### Entrou ServiceDesk 102  ####")
	//var idUsuario = getValue("WKUser");
	
    for(i = 0 ; i < 6 ; i++){
    	n++
    	var numPedido       = hAPI.getCardValue("CR_NUM_"+n);
    	var codAprovador    = hAPI.getCardValue("CR_APROV_"+n);
    	var usuarioProtheus = hAPI.getCardValue("CR_USER_"+n);
    	var tipoPedido      = hAPI.getCardValue("CR_TIPO_"+n);
    	
    	log.info("Dados FOR => "+numPedido+"||"+codAprovador+"||"+usuarioProtheus+"||"+tipoPedido)
    	
    	if(numPedido !='' && codAprovador !='' && usuarioProtheus !='' && tipoPedido !='' ){
    		//Pensar nesse comando
    	}
    	
	    try {
			
			 var endpointStr = "/alcadas?"
		     endpointStr += "Operacao="+tipoOperacao.trim() //Valor Fixo até segunda ordem
		     endpointStr += "&Numero="+numPedido.trim()
		     endpointStr +=	"&Tipo="+tipoPedido.trim()    //Valor Fixo até segunda ordem
		     endpointStr +=	"&Aprovador="+codAprovador.trim()
		     endpointStr +=	"&Usuario="+usuarioProtheus.trim()
		     //endpointStr += "&Fluig="+Solicitacao.trim()
		     
		     log.info( "Requisição==> "+endpointStr)
		     
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
		            	throw resultado[0].Mensagem_do_erro
		            }else{
		            	log.info("Aprovado com sucesso => "+resultado[0].message)
		            }
		            
		            //sleep(15000)
		        } catch (e) {
		            log.info(" CATH -> Erro dsRestAprovaPedidoSCR - " + e);
		            //sleep(1500);
		            throw " CATH -> Erro dsRestAprovaPedidoSCR - " + e
		        }
		        
		} catch (e) {
			log.info("[[PEDIDO_COMPRA - NOVO]]==Erro ao Aprovar Pedido [" + numPedido + "] no Protheus. Verifique o log e WebService. ->"+e);
			   throw "Erro ao Aprovar Pedido [" + numPedido + "] no Protheus. Verifique o log e WebService. ->"+e
		}
    }//Final do FOR
	
}