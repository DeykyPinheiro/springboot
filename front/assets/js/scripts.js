let nome = document.querySelector("#nome");
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validarNome() {

	let txt = document.querySelector("#textNome")
	if (nome.value.length < 3) {
		nome.style.color = 'red'
		txt.innerHTML = "Nome Invalido"
		txt.style.color = "red"
		let nomeOk = false
	} else {
		nome.style.color = 'green'
		txt.innerHTML = "Nome Valido"
		txt.style.color = "green"
		let nomeOk = true
	}
}

function validarEmail() {
	txtEmail = document.querySelector("#txtEmail")

	if (email.value.indexOf("@") == -1) {
		email.style.color = "red"
		textEmail.innerHTML = "E-mail Invalido"
		textEmail.style.color = "red"
		let emailOk = false
	} else {
		email.style.color = "green"
		textEmail.innerHTML = "E-mail Valido"
		textEmail.style.color = "green"
		let emailOk = true
	}
}

function validarAssunto() {
	txtAssunto = document.querySelector("#txtAssunto")

	if (assunto.value.length >= 100) {
		txtAssunto.innerHTML = "texto muito grande, digite no maximo 100 caracteres"
		txtAssunto.style.color = "red"
		assunto.style.color = "red"
		let assuntoOk = false
	} else {
		txtAssunto.innerHTML = "Texto valido"
		txtAssunto.style.color = "green"
		assunto.style.color = "green"
		let assuntoOk = true
	}
}


function enviar(){
	if(nomeOk == true && emailOk == true && assuntoOk == true){
		alert("Fomulario enviado Com sucesso")
	} else {
		alert("Preencha o formulario corretamente")
	}
}

function mapaZoom() {
	mapa.style.width = "800px"
	mapa.style.height = "600px"

}

function mapaNormal() {
	mapa.style.width = "500px"
	mapa.style.height = "300px"
}
