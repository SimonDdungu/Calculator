
const Common_Calculations = ({value}) => {
  return (
    <section className="h-max">
        <div className="grid grid-cols-4 gap-5 text-center items-center justify-center">
            <button onClick={() => value("(")} className="bg-blue-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-blue-300 transition-all ease-in active:bg-blue-400">(</button>
            <button onClick={() => value(")")} className="bg-blue-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-blue-300 transition-all ease-in active:bg-blue-400">)</button>
            <button onClick={() => value("%")} className="bg-blue-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-blue-300 transition-all ease-in active:bg-blue-400">%</button>
            <button onClick={() => value("AC")} className="bg-blue-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-blue-300 transition-all ease-in active:bg-blue-400">AC</button>


            <button onClick={() => value("7")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">7</button>
            <button onClick={() => value("8")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">8</button>
            <button onClick={() => value("9")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">9</button>
            <button onClick={() => value("/")} className="bg-blue-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-blue-300 transition-all ease-in active:bg-blue-400">/</button>

            <button onClick={() => value("4")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">4</button>
            <button onClick={() => value("5")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">5</button>
            <button onClick={() => value("6")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">6</button>
            <button onClick={() => value("*")} className="bg-blue-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-blue-300 transition-all ease-in active:bg-blue-400">x</button>

            <button onClick={() => value("1")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">1</button>
            <button onClick={() => value("2")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">2</button>
            <button onClick={() => value("3")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">3</button>
            <button onClick={() => value("-")} className="bg-blue-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-blue-300 transition-all ease-in active:bg-blue-400">-</button>

            <button onClick={() => value("0")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">0</button>
            <button onClick={() => value(".")} className="bg-gray-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-gray-300 transition-all ease-in active:bg-gray-400">.</button>
            <button onClick={() => value("=")} className="bg-blue-800 text-white rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-blue-900 transition-all ease-in active:bg-blue-950">=</button>
            <button onClick={() => value("+")} className="bg-blue-200 rounded-full text-2xl px-4 py-4 cursor-pointer hover:bg-blue-300 transition-all ease-in active:bg-blue-400">+</button>
        </div>
    </section>
  )
}

export default Common_Calculations