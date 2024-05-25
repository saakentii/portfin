
import React, { useState } from 'react';
import './portfolio.css';

function Portfolio() {
  const [work, setWorks] = useState([]);
  const [newWork, setNewWork] = useState({ category: '', title: '', price: '', img: '', url: '' });
  const [filter, setFilter] = useState('*'); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWork(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddWork = () => {
    const id = work.length + 1;
    const newWorkWithId = { ...newWork, id };
    setWorks([...work, newWorkWithId]); 
  };

  const filteredWorks = filter === '*' ? work : work.filter(item => item.category === filter);

  return (
    <div className="work-container">
      <div className="container">
        <br></br>
        <h2>Мои работы</h2>
        <br></br>
        <div className="row">
          <div className="col-md-12 text-center">
            {}
          </div>
        </div>
        <div className="row">
          {filteredWorks.map(item => (
            <div key={item.id} className="col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className="work-item">
                <div className="card">
                  <a href={item.url} className="item-wrap fancybox" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src={item.img} alt={item.title} />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.price}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {}
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <br></br>
              <h2 className="modal-title"></h2>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" className="form-control" value={newWork.title} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="img">Image URL:</label>
                <input type="text" id="img" name="img" className="form-control" value={newWork.img} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="url">URL:</label>
                <input type="text" id="url" name="url" className="form-control" value={newWork.url} onChange={handleChange} />
              </div>
            </div>
            <div className="modal-footer">
              <br></br>
              <button className="btn btn-primary" onClick={handleAddWork}>Добавить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Portfolio;
