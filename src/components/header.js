import profile from "../img/profile.png"

export const Header = (props, temaEscuro) => {

    return (

      <header class="sticky-top">
        <nav className={`navbar navbar-expand-sm navbar-${temaEscuro ? 'dark' : 'light'} bg-${temaEscuro ? 'dark' : 'light'}`} aria-label="Third navbar example">
          <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
  
            <div class="collapse navbar-collapse justify-content-center" id="navbarsExample03">
              <ul class="navbar-nav mb-2 mb-sm-0">
                <li class="nav-item">
                  <a href="#" class="nav-link" aria-current="page">Banner</a>
                </li>
                <li class="nav-item">
                  <a href="#projects" class="nav-link">Projetos</a>
                </li>
                <li class="nav-item">
                  <a href="#footer" class="nav-link">Footer</a>
                </li>


              </ul>
              <img id="profile" src={profile}></img>
              
            </div>
            
          </div>
        </nav>
      </header>
    )
  }
  
