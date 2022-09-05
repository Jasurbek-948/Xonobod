import React from 'react'
import s from './Header.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import search from '../Header/img/search.png'
const Header = () => {
  return (
    <div>
          <div className={s.block1}>
            <div className={s.section1}>
                <p>Dushanba, 5 Sentyabr 2022, 17:01:33</p>
                <p>Havo harorati +36.9C°</p>
                <InputGroup className={s.inp}>
                    <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    
                    <img src={search} variant="outline-secondary" id="button-addon2"/>
        
                </InputGroup>
            </div>
        </div>
    </div>
  )
}

export default Header