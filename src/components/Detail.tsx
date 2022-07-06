import { ArrowLeftIcon } from "@heroicons/react/outline"
import {useNavigate} from 'react-router-dom'

const Detail:React.FC<any> = ({detail,detailHandler}) => {
  console.log(detail)
  const navigate=useNavigate()
  let curr:String=''
  let lang:String=''
  let nativeName:String=''
  Object.values(detail?.name?.nativeName).every((x:any)=>nativeName+=`${x.common},`)
  Object.values(detail.currencies).every((x:any)=>curr+=`${x.symbol},`)
  Object.values(detail.languages).every((x:any)=>lang+=`${x},`)


  const detailBorder=async(border:String)=>{
    await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => {
         return res.json();
        })
        .then((data) => {
          detailHandler(data[0])
        })
        .catch((err) => {
          console.log(err)
        });
  }

  return (
    <div className=" w-[90%] mx-auto overflow-x-hidden py-5 h-max ">
       
       <div onClick={()=>navigate(-1)} className='p-2 cursor-pointer px-4 rounded-md shadow-md inline-flex items-center dark:bg-del bg-lbg text-lin dark:text-white '>
        <ArrowLeftIcon className="w-[20px] h-[20px] "/> Back
       </div>
      <div className='flex gap-20 md:flex-row flex-col w-full my-5 items-center'>
          <div className="md:w-1/2 w-full h-max">
            <img src={detail.flags.svg} alt="flag" />
          </div>
          <div className="  md:w-1/2 w-full h-max  dark:text-lel text-lte">
              <p className="font-extrabold text-3xl">{detail.name.common}</p>
              <div className="flex md:flex-row flex-col my-5 md:gap-20 gap-10">
                <div className="flex flex-col gap-2">
                <p className="font-semibold" >Native Name: <span className='font-extralight'>{nativeName}</span></p>
                <p className="font-semibold">Population: <span className='font-extralight'>{detail.population}</span></p>
                <p className="font-semibold">Region: <span className='font-extralight'>{detail.region}</span></p>
                <p className="font-semibold">Sub Region: <span className='font-extralight'>{detail.subregion}</span></p>
                <p className="font-semibold">Capital: <span className='font-extralight'>{detail.capital}</span></p>
                </div>
                <div className="flex flex-col gap-2">
                <p className="font-semibold" >Top level Domain: <span className='font-extralight'>{detail.tld}</span></p>
                <p className="font-semibold">Currencies: <span className='font-extralight'>{curr}</span></p>
                <p className="font-semibold">Languages: <span className='font-extralight'>{lang}</span></p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col">
                <p>Border Countries:</p>
                <div className="flex flex-wrap gap-2 md:mt-0 mt-2">
                {detail?.borders?.map((x:any,i:String)=>(
                  <div onClick={()=>detailBorder(x)} key={i.toString()}
                  className="dark:bg-del bg-lbg flex shadow-md w-max px-3 cursor-pointer md:ml-2 mb-3">
                    {x}
                  </div>
                ))}
                </div>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Detail