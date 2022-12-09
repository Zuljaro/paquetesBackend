const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({

  llegar24: {
    type: Boolean,
    default: false 
  },
	fecha:{
    type:Date
  },
  alto:{
    type:Number,
    require:true
  },
  ancho:{
    type:Number,
    require:true
  },
  largo:{
    type:Number,
    require:true
  },
	peso:{
    type:Number,
    require:true
  },
  dpto:{
    type:Number,
    require:true
  },
  state: {
		type: String,
		enum: ['guardado', 'cancelado', 'cumplido'],
		default: 'guardado',
	},
	ciudadenvio:{
    type:String,
    require:true
  },
  direccionenvio:{
    type:String,
    require:true
  },
	ciudaddestino:{
    type:String,
    require:true
  },
  direcciondestino:{
    type:String,
    require:true
  },
  nombtreremitente:{
    type:String,
    require:true
  },
  		
	cedularemitente:{
    type:String,
    require:true
  },
  	
    
    });
  
  export default mongoose.model('Package', packageSchema);


  