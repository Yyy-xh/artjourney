import React, { useState, useEffect } from 'react';
import '../styles/components/Gallery.scss';
import axios from 'axios';

const Gallery = () => {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        // 使用本地JSON文件作为数据源
        axios.get('/api/artworks.json')
            .then(response => setArtworks(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <section className="gallery">
            <h2>艺术作品展示</h2>
            <div className="art-grid">
                {artworks.map(art => (
                    <div key={art.id} className="art-item">
                        <img src={art.image} alt={art.title} />
                        <div className="art-info">
                            <h3>{art.title}</h3>
                            <p>作者: {art.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
