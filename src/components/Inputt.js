function Input ({placeholder, label, id, value, inputChange}) {
    return <div className="input">
        <label id={id}>{label}</label>
        <input type="text" className="form-control" placeholder={placeholder} id={id} value={value} onChange={inputChange}/>
    </div>
}

export default Input;