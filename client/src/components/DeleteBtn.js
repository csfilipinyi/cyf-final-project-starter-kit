import React, { useEffect, useState } from 'react'

// export default function DeleteBtn(id) {
//     //console.log(id)
//     const [deleteBtn, setDeleteBtn] = useState()
//     const deleteLearningOb = (id)=> {
//         console.log(id)
//         useEffect(()=>{
//             fetch(`/learningobjective/${id}`, {
//                 method: "DELETE"
//               })
//                 .then(res => res.json())
//                 .then(data =>data);
//             }, [])
            
          
//     }
//     return (
//         <div>
//              <button
//                     onClick={() =>deleteLearningOb}
//                     className="sumbit delete-btn"
//                     type="submit"
//                     variant="secondary"
//                   >delete</button>
//         </div>
//     )
// }
