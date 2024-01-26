/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pur01d0tmjn2qt")

  // remove
  collection.schema.removeField("gnxp3nay")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ukycjoo5",
    "name": "selectedImage",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pur01d0tmjn2qt")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("ukycjoo5")

  return dao.saveCollection(collection)
})
