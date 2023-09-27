import React from 'react'
import Cards from './Cards'
import { CartShopSimple } from '@/common/Icons'

export default function Courses () {
  return (
    <div className='flex flex-col h-auto justify-around items-center font-mystery-mixed gap-16 mt-10 mb-16'>
      <h2 className='text-4xl'>Nuestros Cursos</h2>
      <Cards title={"UX Research"} buttonTitle={"Ver Curso"} icon={<CartShopSimple width={"16px"} height={"16px"}/>} img={"/img/indonesiaGrande.png"} className={"w-[60%]"}/>
      <Cards title={"UX writing"} buttonTitle={"Ver Curso"} icon={<CartShopSimple width={"16px"} height={"16px"}/>} img={"/img/studio.png"} className={"w-[60%]"}/>
      <Cards title={"Ui Design"} buttonTitle={"Ver Curso"} icon={<CartShopSimple width={"16px"} height={"16px"}/>} img={"/img/tirza.png"} className={"w-[60%]"}/>
    </div>
  )
}
