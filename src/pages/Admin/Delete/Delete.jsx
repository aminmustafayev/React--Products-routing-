import React from 'react'
import Swal from 'sweetalert2'
import { deleteOne } from '../../../services'

const Delete = ({id, getdData}) => {
    return (
    <>
    <button style={{backgroundColor:"red", border:"none",
      padding:'15px', borderRadius:'10px', color:'white'}}
      onClick={
        async()=>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async(result)=>{
                if(result.isConfirmed){
                    await deleteOne("products", id)
                    getdData()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
        }
      }
      >
        Delete
    </button>
    </>
    )
}

export default Delete