import {Link} from 'react-router-dom'

interface IPROPS{
    country:any,
    region:String,
    detailHandler:any,
    search:String
}


const Country:React.FC<IPROPS>= ({country,region,detailHandler,search}) => {
  return (
    <div className='w-full h-full flex justify-between flex-wrap gap-5 my-3 '>
    {country.filter((x:any)=>{
       if(search?.length<1){
        return x
      }else if(x.name.common.toLowerCase().includes(search.toLowerCase())){
        return x
    }
    })
    .filter((x:any)=>region!=="all"?x.region===region:x).map((x:any,i:any)=>
   <Link to="/detail" key={i.toString()} className='cursor-pointer shadow-md dark:bg-del bg-lel dark:text-lel text-lte md:w-[48%] lg:w-[23%] w-full  min-h-max  overflow-hidden rounded-md'>
   <div  onClick={()=>detailHandler(x)} >
        <div className='w-full h-[200px] '>
        <img className='w-full h-full' src={x.flags.svg} alt="flag"  />
        </div>
        <div className='w-full h-1/2 p-5 '>
            <p className='text-2xl font-bold'>{x.name.common}</p>
            <div className="flex flex-col my-4 gap-1">
                <p >Population: <span className='font-extralight'>{x.population}</span></p>
                <p >Region: <span className='font-extralight'>{x.region}</span></p>
                <p >Capital: <span className='font-extralight'>{x.capital}</span></p>
            </div>
        </div>
    </div>
    </Link>
    )}
    </div>
  )
}

export default Country