import express from "express";
import Advocate from "../models/Advocate";

const router = express.Router()

//CREATE
router.post("/", async (req, res)=>{

    const newAdvocate = new Advocate(req.body)

    try{
        const savedAdvocate = await newAdvocate.save()
        res.status(200).json(savedAdvocate)
    }catch(err){
        res.statusCode(500).json(err)
    }

})

//UPDATE

router.put("/:id", async (req, res)=>{

    try{
        const updatedAdvocate = await Advocate.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedAdvocate)
    }catch(err){
        res.statusCode(500).json(err)
    }

})

//GET

router.get("/:id", async (req, res)=>{

    try{
        const advocate = await Advocate.findById(req.params.id)
        res.status(200).json(advocate)
    }catch(err){
        res.statusCode(500).json(err)
    }

})

// GET ALL

router.get("/", async (req, res)=>{

    try{
        const advocates = await Advocate.find(req.params.id)
        res.status(200).json(advocates)
    }catch(err){
        res.statusCode(500).json(err)
    }

})


export default router