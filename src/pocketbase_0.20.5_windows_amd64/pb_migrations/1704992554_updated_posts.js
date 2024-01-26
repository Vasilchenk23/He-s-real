/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2kmcgo7akfvmxse")

  // remove
  collection.schema.removeField("vwcvlizd")

  // remove
  collection.schema.removeField("ewh2jflg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p21pl8x3",
    "name": "image",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4kmuuvhu",
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
    "id": "vwcvlizd",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ewh2jflg",
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
  collection.schema.removeField("p21pl8x3")

  // remove
  collection.schema.removeField("4kmuuvhu")

  return dao.saveCollection(collection)
})
