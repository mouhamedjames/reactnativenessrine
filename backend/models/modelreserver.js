import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema(
  {
    idstudent: {
      type: String,
      required: true,

    },
   
    lessonreview: {
      type: Object,
     
    },
    lessonaccepted: {
        type: Object,
       
      },
   
   
  },
  { timestamps: true }
);

export default mongoose.model("Student", StudentSchema);