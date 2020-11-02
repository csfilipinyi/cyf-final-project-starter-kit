// import React, {useState, useEffect} from 'react'
// //import { useParams } from "react-router-dom";
// import EditBox from '../components/EditBox';



// export default function StudentDetail() {
//     const [studentDetail, setStudentDetail] = useState([]);
//     //let id = "HTML";
//     //console.log(id);
//     useEffect(({id}) => {
//         fetch(`/api/mentors/${id}`)
//         .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           throw data;
//         }
//         console.log(data);
//         setStudentDetail(data);
//       });
//     },[id])
    
//     return (
//         <div>
//            {studentDetail}
//         </div>
//     )
// }
