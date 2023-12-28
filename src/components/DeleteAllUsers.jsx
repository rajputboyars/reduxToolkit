import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllUser } from '../store/slices/UserSlice'

const DeleteAllUsers = () => {
  const dispatch = useDispatch()
  const deleteAllData = () => {
    dispatch(deleteAllUser())
  }
  return (
    <>
      <div className='m-auto w-fit my-3'>
        <button className='bg-red-500 hover:bg-red-400 active:bg-red-600 text-white rounded-full px-3 py-1 text-[20px] select-none' onClick={deleteAllData}>Delete All User</button>
      </div>
    </>
  )
}

export default DeleteAllUsers