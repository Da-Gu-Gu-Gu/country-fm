import Search from './Search'
import Country from './Country'
import {useEffect, useState} from 'react'




const Wrapper = () => {
    const [countries,setCountries]=useState()
    const [loading,setLoading]=useState(true)



    useEffect(()=>{
        const fetchApi=async()=>{
            const response= await fetch(`https://restcountries.com/v3.1/all`)
                            .then(res=>{
                                setLoading(true)
                                return res.json()
                            })
                            .then(data=>{
                                setLoading(false)
                                setCountries(data)
                            })
                            .catch(err=>{
                                setLoading(false)
                            })    
        }

        fetchApi()
    },[])

  return (
    <div className=" w-[90%] mx-auto overflow-x-hidden">
    <Search country={countries} handler={setCountries} loading={loading} />
  </div>
  )
}

export default Wrapper