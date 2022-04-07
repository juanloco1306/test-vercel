import emailjs from "emailjs-com";
import swal from "sweetalert2";

const Form = {
  render: () => {
    return `<form
      class='form'
      id="contactform"
      disabled
    >
      <h4>Mandanos tu mensaje!</h4>
      <input
        autocomplete='off'
        name='name'
        placeholder='Nombre'
        required
      />
      <input
        autocomplete='off'
        name='email'
        type='email'
        placeholder='Email'
        required
      />
      <textarea
        name='message'
        rows='8'
        placeholder='Mensaje:'
        required
      ></textarea>
      <button type='submit' value='Send'>
        Enviar
      </button>
    </form>`;
  },
  after_render: async () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };

      try {
        const response = await emailjs.send(
          "service_5eem20x",
          "template_80r3744",
          data,
          "user_AauIxOHpznIfWtVFmnnKX"
        );

        if (response.status === 200) {
          swal.fire("Great Job!", "Gracias por contactarnos!", "success");
        }
      } catch (error) {
        console.log(error);
        if (error) {
          swal.fire(
            "Oops!",
            "Lo siento, Algo malo realmente sucedió, Vuelve a intentarlo",
            "error"
          );
        }
      }
    };

    document
      .getElementById("contactform")
      .addEventListener("submit", handleSubmit);
  },
};

export default Form;