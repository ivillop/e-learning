class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">CSA-Learning.</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="division.html">Division</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="course.html">Course</a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  href="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="https://th.bing.com/th/id/OIP.PMhANanxddOBObcYxcYOcwHaGy?pid=ImgDet&rs=1"
                    alt=""
                  />
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">My Profile</a></li>
                  <li>
                    <svg viewBox="0 15 100 10" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="20" x2="100" y2="20" stroke="black" />
                    </svg>
                  </li>
                  <li>
                    <a class="dropdown-item text-danger" href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `
    }
}

customElements.define('app-bar', AppBar);