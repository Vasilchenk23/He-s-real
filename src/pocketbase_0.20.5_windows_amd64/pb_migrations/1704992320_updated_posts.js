/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2kmcgo7akfvmxse")

  // remove
  collection.schema.removeField("ckfftlgn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8mawgoug",
    "name": "sizes",
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
  const collection = dao.findCollectionByNameOrId("2kmcgo7akfvmxse")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ckfftlgn",
    "name": "sizes",
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
  collection.schema.removeField("8mawgoug")

  return dao.saveCollection(collection)
})
