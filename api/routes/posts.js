const express = require('express');
const router = express.Router();
const Post= require('../models/Post');
//get all 
router.get('/', async(req,res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message:err});
    }
});
//postear un libro
router.post('/', async(req,res) => {
    const post = new Post({
        nombre:req.body.nombre, 
        ibsm:req.body.ibsm,
        autor:req.body.autor, 
        resumen:req.body.resumen,
        editorial:req.body.editorial, 
        pais:req.body.pais 
    });


    
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message:err});
    }
});
//tomar uno en especifico por id 
router.get('/postId', async(req,res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message:err});
    }
});

//delete 1
router.delete('/postId', async(req,res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch (err) {
        res.json({message:err});
    }
});


//update 1 
router.patch('/postId', async(req,res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {nombre:req.body.nombre}  }
            
            );

        res.json(updatedPost);
    } catch (err) {
        res.json({message:err});
    }
});




module.exports = router;
