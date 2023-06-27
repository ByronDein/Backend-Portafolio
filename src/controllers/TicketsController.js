const Ticket = require("../database/models/ticket");
const { Op } = require("sequelize");
const controller = {};    // Create a new ticket




// const fs = require('fs');

// const filePath = '/path/to/file.jpg';
// const fileData = fs.readFileSync(filePath);

controller.createTicket = async function (req, res) {
  try {
    const { objeto, direccion, cantidad, dimensiones, empresa, usuario_id_usuario, foto } = req.body;
    if (!objeto || !direccion || !cantidad || !dimensiones || !usuario_id_usuario) {
      console.log(req.body);
      res.status(400).json({ message: "Bad request, all fields are required" });
      return;
    }
    else {
      const fotoBuffer = Buffer.from(foto, 'base64');
      console.log(req.body);
      const newTicket = await Ticket.create({
        objeto,
        direccion,
        cantidad,
        dimensiones,
        empresa,
        usuarioIdUsuario: usuario_id_usuario,
        foto: fotoBuffer,
      });
      res.status(201).json({
        message: "Ticket created successfully",
        data: {
          id_Ticket: newTicket.id_ticket,
          objeto: newTicket.objeto,
          direccion: newTicket.direccion,
          cantidad: newTicket.cantidad,
          dimensiones: newTicket.dimensiones,
          empresa: newTicket.empresa,
        },
        return: newTicket.id_ticket
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error creating ticket", error });
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



controller.getLastTicketCreated  = async function (req, res) {
  try {
    const ticket = await Ticket.findOne({
      order: [
        ['id_tickets', 'DESC']
      ]
    });
    res.status(200).json({ data: ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = controller;