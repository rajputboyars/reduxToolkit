import React from 'react'
import { MdDeleteForever } from "react-icons/md";

import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>{return(state.users)})
    const deleteData = (id) =>{
        dispatch(removeUser(id))
        // console.log(id);
    }

  return (
    <>
       <div className='w-full m-auto '>
            {data.map((user,id)=>{
                return(
                    <li className='bg-zinc-200 rounded-full py-2 px-3 hover:bg-zinc-300 m-2 flex justify-between' key={id}>
                        {user}
                        <MdDeleteForever className='text-red-700 text-[25px] select-none' onClick={()=>deleteData(id)}/>
                    </li>
                )
            })}
        </div> 
    </>
  )
}

export default DisplayUsers