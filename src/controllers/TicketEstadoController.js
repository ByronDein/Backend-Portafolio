const ticketEstado = require("../database/models/ticketEstado");
const { Op } = require("sequelize");
const controller = {};    // Create a new ticket




// const fs = require('fs');

// const filePath = '/path/to/file.jpg';
// const fileData = fs.readFileSync(filePath);

controller.createTicketEstado = async function (req, res) {
  try {
    const { usuarioEmpId, estado, fecha, direccion, ticketIdTicket, comuna } = req.body;
    console.log(req.body);
    if (!usuarioEmpId || !ticketIdTicket) {
      res.status(400).json({ message: "Bad request, all fields are required" });
      return;
    }
    else {

      const newTicketEstado = await ticketEstado.create({
        estado,
        comuna,
        usuarioEmpId : usuarioEmpId,
        direccion,
        fecha ,
        ticketIdTicket: ticketIdTicket
      });
      res.status(201).json({
        message: "Ticket created successfully",
        data: {
          estado: newTicketEstado.estado,
          fecha: newTicketEstado.fecha,
          usuarioEmpId: newTicketEstado.usuarioEmpId,
          direccion: newTicketEstado.direccion,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error creating ticket", error });
    console.log(error);
  }
};



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


controller.getTickets = async function (req, res) {
  try {
    const TicketEstado = await ticketEstado.findAll();
    res.status(200).json({ data: TicketEstado });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = controller;