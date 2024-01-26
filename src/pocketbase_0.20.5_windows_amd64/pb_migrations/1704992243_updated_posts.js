/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2kmcgo7akfvmxse")

  // remove
  collection.schema.removeField("tbdalld9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rzw9mplz",
    "name": "image",
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
  const collection = dao.findCollectionByNameOrId("2kmcgo7akfvmxse")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tbdalld9",
    "name": "image",
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
  collection.schema.removeField("rzw9mplz")

  return dao.saveCollection(collection)
})
