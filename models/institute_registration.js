const mongoose = require('mongoose');
const University = require('./university');
const Board = require('./board');

const schoolSchema = new mongoose.Schema({
    // name: { type: String, default: "" },
    board: { type: String, default: "" },
    boardId: { type: Number, default: 0 },
    medium: { type: String, default: "" },
    mediumId: { type: Number, default: 0 },
    class: { type: String, default: "" },
    classId: { type: Number, default: 0 },
    standard: { type: String, default: "" },
    standardId: { type: Number, default: 0 },
    subjects: [{
        name: { type: String, default: "" },
        id: { type:Number, default: 0 }
    }]
}, {
    timestamps: true
});

const collegeSchema = new mongoose.Schema({
   university:{type:String,default:""},
        universityId:{type:Number, default:0},
},{
    timestamps: true
});

const examschema = new mongoose.Schema({
    name: { type: String, default: "" },
    id: { type: Number, default: 0 }
}, {
    timestamps: true
});

const institute_registrationSchema = new mongoose.Schema({
    name:{type:String, default:""},
    category:{type:String, default:""}, // Playhouse,School,College,Competitive Exam Center
    categoryId:{type:Number, default:0}, 
    school:schoolSchema,
    college:collegeSchema,
    exam:examschema
},{
    timestamps: true
});
const institute_registration = mongoose.model('institute_registration', institute_registrationSchema);
module.exports = institute_registration;