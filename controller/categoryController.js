const { Category } = require("../models/");
const { v4: uuidv4 } = require("uuid");

const categoryController = {
  getCategories: async () => {
    const getCategories = await Category.findAll();
    return getCategories;
  },
  addCategory: async (data) => {
    const id = uuidv4();
    const addCategory = await Category.create({ id: id, ...data });
    return addCategory;
  },
};

module.exports = categoryController;
