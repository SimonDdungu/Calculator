import { useState } from "react"
import Results from "../components/Results"
import Common_Calculations from "../components/Common_Calculations"
import Advanced_Calculations from "../components/Advanced_Calculations"

const Main = () => {

  const [input, setInput] = useState("")

  const Delete = () => {
      setInput(input.slice(0, -1))
  }

  const Calculating = (input_value) => {

      if(input_value === "AC"){
          setInput("")
      } 
      else if(input_value === "="){
          try{
              if(input == ""){
                  setInput("")
                  return
              }
              if(input.includes("/0")){
                  setInput("Math Error")
                  return
              }
              setInput(eval(input).toString())
          }catch{
              setInput("Math Error")
          }
      }
      else{
          if(input === "Math Error"){
              setInput(input_value)
          }else{
          setInput(input + input_value)
          }
      }
  }


  return (
    <section className="container mx-auto min-h-svh min-h-screen flex flex-col py-10 md:py-5">
      <div className="px-5 md:px-10 lg:px-40 md:my-auto h-max">
        <h1 className="text-2xl md:text-5xl text-center font-bold uppercase mb-10 border-y-3 border-blue-300 py-3 tracking-wider">Chainz Calculator</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Results display={input} delete_char={Delete}/>
          <Advanced_Calculations/>
          <Common_Calculations value={Calculating}/>
        </div>
      </div>
    </section>
  )
}

export default Main