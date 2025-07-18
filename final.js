const artistas = [
  {
    codigo: '001',
    nome: 'Ebony - “KM2”',
    descricao: 'Beats experimentais e letras profundas que refletem a realidade urbana e pessoal de Ebony.',
    imagem: './ebony.png'
  },
  {
    codigo: '002',
    nome: 'Duquesa - “Taurus, Vol. 2”',
    descricao: 'Rimas afiadas e sonoridade que mistura rap com R&B, destacando a força e autenticidade de Duquesa.',
    imagem: 'duquesa.jpg'
  },
  {
    codigo: '003',
    nome: 'Tasha & Tracie - “Diretoria”',
    descricao: 'Trap brasileiro com poder feminino, estilo único e mensagens de empoderamento e resistência.',
    imagem: 'gemeas.jpg'
  },
  {
    codigo: '004',
    nome: 'MC Luanna - “Sexto Sentido”',
    descricao: 'Funk consciente e envolvente, unindo batidas fortes a letras que falam de luta e superação.',
    imagem: 'luanna.jpg'
  },
  {
    codigo: '005',
    nome: 'Ajuliacosta - “Brutas Amam, Choram e Sentem Raiva”',
    descricao: 'EP íntimo que explora emoções intensas com beats calmos e temas de ancestralidade e autoaceitação.',
    imagem: 'julia.jpg'
  },
  {
    codigo: '006',
    nome: 'SlimPimami - “Malvatrem”',
    descricao: 'Estética urbana e atitude, mesclando rap com sons modernos e uma pegada marcante.',
    imagem: 'mami.jpg'
  }
];


const container = document.getElementById('container-cards');
const inputFiltro = document.getElementById('filtro');
const checkboxNome = document.getElementById('filtrarPorNome');

function renderizarCards(lista) {
  container.innerHTML = '';
  lista.forEach(artista => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${artista.imagem}" alt="${artista.nome}">
      <h3>${artista.nome}</h3>
      <p><strong>Código:</strong> ${artista.codigo}</p>
      <p>${artista.descricao}</p>
    `;
    container.appendChild(card);
  });
}

function filtrarArtistas() {
  const texto = inputFiltro.value.toLowerCase();
  const somenteNome = checkboxNome.checked;

  const resultado = artistas.filter(artista => {
    if (somenteNome) {
      return artista.nome.toLowerCase().includes(texto);
    }
    return (
      artista.nome.toLowerCase().includes(texto) ||
      artista.codigo.toLowerCase().includes(texto) ||
      artista.descricao.toLowerCase().includes(texto)
    );
  });

  renderizarCards(resultado);
}

inputFiltro.addEventListener('input', filtrarArtistas);
checkboxNome.addEventListener('change', filtrarArtistas);

renderizarCards(artistas);
