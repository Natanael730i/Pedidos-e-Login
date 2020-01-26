'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');
const azure = require('azure-storage');
const guid = require('guid');
let config = require('../config');

exports.get = async(req,res,next) => {
    try{
        let data = await repository.get();
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getBySlug = async(req,res,next) =>{
    try{
        let data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    }catch(e){
        res.statud(500).send({
            message: 'Falha ao processar requisição'
        });
    }   
}

exports.getById = async(req, res, next) => {
    try{
        let data = await repository.getById(req.params.id);
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByTag = async(req,res,next) => {
    try{
        const data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);    
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req,res,next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3 , 'O titulo deve conter no minimo 3 caracteres');
    contract.hasMinLen(req.body.slug, 3 , 'O titulo deve conter no minimo 3 caracteres');
    contract.hasMinLen(req.body.description, 3 , 'O titulo deve conter no minimo 3 caracteres');
    
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }
    try{
        let fileName = grid.raw().toString() + '.jpg';
        let rawData = req.body.image;
        let matches = rawData.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let type = matches[1];
        let buffer = new Buffer(matches[2], 'base64');

        await blobSvc.createBlockBlobFromText('product-images', fileName, buffer,{
            contentType: type
        },function (error, result, response){
            if(error){
                fileName = 'default-product.png'
            }
        });
    }
}