class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
  <nav class="navbar">

    <div class="menu-toggle" id="menu-toggle">☰</div>

    <div class="nav-left">
      <a href="home.html">
        <img src="images/smal.png" alt="Jobees Robotics Logo" class="logo">
      </a>
      <h2 class="site-title">Jobees Robotics</h2>
    </div>

    <ul class="nav-links" id="nav-links">
      <li><a href="home.html">Home</a></li>
      <li><a href="first.html">FIRST</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="reference.html">Reference Page</a></li>
    </ul>

  </nav>
</header>

    `;
  }
}

customElements.define("site-header", SiteHeader);