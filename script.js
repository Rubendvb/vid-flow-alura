const containerVideos = document.querySelector('.videos__container')
const searchInput = document.querySelector('.pesquisar__input')

async function searchVideos() {
  try {
    const search = await fetch('http://localhost:3000/videos')
    const videos = await search.json()

    videos.forEach((video) => {
      if (video.categoria === '') {
        throw new Error('Vídeo não tem categoria')
      }

      containerVideos.innerHTML += `
        <li class="videos__item">
          <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>

          <div class="descricao-video">
            <img class="img-canal" src="${video.imagem}" alt="logo do canal" />
            <h3 class="titulo-video">${video.titulo}</h3>
            <p class="titulo-canal">${video.descricao}</p>
          </div>
        </li> 
      `
    })
  } catch (error) {
    containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos ${error}</p>`
  }
}

searchVideos()

searchInput.addEventListener('input', filterSearch)

function filterSearch() {
  const videos = document.querySelectorAll('.videos__item')

  if (searchInput.value !== '') {
  } else {
  }
}
