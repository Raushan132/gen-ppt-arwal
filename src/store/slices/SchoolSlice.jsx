import { createSlice } from "@reduxjs/toolkit";


const initialInfo = {
    schoolName:'',
    dates:{present:'',previous:''},
    facilities:[]
}



const schoolInfoSlice = createSlice({
    name:'schoolInfo',
    initialState:initialInfo,
    reducers:{
        addSchoolInfo(state,action){
            state.schoolName= action.payload.schoolName;
            state.dates.present = action.payload.dates.presDate;
            state.dates.previous = action.payload.dates.prevDate;
        },

        addFacilities(state,action){
            state.facilities.push({ID:action.payload,facilityName:'CLASSROOM',bothDays:true,day:'0',prevImg:[],presImg:[]})
        },
        editFacilities(state,action){
            // console.log("schoolSlice:",action.payload)
            const facility = action.payload;
            state.facilities.filter(data=>   data.ID === facility.id ).map(data=>{
                data.facilityName = facility.facilityName
                data.bothDays =!facility.isSingleDay;
                data.day= facility.prevOrNot;
            })
           
        },

        addImages(state,action){
          const  imgInfo = action.payload;
          console.log(imgInfo)
            if(imgInfo.isPres){
                state.facilities.filter(data=>{
                    console.log(data.ID,"here")
                    return data.ID===imgInfo.id})
                    .map(({presImg})=>{
                        
                       
                        const index=   presImg.findIndex(({imgId})=>{ console.log("imgId",imgId,imgInfo.imgId);return imgId===imgInfo.imgId})
                        if(index===-1)
                             presImg.push({imgId:imgInfo.imgId,file:imgInfo.file})
                        else{
                            presImg[imgInfo.imgId].file = imgInfo.file
                        }
                   
                       
                    })
            }else{

                state.facilities.filter(data=>{
                    console.log(data.ID,"here")
                    return data.ID===imgInfo.id})
                    .map(({prevImg})=>{
                        
                       
                        const index=   prevImg.findIndex(({imgId})=>{ console.log("imgId",imgId,imgInfo.imgId);return imgId===imgInfo.imgId})
                        if(index===-1)
                             prevImg.push({imgId:imgInfo.imgId,file:imgInfo.file})
                        else{
                            prevImg[imgInfo.imgId].file = imgInfo.file
                        }
                   
                       
                    })

            }
        }
    }
});

export default schoolInfoSlice

export const {addSchoolInfo,addFacilities,editFacilities,addImages} = schoolInfoSlice.actions