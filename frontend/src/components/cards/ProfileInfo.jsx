import React from 'react'
import getInitials from '../../utils/shortName'

function ProfileInfo({onLogout}) {
  return (
    <div className='flex items-center gap-3'>  
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 bg-slate-100 font-medium '> 
        { getInitials("Aditya Mehta") } </div>
        <div>
          <p className='text-sm font-medium text-white'>Aditya</p>
          <button className='text-sm text-slate-100 underline' onClick={onLogout} > 
            Logout 
          </button>
        </div>
    </div>
  );
}

export default ProfileInfo