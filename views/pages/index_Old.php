<?php
if (session_status() !== PHP_SESSION_ACTIVE) {//Verificar se a sessão não já está aberta.
  session_start();
}
//
//require_once('../login/verifica_sessao.php');
require_once('../config.php');
require_once(HEADER_TEMPLATE);
//
?>
<center>	
<div class="card border-secondary text-center mb-3" style="max-width: 32rem;">
<div class="card-header text-white bg-secondary font-weight-bold text-center">Venom Bot</div>
<div class="card-body text-secondary text-center align-items-center">
 <div class="row d-flex justify-content-center">
		<div class="col-md-5 text-center">
			<span id="qrcodeVenon"></span>
		</div>
		<div class="col-md-5 text-left">
		<strong>Serviço....: </strong><span id="servicoVenom"></span>
		<br>
		<strong>Status......: </strong><span id="startVenom"></span>
		<br>
		<strong>Contatos.: </strong>
		<br>
		<strong>Grupos....: </strong>
		<br>
		<strong>Chat.........: </strong>
		</div>
</div>
</div>
<div class="card-footer text-muted text-center"> 
<form class="text-center" id="venombot-form" method="post" enctype="multipart/form-data" action="javascript:void(0)">
<button id="starVenon" type="button" class="btn btn-sm btn-success">Iniciar</button>
<button id="restarVenon" type="button" class="btn btn-sm btn-warning">Reiniciar</button>
<button id="closeVenon" type="button" class="btn btn-sm btn-danger">Sair</button>
</form>
</div>

</div>
</center>
<br>
<div class="row d-flex justify-content-center">
 
            <div class="col-sm-6">
 
            </div>
            <div class="col-sm-6">
            	<form class="text-center" id="sendFileImgMassa-form" method="post" action="javascript:void(0)">
                <div class="card border-warning mb-3">
                    <div class="card-header text-white bg-warning font-weight-bold text-center">Enviar Imagem / Contato em massa</div>
                    <div class="card-body text-warning text-center ">

				<div class="form-group col-12">
					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-phone"></i>
							</div>
						</div>
						<div class="custom-file">
    						<input type="file" accept=".txt, .csv" class="rounded form-control custom-file-input" name="sendImageMassaContato"  id="sendImageMassaContato" />
    						<label class="custom-file-label" for="sendImageMassaContato" id="sendImageMassaContato-label">Selecione o arquivo de contatos...</label>
						</div>
						<br>
						<input type="hidden" name="fileNamesendImageMassaContato" id="fileNamesendImageMassaContato" />
						<div class="valid-feedback feedback-icon">
							<i class="fas fa-check"></i>
						</div>
						<div class="invalid-feedback feedback-icon">
							<i class="fas fa-times"></i>
						</div>
					</div>
					<span class="help-block r" id="error"></span>
				</div>
				<div class="form-group col-12">
					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-file-import"></i>
							</div>
						</div>
						<div class="custom-file">
    						<input type="file" accept="image/*" class="rounded form-control custom-file-input" name="FileImageMassa"  id="FileImageMassa" />
    						<label class="custom-file-label" for="FileImageMassa" id="FileImageMassa-label">Selecione o arquivo...</label>
						</div>
						<br>
						<input type="hidden" name="FileNameImageMassa" id="FileNameImageMassa" />
						<div class="valid-feedback feedback-icon">
							<i class="fas fa-check"></i>
						</div>
						<div class="invalid-feedback feedback-icon">
							<i class="fas fa-times"></i>
						</div>
					</div>
					<span class="help-block r" id="error"></span>
				</div>
			<div class="form-group col-12">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">
							<i class="fas fa-comment-alt"></i>
						</div>
					</div>
					<textarea class="rounded form-control" name="msgimgmass"  id="msgimgmass" rows="3" placeholder="Menssagem"></textarea>
				</div>
				<span class="help-block r" id="error"></span>
			</div>
	
                    </div>
                    <div class="card-footer text-muted text-center"> 
                    	<button type="submit" name="sendFileImgMassa" id="sendFileImgMassa" class="btn btn-sm btn-primary"><i class="fas fa-paper-plane"></i> Enviar</button>
                    </div>
                </div>
                </form>
            </div>
             <div class="col-sm-6">
            	<form class="text-center" id="sendTextGrupo-form" method="post" action="javascript:void(0)">
                <div class="card border-primary mb-3">
                    <div class="card-header text-white bg-primary font-weight-bold text-center">Enviar Texto / Grupo</div>
                    <div class="card-body text-warning text-center ">

				<div class="form-group col-12">
					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-layer-group"></i>
							</div>
						</div>
							<select class="custom-select rounded form-control" name="TextGrupo" id="TextGrupo">
							</select>
							<div class="input-group-append">
    							<button type="button" class="rounded btn btn-dark" id="BotaoGrupoText" name="BotaoGrupoText">Carregar Grupos</button>
							</div>
					</div>
					<span class="help-block r" id="error"></span>
				</div>
			<div class="form-group col-12">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">
							<i class="fas fa-comment-alt"></i>
						</div>
					</div>
					<textarea class="rounded form-control" name="TextGrupoMsg"  id="TextGrupoMsg" rows="5" placeholder="Menssagem"></textarea>
				</div>
				<span class="help-block r" id="error"></span>
			</div>
                    </div>
                    <div class="card-footer text-muted text-center"> 
                    	<button type="submit" name="sendTextGrupo" id="sendTextGrupo" class="btn btn-sm btn-primary"><i class="fas fa-paper-plane"></i> Enviar</button>
                    </div>
                </div>
                </form>
            </div> 
            <div class="col-sm-6">
            	<form class="text-center" id="sendFileImgGrupo-form" method="post" action="javascript:void(0)">
                <div class="card border-danger mb-3">
                    <div class="card-header text-white bg-danger font-weight-bold text-center">Enviar Imagem / Grupo</div>
                    <div class="card-body text-warning text-center ">

				<div class="form-group col-12">
					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-layer-group"></i>
							</div>
						</div>
							<select class="custom-select rounded form-control" name="ImgGrupo" id="ImgGrupo">
							</select>
							<div class="input-group-append">
    							<button type="button" class="rounded btn btn-dark" id="BotaoGrupoImg" name="BotaoGrupoImg">Carregar Grupos</button>
							</div>
					</div>
					<span class="help-block r" id="error"></span>
				</div>
				<div class="form-group col-12">
					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-file-import"></i>
							</div>
						</div>
						<div class="custom-file">
    						<input type="file" accept="image/*" class="rounded form-control custom-file-input" name="FileImageGrupo"  id="FileImageGrupo" />
    						<label class="custom-file-label" for="FileImageGrupo" id="FileImageGrupo-label">Selecione o arquivo...</label>
						</div>
						<br>
						<input type="hidden" name="FileNameImageGrupo" id="FileNameImageGrupo" />
						<div class="valid-feedback feedback-icon">
							<i class="fas fa-check"></i>
						</div>
						<div class="invalid-feedback feedback-icon">
							<i class="fas fa-times"></i>
						</div>
					</div>
					<span class="help-block r" id="error"></span>
				</div>
			<div class="form-group col-12">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">
							<i class="fas fa-comment-alt"></i>
						</div>
					</div>
					<textarea class="rounded form-control" name="msgimggrupo"  id="msgimggrupo" rows="3" placeholder="Menssagem"></textarea>
				</div>
				<span class="help-block r" id="error"></span>
			</div>
	
                    </div>
                    <div class="card-footer text-muted text-center"> 
                    	<button type="submit" name="sendFileImgGrupo" id="sendFileImgGrupo" class="btn btn-sm btn-primary"><i class="fas fa-paper-plane"></i> Enviar</button>
                    </div>
                </div>
                </form>
            </div> 
</div>
<?php
include_once(FOOTER_TEMPLATE); 
?>