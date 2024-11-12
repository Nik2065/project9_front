import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const COMMENTS = [
  {
    title: 'comment1',
  },
  {
    title: 'comment2',
  },
  {
    title: 'comment3',
  },
  {
    title: 'comment4',
  },
];



export default function TestPage(){
  const navigate = useNavigate()

    //классический пример замыкания
    /*function getCounter() {
        let counter = 0;
        return function() {
          return counter++;
        }
      }

      let count = getCounter();
      console.log(count());  // 0
      console.log(count());  // 1
      console.log(count());  // 2
      */


      //примеры вложенности функций
      function Counter(){
        let counter = {cnt:0};
        return function increment(operation){
            /*if(operation === 'plus')
            return  counter.cnt += 1;
            else 
            return counter.cnt -= 1;*/

            return function superInner()
            {
                return 10;
            }
        }

      
      }

      let c = Counter();

      const onClick = () => {
        alert('нажали на кнопку')
      }

      const goToPage = () => navigate('/test2')


    return (
    <>
      <button type="button" onClick={onClick} style={{
        background: 'red',
      }}>кнопка</button>
      <button type="button" onClick={goToPage}>на другую струницу</button>
    </>
    )
}


