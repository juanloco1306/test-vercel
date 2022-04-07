import Form from "../components/Form.js";
const ContactScreen = {
  render: () => {
    return `<div class="blog-detail">
            <div class="side-ad">
              <a href="#" class="vertical-ad">
              <img src="/images/side-ad.svg"/>
              </a>
            </div>
            <div class="article-container">
            <div class="content">
            <div class="content-img">
            <img src="./images/contact.jpg" alt="" />
            </div>
            <p>
            Para nosotros es muy importante tu opinion, este espacio fue creado para que nos envies tu opinion o algun comentario que quieras realizar acerca de nuestro trabajo.
            </p>
            ${Form.render()}
            </div>
            </div>
            <div class="side-ad">
              <a href="#" class="vertical-ad">
              <img src="/images/side-ad.svg"/>
              </a>
            </div>
            </div>`;
  },
  after_render: async () => {
    if (Form.after_render) await Form.after_render();
  },
};

export default ContactScreen;