import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Feed, VideoDetails, SearchFeed, ChannelDetails, NavBar } from './Components';


function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <NavBar />
        <Routes>
          < Route path='/' exact element={<Feed />} />
          <Route path='/videos/:id' element={<VideoDetails />} />
          <Route path='/channel/:id' element={<ChannelDetails />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
