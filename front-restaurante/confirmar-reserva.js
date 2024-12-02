const express = require("express");
const app = express();

// Rota para confirmar a reserva
app.post("/api/reservas/:id/confirmar", async (req, res) => {
  const reservaId = req.params.id;
  console.log("Vai mandar a mensagem");

  try {
    // Aqui você confirma a reserva no banco de dados

    if (!reserva) {
      return res.status(404).json({ message: "Reserva não encontrada." });
    }

    // Atualize o status da reserva para "Confirmada"
    reserva.status = "Confirmada";
    await reserva.save();
    const reserva = data.reserva; // Suponha que a resposta contenha os dados da reserva confirmada
    console.log("Vai mandar a mensagem");
    await enviarMensagemWhatsApp();

    return res.status(200).json({ message: "Reserva confirmada com sucesso!" });
  } catch (error) {
    console.error("Erro ao confirmar reserva:", error);
    res.status(500).json({ message: "Erro ao confirmar a reserva." });
  }
});

module.exports = { enviarMensagemWhatsApp };
