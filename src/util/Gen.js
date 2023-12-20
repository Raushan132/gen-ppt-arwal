import PptxGenJS from "pptxgenjs"
import moment from "moment";

import { useState } from "react";
import DateFormat from "./DateFormat";
import Dimension from "./Dimension";




const Gen = (data) => {

  const schoolName = data.schoolName;
  const presentDate = data.dates.present;
  const prevDate = data.dates.previous;
  console.log(schoolName, presentDate, prevDate)


  const pptx = new PptxGenJS();
  // pptx.defineLayout({ name: "custom", width: 13.3, height: 7.5 });
  pptx.defineLayout({ name: "custom", width: 10, height: 7.5 });
  pptx.layout = "custom"




  // const attendance = pptx.addSlide();
  // attendance.addText("VISIBLE CHANGE", {
  //   shape: pptx.ShapeType.roundRect,
  //   w: 12.5,
  //   h: 0.8,
  //   x: 0.5,
  //   y: 0.1,
  //   fontSize: 36,
  //   bold: true,
  //   fill: { color: '#953735' },
  //   align: "center",
  //   fontFace:"Aharoni"
  // })

  // attendance.addText("Facility- Attendance", {
  //   shape: pptx.ShapeType.rect,
  //   w: 2.6,
  //   h: 0.3,
  //   x: 10,
  //   y: 0.6,
  //   fontSize: 18,
  //   bold: true,
  //   fill: { color: '#F79646' },
  //   align: "center"

  // })

  // attendance.addText(`Name of School: ${data.schoolName}`, {
  //   x: 0.5,
  //   y: 1,
  //   h: 0.5,
  //   fontSize: 18,
  //   bold: true,
  //   align: "center"
  // })



  //slide for classroom

  data.facilities.map((facility) => {

    const slide = pptx.addSlide();
    slide.addText( facility.day===0?"VISIBLE CHANGE":"", {
      shape: pptx.ShapeType.roundRect,
      w: 9,
      h: 0.8,
      x: 0.5,
      y: 0.1,
      fontSize: 28,
      bold: true,
      fill: { color: '#953735' },
      align: "center",
      fontFace: "Aharoni"
    })

    slide.addText(`Facility- ${facility.facilityName}`, {
      shape: pptx.ShapeType.rect,
      w: 2.6,
      h: 0.3,
      x: 6.8,
      y: 0.6,
      fontSize: 18,
      bold: true,
      fill: { color: '#F79646' },
      align: "center"

    })

    slide.addText(`Name of School: ${schoolName}`, {
      x: 0.5,
      y: 1.2,
      h: 0.5,
      fontSize: 26,
      bold: true,
      align: "center"
    })

    //If Both days are available then
    if (facility.day === 0) {

      slide.addText("Previous", {
        x: 1,
        y: 1.9,
        w: 3,
        h: 0.2,
        fontSize: 21,
        bold: true,
        align: "center"
      })

      slide.addText(DateFormat(prevDate), {
        x: 1,
        y: 2.2,
        w: 3,
        h: 0.2,
        fontSize: 21,
        bold: true,
        align: "center"
      })

      slide.addText("Present", {
        x: 6,
        y: 1.9,
        w: 3,
        h: 0.2,
        fontSize: 21,
        bold: true,
        align: "center"
      })

      slide.addText(DateFormat(presentDate), {
        x: 6,
        y: 2.2,
        w: 3,
        h: 0.2,
        fontSize: 21,
        bold: true,
        align: "center"
      })

    }

    else {

      slide.addText("Present", {
        x: 4.5,
        y: 1.9,
        w: 3,
        h: 0.2,
        fontSize: 21,
        bold: true,
        align: "center"
      })

      slide.addText(DateFormat(facility.day === 1 ? presentDate : prevDate), {
        x: 4.5,
        y: 2.2,
        w: 3,
        h: 0.2,
        fontSize: 21,
        bold: true,
        align: "center"
      })

    }


    //If Both days are available for image then

    let len = facility.prevImg.length;
    let yAxis= 2.4;
    
  
    let count =0;
    facility.prevImg.map(img => {

      const dimension = Dimension(facility.bothDays,2,len,count,yAxis)
      
      yAxis+= ((4.5/len) * count)+0.1;
      count=count===0?1:1;
      slide.addImage({
        data: img.file,
        x: dimension.x,    // x: 0.5,
        y: dimension.y,    // y: yAxis,
        w: dimension.w,    // w: 5.6,
        h: dimension.h,    // h: 4.5/len,
      })

    })

    count=0;
    yAxis=2.4;
    len = facility.presImg.length;
    console.log(len)
    
    facility.presImg.map(img=>{
      const dimension = Dimension(facility.bothDays,1,len,count,yAxis)
      // yAxis+=((4.5/len)* count)+0.1;
      count = count===0?1:1
      slide.addImage({
      data: img.file,
        x: dimension.x,        // x: 7,
        y: dimension.y,       // y: yAxis,
        w: dimension.w,        // w: 5.6,
        h: dimension.h,        // h: 4.5/len,
    })

    })

    // slide.addImage({
    //   path: imgPath,
    //   x: 0.5,
    //   y: 2.7,
    //   w: 5.5,
    //   h: 4.5,
    // })

    // slide.addImage({
    //   path: imgPath,
    //   x: 7,
    //   y: 2.7,
    //   w: 5.5,
    //   h: 4.5,
    // })




  })


  pptx.writeFile({ fileName: `${schoolName}.pptx` });
}

export default Gen;