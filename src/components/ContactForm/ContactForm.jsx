import { useCallback } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Validaciones nativas del navegador
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Log de elementos (útil para debug)
    const all = Array.from(form.elements).map((el) => ({
      tag: el.tagName.toLowerCase(),
      type: el.type,
      name: el.name || null,
      id: el.id || null,
      value:
        el.type === "checkbox" ? el.checked
        : el.type === "radio" ? (el.checked ? el.value : "")
        : el.value,
      disabled: !!el.disabled,
      required: !!el.required,
    }));
    console.log("Elementos del formulario:", all);

    // Payload desde FormData
    const fd = new FormData(form);
    const data = {};
    for (const [key, value] of fd.entries()) {
      if (key in data) {
        if (Array.isArray(data[key])) data[key].push(value);
        else data[key] = [data[key], value];
      } else {
        data[key] = value;
      }
    }
    console.log("Payload FormData:", data);

    alert("¡Mensaje enviado!");
    form.reset();
  }, []);

  const handleReset = useCallback(() => {
    console.log("Form reset");
  }, []);

  return (
    <section className={styles.wrap}>
      <header className={styles.header}>
        <h2>Contacto</h2>
        <p className={styles.subtitle}>¿Hablamos? Déjame un mensaje.</p>
      </header>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
        noValidate
      >
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Datos</legend>

          <div className={styles.grid2}>
            <label className={styles.label}>
              Nombre *
              <input
                className={styles.input}
                name="firstName"
                type="text"
                placeholder="Tu nombre"
                required
                minLength={2}
                maxLength={40}
                pattern="^[A-Za-zÀ-ÿ'\\-\\s]+$"
                title="Solo letras, espacios, apóstrofes o guiones"
              />
            </label>

            <label className={styles.label}>
              Email *
              <input
                className={styles.input}
                name="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </label>

            <label className={styles.label}>
              Asunto
              <input
                className={styles.input}
                name="subject"
                type="text"
                placeholder="Motivo del mensaje"
                maxLength={80}
              />
            </label>

            <label className={styles.label}>
              Mensaje *
              <textarea
                className={styles.textarea}
                name="message"
                rows={6}
                placeholder="¿En qué puedo ayudarte?"
                required
                minLength={10}
                maxLength={500}
              />
            </label>
          </div>
        </fieldset>

        <div className={styles.actions}>
          <button type="reset" className={styles.btnSecondary}>Reset</button>
          <button type="submit" className={styles.btnPrimary}>Enviar</button>
        </div>
      </form>
    </section>
  );
}
