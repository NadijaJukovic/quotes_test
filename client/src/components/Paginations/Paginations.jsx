import { Pagination } from '@mantine/core';
import "./Paginations.css";

const Paginations = ({ numOfPages, setPage, page }) => {
  return (
    <div className="pagination">
      <Pagination
        className='pgn'
        total={numOfPages}
        page={page}
        onChange={(value) => setPage(value)}
        color="#D9C1DD"
        style={{
            padding: '10px'
        }}  
      />
    </div>
  );
}

export default Paginations;

