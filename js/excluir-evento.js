const nomeEvento = document.querySelector("#nome");
const bannerEvento = document.querySelector("#banner");
const atracoesEvento = document.querySelector("#atracoes");
const descricaoEvento = document.querySelector("#descricao");
const dataEvento = document.querySelector("#data");
const lotacaoEvento = document.querySelector("#lotacao");

function limparHtml() {
  nomeEvento.setAttribute("value", "");
  bannerEvento.setAttribute("value", "");
  atracoesEvento.setAttribute("value", "");
  descricaoEvento.innerHTML = "";
  dataEvento.setAttribute("value", "");
  lotacaoEvento.setAttribute("value", "");
}

limparHtml();

const btn_excluir = document.querySelector(".btn-danger");
const url_base = "https://xp41-soundgarden-api.herokuapp.com/events/";

const idEvento = window.location.search.split("?")[1];
const nomeEventoId = "";

async function excluirEvento() {
  try {
    const url = await fetch(`${url_base}`);
    const urlIdEvento = await url.json();

    console.log("resposta:", urlIdEvento);

    urlIdEvento.forEach((evento, index) => {
      if (evento._id == idEvento) {
        const data = new Date(evento.scheduled);
        nomeEvento.setAttribute("value", `${evento.name}`);
        bannerEvento.setAttribute("value", `${evento.poster}`);
        atracoesEvento.setAttribute("value", `${evento.attractions}`);
        descricaoEvento.innerHTML = `${evento.description}`;
        dataEvento.setAttribute("value", `${data.toLocaleDateString()}`);
        lotacaoEvento.setAttribute("value", `${evento.number_tickets}`);
        console.log(index);

        nomeEventoId = `${evento.name}`;
      }
    });
  } catch (error) {
    console.log(error);
  }
}
excluirEvento();

async function excluir() {
  try {
    const res = await fetch(`${url_base}${idEvento}`, {
      method: "DELETE",
    });
    console.log(res.status);
    console.log("excluiu");
    alert(`${nomeEventoId} Este evento foi excluído.`);
    limparHtml();
  } catch (error) {
    console.log("Seu evento não foi deletado. Tente novamente.");
  }
}

btn_excluir.onclick = (event) => {
  event.preventDefault();
  excluirParaSempre();
};
