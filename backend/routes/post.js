const router = require("express").Router();



/**
 * title: Title of The Post as a String
 * author: Author name of the Blogpost
 * content: Content of the element as a String representing HTML
 * category: List of Categories this Post is connected to
 */
let Post = require("../model/post.model");


let User = require("../model/user.model");


/**
 * Get all Blogposts
 */
router.route("/").get((req,res) =>{
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route("/collections").get(async (req,res) =>{
    Post.find({},{category:1, _id:0})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: '+ err));
});






/**
 * Reads JSON Data of a post requests of $DIR/add, and adds Blogpost to the blogpost table
 */
router.route("/add").post(async (req,res) =>{
    
    const postData = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        category: req.body.category,
        secret: req.body.secret,
    }

    const isValid = await isValidKey(postData.secret);

    if(isValid == true){


        const newPost = new Post({
            title: postData.title,
            author: postData.author,
            content: postData.content,
            category: postData.category,
        })
    
        
    
        newPost.save()
            .then(() => res.json("Blogpost Added added!"))
            .catch(err => res.status(400).json('Error: '+ err));
    }
    else {
        res.json("Invalid Secret");
    }

    



} );


router.route("/:id").get((req,res) =>{
    Post.findById(req.params.id)
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: '+ err));
} );

router.route("/:id").delete(async (req,res) =>{

    const isValid = await isValidKey(req.body.secret);
    console.log("Delete Operation: Key Validity : "+isValid)
    if(isValid == true){
        Post.findByIdAndDelete(req.params.id)
        .then(() => res.json("Post Removed"))
        .catch(err => res.status(400).json('Error: '+ err));
    }
    else {
        res.json("Invalid Secret");
    }

    
} );


router.route("/update/:id").post(async (req,res) =>{
    

    const isValid = await isValidKey(req.body.secret);

    if(isValid == true){
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
    }
    else {
        res.json("Invalid Secret");
    }



    



} );








async function isValidKey(key) {
    const valid = await User.exists({ secret: key })
    return valid;
}




module.exports = router;