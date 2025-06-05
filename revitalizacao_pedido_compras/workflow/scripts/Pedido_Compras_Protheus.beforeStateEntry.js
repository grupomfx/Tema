function beforeStateEntry(sequenceId) {

	//Define qual atividade será necessário adicionar os anexos à solicitação
	if (sequenceId == 254) {
		
		//busca no formulário campo do zoom que armazena o código da pasta
		var folderToAttach = 424344//hAPI.getCardValue("folderID");
		var primeiroDia = primeiroDiaMesCorrente(); 
        var ultimoDia = ultimoDiaMesCorrente();
        
        log.info("Primeiro dia: "+primeiroDia)
        log.info("Ultimo dia: "+ultimoDia)

		//cria as Constraints necessárias e consulta o dataset 
		var c1 = DatasetFactory.createConstraint("activeVersion", "true", "true", ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("documentType", "2", "2", ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("parentDocumentId", folderToAttach, folderToAttach, ConstraintType.MUST);
		var c4 = DatasetFactory.createConstraint("createDate", primeiroDia, ultimoDia, ConstraintType.MUST);
		
		var Constraints   = new Array(c1, c2, c3, c4);
		var sortingFields = new Array("documentPK.documentId");	 
		log.info("entrou antes de ler a pasta do mapa de conhecimento.")
		var dataset = DatasetFactory.getDataset("document", null, Constraints, sortingFields);
		log.info("entrou depois de ler a pasta do mapa de conhecimento.")

	    if (dataset.rowsCount > 0){
	    	
	    	log.info("Quantidade de registro: "+dataset.rowsCount.toString())
	    	
	    	filial = hAPI.getCardValue("codFilial")
	    	log.info("Filial ="+filial)
	    	pedido = hAPI.getCardValue("numPedido")
	    	log.info("Pedido ="+pedido)
	    	
		    for (var i = 0; i < dataset.rowsCount; i++) {
				
		    	try {
					
					log.info("Documento ID   = "+dataset.getValue(i, "documentPK.documentId"))
					log.info("Numero Doc.    = "+dataset.getValue(i, "documentPK.documentId"))
					log.info("Descricao Arq. = "+dataset.getValue(i, "documentDescription"))
					
					if(dataset.getValue(i, "documentDescription").toUpperCase() == ("MAPACOT"+filial+pedido).toUpperCase()+".PDF" ){
						log.info("Achou o arquivo para anexar")
						hAPI.attachDocument(dataset.getValue(i, "documentPK.documentId"));
						log.info("Passou do Anexo!")
					}
				} catch (e) {
				//	throw "Não foi possível anexar os documentos da pasta informada. Verifique as permissões e tente novamente."
					log.info("Não foi possível anexar os documentos da pasta informada. Verifique as permissões e tente novamente.")
				}
			}
	    } else {
	    	log.info("A pasta informada não possui documentos publicados. Verifique a pasta informada e tente novamente.")
	    }
	    
	//	bancoConhecimento(sequenceId)
	}
	
}

/* BANCO CONHECIMENTO */
function bancoConhecimento(sequenceId){

	var dataset = DatasetBuilder.newDataset();
    var cSql = ""
    var entidade = "SC7"
    var idFluig = getValue("WKNumProces")
    var lContinua = false

    try {

        switch (entidade) {

            case "SC1":
            	/*
            	cSql = ""

                cSql += " Select C1_FILIAL FILIAL, C1_NUM NUMERO, AC9_CODENT, AC9_ENTIDA, AC9_CODOBJ,ACB_OBJETO, ACB_DESCRI, C1_PFLUIG idFluig from AC9010 ac9 "
                cSql += " inner join ACB010 acb "
                cSql += " on AC9_CODOBJ = ACB_CODOBJ "
                cSql += " and AC9_ENTIDA in ('SC1') "

                cSql += " inner join SC1010 sc1 "
                cSql += " on AC9_CODENT = C1_FILIAL+C1_NUM+C1_ITEM "
                cSql += " and sc1.D_E_L_E_T_ != '*' "
                cSql += " and sc1.C1_PFLUIG != '' and sc1.C1_PFLUIG IS NOT NULL "

                cSql += " where ac9.D_E_L_E_T_ != '*' "
                cSql += " and acb.D_E_L_E_T_ != '*' "
                cSql += " and C1_PFLUIG = '" + idFluig + "'"

                log.info("ListaBancoConhecimento = " + cSql)

				*/
            	break;
            case "SC7":
            	
            	cSql = ""
            	
                cSql += " Select C7_FILIAL FILIAL, C7_NUM NUMERO, AC9_CODENT, AC9_ENTIDA, AC9_CODOBJ,ACB_OBJETO, ACB_DESCRI, C7_PFLUIG idFluig  from AC9010 ac9 "
                cSql += " inner join ACB010 acb "
                cSql += " on AC9_CODOBJ = ACB_CODOBJ "
                cSql += " and AC9_ENTIDA in ('SC7') "

                cSql += " inner join SC7010 sc7 "
                cSql += " on AC9_CODENT = C7_FILIAL+C7_NUM+C7_ITEM "
                cSql += " and sc7.D_E_L_E_T_ != '*' "
                cSql += " and sc7.C7_PFLUIG != '' and sc7.C7_PFLUIG IS NOT NULL "

                cSql += " where ac9.D_E_L_E_T_ != '*' "
                cSql += " and acb.D_E_L_E_T_ != '*' "
                cSql += " and C7_PFLUIG = '" + idFluig + "'"
                cSql += " and C7_EMISSAO >= CAST(DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0) AS DATE) "
                cSql += " and C7_EMISSAO <= CAST(DATEADD(DAY, -1, DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) + 1, 0)) AS DATE) "

                log.info("ListaBancoConhecimento = " + cSql)
	            
            	break;
            case "SE2":
            	/*
            	cSql = ""
               
            	cSql += " Select E2_FILIAL FILIAL, E2_NUM NUMERO, AC9_CODENT, AC9_ENTIDA, AC9_CODOBJ,ACB_OBJETO, ACB_DESCRI, E2_PFLUIG idFluig from AC9010 ac9 "
                cSql += " inner join ACB010 acb "
                cSql += " on AC9_CODOBJ = ACB_CODOBJ "
                cSql += " and AC9_ENTIDA in ('SE2') "

                cSql += " inner join SE2010 se2 "
                cSql += " on AC9_CODENT = E2_PREFIXO+E2_NUM+E2_PARCELA+E2_TIPO+E2_FORNECE+E2_LOJA "
                cSql += " and se2.D_E_L_E_T_ !='*' "
                cSql += " and se2.E2_PFLUIG != '' and se2.E2_PFLUIG IS NOT NULL "
                cSql += " and E2_EMISSAO >= CAST(DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0) AS DATE) "
                cSql += " and E2_EMISSAO <= CAST(DATEADD(DAY, -1, DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) + 1, 0)) AS DATE) "

                cSql += " where ac9.D_E_L_E_T_ != '*' "
                cSql += " and acb.D_E_L_E_T_ != '*' "
                cSql += " and E2_PFLUIG = '" + idFluig + "'"

                log.info("ListaBancoConhecimento = " + cSql)
            	*/
                break;
        }

        datasetBancoConhecimento = DatasetFactory.getDataset("dsSQL", [cSql, "/jdbc/Protheus12_OFC"], null, null)

        if (datasetBancoConhecimento.rowsCount > 0) {

            for (var i = 0; i < datasetBancoConhecimento.rowsCount; i++) {

            	log.info("BC Pedido de compras");
            	
                filial = datasetBancoConhecimento.getValue(i, "FILIAL");
                log.info("FILIAL = " + filial);
                numero = datasetBancoConhecimento.getValue(i, "NUMERO");
                log.info("NUMERO = " + numero);
                arquivo = datasetBancoConhecimento.getValue(i, "ACB_OBJETO");
                log.info("ACB_OBJETO = " + arquivo);
                entidade = datasetBancoConhecimento.getValue(i, "AC9_ENTIDA");
                log.info("AC9_ENTIDA = " + entidade);
                idFluig = datasetBancoConhecimento.getValue(i, "idFluig");
                log.info("idFluig = " + idFluig);

                log.info(idFluig + "|" + entidade + "|" + arquivo)
                
                log.info("BC Pedido de compras FIM");

            }
            lContinua = true
            log.info("BC Pedido de compras 'Deu bão' ");
        }

        //Define qual atividade será necessário adicionar os anexos à solicitação
        if (lContinua) {

                //busca no formulário campo do zoom que armazena o código da pasta
                var folderToAttach = 489996 //hAPI.getCardValue("folderID");
                var primeiroDia = primeiroDiaMesCorrente(); 
                var ultimoDia = ultimoDiaMesCorrente();

                //cria as Constraints necessárias e consulta o dataset 
                var c1 = DatasetFactory.createConstraint("activeVersion", "true", "true", ConstraintType.MUST);
                var c2 = DatasetFactory.createConstraint("documentType", "2", "2", ConstraintType.MUST);
                var c3 = DatasetFactory.createConstraint("parentDocumentId", folderToAttach, folderToAttach, ConstraintType.MUST);
                var c4 = DatasetFactory.createConstraint("createDate", primeiroDia, ultimoDia, ConstraintType.MUST);
                var Constraints = new Array(c1, c2, c3, c4);
                var sortingFields = new Array("documentPK.documentId");
                var dataset = DatasetFactory.getDataset("document", null, Constraints, sortingFields);

                if (datasetBancoConhecimento.rowsCount > 0) {

                    for (var i = 0; i < dataset.rowsCount; i++) {
                        try {
                        	
                        	log.info("&&BANCO de CONHECIMENTO&&")
                            log.info("Documento ID   = "+dataset.getValue(i, "documentPK.documentId"))
                            log.info("Numero Doc.    = "+dataset.getValue(i, "documentPK.documentId"))
                            log.info("Descricao Arq. = "+dataset.getValue(i, "documentDescription"))
                            log.info("&&BANCO de CONHECIMENTO&&")
                            
                            if (dataset.getValue(i, "documentDescription").toUpperCase() == arquivo.trim()) {
                                log.info("Achou o anexo = " + arquivo.trim())
                                hAPI.attachDocument(dataset.getValue(i, "documentPK.documentId"));
                            }
                        } catch (e) {
                            //	throw "Não foi possível anexar os documentos da pasta informada. Verifique as permissões e tente novamente."
                            log.info("Não foi possível anexar os documentos da pasta informada. Verifique as permissões e tente novamente.")
                        }
                    }
                } else {
                    log.info( "A pasta informada não possui documentos publicados. Verifique a pasta informada e tente novamente.")
                }
          
        }

    } catch (erro) {
        log.info("Erro na consulta do dataset - dsConsultaBancoConhecimento -> "+ erro) 
    }
	
 }

//Função para formatar a data no formato dd/MM/yyyy
function formatDateToBrazilian(date) {
  
  // Obter componentes da data
  var day = date.getDate();
  var month = date.getMonth() + 1; // Mês começa em 0
  var year = date.getFullYear();

  // Garantir que dia e mês tenham dois dígitos
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  // Montar a string no formato dd/MM/yyyy
  return day + "/" + month + "/" + year;
}

// Função para obter a data do primeiro dia do mês corrente
function primeiroDiaMesCorrente() {
  var dataAtual = new Date();
  var primeiroDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);

  // Formata a data no formato desejado
  var dataFormatada = formatDateToBrazilian(primeiroDia);
  log.info("primeiroDia filtro = " + dataFormatada);
  return dataFormatada;
}

// Função para obter a data do último dia do mês corrente
function ultimoDiaMesCorrente() {
  var dataAtual = new Date();
  var ultimoDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);

  // Formata a data no formato desejado
  var dataFormatada = formatDateToBrazilian(ultimoDia);
  log.info("ultimoDia filtro = " + dataFormatada);
  return dataFormatada;
}

// Função para retornar a data de hoje formatada
function dataAtualFormatada() {
  var dataAtual = new Date();
  var dataFormatada = formatDateToBrazilian(dataAtual);
  log.info("Data atual = " + dataFormatada);
  return dataFormatada;
}
