/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0hio2ka0ww8w63w",
    "created": "2024-01-16 08:35:18.100Z",
    "updated": "2024-01-16 08:35:18.100Z",
    "name": "menCollection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pk5ft8vx",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("0hio2ka0ww8w63w");

  return dao.deleteCollection(collection);
})
