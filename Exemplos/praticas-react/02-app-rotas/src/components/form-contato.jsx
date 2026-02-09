import { useEffect, useState } from "react";
import style from "./form-contato.module.css";

export default function FormContato() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // ✅ Effect para controlar tempo do feedback
  useEffect(() => {
    if (!error && !success) return;

    const timer = setTimeout(() => {
      setError(null);
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [error, success]);

  useEffect(() => {
    if (error) {
      document.querySelector("input[name='nome']")?.focus();
    }
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(event.target);
    const nome = formData.get("nome")?.trim();
    const email = formData.get("email")?.trim();
    const mensagem = formData.get("mensagem")?.trim();

    // Validação simples client-side
    if (!nome || !email || !mensagem) {
      setError("Preencha todos os campos.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/mensagens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (!response.ok) throw new Error();

      setSuccess(true);
      event.target.reset();
    } catch (error) {
      setError("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={style.formContato}
      onSubmit={handleSubmit}
      aria-busy={loading}
    >
      <label htmlFor='nome'>Nome:</label>
      <input type='text' name='nome' id='nome' required />

      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' id='email' required />

      <label htmlFor='mensagem'>Mensagem:</label>
      <textarea name='mensagem' id='mensagem' required></textarea>

      <button type='submit' disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>

      <div aria-live='polite' role='status'>
        {error && <p className='error'>{error}</p>}
        {success && <p className='result'>Mensagem enviada com sucesso!</p>}
      </div>
    </form>
  );
}
