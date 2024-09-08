import mongoose from "mongoose";
const lesson= new mongoose.Schema(
  {teacherid: {
    type: String,
    required: true,
  },
    matiere: [ ],

    date: { type: String, required: true },
    Heure: { type: String, required: true },
    finHeure: { type: String, required: true },
    student: [ ],
    studentreviwe: [ ],
numberstudent:{ type: Number },
    status: { type: String, default: "public" },
    },{ timestamps: true }
    
    )

    export default mongoose.model("Lesson", lesson);