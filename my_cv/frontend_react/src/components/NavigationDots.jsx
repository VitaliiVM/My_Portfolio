import React from 'react';
const NavigationDots = ({active}) => {
  const dotsArray = ['home', 'about', 'work', 'skills', 'testimonials', 'contact']
  return (
    <div className='app__navigation'>
      {dotsArray.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? {backgroundColor: '#313BAC'} : {}}
        />
      ))}
    </div>
  )
}

export default NavigationDots