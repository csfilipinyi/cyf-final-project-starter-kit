import React, {useState, useEffect} from 'react'
//import { useParams } from "react-router-dom";
import EditBox from '../components/EditBox';
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJyb2xlIjoiTWVudG9yIn0sImlhdCI6MTYwNDI0MzQwNCwiZXhwIjoxNjA0MjU0MjA0fQ.PXPv65AiqUvt1jPGRbi0DW8-lmLtaGaRDVSIZvOV7k4
//api/learningobjectives/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJyb2xlIjoiTWVudG9yIn0sImlhdCI6MTYwNDI0MzQwNCwiZXhwIjoxNjA0MjU0MjA0fQ.PXPv65AiqUvt1jPGRbi0DW8-lmLtaGaRDVSIZvOV7k4/html

export default function StudentDetail() {
    const [studentDetail, setStudentDetail] = useState([]);
    //let id = "HTML";
    //console.log(id);
    useEffect(({id}) => {
        fetch(`/api/learningobjectives/${localStorage.getItem("user")}/${id}`)
        .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data;
        }
        console.log(data);
        setStudentDetail(data);
      });
    },[id])
    
    return (
        <div>
           {studentDetail}
        </div>
    )
}
