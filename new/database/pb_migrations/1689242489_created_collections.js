migrate((db) => {
  const collection = new Collection({
    "id": "pluszgquiwxphvq",
    "created": "2023-07-13 10:01:29.162Z",
    "updated": "2023-07-13 10:01:29.162Z",
    "name": "collections",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zhu4tqvz",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "byrrmz5z",
        "name": "owner",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "bdrbppnz",
        "name": "icon",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("pluszgquiwxphvq");

  return dao.deleteCollection(collection);
})
