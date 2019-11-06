import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
  todos:
    [{
      background: '#80d8ff',
      list: [
        {
          content: '第1个区域内 1第1个区域内 1第1个 1',
          done: false,
        },
        {
          content: '第1个区域内 2',
          done: true,
        }
      ]
    },
    {
      background: '#ffd180',
      list: [
        {
          content: '第2个区域内 1',
          done: false,
        }
      ]
    },
    {
      background: '#b2ff59',
      list: [
        {
          content: '第2个区域内 1',
          done: false,
        }
      ]
    },
    {
      background: '#ffbb66',
      list: [
        {
          content: '第2个区域内 1',
          done: false,
        }
      ]
    }]
}

const methods = {
  JsonDeepCopy(obj: object) {
    return JSON.parse(JSON.stringify(obj))
  },
  ColorGetFn(e: React.ChangeEvent<HTMLInputElement>, setTodos: Function) {
    const ele = document.querySelector('#colorInput') as HTMLInputElement
    ele && (ele.value = e.currentTarget.value)
    setTodos([e.currentTarget.value, '#ffd180', '#b2ff59', '#ffbb66'])
  },
  ColorInputFn(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.value.length !== 7) return
    const ele = document.querySelector('#colorGet') as HTMLInputElement
    ele && (ele.value = e.currentTarget.value)
  }
}



const Operation: React.FC = () => {
  type TodoList = {
    content: string,
    done: boolean
  }
  type Todos = {
    background: string,
    list: TodoList[]
  }
  const [todos, setTodos]: [Todos[], Function] = useState(methods.JsonDeepCopy(DefaultData.todos))


  const handleChange = (index1: number, index2: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    // const temp = todos 如果不执行深拷贝，页面无法渲染
    const temp = methods.JsonDeepCopy(todos)
    temp[index1].list[index2].done = event.target.checked
    setTodos(temp);
  };
  return (
    <>
      <div className="action-view">
        {todos.map((todo, index1) => {
          return (
            <div key={index1} className='block' style={{ background: todo.background }}>
              <div className="todo-list">
                {todo.list.map((todo, index2) => (<div className='todo' key={index2}>

                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        checked={todo.done}
                        onChange={handleChange(index1, index2)}
                      />
                    }
                    label={todo.content}
                  />
                </div>))}
              </div>
            </div>
          )
        })}
        <div>
        </div>
      </div>
      <input type="color" id="colorGet" onChange={e => methods.ColorGetFn(e, setTodos)} />
      <input type="text" id="colorInput" onChange={e => methods.ColorInputFn(e)} />
      <br />
      <br />
      <span>分辨率：</span><input type="text" />

    </>
  );
}

export default Operation;
