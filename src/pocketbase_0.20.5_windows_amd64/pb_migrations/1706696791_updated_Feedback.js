/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pur01d0tmjn2qt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r3yneijq",
    "name": "userFeedback",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pur01d0tmjn2qt")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
