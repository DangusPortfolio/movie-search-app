import React from "react";

function SearchMovie() {
  return (
    <div>
      <form>
        <label for='query'className='label'>MOVIE NAME</label>        
        <input name='query' type='text' placeholder='Deadpool 2' />
        <br />
        <button className='button' type='submit'>Search</button>
      </form>
    </div>
  );
}
