const { Dvd } = require("../models");
const { v4: uuidv4 } = require("uuid");

const dvdController = {
  getDvds: async () => {
    const getDvds = await Dvd.findAll();
    return getDvds;
  },
  addDvd: async (data) => {
    const id = uuidv4();
    const addDvd = await Dvd.create({ id: id, ...data });
    return addDvd;
  },
};

module.exports = dvdController;
