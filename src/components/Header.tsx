import { MoonIcon } from '@heroicons/react/outline'
import { MoonIcon as SunIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import { ThemeContext } from '../utils/themeContext'
import { Link } from 'react-router-dom'

const Header = () => {

  const {theme,setTheme}=useContext(ThemeContext)


  return (
    <div className='dark:bg-del bg-lel shadow dark:text-white h-[50px] w-screen flex justify-between items-center'>
       <Link to="/" className='md:pl-[50px] pl-[10px] font-extrabold xs:text-xs'>
         Where in the world?
         </Link>
        <div className="flex cursor-pointer" onClick={()=>setTheme(!theme)}>
        {!theme?(
          <>
        <MoonIcon className='w-[20px] h-[20px] mr-2 '/>
        <p className='md:pr-[50px] pr-[10px] font-bold xs:text-xs '>
          Dark Mode</p>  
          </>
        ):(
          <>
          <SunIcon className='w-[20px] h-[20px] mr-2 '/>
          <p className='md:pr-[50px] pr-[10px] font-bold xs:text-xs '>
            Light Mode</p>  
            </>
        )
} 
</div>
    </div>
  )
}

export default Header