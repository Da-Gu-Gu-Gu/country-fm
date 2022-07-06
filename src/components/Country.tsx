
interface IPROPS{
    country:any,
    region:String,
}


const Country:React.FC<IPROPS>= ({country,region}) => {
    console.log(country)
    console.log(region)
  return (
    <div className='w-full h-full flex justify-between flex-wrap gap-5 my-3 '>
    {country.filter((x:any)=>region!=="all"?x.region===region:x).map((x:any,i:any)=>
    <div key={i.toString()} className='cursor-pointer shadow-md dark:bg-del bg-lel dark:text-lel text-lte md:w-[48%] lg:w-[23%] w-full h-[360px] overflow-hidden rounded-md'>
        <img className='w-full h-1/2' src={x.flags.svg} alt="flag"  />
        <div className='w-full h-1/2 p-5 '>
            <p className='text-2xl font-bold'>{x.name.common}</p>
            <div className="flex flex-col my-4 gap-1">
                <p className=''>Population: <span className='font-extralight'>{x.population}</span></p>
                <p className=''>Region: <span className='font-extralight'>{x.region}</span></p>
                <p className=''>Capital: <span className='font-extralight'>{x.capital}</span></p>
            </div>
        </div>
    </div>
    )}
    </div>
  )
}

export default Country