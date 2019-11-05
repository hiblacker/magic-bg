import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
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

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const DefaultData = {
  colors: ['#80d8ff', '#ffd180', '#b2ff59', '#ffbb66'],
  todos:
    [[
      {
        content: '第1个区域内 TODO 1第1个区域内 TODO 1第1个 1',
        done: false,
      },
      {
        content: '第1个区域内 TODO 2',
        done: true,
      }
    ],
    [
      {
        content: '第2个区域内 TODO 1',
        done: false,
      }
    ],
    [
      {
        content: '第3个区域内 TODO 1',
        done: false,
      }
    ],
    [
      {
        content: '第4个区域内 TODO 1',
        done: false,
      }
    ]]
}

const methods = {
  JsonDeepCopy(obj: object) {
    return JSON.parse(JSON.stringify(obj))
  },
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
  const [colors, setColors]: [string[], Function] = useState(methods.JsonDeepCopy(DefaultData.colors))
  type Todo = {
    content: string,
    done: boolean
  }
  const [todos, setTodos]: [Array<Todo>[], Function] = useState(methods.JsonDeepCopy(DefaultData.todos))

  const handleChange = (index1: number, index2: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    todos[index1][index2].done = event.target.checked
    console.log(todos, event.target.checked);
    console.log(DefaultData);
    // TODO: 现在setTodos无法渲染，尝试将todos和colors合并到一起，而不是循环两次
    setTodos(todos);
  };
  return (
    <>
      <div className="action-view">
        {colors.map((background, index1) => {
          return (
            <div key={background} className='block' style={{ background }}>
              <div className="todo-list">
                {todos[index1].map((todo, index2) => (<div className='todo' key={index2}>
                  <GreenCheckbox
                    checked={todo.done}
                    onChange={handleChange(index1, index2)}
                  />
                  {todo.content}
                </div>))}
              </div>
            </div>
          )
        })}
        <div>
        </div>
      </div>
      <input type="color" id="colorGet" onChange={e => methods.ColorGetFn(e, setColors)} />
      <input type="text" id="colorInput" onChange={e => methods.ColorInputFn(e)} />
      <br />
      <br />
      <span>分辨率：</span><input type="text" />

    </>
  );
}

export default Operation;
