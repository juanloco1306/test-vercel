const Error404Screen = {
    render: () => {
        return `<div class="error404">
        <div class="errorImage">
          <img src="/images/404.svg" alt="404 image" />
        </div>
        <div class="content">
          <p>La página que está buscando ahora está fuera de nuestro alcance...</p>
          <a href="/#/" aria-label="back to home">Regresar a inicio</a>
        </div>
      </div>`;
    },
    after_render: () => {
        setTimeout(() => {
            location.assign("/#/");
        }, 5000);
    },
};

export default Error404Screen;