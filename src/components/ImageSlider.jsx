import { useState } from "react"

function ImageSlider(){
    const [index , setInedex] = useState(0)

    //function that next the state
    const handleNext = () =>
    {
       if(index < images.length -1)
       {
        setInedex(index +1)
       }
       
    }
    //function that next the state
    const handlePrev = () =>
    {
        if (index > 0)
        {
            setInedex(index -1)
        }
    }
 const images = [
    "https://i.pinimg.com/236x/5b/15/05/5b15059cf2c60d6fecdfdbd3ae80fe41.jpg",
    "https://i.pinimg.com/236x/22/f6/a1/22f6a19f4d21a569d4df6dbccab8d33f.jpg",
    "https://i.pinimg.com/236x/b2/ac/67/b2ac6752214e196242244f80945f5a3e.jpg",
    "https://i.pinimg.com/736x/b9/09/77/b90977f7ab5e9e3e2b4e5948156e6d3d.jpg",
 ]

    return <div className="text-center mt-10">
        <img className="w-[900px] h-[400px] ml-[530px] rounded-[30px]  mb-16" src={images[index]}/>
        <button onClick={handleNext} className="bg-orange-500 text-3xl px-4 py-3 rounded text-white font-bold">next</button>
        <button  onClick={handlePrev} className="bg-orange-500 text-3xl px-4 py-3 rounded text-white font-bold ml-10">prev</button>
    </div>
}
export default ImageSlider