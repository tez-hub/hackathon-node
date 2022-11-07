import express from "express";
import Company from "../models/Company.js";

const router = express.Router()

//CREATE
router.post("/", async (req, res)=>{

    const newCompany = new Company(req.body)

    try{
        const savedCompany = await newCompany.save()
        res.status(200).json(savedCompany)
    }catch(err){
        res.statusCode(500).json(err)
    }

})

//UPDATE

router.put("/:id", async (req, res)=>{

    try{
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedCompany)
    }catch(err){
        res.statusCode(500).json(err)
    }

})

//GET

router.get("/:id", async (req, res)=>{

    try{
        const company = await Company.findById(req.params.id)
        res.status(200).json(company)
    }catch(err){
        res.statusCode(500).json(err)
    }

})

// GET ALL

router.get("/", async (req, res)=>{

    try{
        const companies = await Company.find(req.params.id)
        res.status(200).json(companies)
    }catch(err){
        res.statusCode(500).json(err)
    }

})

export default router