import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import { urlFor, client } from '../../client'
import { AppWrapp, MotionWrapp } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    })
  }, []);
  return (
    <>
      <h2 className='head-text'>i Know that <span> Good Apps</span><br /> Means <span>Good Business</span></h2>
      <div className='app__profiles'>
        {abouts.map((about) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about?._id}
          >
            <img src={urlFor(about?.imgUrl)} alt={about?.tittle} />
            <h2 className='bold-text'
                style={{marginTop: '20px'}}
            >
              {about?.tittle}
            </h2>
            <p className='p-text'
                style={{marginTop: '10px'}}
            >
              {about?.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrapp(
  MotionWrapp(About, 'app__about'),
  'about',
  "app__whitebg"
);