const Ticket = require("../database/models/ticket");
const { Op } = require("sequelize");
const controller = {};    // Create a new ticket

controller.createTicket = async function (req, res) {
  try {
    const { objeto, direccion, cantidad, dimensiones, empresa, usuario_id_usuario } = req.body;
    const newTicket = await Ticket.create({
      objeto,
      direccion,
      cantidad,
      dimensiones,
      empresa,
      usuario_id_usuario,
    });
    res.status(201).json({
      message: "Ticket created successfully",
      data: {
        id_ticket: newTicket.id_ticket,
        objeto: newTicket.objeto,
        direccion: newTicket.direccion,
        cantidad: newTicket.cantidad,
        dimensiones: newTicket.dimensiones,
        empresa: newTicket.empresa,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating ticket", error });
  }
};

module.exports = controller;

controller.updateTicket = async function (req, res) {
  try {
    const { objeto, direccion, cantidad, dimensiones, empresa } = req.body;
    const id_ticket = req.params.id;
    const result = await Ticket.update(
      { objeto, direccion, cantidad, dimensiones, empresa },
      { where: { id_ticket } }
    );

    if (result[0] === 0) {
      res.status(404).json({ message: "Ticket not found" });
    } else {
      res.status(200).json({
        message: "Ticket updated successfully",
        data: { id_ticket, objeto, direccion, cantidad, dimensiones, empresa },
      });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

controller.deleteTicket = async function (req, res) {
  try {
    const id_ticket = req.params.id;

    if (!id_ticket) {
      res.status(400).json({ message: "Ticket ID is required" });
      return;
    }

    const result = await Ticket.destroy({ where: { id_ticket } });

    if (result === 0) {
      res.status(404).json({ message: "Ticket not found" });
    } else {
      res.status(200).json({ message: "Ticket deleted successfully" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = controller;