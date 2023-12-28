import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="flex flex-row justify-between bg-slate-100 w-full">
            <div className="text-red-600 p-5 font-bold text-[20px]">LOGOTYPE</div>
            <div >
              <ul className='flex flex-row'>
                
                <div className={`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 text-zinc-600`}>Home</div>
                <div className={`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 text-zinc-600`}>About</div>
                <div className={`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 text-zinc-600`}>Contacts</div>
                <div className={`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 text-zinc-600`}>Login</div>
                <div className={`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 text-zinc-600`}>Logout</div>
              
              </ul>
            </div>
          </div>
        </>
      )
}

export default Navbar