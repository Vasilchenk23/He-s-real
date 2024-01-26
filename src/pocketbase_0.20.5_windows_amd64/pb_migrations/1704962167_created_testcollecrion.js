/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "45852fadc3yi8gq",
    "created": "2024-01-11 08:36:07.283Z",
    "updated": "2024-01-11 08:36:07.283Z",
    "name": "testcollecrion",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zq75zk7z",
        "name": "field1",
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
  const collection = dao.findCollectionByNameOrId("45852fadc3yi8gq");

  return dao.deleteCollection(collection);
})
