function refreshPage() {
    window.location.reload();
}

  class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
            <div class="header-content">
                <!-- <img src="images/v.png" alt="logo" height="50px" width="50px"> -->
                <div class="title">
                    <a href="" onClick="refreshPage()">
                        <h1 class="title_name">VTU Notes</h1>
                    </a>
                </div>
                <div class="lable">
                    <div class="nav">
                        <a href="#news">Academic Information</a>
                        <a href="resource.html">Notes & Study Materials</a>
                        <a href="#about">About us</a>
                        <!-- <a id="logo" class="active" href="#home"></a> -->
                    </div>
                </div>
            </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

  class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
    <p>Author: Newton Frank </p>
    <p><a href="mailto:newtonfrank@outlook.in">newtonfrank@outlook.in</a></p>
    <ul>
      <li><a href="about.html">About</a></li>
      <li><a href="work.html">Work</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <ul class="social-row">
      <li><a href="https://github.com/newtonfrank"><i class="fab fa-github"></i></a></li>
      <li><a href="https://twitter.com/newtonfrank22"><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/in/newtonfrank"><i class="fab fa-linkedin"></i></a></li>
      <li><a href="https://www.instagram.com/in/newtonfrank"><i class="fab fa-instagram"></i></a></li>
    </ul>
  </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);