listaEventos = async (evento) => {
url_base = "https://xp41-soundgarden-api.herokuapp.com"

try {
    var opcaoEventos = {
        method: "GET",
        redirect: "follow"
    };
    const resposta = await fetch(`${url_base}/events/`, opcaoEventos)

    const conteudo = await resposta.json(); 

    conteudo.forEach((evento , i)=> {
        const todosEventos = document.querySelector("tbody");

        const novosEventos = document.createElement("tr");
        novosEventos.innerHTML = `<th scope="row">${i+1}</th>
        <td>${evento.scheduled}</td>
        <td>${evento.name}</td>
        <td>${evento.attractions}</td>
        <td>
            <a href="reservas.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
            </td>
        </tr>`

        todosEventos.appendChild(novosEventos);

    });

} catch(error) {
    console.log(error);
    alert("Não foi possível carregar os eventos")
}
}
listaEventos()