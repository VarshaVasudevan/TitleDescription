var mongoose=require('mongoose')

    var TitleDescriptionSchema=mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String, required: true },
    })
    
TitleDescription=new mongoose.model('TitleDescription',TitleDescriptionSchema)

module.exports=TitleDescription