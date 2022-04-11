const footer = document.createElement("template");

template.innerHTML = `
<footer><img src="/assets/images/pui_slogo.png"  alt="Logo of Pui Kwan Lung, Interactive Media Designer" class="mb-2 logo" />
<p>@ 2022 Design & Build by Pui Kwan Lung</p>


<ul id="social-links">

  <li>
    <img src="/assets/images/icon-linkedin.png" /><a href="https://www.linkedin.com/in/puikwanlung" target="_blank">https://www.linkedin.com/in/puikwanlung</a>
  </li>
  <li>
  <img src="/assets/images/icon-email.png" />
  <a href="mailto:eirineko@gmail.com">eirineko@gmail.com</a>
</li>
<li>
  <img src="/assets/images/icon-instagram.png" >
  <a href="https://www.instagram.com/nekolung">@nekolung</a>
</li>
</ul></footer>




`;

document.body.appendChild(template.content);
