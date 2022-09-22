// pegando os imputs do HTML
const form = document.querySelector(".col-6");
const inputNome = document.querySelector('#nome');
const inputBanner = document.querySelector('#banner');
const inputAtracoes = document.querySelector('#atracoes');
const inputDescricao = document.querySelector('#descricao');
const inputData = document.querySelector('#data');
const inputIngressos = document.querySelector('#lotacao');
const btnEnviar = document.querySelector('#enviar');
const btnConfirmar = document.querySelector('#btnConfirmar');

//funções para editar evento

form.onsubmit = async (e) => {
    e.preventDefault()
    url_base = "https://xp41-soundgarden-api.herokuapp.com"
    const urlParametros = new URLSearchParams(window.location.search);
    const meuParametro = urlParametros.get('id');
    const novoEvento = {
        name: inputNome.value,
        poster: inputBanner.value,
        attractions: inputAtracoes.value.split(","),
        description: inputDescricao.value,
        scheduled: new Date(inputData.value).toISOString(),
        number_tickets: inputIngressos.value
    }
    try {
        const res = await fetch(`${url_base}/events/${meuParametro}`, {
            method: "PUT",
            body: JSON.stringify(novoEvento),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        if (res.status == 200) {
            alert('Evento editado com sucesso!')
        }
        const eventoCriado = await res.json()
        console.log(eventoCriado)
    }
    catch (error) {
        console.log(error);
    }
};