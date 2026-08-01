import { analyzeMood } from "../agents/moodAgent";
import { generateStudyPlan } from "../agents/studyAgent";

export async function generateWellnessPlan(userData){

const mood=await analyzeMood(userData);

const study=await generateStudyPlan(userData);

return{

mood,

study

}

}