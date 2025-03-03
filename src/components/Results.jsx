import { useEffect, useRef } from "react"
import history from "../assets/images/icons/history.png"
import delete_button from "../assets/images/icons/delete.png"

const Results = (prop) => {

  const display_overflow = useRef(null)


{/* Auto Scroll Display to always show the last digits */}
  useEffect(() => {
    if(display_overflow.current){
        display_overflow.current.scrollLeft = display_overflow.current.scrollWidth;
    }
  }, [prop.display])


  return (
    <section className="md:col-span-2 mb-5">
        <div className=" px-5 py-4 border border-gray-500 rounded-lg box-border">
            <div className="w-5 mb-5">
              <img src={history} alt="history icon" className="w-full object-contain" />
            </div>
            
            <div className="flex flex-row items-center gap-1">
              <div className="w-7">
                <img src={delete_button} onClick={prop.delete_char} alt="delete icon" className="w-full object-contain cursor-pointer" />
              </div>

              <input ref={display_overflow} className="pl-3 block text-4xl w-full max-w-full  text-right outline-0 pointer-events-none placeholder:text-black overflow-x-auto whitespace-nowrap" value={prop.display} placeholder="0" readOnly />
            </div>
        </div>
    </section>
  )
}

export default Results