import PptxGenJS from "pptxgenjs"
import imgPath from "./assets/classroom.jpeg"
import { useState } from "react";



const Gen = (data)=> {


 
  const createPPt = () => {
    const pptx = new PptxGenJS();
    pptx.defineLayout({ name: "custom", width: 13.3, height: 7.5 });
    pptx.layout = "custom"
    

    for(let i=0;i< data.length;i++){

      const attendance = pptx.addSlide();
      attendance.addText("VISIBLE CHANGE", {
        shape: pptx.ShapeType.roundRect,
        w: 12.5,
        h: 0.8,
        x: 0.5,
        y: 0.1,
        fontSize: 36,
        bold: true,
        fill: { color: '#953735' },
        align: "center",
        fontFace:"Aharoni"
      })
      
      attendance.addText("Facility- Attendance", {
        shape: pptx.ShapeType.rect,
        w: 2.6,
        h: 0.3,
        x: 10,
        y: 0.6,
        fontSize: 18,
        bold: true,
        fill: { color: '#F79646' },
        align: "center"
        
      })
      
      attendance.addText(`Name of School: ${data[i]}`, {
        x: 0.5,
        y: 1,
        h: 0.5,
        fontSize: 18,
        bold: true,
        align: "center"
      })

      
      
//slide for classroom

      
      const slide = pptx.addSlide();
      slide.addText("VISIBLE CHANGE", {
        shape: pptx.ShapeType.roundRect,
        w: 12.5,
        h: 0.8,
        x: 0.5,
        y: 0.1,
        fontSize: 36,
        bold: true,
        fill: { color: '#953735' },
        align: "center",
        fontFace:"Aharoni"
      })
      
      slide.addText("Facility- CLASSROOM", {
        shape: pptx.ShapeType.rect,
        w: 2.6,
        h: 0.3,
        x: 10,
        y: 0.6,
        fontSize: 18,
        bold: true,
        fill: { color: '#F79646' },
        align: "center"
        
      })
      
      slide.addText(`Name of School: ${data[i]}`, {
        x: 0.5,
        y: 1.2,
        h: 0.5,
        fontSize: 26,
        bold: true,
        align: "center"
      })
      
      // slide.addText("Previous", {
      //   x: 1,
      //   y: 1.9,
      //   w: 3,
      //   h: 0.2,
      //   fontSize: 21,
      //   bold: true,
      //   align: "center"
      // })
      
      // slide.addText("/11/2023", {
      //   x: 1,
      //   y: 2.2,
      //   w: 3,
      //   h: 0.2,
      //   fontSize: 21,
      //   bold: true,
      //   align: "center"
      // })
      
      // slide.addText("Present", {
      //   x: 8.5,
      //   y: 1.9,
      //   w: 3,
      //   h: 0.2,
      //   fontSize: 21,
      //   bold: true,
      //   align: "center"
      // })
      
      // slide.addText("/11/2023", {
      //   x: 8.5,
      //   y: 2.2,
      //   w: 3,
      //   h: 0.2,
      //   fontSize: 21,
      //   bold: true,
      //   align: "center"
      // })

      slide.addText("Present", {
        x: 5.5,
        y: 1.9,
        w: 3,
        h: 0.2,
        fontSize: 21,
        bold: true,
        align: "center"
      })
      
      slide.addText("/11/2023", {
        x: 5.5,
        y: 2.2,
        w: 3,
        h: 0.2,
        fontSize: 21,
        bold: true,
        align: "center"
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
      
    }
    
      pptx.writeFile({ fileName: "test.pptx" });
  }


  return (
    <>
      
      <button onClick={createPPt}>test</button>
     
    </>
  )
}
