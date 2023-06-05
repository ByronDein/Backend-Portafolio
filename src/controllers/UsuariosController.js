const Usuario = require("../database/models/usuario");
const Ticket = require("../database/models/ticket");
const { Op } = require("sequelize");
const controller = {};

controller.getAll = async function (req, res) {
    try {
        const userData = await Usuario.findAll();

        if (userData.length > 0) {
            res.status(200).json({ message: "Connection successful", data: userData });
        } else {
            res.status(200).json({ message: "No user found", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.getTicketsByUser = async function (req, res) {
    try {
        const usuarioIdUsuario = req.params.id;
        console.log(usuarioIdUsuario);
        console.log(req.params);
        const tickets = await Ticket.findAll(
            { where: { usuarioIdUsuario } },
        );

        if (tickets.length > 0) {
            res.status(200).json({ message: "Tickets found", data: tickets });
        } else {
            res.status(200).json({ message: "No tickets found for this user", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.login = async function (req, res) {
    try {
        const { correo, contrasenia } = req.body;
        if (!correo || !contrasenia) {
            res.status(400).json({ message: 'Bad request, all fields are required', data: {} });
            return;
        }
        else {
            const user = await Usuario.findOne({ where: { correo, contrasenia } });
            if (user) {
                res.status(200).json({
                    message: 'Login successful',
                    data: {
                        id_usuario: user.id_usuario,
                        nombre: user.nombre,
                        correo: user.correo,
                    },
                });
            } else {
                res.status(200).json({ message: 'Login failed', data: {} });
            }
        }
    } catch (error) {
        res.status(500).json({ message: 'Error login', error });
    }
};


controller.createNew = async function (req, res) {
    try {
        const { idUsuario, nombre, contrasenia, correo, foto, direccion, telefono, comuna, fechaNacimiento, } = req.body;
        if ( !nombre || !contrasenia || !correo || !direccion || !telefono || !comuna || !fechaNacimiento) {
            res.status(400).json({ message: 'Bad request, all fields are required', data: {} });
            return;
        }
        else {
            const token = idUsuario + contrasenia; // Generar el token aquí
            const newUser = await Usuario.create({
                idUsuario,
                nombre,
                contrasenia,
                correo,
                foto,
                direccion,
                telefono,
                comuna,
                fechaNacimiento,
                token,
            });

            res.status(201).json({
                message: 'user successful created',
                data: {
                    idUsuario: newUser.idUsuario,
                    nombre: newUser.nombre,
                    correo: newUser.correo,
                    foto: newUser.foto,
                    direccion: newUser.direccion,
                    token: newUser.token,
                },
            });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

controller.editAt = async function (req, res) {
    try {
        const { nombre, contrasenia, correo, foto, direccion, telefono, comuna, fechaNacimiento } = req.body;
        const id_usuario = req.params.id;
        if (!id_usuario) {
            res.status(400).json({ message: "id user is required" });
            return;
        }
        else {


            const token = id_usuario + contrasenia; // Generar el token aquí
            const result = await Usuario.update(
                { nombre, contrasenia, correo, foto, direccion, telefono, comuna, fechaNacimiento, token },
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