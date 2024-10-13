const express = require('express');

const router = express.Router();
router.use(express.json());


let posts = []; // 게시글 데이터를 메모리에 저장

router.post('/', (req, res) => {
    const postText = req.body;
    console.log(postText);
    posts.push(postText);
    res.status(200).send('successfully post');
});

router.get('/', (req, res) => {
    res.json(posts); // 게시글 리스트 반환
});

module.exports = router;


// req.body에 textarea에서 썼던 텍스트를 넣기.
// 게시글 리스트 반환을 게시글 목록에 프론트에 나오게 하기.

