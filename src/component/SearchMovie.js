import React from "react";

export default function SearchMovie() {
  return (
    <div>
      <form>
        <label htmlfor='query'className='label'>movie name</label>        
        <input classname='input' name='query' type='text' placeholder='Deadpool 2' />
        
        <button className='button' type='submit'>Search</button>
      </form>
    </div>
  );
}
 