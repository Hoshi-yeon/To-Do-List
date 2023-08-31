const Button = ({removeFunction, clickSaveButtonHandler, text}) => {
    return (
        <div className='btnAreaTwo'>
            <button className='del' onClick={removeFunction}>삭제하기</button>
            <button className='chk' onClick={clickSaveButtonHandler}>{text}</button>
        </div>
    )
};

export default Button;