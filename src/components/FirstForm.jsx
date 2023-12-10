import { useState } from "react"


const FirstForm = () => {

    const [isSingleDay, setIsSingleDay] = useState(false);
   

    return (
        <>
            <div className=" bg-violet-500 md:w-2/3  py-4">
                <div className="flex justify-end px-2">
                    <div className="cursor-pointer px-4 py-2 bg-blue-400 rounded-lg ">Reset</div>
                </div>
                <div className="flex justify-center">

                    <form className="flex gap-4 flex-col">
                        <div className="flex justify-between">
                            <label>School Name:</label>
                            <input type="text" />
                        </div>
                        <div className="flex justify-between">
                            <div>Days:</div>
                            <div className="flex gap-4">
                                <span>
                                    <input type="radio" name="days" checked={isSingleDay} onChange={() => setIsSingleDay(true)} /> <label>Single Day</label>
                                </span>
                                <span>
                                    <input type="radio" name="days" checked={!isSingleDay} onChange={() => setIsSingleDay(false)} /> <label>Both Days</label>
                                </span>
                            </div>

                        </div>
                        <div className="flex flex-col gap-4" >
                            {!isSingleDay && <div className="flex justify-between">
                                <label>Previous Date</label> <input type="date" />
                            </div>}
                            <div className="flex justify-between">
                                <label>Present Date</label> <input type="date" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FirstForm