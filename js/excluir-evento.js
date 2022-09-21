const btn_excluir = document.querySelector(".btn-danger");
const url_base = "https://xp41-soundgarden-api.herokuapp.com/events/";
const parametros = new URLSearchParams(window.location.search);
const idEvento = (window.location.search).split("?")[1];

const nomeEvento = document.querySelector("#nome");
const bannerEvento = document.querySelector("#banner");
const atracoesEvento = document.querySelector("#atracoes");
const descricaoEvento = document.querySelector("#descricao");
const dataEvento = document.querySelector("#data");
const lotacaoEvento = document.querySelector("#lotacao");

async function excluirEvento() {
  try {
    const url = await fetch(`${url_base}`);
    const urlIdEvento = await url.json();
    console.log("endpoint sem excluir:", urlIdEvento);
  
  urlIdEvento.forEach((evento, index)=>{
    if (evento._id == idEvento){
        const data = new Date (evento.scheduled);
        nomeEvento.setAttribute("value", `${evento.name}`);
        bannerEvento.setAttribute("value", `${evento.poster}`);
        atracoesEvento.setAttribute("value", `${evento.attractions}`);
        descricaoEvento.innerHTML=`${evento.description}`;
        dataEvento.setAttribute("value", `${data.toLocaleDateString()}`);
        lotacaoEvento.setAttribute("value", `${evento.number_tickets}`);
        console.log(index)

        nomeEventoExcluido = `${evento.name}`;
    }
  }
} catch(erro) {
  console.log(erro)
}
};
//     const deleteApi = await fetch(`${url_base}${id_evento}`, {
//       method: "DELETE",
//       redirect: "follow",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.log("Seu evento não foi excluído, tente novamente.");
//   }
// }
