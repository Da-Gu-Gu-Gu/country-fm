import Search from './Search'

const Wrapper:React.FC<any> = ({detailHandler,countries,loading}) => {

  return (
    <div className=" w-[90%] mx-auto overflow-x-hidden">
    <Search country={countries}  loading={loading} detailHandler={detailHandler} />
  </div>
  )
}

export default Wrapper