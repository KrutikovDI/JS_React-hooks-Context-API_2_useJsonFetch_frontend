import React, { useState } from 'react'
import { useJsonFetch } from '../hooks/useJsonFetch'

export const GetRequests = (props) => {
  
  const [ {data, isLoading, hasError} ] = useJsonFetch(props.url)
  console.log(data);
  console.log(isLoading);
  console.log(hasError);

  return (
    <div>
      {isLoading ? <div>'идет загрузка'</div> : (hasError==null) ? <>{data}</> : <>{hasError}</>}
    </div>
  )
}