const { v4: uuidv4 } = require("uuid");
let items = require("../items");

const getAllItems = (req, reply) => {
  reply.send(items);
};

const getOneItem = (req, reply) => {
  const { id } = req.params;
  reply.send(items.find((item) => item.id === id));
};

const addItem = (req, reply) => {
  const newItem = { id: uuidv4(), ...req.body };
  items.push(newItem);

  reply.code(201).send(newItem);
};

const deleteItem = (req, reply) => {
  const { id } = req.params;
  items = items.filter((item) => items.id !== req.params.id);
  reply.send({ message: "Deleted..." });
};

const updateItem = (req, reply) => {
  const { id, name } = { ...req.body, ...req.params };
  items = items.map((item) => {
    if (item.id === id) item.name = name;
    return item;
  });
  reply.send({ message: "Updated..." });
};

module.exports = {
  getAllItems,
  getOneItem,
  addItem,
  deleteItem,
  updateItem,
};
