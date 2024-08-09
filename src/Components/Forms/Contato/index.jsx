import emailjs from "emailjs-com";
import { BodyForm, FormStyle, HeaderForm } from "./style";
import logo from "../../../Assets/LogoTipo.png";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { object } from "yup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactForm = () => {
  const schema = object({
    name: yup.string().required("Por favor, insira seu nome"),
    email: yup.string().required("Por favor, insira seu Email"),
    phone: yup
      .string()
      .required("O telefone é obrigatório")
      .matches(/^[0-9]{10,11}$/, "Telefone inválido, verifique o DDD"),
    message: yup.string().required("Por favor, insira uma mensagem"),
  });
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmit = () => {
    emailjs
      .sendForm(
        "service_edba4o8", // Substitua pelo seu Service ID do EmailJS
        "template_sqb290g", // Substitua pelo seu Template ID do EmailJS
        "form",
        "VFeiTul-UcC2VSaBC" // Substitua pelo seu User ID do EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("E-mail enviado com sucesso! ");
        },
        (error) => {
          console.log(error.text);
          // Exibir uma mensagem de erro ou tratar o erro adequadamente
          toast.error(
            "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente."
          );
        }
      );
  };
  return (
    <FormStyle id="form" onSubmit={onSubmit(handleSubmit)}>
      <HeaderForm>
        <img src={logo} alt="Logo Atual" />
        <h3>Preencha o formulário abaixo para solicitar mais informações</h3>
      </HeaderForm>
      <BodyForm>
        <div>
          {" "}
          <label htmlFor="name">Nome:</label>
          <input {...register("name")} type="text" id="name" />
          {errors.name && <p className="errors">{errors.name.message}</p>}
        </div>
        <div>
          {" "}
          <label htmlFor="email">E-mail:</label>
          <input {...register("email")} type="email" id="email" />
          {errors.email && <p className="errors">{errors.email.message}</p>}
        </div>
        <div>
          {" "}
          <label htmlFor="phone">Telefone:</label>
          <input {...register("phone")} id="phone" />
          {errors.phone && <p className="errors">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>{" "}
          <textarea {...register("message")} id="message"></textarea>
          {errors.message && <p className="errors">{errors.message.message}</p>}
        </div>
        <button type="submit">Enviar</button>
      </BodyForm>

      {/* Same as */}
    </FormStyle>
  );
};

export default ContactForm;
