// objeto do usuário
const usuario = {
  nome: "Fulano",
  matricula: "123456",
  pendencia: false,
  acessibilidade: true
};

// lista objetos de armários
const armarios = [
  {
    id: 1,
    formato: "padrao",
    dataEntrega: null,
    status: true,
    acessivel: false
  },
  {
    id: 2,
    formato: "padrao",
    dataEntrega: null,
    status: true,
    acessivel: false
  },
  {
    id: 3,
    formato: "padrao",
    dataEntrega: null,
    status: true,
    acessivel: false
  },
  {
    id: 4,
    formato: "padrao",
    dataEntrega: null,
    status: false,
    acessivel: true
  },
  {
    id: 5,
    formato: "padrao",
    dataEntrega: null,
    status: false,
    acessivel: true
  },
  {
    id: 6,
    formato: "duplo",
    dataEntrega: null,
    status: true,
    acessivel: true
  },
  {
    id: 7,
    formato: "duplo",
    dataEntrega: null,
    status: false,
    acessivel: true
  },
  {
    id: 8,
    formato: "duplo",
    dataEntrega: null,
    status: false,
    acessivel: true
  }
];

// função para reserva do armário, incluindo as regras.
function reservarArmario() {
  // data e hora atual
  let data = new Date();

  //prazo para entrega 24h
  let prazo = new Date(data.getTime() + 24 * 60 * 60 * 1000);

  let dia = prazo.getDate().toString().padStart(2, "0");
  let mes = (prazo.getMonth() + 1).toString().padStart(2, "0");
  let ano = prazo.getFullYear();
  let horas = prazo.getHours().toString().padStart(2, "0");
  let minutos = prazo.getMinutes().toString().padStart(2, "0");

  let dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;

  // obter tipo de armário selecionado pelo usuário no html.
  let tipoSelecionado = document.getElementById("tipoArmario").value;

  // na lista, filtrar apenas os armários que estão disponíveis e que são acessiveis ao usuário.
  let armariosDisponiveis = armarios.filter(
    (a) =>
      a.formato === tipoSelecionado &&
      a.status === true &&
      usuario.acessibilidade === a.acessivel
  );

  // caso não exista armário disponível, retorna para o usuário mensagem.
  if (armariosDisponiveis.length === 0) {
    document.getElementById(
      "resultado"
    ).innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  // Caso exista armário(s) disponíveil, seguimos sorteando uma opção.
  let armarioSorteado =
    armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];

  // Depois localizamos o armário emprestado na lista de armarios e mudamos o status do armário.
  let armarioEmprestado = (armarios.find(
    (armario) => armario.id === armarioSorteado.id
  ).status = false);

  // Finalmente, mudamos a pendencia do usuário para verdadeira.
  usuario.pendencia = true;

  armarioSorteado.dataEntrega = dataFormatada;

  // Impmimimos uma mensagem de reserva para o usuário.
  document.getElementById(
    "resultado"
  ).innerText = `O armário ${armarioSorteado.id} foi reservado com sucesso! \n Data de entrega: ${armarioSorteado.dataEntrega}!`;

  console.log(usuario);
  console.log(armarios);
}
