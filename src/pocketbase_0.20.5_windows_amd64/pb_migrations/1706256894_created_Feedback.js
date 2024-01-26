/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9pur01d0tmjn2qt",
    "created": "2024-01-26 08:14:54.858Z",
    "updated": "2024-01-26 08:14:54.858Z",
    "name": "Feedback",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c82aonoe",
        "name": "userName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "r3yneijq",
        "name": "userTelephone",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gnxp3nay",
        "name": "selectedImage",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9pur01d0tmjn2qt");

  return dao.deleteCollection(collection);
})
