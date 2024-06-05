const express = require('express');
const router = express.Router();
const { getChats, sendMessage } = require('../controllers/chatController');

router.get('/:agencyId', getChats);
router.post('/:chatId/message', sendMessage);

module.exports = router;
