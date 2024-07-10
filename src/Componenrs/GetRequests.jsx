import React from 'react'
import { useJsonFetch } from '../hooks/useJsonFetch'

export const GetRequests = (props) => {
const [ {data, isLoading, hasError} ] = useJsonFetch(props.url)
console.log(data);
console.log(isLoading);
console.log(hasError);

  return (
    <div>
      {isLoading ? <>'идет загрузка'</> : (hasError==null) ? {data} : {hasError}}
    </div>
  )
}
