const template = document.createElement("template");

template.innerHTML = `
<header>
<img src="/assets/images/logo-puikwanlung.jpg" id="logo" alt="Logo of Pui Kwan Lung, Interactive Media Designer" />
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link" id="work-select" href="/index.html">PORTFOLIO</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link" id="aboutus-select">ABOUT</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link" id="contact-select">CONTACT</a>
  </li>
</ul></header>
`;

document.body.appendChild(template.content);
