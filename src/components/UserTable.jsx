import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import {FakeData} from '../Api/FakeData'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice'
import DisplayUsers from './DisplayUsers'

const UserTable = () => {
  const dispatch = useDispatch()
  const addNewData = (data) =>{
    dispatch(addUser(data))
  } 
  return (
    <>
        <div className='m-auto w-[800px] bg-zinc-100 capitalize rounded-3xl p-5'>
            <div className='flex flex-row justify-between py-3 px-4 text-[30px] '>
                <div>list of all user details</div>
                <button className='bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white rounded-full px-3 py-2 text-[20px]' onClick={()=>addNewData(FakeData())}>Add new user</button>
            </div>
            <ul>
              <DisplayUsers/>
            </ul>
            <hr/>
            <DeleteAllUsers/>
        </div>
    </>
  )
}

export default UserTable