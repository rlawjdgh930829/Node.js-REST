exports.getPosts = (req, res, next) => {
    res.json({ 
        posts: [{ totle: 'first post', content: 'this is the first post' }]
    });
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'Post created successfully',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
}