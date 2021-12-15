const { Actor } = require("../models");
const { v4: uuidv4 } = require("uuid");

const actorController = {
  getActors: async () => {
    const getActors = await Actor.findAll();
    return getActors;
  },
  addActor: async (data) => {
    const id = uuidv4();
    const addActor = await Actor.create({ id: id, ...data });
    return addActor;
  },
};

module.exports = actorController;
