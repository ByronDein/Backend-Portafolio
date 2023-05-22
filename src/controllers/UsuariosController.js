const Usuario = require("../database/models/usuario");
const Ticket = require("../database/models/ticket");
const { Op } = require("sequelize");
const controller = {};

controller.getAll = async function (req, res) {
    try {
        const userData = await Usuario.findAll();
        console.log(Ticket.idUsuario);

        if (userData.length > 0) {
            res.status(200).json({ message: "Connection successful", data: userData });
        } else {
            res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.getTicketsByUser = async function (req, res) {
    try {
        const id_usuario = req.params.id;
        const tickets = await Ticket.findAll({ where: { id_usuario } });

        if (tickets.length > 0) {
            res.status(200).json({ message: "Tickets found", data: tickets });
        } else {
            res.status(200).json({ message: "No tickets found for this user", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.createNew = async function (req, res) {
    try {
        const { id_usuario, nombre, contrasenia, correo, foto, direccion } = req.body;
        const token = id_usuario + contrasenia; // Generar el token aquí
        const newUser = await Usuario.create({
            id_usuario,
            nombre,
            contrasenia,
            correo,
            foto,
            direccion,
            token,
        });

        res.status(201).json({
            message: 'user successful created',
            data: {
                id_usuario: newUser.id_usuario,
                nombre: newUser.nombre,
                correo: newUser.correo,
                foto: newUser.foto,
                direccion: newUser.direccion,
                token: newUser.token,
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

controller.editAt = async function (req, res) {
    try {
        const { nombre, contrasenia, correo, foto, direccion } = req.body;
        const id_usuario = req.params.id;
        console.log(req.body);
        const token = id_usuario + contrasenia; // Generar el token aquí
        const result = await Usuario.update(
            { nombre, contrasenia, correo, foto, direccion, token },
            { where: { id_usuario } }
        );
        if (result[0] === 0) {
            res.status(404).json({ message: "id user not found" });
        } else {
            res.status(200).json({
                message: "update successful",
                data: { id_usuario, nombre, contrasenia, correo, foto, direccion, token },
            });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.deleteUser = async function (req, res) {
    try {
        const id_usuario = req.params.id;

        if (!id_usuario) {
            res.status(400).json({ message: "id user is required" });
            return;
        }
        const result = await Usuario.destroy({ where: { id_usuario } });
        if (result === 0) {
            res.status(404).json({ message: "id user not found" });
        } else {
            res.status(200).json({ message: "User deleted successfully" });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
module.exports = controller;