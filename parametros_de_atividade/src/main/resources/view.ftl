<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
    <link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-filter.min.css">
    <script src="/style-guide/js/fluig-style-guide-filter.min.js"></script>
    <script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
    <div>
        <div class="panel-custom">
            <div class="head-panel">
                <i class="flaticon flaticon-diagram icon-md" aria-hidden="true"></i>
                <h3 style="padding-bottom: 10px;">Cadastro de atividades</h3>
            </div>
            <div style="margin: 0px 20px;">
                <hr>
            </div>
            <div class="row" style="margin: 0px 5px;">
                <div class="col-md-4">
                    <label for="">Atividade</label>
                    <input type="text" name="txt_nome_atividade" id="txt_nome_atividade" class="form-control">
                </div>
                <div class="col-md-8">
                    <label for="">Descrição da atividade</label>
                    <input type="text" name="txt_descricao_atividade" id="txt_descricao_atividade" class="form-control">
                </div>
            </div>
            <div class="panel-custom" style="margin: 0px 20px;">
                <div class="head-panel">
                    <h3>Áreas Envolvidas</h3>
                </div>
                <div style="margin: 0px 20px;">
                    <hr>
                </div>
                <div class="panel-custom" style="margin: 0px 17px;">
                    <div class="accordion" id="accordionExample">
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingEngenharia" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseEngenharia" aria-expanded="false" aria-controls="collapseEngenharia">
                                                Engenharia
                                            </button>
                                        </div>
                                        <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;">
                                                <input class="switch-input" type="checkbox" id="switch-engenharia" data-toggle="collapse" data-target="#collapseEngenharia" aria-expanded="false" aria-controls="collapseEngenharia"/>
                                                <label class="switch-button" for="switch-engenharia">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" data-toggle="collapse" data-target="#collapseEngenharia" aria-expanded="false" aria-controls="collapseEngenharia"
                                            style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseEngenharia" class="collapse" aria-labelledby="headingEngenharia"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_engenharia">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_engenharia" name="ztxt_grupo_responsavel_engenharia">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-engenharia">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-engenharia" />
                                                    <label class="switch-button" for="switch-aprovacao-engenharia">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_engenharia">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_engenharia" name="ztxt_grupo_aprovacao_engenharia">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_eng_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_eng_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_eng_1" id="txt_tarefa_eng_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_eng_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_eng_1" id="txt_responsavel_eng_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_eng_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_eng_1" id="txt_tempo_execucao_eng_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_eng_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_eng_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_eng_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_eng_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_eng_1" id="txt_anexos_eng_1" onchange="criaCampoAnexoEng(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_eng_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_eng" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingRH" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseRH" aria-expanded="false" aria-controls="collapseRH">
                                                RH
                                            </button>
                                        </div>
                                         <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;"
                                            data-toggle="collapse" data-target="#collapseRH" aria-expanded="false" aria-controls="collapseRH">
                                                <input class="switch-input" type="checkbox" id="switch-rh" />
                                                <label class="switch-button" for="switch-rh">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseRH" class="collapse" aria-labelledby="headingRH" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_rh">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_rh" name="ztxt_grupo_responsavel_rh">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-rh">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-rh" />
                                                    <label class="switch-button" for="switch-aprovacao-rh">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_rh">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_rh" name="ztxt_grupo_aprovacao_rh">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_rh_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_rh_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_rh_1" id="txt_tarefa_rh_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_rh_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_rh_1" id="txt_responsavel_rh_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_rh_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_rh_1" id="txt_tempo_execucao_rh_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_rh_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_rh_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_rh_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_rh_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_rh_1" id="txt_anexos_rh_1" onchange="criaCampoAnexoRH(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_rh_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_rh" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingContabilidade" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseContabilidade" aria-expanded="false" aria-controls="collapseContabilidade">
                                                Contabilidade/Fiscal
                                            </button>
                                        </div>
                                         <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;"
                                            data-toggle="collapse" data-target="#collapseContabilidade" aria-expanded="false" aria-controls="collapseContabilidade">
                                                <input class="switch-input" type="checkbox" id="switch-contabilidade" />
                                                <label class="switch-button" for="switch-contabilidade">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseContabilidade" class="collapse" aria-labelledby="headingContabilidade" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_contabilidade">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_contabilidade" name="ztxt_grupo_responsavel_contabilidade">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-contabilidade">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-contabilidade" />
                                                    <label class="switch-button" for="switch-aprovacao-contabilidade">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_contabilidade">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_contabilidade" name="ztxt_grupo_aprovacao_contabilidade">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_contabilidade_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_contabilidade_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_contabilidade_1" id="txt_tarefa_contabilidade_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_contabilidade_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_contabilidade_1" id="txt_responsavel_contabilidade_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_contabilidade_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_contabilidade_1" id="txt_tempo_execucao_contabilidade_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_contabilidade_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_contabilidade_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_contabilidade_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_contabilidade_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_contabilidade_1" id="txt_anexos_contabilidade_1" onchange="criaCampoAnexoContabilidade(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_contabilidade_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_contabilidade" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingSSMAQ" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseSSMAQ" aria-expanded="false" aria-controls="collapseSSMAQ">
                                                SSMAQ
                                            </button>
                                        </div>
                                         <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;"
                                            data-toggle="collapse" data-target="#collapseSSMAQ" aria-expanded="false" aria-controls="collapseSSMAQ">
                                                <input class="switch-input" type="checkbox" id="switch-SSMAQ" />
                                                <label class="switch-button" for="switch-SSMAQ">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseSSMAQ" class="collapse" aria-labelledby="headingSSMAQ" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_SSMAQ">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_SSMAQ" name="ztxt_grupo_responsavel_SSMAQ">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-SSMAQ">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-SSMAQ" />
                                                    <label class="switch-button" for="switch-aprovacao-SSMAQ">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_SSMAQ">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_SSMAQ" name="ztxt_grupo_aprovacao_SSMAQ">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_SSMAQ_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_SSMAQ_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_SSMAQ_1" id="txt_tarefa_SSMAQ_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_SSMAQ_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_SSMAQ_1" id="txt_responsavel_SSMAQ_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_SSMAQ_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_SSMAQ_1" id="txt_tempo_execucao_SSMAQ_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_SSMAQ_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_SSMAQ_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_SSMAQ_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_SSMAQ_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_SSMAQ_1" id="txt_anexos_SSMAQ_1" onchange="criaCampoAnexoSSMAQ(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_SSMAQ_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_SSMAQ" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingFinanceiro" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseFinanceiro" aria-expanded="false" aria-controls="collapseFinanceiro">
                                                Financeiro
                                            </button>
                                        </div>
                                         <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;"
                                            data-toggle="collapse" data-target="#collapseFinanceiro" aria-expanded="false" aria-controls="collapseFinanceiro">
                                                <input class="switch-input" type="checkbox" id="switch-financeiro" />
                                                <label class="switch-button" for="switch-financeiro">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseFinanceiro" class="collapse" aria-labelledby="headingFinanceiro" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_financeiro">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_financeiro" name="ztxt_grupo_responsavel_financeiro">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-financeiro">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-financeiro" />
                                                    <label class="switch-button" for="switch-aprovacao-financeiro">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_financeiro">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_financeiro" name="ztxt_grupo_aprovacao_financeiro">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_financeiro_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_financeiro_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_financeiro_1" id="txt_tarefa_financeiro_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_financeiro_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_financeiro_1" id="txt_responsavel_financeiro_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_financeiro_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_financeiro_1" id="txt_tempo_execucao_financeiro_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_financeiro_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_financeiro_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_financeiro_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_financeiro_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_financeiro_1" id="txt_anexos_financeiro_1" onchange="criaCampoAnexoFinanceiro(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_financeiro_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_financeiro" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingRental" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseRental" aria-expanded="false" aria-controls="collapseRental">
                                                Rental
                                            </button>
                                        </div>
                                         <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;"
                                            data-toggle="collapse" data-target="#collapseRental" aria-expanded="false" aria-controls="collapseRental">
                                                <input class="switch-input" type="checkbox" id="switch-rental" />
                                                <label class="switch-button" for="switch-rental">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseRental" class="collapse" aria-labelledby="headingRental" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_rental">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_rental" name="ztxt_grupo_responsavel_rental">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-rental">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-rental" />
                                                    <label class="switch-button" for="switch-aprovacao-rental">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_rental">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_rental" name="ztxt_grupo_aprovacao_rental">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_rental_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_rental_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_rental_1" id="txt_tarefa_rental_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_rental_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_rental_1" id="txt_responsavel_rental_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_rental_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_rental_1" id="txt_tempo_execucao_rental_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_rental_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_rental_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_rental_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_rental_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_rental_1" id="txt_anexos_rental_1" onchange="criaCampoAnexoRental(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_rental_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_rental" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingPlanejamento" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapsePlanejamento" aria-expanded="false" aria-controls="collapsePlanejamento">
                                                Planejamento
                                            </button>
                                        </div>
                                         <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;"
                                            data-toggle="collapse" data-target="#collapsePlanejamento" aria-expanded="false" aria-controls="collapsePlanejamento">
                                                <input class="switch-input" type="checkbox" id="switch-planejamento" />
                                                <label class="switch-button" for="switch-planejamento">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapsePlanejamento" class="collapse" aria-labelledby="headingPlanejamento" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_planejamento">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_planejamento" name="ztxt_grupo_responsavel_planejamento">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-planejamento">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-planejamento" />
                                                    <label class="switch-button" for="switch-aprovacao-planejamento">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_planejamento">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_planejamento" name="ztxt_grupo_aprovacao_planejamento">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_planejamento_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_planejamento_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_planejamento_1" id="txt_tarefa_planejamento_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_planejamento_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_planejamento_1" id="txt_responsavel_planejamento_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_planejamento_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_planejamento_1" id="txt_tempo_execucao_planejamento_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_planejamento_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_planejamento_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_planejamento_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_planejamento_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_planejamento_1" id="txt_anexos_planejamento_1" onchange="criaCampoAnexoPlanejamento(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_planejamento_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_planejamento" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingAdministrativo" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseAdministrativo" aria-expanded="false" aria-controls="collapseAdministrativo">
                                                Administrativo
                                            </button>
                                        </div>
                                         <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;"
                                            data-toggle="collapse" data-target="#collapseAdministrativo" aria-expanded="false" aria-controls="collapseAdministrativo">
                                                <input class="switch-input" type="checkbox" id="switch-administrativo" />
                                                <label class="switch-button" for="switch-administrativo">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseAdministrativo" class="collapse" aria-labelledby="headingAdministrativo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_administrativo">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_administrativo" name="ztxt_grupo_responsavel_administrativo">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-administrativo">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-administrativo" />
                                                    <label class="switch-button" for="switch-aprovacao-administrativo">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_administrativo">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_administrativo" name="ztxt_grupo_aprovacao_administrativo">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_administrativo_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_administrativo_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_administrativo_1" id="txt_tarefa_administrativo_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_administrativo_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_administrativo_1" id="txt_responsavel_administrativo_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_administrativo_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_administrativo_1" id="txt_tempo_execucao_administrativo_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_administrativo_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_administrativo_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_administrativo_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_administrativo_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_administrativo_1" id="txt_anexos_administrativo_1" onchange="criaCampoAnexoAdministrativo(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_administrativo_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_administrativo" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingJuridico" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseJuridico" aria-expanded="false" aria-controls="collapseJuridico">
                                                Jurídico
                                            </button>
                                        </div>
                                         <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;"
                                            data-toggle="collapse" data-target="#collapseJuridico" aria-expanded="false" aria-controls="collapseJuridico">
                                                <input class="switch-input" type="checkbox" id="switch-juridico" />
                                                <label class="switch-button" for="switch-juridico">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseJuridico" class="collapse" aria-labelledby="headingJuridico" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_juridico">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_juridico" name="ztxt_grupo_responsavel_juridico">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-juridico">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-juridico" />
                                                    <label class="switch-button" for="switch-aprovacao-juridico">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_juridico">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_juridico" name="ztxt_grupo_aprovacao_juridico">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_juridico_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_juridico_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_juridico_1" id="txt_tarefa_juridico_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_juridico_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_juridico_1" id="txt_responsavel_juridico_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_juridico_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_juridico_1" id="txt_tempo_execucao_juridico_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_juridico_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_juridico_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_juridico_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_juridico_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_juridico_1" id="txt_anexos_juridico_1" onchange="criaCampoAnexoJuridico(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_juridico_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_juridico" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingSuprimentos" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseSuprimentos" aria-expanded="false" aria-controls="collapseSuprimentos">
                                                Suprimentos
                                            </button>
                                        </div>
                                         <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;"
                                            data-toggle="collapse" data-target="#collapseSuprimentos" aria-expanded="false" aria-controls="collapseSuprimentos">
                                                <input class="switch-input" type="checkbox" id="switch-suprimentos" />
                                                <label class="switch-button" for="switch-suprimentos">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseSuprimentos" class="collapse" aria-labelledby="headingSuprimentos" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_suprimentos">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_suprimentos" name="ztxt_grupo_responsavel_suprimentos">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-suprimentos">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-suprimentos" />
                                                    <label class="switch-button" for="switch-aprovacao-suprimentos">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_suprimentos">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_suprimentos" name="ztxt_grupo_aprovacao_suprimentos">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_suprimentos_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_suprimentos_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_suprimentos_1" id="txt_tarefa_suprimentos_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_suprimentos_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_suprimentos_1" id="txt_responsavel_suprimentos_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_suprimentos_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_suprimentos_1" id="txt_tempo_execucao_suprimentos_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_suprimentos_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_suprimentos_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_suprimentos_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_suprimentos_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_suprimentos_1" id="txt_anexos_suprimentos_1" onchange="criaCampoAnexoSuprimentos(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_suprimentos_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_suprimentos" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card" style="background: #fff !important;">
                            <div class="card-header" id="headingDiretoria" style="background: #fff !important;">
                                <h5 class="mb-0">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <button class="btn btn-link collapse-text collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseDiretoria" aria-expanded="false" aria-controls="collapseDiretoria">
                                                Diretoria
                                            </button>
                                        </div>
                                         <div class="col-md-3" style="text-align: end;">
                                            <div class="switch switch-success switch-labels switch-lg" style="text-align: start;"
                                            data-toggle="collapse" data-target="#collapseDiretoria" aria-expanded="false" aria-controls="collapseDiretoria">
                                                <input class="switch-input" type="checkbox" id="switch-diretoria" />
                                                <label class="switch-button" for="switch-diretoria">Toggle</label>
                                            </div>
                                        </div>
                                        <div class="col-md-1" style="text-align: center;">
                                            <button type="button" style="background-color: #fff;border-color: #fff;box-shadow: none !important;border-left-width: 0px;border: none;border-bottom-width: 0px;">
                                                <i class="flaticon flaticon-chevron-down icon-md" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div id="collapseDiretoria" class="collapse" aria-labelledby="headingDiretoria" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_responsavel_diretoria">Grupo Responsavel</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_responsavel_diretoria" name="ztxt_grupo_responsavel_diretoria">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <div class="switch switch-success switch-labels">
                                                    <label for="switch-aprovacao-diretoria">Necessita de aprovação ?</label>
                                                    <input class="switch-input" type="checkbox" id="switch-aprovacao-diretoria" />
                                                    <label class="switch-button" for="switch-aprovacao-diretoria">Toggle</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="ztxt_grupo_aprovacao_diretoria">Grupo de Aprovação</label>
                                            <input type="text" class="form-control" id="ztxt_grupo_aprovacao_diretoria" name="ztxt_grupo_aprovacao_diretoria">
                                        </div>
                                    </div>
                                    <div class="panel-custom">
                                        <div class="text-center">
                                            <label></label>
                                            <h3>TAREFAS</h3>
                                        </div>
                                        <div class="panel-custom" id="painel_tarefas_diretoria_1">
                                            <div class="row">
                                                <div class="col-md-1 text-center">
                                                    <br>
                                                    <i class="flaticon flaticon-trash icon-md text-danger" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="txt_tarefa_diretoria_1">Tarefa</label>
                                                    <input type="text" class="form-control" name="txt_tarefa_diretoria_1" id="txt_tarefa_diretoria_1">
                                                </div>
                                                <div class="col-md-5">
                                                    <label for="txt_responsavel_diretoria_1">Responsavel</label>
                                                    <input type="text" class="form-control" name="txt_responsavel_diretoria_1" id="txt_responsavel_diretoria_1">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-1"></div>
                                                <div class="col-md-6">
                                                    <label for="txt_tempo_execucao_diretoria_1">Tempo de Execução</label>
                                                    <input type="text" class="form-control" name="txt_tempo_execucao_diretoria_1" id="txt_tempo_execucao_diretoria_1">
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <div class="switch switch-success switch-labels">
                                                            <label for="switch_anexo_obrigatorio_diretoria_1">Anexo obrigatório ?</label>
                                                            <input class="switch-input" type="checkbox" id="switch_anexo_obrigatorio_diretoria_1" />
                                                            <label class="switch-button" for="switch_anexo_obrigatorio_diretoria_1">Toggle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="txt_anexos_diretoria_1">Quantidade de anexos</label>
                                                    <input type="number" class="form-control" name="txt_anexos_diretoria_1" id="txt_anexos_diretoria_1" onchange="criaCampoAnexoDiretoria(this)">
                                                </div>
                                            </div>
                                            <div class="row" id="lista_anexos_diretoria_1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <button type="button" id="btn_adicionar_tarefa_diretoria" class="btn btn-info">
                                                    <i class="flaticon flaticon-circle-plus icon-sm" aria-hidden="true"></i>
                                                     Adicionar Tarefa
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card">
                            <button class="btn-info" id="teste_save">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

