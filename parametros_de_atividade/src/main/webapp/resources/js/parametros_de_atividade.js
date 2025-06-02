var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});

$(document).ready(() => {
    $("#btn_adicionar_tarefa_eng").on("click", () => {
        adicionaTarefaEngenharia()
        
    })
    $("#btn_adicionar_tarefa_rh").on("click", () => {
        adicionaTarefaRH()
    })

    $("#btn_adicionar_tarefa_contabilidade").on("click", () => {
        adicionaTarefaContabilidade()
    })

    $("#btn_adicionar_tarefa_SSMAQ").on("click", () => {
        adicionaTarefaSSMAQ()
    })

    $("#btn_adicionar_tarefa_financeiro").on("click", () => {
        adicionaTarefaFinanceiro()
    })

    $("#btn_adicionar_tarefa_rental").on("click", () => {
        adicionaTarefaRental()
    })
    
    $("#btn_adicionar_tarefa_planejamento").on("click", () => {
        adicionaTarefaPlanejamento()
    })

    $("#btn_adicionar_tarefa_administrativo").on("click", () => {
        adicionaTarefaAdministrativo()
    })

    $("#btn_adicionar_tarefa_juridico").on("click", () => {
        adicionaTarefaJuridico()
    })

    $("#btn_adicionar_tarefa_suprimentos").on("click", () => {
        adicionaTarefaSuprimentos()
    })
    
    $("#btn_adicionar_tarefa_diretoria").on("click", () => {
        adicionaTarefaDiretoria()
    })
    
   $("#teste_save").on("click", () => {
    pegaTarefas("suprimentos")
   })

   // Filtros
    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    var filterGruRespoEng = FLUIGC.filter('#ztxt_grupo_responsavel_engenharia', settings);
    let filterGruAprovEng = FLUIGC.filter(`#ztxt_grupo_aprovacao_engenharia`, settings);
    let filterRespoEng = FLUIGC.filter(`#txt_responsavel_eng_1`, settings);

    let filterGruRespoRH = FLUIGC.filter('#ztxt_grupo_responsavel_rh', settings);
    let filterGruAprovRH = FLUIGC.filter('#ztxt_grupo_aprovacao_rh', settings);
    let filterRespoRH = FLUIGC.filter('#txt_responsavel_rh_1', settings);

    let filterGruRespoContabilidade = FLUIGC.filter('#ztxt_grupo_responsavel_contabilidade', settings);
    let filterGruAprovContabilidade = FLUIGC.filter('#ztxt_grupo_aprovacao_contabilidade', settings);
    let filterRespoContabilidade = FLUIGC.filter('#txt_responsavel_contabilidade_1', settings);
    
    let filterGruRespoSSMAQ = FLUIGC.filter('#ztxt_grupo_responsavel_SSMAQ', settings);
    let filterGruAprovSSMAQ = FLUIGC.filter('#ztxt_grupo_aprovacao_SSMAQ', settings);
    let filterRespoSSMAQ = FLUIGC.filter('#txt_responsavel_SSMAQ_1', settings);

    let filterGruRespoFinanceiro = FLUIGC.filter('#ztxt_grupo_responsavel_financeiro', settings);
    let filterGruAprovFinanceiro = FLUIGC.filter('#ztxt_grupo_aprovacao_financeiro', settings);
    let filterRespoFinanceiro = FLUIGC.filter('#txt_responsavel_financeiro_1', settings);
    
    let filterGruRespoRental = FLUIGC.filter('#ztxt_grupo_responsavel_rental', settings);
    let filterGruAprovRental = FLUIGC.filter('#ztxt_grupo_aprovacao_rental', settings);
    let filterRespoRental = FLUIGC.filter('#txt_responsavel_rental_1', settings);

    let filterGruRespoPlanejamento = FLUIGC.filter('#ztxt_grupo_responsavel_planejamento', settings);
    let filterGruAprovPlanejamento = FLUIGC.filter('#ztxt_grupo_aprovacao_planejamento', settings);
    let filterRespoPlanejamento = FLUIGC.filter('#txt_responsavel_planejamento_1', settings);

    let filterGruRespoAdministrativo = FLUIGC.filter('#ztxt_grupo_responsavel_administrativo', settings);
    let filterGruAprovAdministrativo = FLUIGC.filter('#ztxt_grupo_aprovacao_administrativo', settings);
    let filterRespoAdministrativo = FLUIGC.filter('#txt_responsavel_administrativo_1', settings);

    let filterGruRespoJuridico = FLUIGC.filter('#ztxt_grupo_responsavel_juridico', settings);
    let filterGruAprovJuridico = FLUIGC.filter('#ztxt_grupo_aprovacao_juridico', settings);
    let filterRespoJuridico = FLUIGC.filter('#txt_responsavel_juridico_1', settings);
    
    let filterGruRespoSuprimentos = FLUIGC.filter('#ztxt_grupo_responsavel_suprimentos', settings);
    let filterGruAprovSuprimentos = FLUIGC.filter('#ztxt_grupo_aprovacao_suprimentos', settings);
    let filterRespoSuprimentos = FLUIGC.filter('#txt_responsavel_suprimentos_1', settings);

    let filterGruRespoDiretoria = FLUIGC.filter('#ztxt_grupo_responsavel_diretoria', settings);
    let filterGruAprovDiretoria = FLUIGC.filter('#ztxt_grupo_aprovacao_diretoria', settings);
    let filterRespoDiretoria = FLUIGC.filter('#txt_responsavel_diretoria_1', settings);
    
})

function criaCampoAnexoEng(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_eng_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_eng_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_eng_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_eng_${id}`).html(conteudo)
}

function criaCampoAnexoRH(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_rh_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_rh_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_rh_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_rh_${id}`).html(conteudo)
}

function criaCampoAnexoContabilidade(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_contabilidade_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_contabilidade_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_contabilidade_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_contabilidade_${id}`).html(conteudo)
}

function criaCampoAnexoSSMAQ(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_SSMAQ_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_SSMAQ_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_SSMAQ_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_SSMAQ_${id}`).html(conteudo)
}

function criaCampoAnexoFinanceiro(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_financeiro_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_financeiro_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_financeiro_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_financeiro_${id}`).html(conteudo)
}

function criaCampoAnexoRental(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_rental_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_rental_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_rental_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_rental_${id}`).html(conteudo)
}

function criaCampoAnexoPlanejamento(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_planejamento_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_planejamento_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_planejamento_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_planejamento_${id}`).html(conteudo)
}

function criaCampoAnexoAdministrativo(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_administrativo_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_administrativo_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_administrativo_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_administrativo_${id}`).html(conteudo)
}

function criaCampoAnexoJuridico(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_juridico_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_juridico_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_juridico_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_juridico_${id}`).html(conteudo)
}

function criaCampoAnexoSuprimentos(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_suprimentos_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_suprimentos_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_suprimentos_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_suprimentos_${id}`).html(conteudo)
}

function criaCampoAnexoDiretoria(elemento) {
    console.log(elemento.id.length)
    let id = elemento.id[elemento.id.length - 1]
    let listaAnexosID = $($("#" + elemento.id)[0].parentElement)[0].children[1].id
    let conteudo = ""
        for(let i = 1; i <= $(`#${elemento.id}`).val(); i++) {
            conteudo += `<div class="col-md-1"></div>
                        <div class="col-md-11">
                        <label for="txt_descricao_anexo_diretoria_${listaAnexosID[listaAnexosID.length - 1]}_${i}">Descrição Anexo ${i}</label>
                        <input type="text" class="form-control" name="txt_descricao_anexo_diretoria_${listaAnexosID[listaAnexosID.length - 1]}_${i}" id="txt_descricao_anexo_diretoria_${listaAnexosID[listaAnexosID.length - 1]}_${i}">
                        </div>`
        }
        $(`#lista_anexos_diretoria_${id}`).html(conteudo)
}

function pegaTarefas (area) {
    let areasAprovadas = validaAreas()
    for(let area in areasAprovadas) {
        if(areasAprovadas[area]) {
            if (area == "engenharia") {

                let ListatarefasEngenharia = []
                let objEngenharia = {}

                objEngenharia["setor"] = "engenharia"
                objEngenharia["grupo_responsavel_eng"] = $("#ztxt_grupo_responsavel_engenharia").val()
                objEngenharia["aprovacao_eng"] = $("#switch-aprovacao-engenharia").is(":checked")
                objEngenharia["grupo_aprovacao_eng"] = $("#ztxt_grupo_aprovacao_engenharia").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_eng_]").length; i++) {
                    objEngenharia["txt_tarefa_eng_" + i] = $("#txt_tarefa_eng_" + i).val()
                    objEngenharia["txt_responsavel_eng_" + i] = $("#txt_responsavel_eng_" + i).val()
                    objEngenharia["txt_tempo_execucao_eng_" + i] = $("#txt_tempo_execucao_eng_" + i).val()
                    objEngenharia["switch_anexo_obrigatorio_eng_" + i] = $("#switch_anexo_obrigatorio_eng_" + i).is(":checked")
                    objEngenharia["txt_anexos_eng_" + i] = $("#txt_anexos_eng_" + i).val()
                    objEngenharia["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_eng_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objEngenharia["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objEngenharia)
                    objEngenharia = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)
                listaDeTarefas.push(info)

                //  salvaTarefa(info)
            }
            if (area == "rh") {

                let ListatarefasEngenharia = []
                let objRH = {}
                
                objRH["setor"] = "rh"
                objRH["grupo_responsavel_rh"] = $("#ztxt_grupo_responsavel_rh").val()
                objRH["aprovacao_rh"] = $("#switch-aprovacao-rh").is(":checked")
                objRH["grupo_aprovacao_rh"] = $("#ztxt_grupo_aprovacao_rh").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_rh_]").length; i++) {
                    objRH["txt_tarefa_rh_" + i] = $("#txt_tarefa_rh_" + i).val()
                    objRH["txt_responsavel_rh_" + i] = $("#txt_responsavel_rh_" + i).val()
                    objRH["txt_tempo_execucao_rh_" + i] = $("#txt_tempo_execucao_rh_" + i).val()
                    objRH["switch_anexo_obrigatorio_rh_" + i] = $("#switch_anexo_obrigatorio_rh_" + i).is(":checked")
                    objRH["txt_anexos_rh_" + i] = $("#txt_anexos_rh_" + i).val()
                    objRH["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_rh_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objRH["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_rh_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objRH)
                    objRH = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)

                //  salvaTarefa(info)
            }
            if (area == "contabilidade") {

                let ListatarefasEngenharia = []
                let objContabilidade = {}

                objContabilidade["setor"] = "contabilidade"
                objContabilidade["grupo_responsavel_contabilidade"] = $("#ztxt_grupo_responsavel_contabilidade").val()
                objContabilidade["aprovacao_contabilidade"] = $("#switch-aprovacao-contabilidade").is(":checked")
                objContabilidade["grupo_aprovacao_contabilidade"] = $("#ztxt_grupo_aprovacao_contabilidade").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_contabilidade_]").length; i++) {
                    objContabilidade["txt_tarefa_contabilidade_" + i] = $("#txt_tarefa_contabilidade_" + i).val()
                    objContabilidade["txt_responsavel_contabilidade_" + i] = $("#txt_responsavel_contabilidade_" + i).val()
                    objContabilidade["txt_tempo_execucao_contabilidade_" + i] = $("#txt_tempo_execucao_contabilidade_" + i).val()
                    objContabilidade["switch_anexo_obrigatorio_contabilidade_" + i] = $("#switch_anexo_obrigatorio_contabilidade_" + i).is(":checked")
                    objContabilidade["txt_anexos_contabilidade_" + i] = $("#txt_anexos_contabilidade_" + i).val()
                    objContabilidade["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_contabilidade_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objContabilidade["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_contabilidade_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objContabilidade)
                    objContabilidade = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)

                //  salvaTarefa(info)
            }
            if (area == "SSMAQ") {

                let ListatarefasEngenharia = []
                let objSSMAQ = {}

                objSSMAQ["setor"] = "SSMAQ"
                objSSMAQ["grupo_responsavel_SSMAQ"] = $("#ztxt_grupo_responsavel_SSMAQ").val()
                objSSMAQ["aprovacao_SSMAQ"] = $("#switch-aprovacao-SSMAQ").is(":checked")
                objSSMAQ["grupo_aprovacao_SSMAQ"] = $("#ztxt_grupo_aprovacao_SSMAQ").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_SSMAQ_]").length; i++) {
                    objSSMAQ["txt_tarefa_SSMAQ_" + i] = $("#txt_tarefa_SSMAQ_" + i).val()
                    objSSMAQ["txt_responsavel_SSMAQ_" + i] = $("#txt_responsavel_SSMAQ_" + i).val()
                    objSSMAQ["txt_tempo_execucao_SSMAQ_" + i] = $("#txt_tempo_execucao_SSMAQ_" + i).val()
                    objSSMAQ["switch_anexo_obrigatorio_SSMAQ_" + i] = $("#switch_anexo_obrigatorio_SSMAQ_" + i).is(":checked")
                    objSSMAQ["txt_anexos_SSMAQ_" + i] = $("#txt_anexos_SSMAQ_" + i).val()
                    objSSMAQ["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_SSMAQ_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objSSMAQ["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_SSMAQ_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objSSMAQ)
                    objSSMAQ = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)

                //  salvaTarefa(info)
            }
            if (area == "financeiro") {

                let ListatarefasEngenharia = []
                let objFinanceiro = {}

                objFinanceiro["setor"] = "financeiro"
                objFinanceiro["grupo_responsavel_financeiro"] = $("#ztxt_grupo_responsavel_financeiro").val()
                objFinanceiro["aprovacao_financeiro"] = $("#switch-aprovacao-financeiro").is(":checked")
                objFinanceiro["grupo_aprovacao_financeiro"] = $("#ztxt_grupo_aprovacao_financeiro").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_financeiro_]").length; i++) {
                    objFinanceiro["txt_tarefa_financeiro_" + i] = $("#txt_tarefa_financeiro_" + i).val()
                    objFinanceiro["txt_responsavel_financeiro_" + i] = $("#txt_responsavel_financeiro_" + i).val()
                    objFinanceiro["txt_tempo_execucao_financeiro_" + i] = $("#txt_tempo_execucao_financeiro_" + i).val()
                    objFinanceiro["switch_anexo_obrigatorio_financeiro_" + i] = $("#switch_anexo_obrigatorio_financeiro_" + i).is(":checked")
                    objFinanceiro["txt_anexos_financeiro_" + i] = $("#txt_anexos_financeiro_" + i).val()
                    objFinanceiro["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_financeiro_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objFinanceiro["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_financeiro_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objFinanceiro)
                    objFinanceiro = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)

                //  salvaTarefa(info)
            }
            if (area == "rental") {

                let ListatarefasEngenharia = []
                let objRental = {}

                objRental["setor"] = "rental"
                objRental["grupo_responsavel_rental"] = $("#ztxt_grupo_responsavel_rental").val()
                objRental["aprovacao_rental"] = $("#switch-aprovacao-rental").is(":checked")
                objRental["grupo_aprovacao_rental"] = $("#ztxt_grupo_aprovacao_rental").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_rental_]").length; i++) {
                    objRental["txt_tarefa_rental_" + i] = $("#txt_tarefa_rental_" + i).val()
                    objRental["txt_responsavel_rental_" + i] = $("#txt_responsavel_rental_" + i).val()
                    objRental["txt_tempo_execucao_rental_" + i] = $("#txt_tempo_execucao_rental_" + i).val()
                    objRental["switch_anexo_obrigatorio_rental_" + i] = $("#switch_anexo_obrigatorio_rental_" + i).is(":checked")
                    objRental["txt_anexos_rental_" + i] = $("#txt_anexos_rental_" + i).val()
                    objRental["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_rental_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objRental["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_rental_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objRental)
                    objRental = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)

                //  salvaTarefa(info)
            }
            if (area == "planejamento") {

                let ListatarefasEngenharia = []
                let objPlanejamento = {}

                objPlanejamento["setor"] = "planejamento"
                objPlanejamento["grupo_responsavel_planejamento"] = $("#ztxt_grupo_responsavel_planejamento").val()
                objPlanejamento["aprovacao_planejamento"] = $("#switch-aprovacao-planejamento").is(":checked")
                objPlanejamento["grupo_aprovacao_planejamento"] = $("#ztxt_grupo_aprovacao_planejamento").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_planejamento_]").length; i++) {
                    objPlanejamento["txt_tarefa_planejamento_" + i] = $("#txt_tarefa_planejamento_" + i).val()
                    objPlanejamento["txt_responsavel_planejamento_" + i] = $("#txt_responsavel_planejamento_" + i).val()
                    objPlanejamento["txt_tempo_execucao_planejamento_" + i] = $("#txt_tempo_execucao_planejamento_" + i).val()
                    objPlanejamento["switch_anexo_obrigatorio_planejamento_" + i] = $("#switch_anexo_obrigatorio_planejamento_" + i).is(":checked")
                    objPlanejamento["txt_anexos_planejamento_" + i] = $("#txt_anexos_planejamento_" + i).val()
                    objPlanejamento["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_planejamento_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objPlanejamento["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_planejamento_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objPlanejamento)
                    objPlanejamento = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)

                //  salvaTarefa(info)
            }
            if (area == "administrativo") {

                let ListatarefasEngenharia = []
                let objAdministrativo = {}

                objAdministrativo["setor"] = "administrativo"
                objAdministrativo["grupo_responsavel_administrativo"] = $("#ztxt_grupo_responsavel_administrativo").val()
                objAdministrativo["aprovacao_administrativo"] = $("#switch-aprovacao-administrativo").is(":checked")
                objAdministrativo["grupo_aprovacao_administrativo"] = $("#ztxt_grupo_aprovacao_administrativo").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_administrativo_]").length; i++) {
                    objAdministrativo["txt_tarefa_administrativo_" + i] = $("#txt_tarefa_administrativo_" + i).val()
                    objAdministrativo["txt_responsavel_administrativo_" + i] = $("#txt_responsavel_administrativo_" + i).val()
                    objAdministrativo["txt_tempo_execucao_administrativo_" + i] = $("#txt_tempo_execucao_administrativo_" + i).val()
                    objAdministrativo["switch_anexo_obrigatorio_administrativo_" + i] = $("#switch_anexo_obrigatorio_administrativo_" + i).is(":checked")
                    objAdministrativo["txt_anexos_administrativo_" + i] = $("#txt_anexos_administrativo_" + i).val()
                    objAdministrativo["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_administrativo_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objAdministrativo["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_administrativo_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objAdministrativo)
                    objAdministrativo = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)

                //  salvaTarefa(info)
            }
            if (area == "juridico") {

                let ListatarefasEngenharia = []
                let objJuridico = {}

                objJuridico["setor"] = "juridico"
                objJuridico["grupo_responsavel_juridico"] = $("#ztxt_grupo_responsavel_juridico").val()
                objJuridico["aprovacao_juridico"] = $("#switch-aprovacao-juridico").is(":checked")
                objJuridico["grupo_aprovacao_juridico"] = $("#ztxt_grupo_aprovacao_juridico").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_juridico_]").length; i++) {
                    objJuridico["txt_tarefa_juridico_" + i] = $("#txt_tarefa_juridico_" + i).val()
                    objJuridico["txt_responsavel_juridico_" + i] = $("#txt_responsavel_juridico_" + i).val()
                    objJuridico["txt_tempo_execucao_juridico_" + i] = $("#txt_tempo_execucao_juridico_" + i).val()
                    objJuridico["switch_anexo_obrigatorio_juridico_" + i] = $("#switch_anexo_obrigatorio_juridico_" + i).is(":checked")
                    objJuridico["txt_anexos_juridico_" + i] = $("#txt_anexos_juridico_" + i).val()
                    objJuridico["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_juridico_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objJuridico["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_juridico_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objJuridico)
                    objJuridico = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)

                //  salvaTarefa(info)
            }
            if (area == "suprimentos") {

                let ListatarefasEngenharia = []
                let objSuprimentos = {}

                objSuprimentos["setor"] = "suprimentos"
                objSuprimentos["grupo_responsavel_suprimentos"] = $("#ztxt_grupo_responsavel_suprimentos").val()
                objSuprimentos["aprovacao_suprimentos"] = $("#switch-aprovacao-suprimentos").is(":checked")
                objSuprimentos["grupo_aprovacao_suprimentos"] = $("#ztxt_grupo_aprovacao_suprimentos").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_suprimentos_]").length; i++) {
                    objSuprimentos["txt_tarefa_suprimentos_" + i] = $("#txt_tarefa_suprimentos_" + i).val()
                    objSuprimentos["txt_responsavel_suprimentos_" + i] = $("#txt_responsavel_suprimentos_" + i).val()
                    objSuprimentos["txt_tempo_execucao_suprimentos_" + i] = $("#txt_tempo_execucao_suprimentos_" + i).val()
                    objSuprimentos["switch_anexo_obrigatorio_suprimentos_" + i] = $("#switch_anexo_obrigatorio_suprimentos_" + i).is(":checked")
                    objSuprimentos["txt_anexos_suprimentos_" + i] = $("#txt_anexos_suprimentos_" + i).val()
                    objSuprimentos["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_suprimentos_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objSuprimentos["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_suprimentos_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objSuprimentos)
                    objSuprimentos = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)

                //  salvaTarefa(info)
            }
            if (area == "diretoria") {

                let ListatarefasEngenharia = []
                let objDiretoria = {}

                objDiretoria["setor"] = "diretoria"
                objDiretoria["grupo_responsavel_diretoria"] = $("#ztxt_grupo_responsavel_diretoria").val()
                objDiretoria["aprovacao_diretoria"] = $("#switch-aprovacao-diretoria").is(":checked")
                objDiretoria["grupo_aprovacao_diretoria"] = $("#ztxt_grupo_aprovacao_diretoria").val()


                for (let i = 1; i <= $("[id^=painel_tarefas_diretoria_]").length; i++) {
                    objDiretoria["txt_tarefa_diretoria_" + i] = $("#txt_tarefa_diretoria_" + i).val()
                    objDiretoria["txt_responsavel_diretoria_" + i] = $("#txt_responsavel_diretoria_" + i).val()
                    objDiretoria["txt_tempo_execucao_diretoria_" + i] = $("#txt_tempo_execucao_diretoria_" + i).val()
                    objDiretoria["switch_anexo_obrigatorio_diretoria_" + i] = $("#switch_anexo_obrigatorio_diretoria_" + i).is(":checked")
                    objDiretoria["txt_anexos_diretoria_" + i] = $("#txt_anexos_diretoria_" + i).val()
                    objDiretoria["txt_descricao_anexo_" + i] = []

                    for (let anexos = 1; anexos <= $(`[id^=txt_descricao_anexo_diretoria_${i}_]`).length; anexos++) {
                        // console.log($(`#txt_descricao_anexo_eng_${i}_${anexos}`).val())
                        objDiretoria["txt_descricao_anexo_" + i].push($(`#txt_descricao_anexo_diretoria_${i}_${anexos}`).val())
                    }

                    ListatarefasEngenharia.push(objDiretoria)
                    objDiretoria = {}
                    // console.log("objeto que é enviado: " + JSON.stringify(ListatarefasEngenharia))
                }
                let info = JSON.parse(JSON.stringify(ListatarefasEngenharia))

                console.log(info)

                //  salvaTarefa(info)
            }
        }
    }
    let listaDeTarefas = []
    
     
    
    

   

    

    

    
    
    

}

function salvaTarefa(string) {

    let dados = {
            parentDocumentId: 505013,  // form dev => 9
            version: 1000, // Versão do documento
            inheritSecurity: true,
            formData: [ // Lista de campos do formulário
                 {
                    name: "tarefa_engenharia",
                    value: info,
                },
                {
                    name: "nome_atividade",
                    value:"Atividade 1"
                }
            ]
        }

        let formData = JSON.stringify(dados);

        $.ajax({
            async: true,
            url: '/api/public/2.0/cards/create',
            type: "POST",
            contentType: "application/json",
            Accept: "text/html",
            data: formData,
            success: function (data) {
                console.log('Criado com sucesso')

            },
            error: function (data, errorThrown, status) {
                console.log('Deu erro!')
            }
        })
}

function validaAreas () {
    let areasEnvolvidas = {
        engenharia: $("#switch-engenharia").is(":checked"),
        rh:$("#switch-rh").is(":checked"),
        contabilidade: $("#switch-contabilidade").is(":checked"),
        SSMAQ: $("#switch-SSMAQ").is(":checked"),
        financeiro: $("#switch-financeiro").is(":checked"),
        rental: $("#switch-rental").is(":checked"),
        planejamento: $("#switch-planejamento").is(":checked"),
        administrativo: $("#switch-administrativo").is(":checked"),
        juridico: $("#switch-juridico").is(":checked"),
        suprimentos: $("#switch-suprimentos").is(":checked"),
        diretoria: $("#switch-diretoria").is(":checked")
    }

    return areasEnvolvidas
}

function adicionaTarefaEngenharia() {
    
    let quantidadeItem = $("[id^=painel_tarefas_eng_]").length
        $(`#painel_tarefas_eng_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_eng_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_eng_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa" id="txt_tarefa_eng_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_eng_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel" id="txt_responsavel_eng_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_eng_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_eng_${quantidadeItem + 1}" id="txt_tempo_execucao_eng_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_eng_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_eng_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_eng_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_eng_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_eng_${quantidadeItem + 1}" id="txt_anexos_eng_${quantidadeItem + 1}" onchange="criaCampoAnexoEng(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_eng_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_eng_${quantidadeItem + 1}`, settings);
}

function adicionaTarefaRH() {
    
    let quantidadeItem = $("[id^=painel_tarefas_rh_]").length
        $(`#painel_tarefas_rh_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_rh_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_rh_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa_rh_${quantidadeItem + 1}" id="txt_tarefa_rh_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_rh_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel_rh_${quantidadeItem + 1}" id="txt_responsavel_rh_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_rh_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_rh_${quantidadeItem + 1}" id="txt_tempo_execucao_rh_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_rh_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_rh_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_rh_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_rh_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_rh_${quantidadeItem + 1}" id="txt_anexos_rh_${quantidadeItem + 1}" onchange="criaCampoAnexoRH(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_rh_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_rh_${quantidadeItem + 1}`, settings);
}

function adicionaTarefaContabilidade() {
    
    let quantidadeItem = $("[id^=painel_tarefas_contabilidade_]").length
        $(`#painel_tarefas_contabilidade_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_contabilidade_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_contabilidade_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa_contabilidade_${quantidadeItem + 1}" id="txt_tarefa_contabilidade_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_contabilidade_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel_contabilidade_${quantidadeItem + 1}" id="txt_responsavel_contabilidade_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_contabilidade_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_contabilidade_${quantidadeItem + 1}" id="txt_tempo_execucao_contabilidade_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_contabilidade_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_contabilidade_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_contabilidade_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_contabilidade_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_contabilidade_${quantidadeItem + 1}" id="txt_anexos_contabilidade_${quantidadeItem + 1}" onchange="criaCampoAnexoContabilidade(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_contabilidade_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_contabilidade_${quantidadeItem + 1}`, settings);
}

function adicionaTarefaSSMAQ() {
    
    let quantidadeItem = $("[id^=painel_tarefas_SSMAQ_]").length
        $(`#painel_tarefas_SSMAQ_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_SSMAQ_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_SSMAQ_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa_SSMAQ_${quantidadeItem + 1}" id="txt_tarefa_SSMAQ_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_SSMAQ_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel_SSMAQ_${quantidadeItem + 1}" id="txt_responsavel_SSMAQ_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_SSMAQ_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_SSMAQ_${quantidadeItem + 1}" id="txt_tempo_execucao_SSMAQ_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_SSMAQ_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_SSMAQ_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_SSMAQ_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_SSMAQ_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_SSMAQ_${quantidadeItem + 1}" id="txt_anexos_SSMAQ_${quantidadeItem + 1}" onchange="criaCampoAnexoSSMAQ(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_SSMAQ_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_SSMAQ_${quantidadeItem + 1}`, settings);
}

function adicionaTarefaFinanceiro() {
    
    let quantidadeItem = $("[id^=painel_tarefas_financeiro_]").length
        $(`#painel_tarefas_financeiro_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_financeiro_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_financeiro_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa_financeiro_${quantidadeItem + 1}" id="txt_tarefa_financeiro_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_financeiro_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel_financeiro_${quantidadeItem + 1}" id="txt_responsavel_financeiro_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_financeiro_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_financeiro_${quantidadeItem + 1}" id="txt_tempo_execucao_financeiro_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_financeiro_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_financeiro_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_financeiro_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_financeiro_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_financeiro_${quantidadeItem + 1}" id="txt_anexos_financeiro_${quantidadeItem + 1}" onchange="criaCampoAnexoFinanceiro(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_financeiro_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_financeiro_${quantidadeItem + 1}`, settings);
}

function adicionaTarefaRental() {
    
    let quantidadeItem = $("[id^=painel_tarefas_rental_]").length
        $(`#painel_tarefas_rental_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_rental_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_rental_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa_rental_${quantidadeItem + 1}" id="txt_tarefa_rental_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_rental_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel_rental_${quantidadeItem + 1}" id="txt_responsavel_rental_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_rental_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_rental_${quantidadeItem + 1}" id="txt_tempo_execucao_rental_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_rental_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_rental_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_rental_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_rental_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_rental_${quantidadeItem + 1}" id="txt_anexos_rental_${quantidadeItem + 1}" onchange="criaCampoAnexoRental(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_rental_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_planejamento_${quantidadeItem + 1}`, settings);
}

function adicionaTarefaPlanejamento() {
    
    let quantidadeItem = $("[id^=painel_tarefas_planejamento_]").length
        $(`#painel_tarefas_planejamento_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_planejamento_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_planejamento_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa_planejamento_${quantidadeItem + 1}" id="txt_tarefa_planejamento_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_planejamento_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel_planejamento_${quantidadeItem + 1}" id="txt_responsavel_planejamento_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_planejamento_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_planejamento_${quantidadeItem + 1}" id="txt_tempo_execucao_planejamento_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_planejamento_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_planejamento_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_planejamento_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_planejamento_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_planejamento_${quantidadeItem + 1}" id="txt_anexos_planejamento_${quantidadeItem + 1}" onchange="criaCampoAnexoPlanejamento(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_planejamento_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_planejamento_${quantidadeItem + 1}`, settings);
}

function adicionaTarefaAdministrativo() {
    
    let quantidadeItem = $("[id^=painel_tarefas_administrativo_]").length
        $(`#painel_tarefas_administrativo_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_administrativo_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_administrativo_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa_administrativo_${quantidadeItem + 1}" id="txt_tarefa_administrativo_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_administrativo_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel_administrativo_${quantidadeItem + 1}" id="txt_responsavel_administrativo_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_administrativo_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_administrativo_${quantidadeItem + 1}" id="txt_tempo_execucao_administrativo_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_administrativo_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_administrativo_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_administrativo_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_administrativo_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_administrativo_${quantidadeItem + 1}" id="txt_anexos_administrativo_${quantidadeItem + 1}" onchange="criaCampoAnexoAdministrativo(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_administrativo_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_administrativo_${quantidadeItem + 1}`, settings);
}

function adicionaTarefaJuridico() {
    
    let quantidadeItem = $("[id^=painel_tarefas_juridico_]").length
        $(`#painel_tarefas_juridico_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_juridico_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_juridico_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa_juridico_${quantidadeItem + 1}" id="txt_tarefa_juridico_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_juridico_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel_juridico_${quantidadeItem + 1}" id="txt_responsavel_juridico_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_juridico_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_juridico_${quantidadeItem + 1}" id="txt_tempo_execucao_juridico_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_juridico_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_juridico_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_juridico_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_juridico_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_juridico_${quantidadeItem + 1}" id="txt_anexos_juridico_${quantidadeItem + 1}" onchange="criaCampoAnexoJuridico(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_juridico_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_juridico_${quantidadeItem + 1}`, settings);
}

function adicionaTarefaSuprimentos() {
    
    let quantidadeItem = $("[id^=painel_tarefas_suprimentos_]").length
        $(`#painel_tarefas_suprimentos_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_suprimentos_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_suprimentos_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa_suprimentos_${quantidadeItem + 1}" id="txt_tarefa_suprimentos_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_suprimentos_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel_suprimentos_${quantidadeItem + 1}" id="txt_responsavel_suprimentos_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_suprimentos_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_suprimentos_${quantidadeItem + 1}" id="txt_tempo_execucao_suprimentos_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_suprimentos_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_suprimentos_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_suprimentos_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_suprimentos_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_suprimentos_${quantidadeItem + 1}" id="txt_anexos_suprimentos_${quantidadeItem + 1}" onchange="criaCampoAnexoSuprimentos(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_suprimentos_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_suprimentos_${quantidadeItem + 1}`, settings);
}

function adicionaTarefaDiretoria() {
    
    let quantidadeItem = $("[id^=painel_tarefas_diretoria_]").length
        $(`#painel_tarefas_diretoria_${quantidadeItem}`).after(`<div class="panel-custom" id="painel_tarefas_diretoria_${quantidadeItem + 1}">
                                        <div class="row">
                                            <div class="col-md-1 text-center">
                                                <br>
                                                <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="txt_tarefa_diretoria_${quantidadeItem + 1}">Tarefa</label>
                                                <input type="text" class="form-control" name="txt_tarefa_diretoria_${quantidadeItem + 1}" id="txt_tarefa_diretoria_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-5">
                                                <label for="txt_responsavel_diretoria_${quantidadeItem + 1}">Responsavel</label>
                                                <input type="text" class="form-control" name="txt_responsavel_diretoria_${quantidadeItem + 1}" id="txt_responsavel_diretoria_${quantidadeItem + 1}">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-6">
                                                <label for="txt_tempo_execucao_diretoria_${quantidadeItem + 1}">Tempo de Execução</label>
                                                <input type="text" class="form-control" name="txt_tempo_execucao_diretoria_${quantidadeItem + 1}" id="txt_tempo_execucao_diretoria_${quantidadeItem + 1}">
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <div class="switch switch-success switch-labels">
                                                        <label for="switch_anexo_obrigatorio_diretoria_${quantidadeItem + 1}">Anexo obrigatório ?</label>
                                                        <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_diretoria_${quantidadeItem + 1}" />
                                                        <label class="switch-button" for="switch_anexo_obrigatorio_diretoria_${quantidadeItem + 1}">Toggle</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label for="txt_anexos_diretoria_${quantidadeItem + 1}">Quantidade de anexos</label>
                                                <input type="number" class="form-control" name="txt_anexos_diretoria_${quantidadeItem + 1}" id="txt_anexos_diretoria_${quantidadeItem + 1}" onchange="criaCampoAnexoDiretoria(this)">
                                            </div>
                                        </div>
                                        <div class="row" id="lista_anexos_diretoria_${quantidadeItem + 1}"></div>
                                    </div>`)

    let c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "TEM001_Engenharia", "TEM001_Engenharia", ConstraintType.MUST)
    let grupoEngenharia = DatasetFactory.getDataset("colleagueGroup", null, [c1], null)
    var settings = {
        source: grupoEngenharia.values,
        displayKey: 'colleagueGroupPK.colleagueId',
        multiSelect: false,
        style: {
            autocompleteTagClass: 'tag-gray',
            tableSelectedLineClass: 'info'
        },
        table: {
            header: [
                {
                    'title': 'Nome',
                    'size': 'col-xs-3'
                },
            ],
            renderContent: ['colleagueGroupPK.colleagueId']
        }
    };

    let filter = FLUIGC.filter(`#txt_responsavel_diretoria_${quantidadeItem + 1}`, settings);
}