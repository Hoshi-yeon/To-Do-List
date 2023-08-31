const User = ({item}) => {
    return(
        <div key={item.id} className='component-style'>
            <p className="titleName">{item.title}</p>
            <p className="descName">{item.desc} {item.isDone} {item.id}</p>
        </div>
    )
};

export default User;