import { DesertDetail } from '../utils'
import Title from './Title'

export default function Desert() {
  return (
    <div className='max-w-screen-xl mx-auto mt-44'>
      <div className='md:flex md:items-center md:justify-between mb-4 pb-4 border-b-2 border-gray-700'>
        <Title>desert</Title>
        <p className='text-gray-700 mt-4 md:mt-0 max-w-2xl'>
          Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis
          risus metus in suscipit scelerisque eu duis penatibus eros magna
          cursus elementum orci.
        </p>
      </div>
      <DesertMenu />
    </div>
  )
}

export const DesertMenu = () => {
  return (
    <div className='grid md:grid-cols-2 gap-3 grid-cols-1 border-b-2 border-gray-500 mb-6 pb-6'>
      {DesertDetail.map((item, i) => (
        <DishDetail item={item} key={i} />
      ))}
    </div>
  )
}

export const DishDetail = ({ item }) => {
  return (
    <div className='flex items-center justify-between md:flex-row flex-col'>
      <img src={item.img} alt={item.name} className='rounded-lg ' />
      <div className='ml-7'>
        <h3 className='text-3xl my-2 font-semibold'>{item.name}</h3>
        <p className='text-gray-700 leading-normal'>{item.desc}</p>
      </div>
    </div>
  )
}
