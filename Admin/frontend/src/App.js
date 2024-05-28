import axios from 'axios';

import './App.css';
import { useState } from 'react';

function App() {
  let [adddata, setadddata] = useState({ title: '', content: '', tags: '', images: null });
  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      if (!adddata.title || !adddata.content || !adddata.tags || !adddata.images) {
        alert("Please fill all fields")
      }

      const formData = new FormData();
      formData.append('title', adddata.title)
      formData.append('content', adddata.content)
      formData.append('tags', adddata.tags)
      formData.append('images', adddata.images)

      console.log('FormData:', formData);

      const response = await axios.post('http://localhost:3000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }

      });
      setadddata({ title:'', content: '', tags: '', images: null });

      console.log('Response:', response);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };
  return (
    <div className="App">
      <table>
        <tr>
          <td>
            title:<input
              type='text' name='cat_name' value={adddata.title}
              onChange={(e) => {
                setadddata({ ...adddata, title: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr><td>
          content:<input
            type='text' name='cat_name' value={adddata.content}
            onChange={(e) => {
              setadddata({ ...adddata, content: e.target.value });
            }}
          />
        </td></tr>
        <tr><td>
          tags:<input
            type='text' name='cat_name' value={adddata.tags}
            onChange={(e) => {
              setadddata({ ...adddata, tags: e.target.value });
            }}
          />
        </td></tr>
        <tr>
          <td>
            images: <input type='file'
              name='cat_image'
              onChange={(e) => setadddata({ ...adddata, images: e.target.files[0] })}></input>
          </td>
        </tr>
        <tr><td>
          <input type='submit' onClick={handleAddCategory} value={'submit'} />
        </td></tr>
      </table>
    </div>
  );
}

export default App;
