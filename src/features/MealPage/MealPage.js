import React from 'react'
import { useGetCategoryFoodQuery } from '../mealApi';

const MealPage = () => {
  const { data, isError, error, isloading } = useGetCategoryFoodQuery();

  if (isloading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div >


  }
  console.log(data);
  return (
    <div className='grid bg-brown-700 grid-cols-3 gap-7 p-5 items-start'>
      {data.categories.map((meal) => {
        return <div key={meal.idCategory} className='space-y-5 shadow-2xl cursor-pointer'>
          <h1 className='text-2xl font-bold tracking-wider'>{meal.strCategory}</h1>
          <img src={meal.strCategoryThumb} alt="" />
          <p>{meal.strCategoryDescription.substring(0, 150) + '....'}</p>


        </div>
      })}



    </div>
  )
}

export default MealPage
