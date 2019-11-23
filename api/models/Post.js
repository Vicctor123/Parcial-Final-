const mongoose= require('mongoose');
const PostSchema = mongoose.Schema({
    nombre: {
        type : String
       // required : true 
    },
    ibsm:{
        type : String
        //required : true 
    },
    autor:{
        type : String
        //required : true 
    },
    resumen:{
        type : String 
        //required : true 
    },
    fecha:{
        type: Date,
        default: Date.now
    },
    editorial:{
        type : String
        //required : true 
    },
    pais:{
        type : String
       // required : true  
    }
});
module.exports =  mongoose.model('Posts', PostSchema);


/*{
	"nombre":"Libro de Prueba1",
	"ibsm":"A42",
	"autor":"yo",
	"resumen":"esta es una prueba",
	"editorial":"yo que se ",
	"pais":"El Salvador"
	
}*/