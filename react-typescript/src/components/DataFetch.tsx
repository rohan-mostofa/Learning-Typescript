import React from 'react';

// union type
type DataFetchProps = {
    status : 'loading' | 'error' | 'success'
}

const DataFetch = ({status} : DataFetchProps) => {

    if(status === 'loading'){
        return <h3>Data is loading...</h3>
    }else if(status === 'error'){
        <h3>Data could not found!</h3>
    }

  return (
    <>
        <div>
            <h3>Data fetched successfully!</h3>
        </div>
    </>
  )
}

export default DataFetch;
