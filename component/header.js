const template = document.createElement("template");

template.innerHTML = `
<header>
<div id="header-width">

<img src="/assets/images/logo-puikwanlung.jpg" id="logo" alt="Logo of Pui Kwan Lung, Interactive Media Designer" />
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link" id="work-select" href="/index.html">PORTFOLIO</a>
  </li>
  <li class="nav-item">
    <a href="/about.htm" class="nav-link" >ABOUT</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">CONTACT</a>
  </li>
</ul>
</div>
</header>

`;

document.body.appendChild(template.content);
