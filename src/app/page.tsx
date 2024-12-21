import React from "react";

const QASection = () => {
  const questions = [
    {
      question: "Що таке Bridge to Beat?",
      answer:
        "Bridge to Beat — це онлайн-платформа для музикантів та продюсерів, створена для того, щоб спростити процес пошуку ідеальних партнерів для спільної роботи.",
    },
    {
      question: "Як створити обліковий запис?",
      answer:
        "Перейдіть на сторінку реєстрації, заповніть необхідну інформацію та підтвердьте електронну пошту.",
    },
    {
      question: "Як працює система рейтингів і відгуків?",
      answer:
        "Система рейтингів дозволяє оцінювати інших користувачів та залишати відгуки для підвищення довіри.",
    },
    {
      question: "Як повідомити про проблему або отримати підтримку?",
      answer:
        "Звертайтеся до служби підтримки через форму зворотного зв'язку або надішліть листа на електронну пошту.",
    },
    {
      question: "Як користуватися пошуком?",
      answer: "Використовуйте пошуковий рядок, щоб знайти потрібного музиканта або продюсера.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Заголовок */}
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
        Q&A (Питання та Відповіді)
      </h1>
      
      {/* Основной контейнер */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // Равномерные колонки
          gap: "20px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Левая карточка */}
        <details
          style={{
            background: "linear-gradient(to right, #1d4ed8, #1e3a8a)",
            color: "white",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            gridColumn: "1 / span 1", // Остается в первой колонке
            gridRow: "span 3", // Занимает высоту трех карточек
          }}
        >
          <summary style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
            {questions[0].question}
          </summary>
          <p style={{ fontSize: "14px" }}>{questions[0].answer}</p>
        </details>

        {/* Правая колонка с тремя карточками в столбик */}
        {questions.slice(1, 4).map((item, index) => (
          <details
            key={index}
            style={{
              background: "linear-gradient(to right, #1d4ed8, #1e3a8a)",
              color: "white",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            <summary style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
              {item.question}
            </summary>
            <p style={{ fontSize: "14px" }}>{item.answer}</p>
          </details>
        ))}
      </div>

      {/* Последняя карточка внизу */}
      <div style={{ marginTop: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
        <details
          style={{
            background: "linear-gradient(to right, #1d4ed8, #1e3a8a)",
            color: "white",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            width: "100%",
            cursor: "pointer",
          }}
        >
          <summary style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
            {questions[4].question}
          </summary>
          <p style={{ fontSize: "14px" }}>{questions[4].answer}</p>
        </details>
      </div>

      {/* Нижний футер */}
      <footer
        style={{
          marginTop: "40px",
          width: "100%",
          maxWidth: "1200px",
          borderTop: "1px solid #4b5563",
          padding: "20px 10px",
          textAlign: "center",
          fontSize: "14px",
          color: "#9ca3af",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <p>Bridge to Beat — Незамінний сайт для музикантів та продюсерів.</p>
          <p>Тех. підтримка: +0000000000</p>
          <p>© 2024 Bridge to Beat</p>
        </div>
      </footer>
    </div>
  );
};

export default QASection;
