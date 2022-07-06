import { useState } from 'react'
import {SearchIcon} from '@heroicons/react/outline'
import Country from './Country'
interface IPROPS{
  country:any,
  handler:any,
  loading:boolean
}

const Search:React.FC<IPROPS> = ({country,handler,loading}) => {

  const [region,setRegion]=useState<String>('all')

  const filterRegion=(e:String)=>{
    setRegion(e)
  }
  return (
    <>
    <div className='flex justify-between md:flex-row flex-col'>
        <div className="flex items-center h-[40px] md:my-5 mt-5 md:w-[400px]  shadow rounded-md overflow-hidden">
            <label htmlFor='search' className='cursor-pointer h-full inline-flex items-center dark:bg-del bg-lbg text-lin dark:text-white'>
            <SearchIcon className='w-[20px] h-[20px] mx-3 text-lin' />
            </label>
        <input id='search' className='outline-none grow h-full dark:bg-del bg-lbg text-lin dark:text-white ' type="text" placeholder='Search for a conutry...' />
        </div> 
        <select onChange={(e)=>filterRegion(e.target.value)} className='dark:bg-del bg-lbg text-lin dark:text-white  h-[40px] md:my-5 my-3 w-max  px-3 rounded-md shadow outline-none'>
            <option value="all">Select a region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
        {loading?"Waiting ...":<Country country={country} region={region} />} 
      </>
  )
}

export default Search