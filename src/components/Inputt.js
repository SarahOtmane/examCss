function Input ({placeholder, label, id}) {
    return <div className="input">
        <label id={id}>{label}</label>
        <input type="text" className="form-control" placeholder={placeholder} id={id}/>
    </div>
}

export default Input;