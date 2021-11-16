import meusProjetos from "../data/data"
import calculadora from "../img/calculadora.png"

export const Projects = () => {

  return (
    <section id="projects">
      <div className="grid">

        {meusProjetos.map((meusProjetos) => {
          return (
            <>
              <div className="grid-item">

                <a href={meusProjetos.linkProjeto}>
                  <div className="image-container">
                    <img src={meusProjetos.imagem} alt="Projeto_01" />
                  </div>
                </a>

                <h3>{meusProjetos.nome}</h3>

                <a href={meusProjetos.linkRepo}>
                <button type="button" class="btn btn-secondary">Ver código</button>
                </a>

              </div>
            </>
          )
        })}
      </div>
    </section>
  )
}











// export const Projects = () => {

//     return (
//       <section id="projects">
//         <div className="grid">

//           <div className="grid-item">
//             <div className="image-container">
//               <img src="https://secure.meetupstatic.com/photos/event/6/6/a/3/600_467306275.jpeg" alt="Caça Projeto_01" />
//             </div>
//             <h3>Projeto_01</h3>
//           </div>
//           <div className="grid-item">
//             <div className="image-container">
//               <img src="https://secure.meetupstatic.com/photos/event/6/6/a/3/600_467306275.jpeg" alt="Projeto_02" />
//             </div>
//             <h3>Projeto_02</h3>
//           </div>
//           <div className="grid-item">
//             <div className="image-container">
//               <img src="https://secure.meetupstatic.com/photos/event/6/6/a/3/600_467306275.jpeg" alt="Projeto_03" />
//             </div>
//             <h3>Projeto_03</h3>
//           </div>
//         </div>
//       </section>
//     )
//   }