import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import User from './components/User';

const App = () => {
  const [users, setUsers] = useState([
    {id: 1, title: '리액트 공부하기', desc: '리액트 기초를 공부해봅시다. 그래도 이건 너무 어렵다.... 오늘 5시까지 할 수 있을까?', isDone: false, text: "완료"},
    {id: 2, title: '리액트는?', desc: '리액트....ㅠㅠㅠ', isDone: true, text: "취소"}
  ]);

  const [title, setTitle] = useState('');   // title에 대한 state
  const [desc, setDesc] = useState('');     // desc에 대한 state
  // const [isDone, setDone] = useState('');   // isDone에 대한 state

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  };

  const descChangeHandler = (event) => {
    setDesc(event.target.value)
  };

  // 추가 버튼
  const clickAddButtonHandler = (event) => {
    if(title === ''){
      alert('내용을 입력해주세요.');
    } else {
      const newUser = {
        id: (users[users.length-1]?.id ?? 0) + 1,
        title,
        desc
      }
    setUsers([...users, newUser]);
    }
  }

  // 삭제버튼
  const removeFunction = (id) => {
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };

  // 완료버튼
  const SaveFunction = (id) => {
    const newUser = users.map((user) => (user.id === id) ? {...user, isDone : !user.isDone, text : user.isDone ? "완료" : "취소"} : {...user});
    setUsers(newUser);
  };


  return (
    <div className='boxArea'>
      <div className='header'>
        <div className='inputArea'>
          <div className='title'>
            제목 <input value={title} type="text" placeholder='제목을 입력하세요.' onChange={titleChangeHandler}/>
          </div>
          <div className='desc'>
            내용 <input value={desc} type="text" placeholder='내용을 입력하세요.' onChange={descChangeHandler}/>
          </div>
        </div>
        <div className='btnArea'>
          <button onClick={clickAddButtonHandler}>추가하기</button>
        </div>
      </div>
      <div className='working'>
        <h2>Working.. ( •̀ ω •́ )✧</h2>
        <div className='workingBox'>
          <div className='box-style'>
              {users.filter(item => !item.isDone).map(item => {
                return (
                  <div className='box'>
                    <User key={item.id} title={item.title} item={item} isDone={item.isDone}/>
                    <Button removeFunction={() => removeFunction(item.id)} clickSaveButtonHandler={() => SaveFunction(item.id)} text={item.text}/>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
      <div className='done'>
        <h2>Done ♪(´▽｀)</h2>
        <div className='doneBox'>
          <div className='box-style'>
                {users.filter(item => item.isDone).map(item => {
                  return (
                    <div className='box'>
                      <User key={item.id} title={item.title} item={item} isDone={item.isDone}/>
                      <Button removeFunction={() => removeFunction(item.id)} clickSaveButtonHandler={() => SaveFunction(item.id)} text={item.text}/>
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
