import React, { useState } from 'react';
import './Operation.styl'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';

const DefaultData = {
  colors: ['#80d8ff', '#ffd180', '#b2ff59', '#ffbb66']
}

const methods = {
  ColorGetFn(e: React.ChangeEvent<HTMLInputElement>, setColors: Function) {
    const ele = document.querySelector('#colorInput') as HTMLInputElement
    ele && (ele.value = e.currentTarget.value)
    setColors([e.currentTarget.value, '#ffd180', '#b2ff59', '#ffbb66'])
  },
  ColorInputFn(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.value.length !== 7) return
    const ele = document.querySelector('#colorGet') as HTMLInputElement
    ele && (ele.value = e.currentTarget.value)
  }
}



const Operation: React.FC = () => {
  const [colors, setColors] = useState(DefaultData.colors)
  return (
    <>
      <div className="action-view">
        {colors.map(background => {
          return (
            <CardActionArea key={background} className='block' style={{ background }}></CardActionArea>
          )
        })}
        <div>
        </div>
      </div>
      <input type="color" id="colorGet" onChange={e => methods.ColorGetFn(e, setColors)} />
      <input type="text" id="colorInput" onChange={e => methods.ColorInputFn(e)} />

    </>
  );
}

export default Operation;
