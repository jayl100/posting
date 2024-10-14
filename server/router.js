// require('@babel/register'); // Babel을 서버 시작 시 가장 먼저 호출합니다.
const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();



const bodyParser = require('body-parser')
app.use(bodyParser.json()); // JSON 데이터 파싱
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, "../client/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
})

let posts = []; // 게시글을 저장할 배열

router.post("/", (req, res) => {
    const {text} = req.body;
    const newPost = {
        index: posts.length + 1,
        text: text,
        date: new Date().toLocaleDateString('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        }),
    };
    posts.push(newPost);
    res.json({message: 'Post created successfully!'});
    console.log(posts);
});

router.put("/", (req, res) => {
    const { index, text } = req.body; // ID와 수정된 내용 받음
    const postIndex = posts.findIndex(post => post.index === index);


    if (postIndex !== -1) {
        posts[postIndex].text = text;

        res.json({ message: 'Post updated successfully!', post: posts[postIndex] });
        console.log('Post updated:', posts[postIndex]);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

router.delete("/", (req, res) => {
    const { id } = req.body; // ID를 본문에서 받음
    const postIndex = posts.findIndex(post => post.index === id);

    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.json({ message: 'Post deleted successfully!' });
        console.log(`Post with ID ${id} deleted.`);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});


router.get("/", (req, res) => {
    console.log('잘되냐고요.'); // 로그 추가
    res.json(posts); // 저장된 게시글 데이터를 반환
    console.log('Fetching posts:', posts);
});



module.exports = router;
