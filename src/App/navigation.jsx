
function Navigation() {
  return (
    <>
      <nav>
        <div className="nav-inner">
            <div className="logo">
                IPFINE
                <span>Cálculo de VLSM</span>
            </div>

          <ul className="nav-links">
            <li><a href="#calculator">VLSM</a></li>
            <li><a href="https://www.google.com">Descargar APP TUI</a></li>
          </ul>

          <button type="button" id="change-mode-button">
            <img id="change-mode"/>
          </button>
          <button className="nav-cta">Iniciar Sesión</button>
        </div>
      </nav>
    </>
  )
}

export default Navigation
