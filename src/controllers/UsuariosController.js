const Usuario = require("../database/models/usuario");
const { Op } = require("sequelize");
const controller = {};


controller.getAll = async function (req, res) {
    try {
        const userData = await Usuario.findAll();
        if (userData.length > 0) {
             res
                .status(200)
                .json({ message: "Connection successful", data: userData });
        } else {
            res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.getUsername = async function (req, res) {
    try {
        let userData = await Usuario.findAll({
        where: { username: { [Op.like]: `%${req.params.username}%` } },
        });
        if (userData.length > 0) {
            res
            .status(200)
            .json({ message: "Connection successful", data: userData });
        } else {
        res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};




controller.createNew = async function (req, res) {
  try {
    const { id_usuario, nombre, contrasenia, correo, foto } = req.body;
    const token = id_usuario + contrasenia; // Generar el token aquí
    const newUser = await Usuario.create({
      id_usuario,
      nombre,
      contrasenia,
      correo,
      foto,
    });

    res.status(201).json({
      message: 'user successful created',
      data: {
        id_usuario: newUser.id_usuario,
        nombre: newUser.nombre,
        correo: newUser.correo,
        foto: newUser.foto,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};


controller.editAt = async function (req, res) {
    try {
        await Usuario
            .findAll({ where: { id: req.body.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await Usuario.update(
                       {
                           username: req.body.username,
                           password: req.body.password,
                           token: req.body.username + req.body.password,
                        },
                        { where: { id: req.body.id } }
                    );
                    res.status(200).json({
                        message: "update successful",
                        data: {
                        id: req.body.id,
                        username: req.body.username,
                        password: req.body.password,
                        token: req.body.username + req.body.password,
                        },
                    });
                } else {
                    res.status(500).json({ message: "update failed" });
                }
            });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};


controller.deleteUser = async function (req, res) {
    try {
        await Usuario
            .findAll({ where: { id: req.body.id } })
            .then(async (result) => {
        if (result.length > 0) {
            await Usuario.destroy({ where: { id: req.body.id } });
            res.status(200).json({ message: "delete user successfully" });
        } else {
            res.status(404).json({ message: "id user not found" });
            }
        });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = controller;