const express = require("express");
const controller = require("../controllers/contactController");

const router = express.Router();

router.route("/").post(controller.createContact).get(controller.getContacts);
router.route("/:id")
  .get(controller.getContactById)
  .put(controller.updateContact)
  .delete(controller.deleteContact);

module.exports = router;