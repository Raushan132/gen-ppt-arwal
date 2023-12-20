const Dimension = (flag,days,noOfImgs,count,yAxis)=>{
    console.log(noOfImgs)
    return flag? bothDay(days,noOfImgs,count,yAxis): singleDay(noOfImgs,count) // flag represent both days or not days boolean

}

const singleDay =(noOfImgs,count) =>{
    console.log("here", noOfImgs,count)
    if(noOfImgs===1) return {x:1,y:2.6,w:7.6,h:4.5}

    if(noOfImgs===2) return count===0?{x:0.5,y:2.5,w:4.5,h:4.5}:{x:5.2,y:2.5,w:4.5,h:4.5}

   // need to optimize the ode and todo: if no of image more than 2


}

const bothDay = (days,noOfImgs,count,yAxis) =>{
    
    const xAxis=days===2? 0.5:5.2;    //days:2 means previous day
    console.log("xAxis",xAxis)
    yAxis+= ((4.5/noOfImgs) * count)+0.3;
    const currH = 4.5/noOfImgs;

    return {
                x:xAxis,
                y:yAxis,
                w:4.5,
                h:currH

            }


}

export default Dimension;