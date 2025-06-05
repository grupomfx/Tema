function consultaAprovacao(indice) {

    var filial = /*"01"*/ hAPI.getCardValue("codFilial")
    var pedido = /*"000009"*/ hAPI.getCardValue("numPedido")

    return false
}

function retornaAlcada(indice) {

    log.info("##Iniciando retornaAlcada##")

    var usuario = fluigAPI.getUserService().getCurrent();
    var responsavel = ''
    var codigo = usuario.getCode()
    var nome = usuario.getFullName()

    //Atualização de atividade anexo
    if (indice == 0 || indice == '0') {

        if (hAPI.getCardValue("emailSolicitante") != '') {
            var email = hAPI.getCardValue("emailSolicitante")
        } else {
            email = hAPI.getCardValue("email_" + indice)
        }

    } else {
        var email = hAPI.getCardValue("email_" + indice) //usuario.getEmail()
    }


    log.info("Retornou o email " + email)

    var c1 = DatasetFactory.createConstraint('EMAIL', email, email, ConstraintType.MUST);
    var dataset = DatasetFactory.getDataset("dsConsultaUsuarioProtheus", null, [c1], null);
    var cst = DatasetFactory.createConstraint("active", true, true, ConstraintType.MUST);
    var constraints = new Array(cst);
    var datasetPrincipal = DatasetFactory.getDataset("colleague", null, constraints, null);

    if (!datasetEmpty(dataset)) {

        for (var i = 0; i < dataset.rowsCount; i++) {

            if (dataset.rowsCount > 0) {
                idProtheus = dataset.getValue(i, "ID")
                codUsrProtheus = dataset.getValue(i, "CODIGO");
                nomeUsrProtheus = dataset.getValue(i, "NOME");
                emailProtheus = dataset.getValue(i, "EMAIL");
            }
        }
        for (var i = 0; i < datasetPrincipal.rowsCount; i++) {

            log.info("Email protheus - " + emailProtheus)
            log.info("Email fluig    - " + datasetPrincipal.getValue(i, "mail"))

            if (emailProtheus == datasetPrincipal.getValue(i, "mail")) {

            	if ((indice == 0 || indice == '0') && hAPI.getCardValue('solicitanteResponsavel') == '' ) {

                    log.info("##Pegou email do Solicitante##" + datasetPrincipal.getValue(i, "mail"))
                    hAPI.setCardValue("solicitanteResponsavel", datasetPrincipal.getValue(i, "login"))
                    responsavel = hAPI.getCardValue("solicitanteResponsavel")
                    log.info("##Gravou o solicitante responsavel##" + datasetPrincipal.getValue(i, "login"))

                }
            	
            	if (hAPI.getCardValue("responsavel_" + indice) == '' ) {

                	log.info("##Achou o email do responsavel##" + datasetPrincipal.getValue(i, "mail"))
                    hAPI.setCardValue("responsavel_" + indice, datasetPrincipal.getValue(i, "login"))
                    responsavel = hAPI.getCardValue("responsavel_" + indice)
                    log.info("##Gravou o responsavel##" + responsavel)

                }

            }

        }

    }
    return responsavel
}

function datasetEmpty(dataset) {

    if (dataset == null) {
        return true;
    } else if (dataset.rowsCount == 0) {
        return true;
    } else {
        return false;
    }
}

function integraProtheus(indice) {

    var n = indice
    var codEmpresa = hAPI.getCardValue("codEmpresa");
    var codFilial = hAPI.getCardValue("codFilial");
    var tipoOperacao = "001" //hAPI.getCardValue("tipoOperacao"); 
    var Solicitacao = hAPI.getCardValue("numSolicitacao")

    log.info("integraProtheus inicio indice = " + indice)
    //var idUsuario = getValue("WKUser");

    var numPedido = hAPI.getCardValue("CR_NUM_" + n).trim();
    var codAprovador = hAPI.getCardValue("CR_APROV_" + n).trim();
    var usuarioProtheus = hAPI.getCardValue("CR_USER_" + n).trim();
    var tipoPedido = hAPI.getCardValue("CR_TIPO_" + n).trim();

    log.info("Dados Aprovador => " + numPedido + "||" + codAprovador + "||" + usuarioProtheus + "||" + tipoPedido)

    try {

        log.info("#Primeiro try")

        var endpointStr = "/alcadas?"
        endpointStr += "Operacao=" + tipoOperacao //Valor Fixo até segunda ordem
        endpointStr += "&Numero=" + numPedido
        endpointStr += "&Tipo=" + tipoPedido //Valor Fixo até segunda ordem
        endpointStr += "&Aprovador=" + codAprovador
        endpointStr += "&Usuario=" + usuarioProtheus
        endpointStr += "&Fluig=" + Solicitacao

        log.info("Requisição SCR ==> " + endpointStr)

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
                'Content-Type': 'application/json'
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

            if (resultado[0].Mensagem_do_erro != 'undefined' && resultado[0].Mensagem_do_erro != null) {
                //throw resultado[0].Mensagem_do_erro
                log.info("Deu erro, mas aprovou = " + resultado[0].Mensagem_do_erro)
                if (resultado[0].Mensagem_do_erro.trim() == "Status do documento nao permite acao selecionada.") {
                    return true
                } else {
                    throw "Retorno da integração com Protheus = " + resultado[0].Mensagem_do_erro
                }

            } else {
                log.info("Aprovado com sucesso => " + resultado[0].message)
            }

            //sleep(15000)
        } catch (e) {
            log.info(" CATH -> Erro 1 aprovação - " + e);
            //sleep(1500);
            throw " CATH -> Erro 2 aprovação - " + e
        }

    } catch (e) {
        log.info("Erro ao Aprovar Pedido [" + numPedido + "] no Protheus. Verifique o log e WebService. ->" + e);
        if (resultado[0].Mensagem_do_erro.trim() == "Status do documento nao permite acao selecionada.") {
            return true
        } else {
            throw "Retorno da integração com Protheus = " + resultado[0].Mensagem_do_erro
        }
    }
    return true
}

/*
 * Monta envio de email
 */

function enviarEmail(emailDest, nome, status, obs, numPedido) {
    var obj = new com.fluig.foundation.mail.service.EMailServiceBean();
    var emailRemetente = "noreply@tema.net.br";
    log.info("emailSolicitante " + emailDest);
    log.info("nome " + nome);
    obs = obs != "" ? "Observação: " + obs : "";
    var mensagem = "Prezado, " + nome + "<br/>" +
        "<br/>O Pedido de Compra : Nº " + numPedido + ", foi " + status + " .<br/> " + obs;
    var corpoDoEmailHTML = "<html>" +
        "" +
        "<body>" + mensagem + "</body>" +
        "" +
        "</html>";
    log.info("=====> Enviando email ...");
    // objeto responsável por enviar email	   
    obj.simpleEmail(1,
        "Fluig - Pedido de Compra " + status.toUpperCase(), //"Fluig - Solicitação Reprovada",  //Assunto
        emailRemetente, //Remetente
        emailDest, //Destinatario
        corpoDoEmailHTML, //Corpo do Email
        "text/html");
    log.info("=====> Mensagem " + mensagem);

}

/*
 * Função de geração de anexo
 */

function anexar(filial, numPedido) {

    var periodicService = ServiceManager.getService('ECMDocumentService');
    var serviceHelper = periodicService.getBean();
    var empresa = getValue("WKCompany");
    var filename = 'mapacot' + filial + numPedido + '.pdf';
    var attachmentArray = serviceHelper.instantiate('com.totvs.AttachmentArray');

    var attachment = serviceHelper.instantiate('com.totvs.Attachment');

    //Arquivo

    attachment.setFileName(filename);

    attachment.setFileSize(28);

    attachment.setAttach(false);

    attachment.setEditing(false);

    attachment.setFullPatch(filename);

    attachment.setPrincipal(true);

    attachmentArray.getItem().add(attachment);

    log.info("Entrou no ANEXO(filial,pedido)")

    try {
        DMEngineServiceService = serviceHelper.instantiate('com.totvs.ECMDocumentServiceService');

        var service = DMEngineServiceService.getDocumentServicePort();

        var result = service.createSimpleDocument('fluigprotheus', '552324', empresa, 424344, 'fluigprotheus', filename, attachmentArray);

        hAPI.attachDocument(result.getItem().get(0).getDocumentId());

    } catch (e) {
        // TODO: handle exception
        throw e;
    }
}