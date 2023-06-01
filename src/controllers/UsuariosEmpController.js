const UsuarioEmp = require("../database/models/usuarioEmp");
const Ticket = require("../database/models/ticket");
const { Op } = require("sequelize");
const controller = {};

controller.getAll = async function (req, res) {
    try {
        const userData = await UsuarioEmp.findAll();

        if (userData.length > 0) {
            res.status(200).json({ message: "Connection successful", data: userData });
        } else {
            res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.getTicketsByUserEmp = async function (req, res) {
    try {
        const usuarioEmpId = req.params.id;
        console.log(usuarioEmpId);
        console.log(req.params);
        const tickets = await Ticket.findAll(
            { where: { usuarioEmpId } },
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
        console.log(req.body);
        const user = await UsuarioEmp.findOne({ where: { correo, contrasenia } });
        console.log(user);
        if (user) {
            res.status(200).json({
                message: 'Login successful',
                data: {
                    idUsuarioEmp: user.idUsuarioEmp,
                    nombreEmpresa: user.nombreEmpresa,
                    correo: user.correo,
                },
            });
        } else {
            res.status(200).json({ message: 'Login failed', data: {} });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error login', error });
    }
};


controller.createNew = async function (req, res) {
    try {
        const { idUsuarioEmp, nombre, correo, contrasenia, telefono, comuna, direccion, transporte, objReciclaje, foto, } = req.body;
        console.log(req.body);
        const token = idUsuarioEmp + contrasenia; // Generar el token aquí
        const newUser = await UsuarioEmp.create({
            idUsuarioEmp,
            nombre,
            correo,
            contrasenia,
            telefono,
            comuna,
            direccion,
            transporte,
            objReciclaje,
            foto,
            token,
        });

        res.status(201).json({
            message: 'user successful created',
            data: {
                idUsuarioEmp: newUser.idUsuarioEmp,
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
        const { nombreEmpresa, contrasenia, correo, foto, direccion } = req.body;
        const idUsuarioEmp = req.params.id;
        console.log(req.body);
        const token = idUsuarioEmp + contrasenia; // Generar el token aquí
        const result = await UsuarioEmp.update(
            { nombreEmpresa, contrasenia, correo, foto, direccion, token },
            { where: { idUsuarioEmp } }
        );
        if (result[0] === 0) {
            res.status(404).json({ message: "id user not found" });
        } else {
            res.status(200).json({
                message: "update successful",
                data: { idUsuarioEmp, nombreEmpresa, contrasenia, correo, foto, direccion, token },
            });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.deleteUser = async function (req, res) {
    try {
        const idUsuarioEmp = req.params.id;

        if (!idUsuarioEmp) {
            res.status(400).json({ message: "id user is required" });
            return;
        }
        const result = await UsuarioEmp.destroy({ where: { idUsuarioEmp } });
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