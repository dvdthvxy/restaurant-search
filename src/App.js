import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Input, Card, Box, Wrapper, Dropdown } from './components';
import { useSelector, useDispatch } from 'react-redux'
import { updateSearchField } from './app/slices/searchFieldSlice'
import { setData, clearData } from './app/slices/restaurantDataSlice'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.restaurantData?.data)
  const searchField = useSelector(state => state.searchField.value)
  const [filter, setFilter] = useState("")
  const [price, setPrice] = useState("")
  const [modifiedData, setModifiedData] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [page, setPage] = useState(1)
  const [entries, setEntries] = useState(0)
  const perPage = 100

  
  function fetchData(pageNumber, searchCriteria) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`http://opentable.herokuapp.com/api/restaurants?page=${page}&per_page=${perPage}&city=${searchCriteria}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setData(result.restaurants))
        setPage(page + 1)
        setEntries(result.total_entries - (perPage * page))
    })
  }

  useEffect(() => {
    if (isSubmitting) {
      setIsSubmitting(false)
      dispatch(clearData())
      fetchData(page, searchField)
    }
  }, [isSubmitting])
  
  
  useEffect(() => {
    if (entries > 0) {
      return fetchData(page, searchField)
    } 
    setPage(1)
    setEntries(0)
  }, [entries])

  useEffect(() => {
    let filteredData;
    if (filter?.length && data?.length) {
      const regex = new RegExp(filter.replace(/[^a-z0-9]/gi, ''), 'gi')
      filteredData = data.filter(item => regex.test(item.name) || regex.test(item.address) || regex.test(item.area))
    }

    filteredData = filteredData || []

    if (price?.length) {
      filteredData = filteredData.filter(item => item.price === parseInt(price))
    }

    if(!filteredData?.length && !price?.length) {
      return setModifiedData(data)
    }

    setModifiedData(filteredData)

  }, [filter, price, data])

  return (
    <div className="App">
      <Wrapper>
        <h1>Restaurant Search</h1>
        <Box>
          <Input
            label="Enter a city" 
            onChange={e => dispatch(updateSearchField(e.target.value))}
            onKeyDown={ e => {
              if(e.keyCode === 13) {
                setIsSubmitting(true)
              }
            }}
          />
          <Button
            aria-label="Search Button"
            onClick={()=>{
              setIsSubmitting(true)
            }}
          >
            Search
          </Button>
        </Box>
        <Box>
            <Input 
              label='Filter Results'
              onKeyDown={ e => setFilter(e.target.value)}
            />
            <Dropdown 
              label='Sort by Price'
              defaultText='Select a Price' 
              options={[1, 2, 3, 4]}
              onChange={ e => {
                setPrice(e.target.value)
              }}
              />
        </Box>
        <Box 
          as='ul'
          padding='0'
          >
          {modifiedData?.length ? modifiedData.map((item, index) => 
            <Card
              tabIndex={0} 
              key={item.id}>
              <h2>{item.name}</h2>
              <p>Address: {item.address}</p>
              <p>Area: {item.area}</p>
              <p>Price: {item.price}</p>
            </Card>
          ) : null}
        </Box>
      </Wrapper>
    </div>
  );
}

export default App;
