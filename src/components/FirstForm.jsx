import { useState } from "react"
import { useDispatch } from "react-redux";
import { addSchoolInfo } from "../store/slices/SchoolSlice";


const FirstForm = () => {

    const [isSingleDay, setIsSingleDay] = useState(false);

    const[schoolName,setSchoolName] = useState("")
    const[dates,setDates] = useState({prevDate:'',presDate:''})

    const dispatch = useDispatch()



    const handleSaveBtn =()=>{

        if(schoolName===''){
            alert("Enter the school Name");
            return;
        }

        if(dates.presDate ==='' || (!isSingleDay && dates.prevDate)===''){
            alert("Choose the Date");
            return;
        }

        const schoolInfo = {schoolName,dates}
        dispatch(addSchoolInfo(schoolInfo))
    }
   
    console.log(schoolName,dates)

    return (
        <>
            <div className=" bg-violet-500 md:w-2/3  py-4">
                <div className="flex justify-end px-2">
                    <div className="cursor-pointer px-4 py-2 bg-blue-400 rounded-lg ">Reset</div>
                </div>
                <div className="flex justify-center">

                    <form className="flex gap-4 flex-col">
                        <div className="flex justify-between ">
                            <label>School Name:</label>
                            <input type="text" className="text-black" onChange={e=>setSchoolName(e.target.value)} />
                        </div>
                        <div className="flex justify-between">
                            <div>Days:</div>
                            <div className="flex gap-4">
                                <span>
                                    <input type="radio" name="days" checked={isSingleDay} onChange={() => {setIsSingleDay(true);setDates(prev=>({...prev,prevDate:''}))}} /> <label>Single Day</label>
                                </span>
                                <span>
                                    <input type="radio" name="days" checked={!isSingleDay} onChange={() => setIsSingleDay(false)} /> <label>Both Days</label>
                                </span>
                            </div>

                        </div>
                        <div className="flex flex-col gap-4" >
                            {!isSingleDay && <div className="flex justify-between">
                                <label>Previous Date</label> <input type="date" defaultValue={dates.prevDate} onChange={e=>{setDates(prev=> ({...prev,prevDate:e.target.value}))}} className="text-black"/>
                            </div>}
                            <div className="flex justify-between">
                                <label>Present Date</label> <input type="date" defaultValue={dates.presDate} onChange={e=>{setDates(prev=> ({...prev,presDate:e.target.value}))}}  className="text-black" />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="flex justify-end px-2">
                    <div className="cursor-pointer px-4 py-2 bg-blue-400 rounded-lg" onClick={handleSaveBtn}>Save</div>
                </div>

            </div>
        </>
    )
}

export default FirstForm