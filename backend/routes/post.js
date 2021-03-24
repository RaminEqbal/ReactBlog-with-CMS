const router = require("express").Router();



/**
 * title: Title of The Post as a String
 * author: Author name of the Blogpost
 * content: Content of the element as a String representing HTML
 * category: List of Categories this Post is connected to
 */
let Post = require("../model/post.model");

/**
 * Get all Blogposts
 */
router.route("/").get((req,res) =>{
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: '+ err));
} );


/**
 * Reads JSON Data of a post requests of $DIR/add, and adds Blogpost to the blogpost table
 */
router.route("/add").post((req,res) =>{
    
    const postData = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        category: req.body.category,
    }

    const newPost = new Post({
        title: postData.title,
        author: postData.author,
        content: postData.content,
        category: postData.category,
    })

    newPost.save()
        .then(() => res.json("Blogpost Added added!"))
        .catch(err => res.status(400).json('Error: '+ err));



} );


router.route("/:id").get((req,res) =>{
    Post.findById(req.params.id)
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: '+ err));
} );

router.route("/:id").delete((req,res) =>{
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json("Post Removed"))
        .catch(err => res.status(400).json('Error: '+ err));
} );


router.route("/update/:id").post((req,res) =>{
    
    const id = req.params.id;

    const postData = {
        title: req.body.title,
        author: req.body.author,
        release: req.body.release,
        content: req.body.content,
        category: req.body.category,
    }


    Post.findById(id)
        .then(post => {
            post.title = postData.title;
            post.author = postData.author;
            post.release = postData.release;
            post.content = postData.content;
            post.category = postData.category;

            post.save()
                .then( () => res.json("Post updated") )
                .catch(err => res.status(400).json('Error: '+ err));
        })



} );




module.exports = router;