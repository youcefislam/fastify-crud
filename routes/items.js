const controller = require("../controllers/items");
// Item schema
const itemSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// Options for getting all items
const getAllItemsOpt = {
  schema: {
    response: {
      200: {
        type: "array",
        items: itemSchema,
      },
    },
  },
  handler: controller.getAllItems,
};

const getOneItemOpts = {
  schema: {
    response: {
      200: itemSchema,
    },
  },
  handler: controller.getOneItem,
};

const addItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: itemSchema,
    },
  },
  handler: controller.addItem,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: controller.deleteItem,
};

const updateItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: controller.updateItem,
};

async function itemRoutes(fastify, options, done) {
  fastify.get("/", getAllItemsOpt);

  fastify.post("/", addItemOpts);

  fastify.get("/:id", getOneItemOpts);

  fastify.delete("/:id", deleteItemOpts);

  fastify.put("/:id", updateItemOpts);
  done();
}

module.exports = itemRoutes;
