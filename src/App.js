import First from "./components/First/First";
import Second from "./components/Second/Second";
import Fourth from "./components/Fourth/Fourth";
import Third from "./components/Third/Third";
import { useState } from "react";
import StepWrapper from "./components/StepWrapper";

function App() {
  const [step, setStep] = useState(1);
  const updateStep = (nextStep)=>{
    setStep(nextStep);
  }
  return (
    <div>
    <StepWrapper currentStep={step}/>
    {
      step==1 &&  <First currentStep={step} updateStep={updateStep}/>
      
    }
    {
      step==2 &&   <Second currentStep={step} updateStep={updateStep}/>
      
    }
    {
      step==3 &&  <Third currentStep={step} updateStep={updateStep}/>
      
    }
    {
      step==4 &&  <Fourth/>
      
    }
     
     
      
      
    </div>
  );
}

export default App;
