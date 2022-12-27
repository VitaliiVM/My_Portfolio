import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {FaTelegram, FaSkype} from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <FaSkype href="https://join.skype.com/invite/e7nWcFzgwsgm"/>
      </div>
      <div>
        <FaTelegram/>
      </div>
      <div>
        <BsInstagram/>
      </div>
    </div>
  )
}

export default SocialMedia;