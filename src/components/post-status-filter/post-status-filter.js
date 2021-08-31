// import React from 'react';
// const PostStatusFilter = () =>{
// return (
// <div className="btn-group">
// <button type="button" className="btn btn-info">All</button>
// <button type="button" className="btn btn-outline-secondary">Liked</button>
// </div> 
// )
// }
// export default PostStatusFilter;


import React from 'react';




export default class PostStatusFilter extends React.Component{
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Likes'}
         ]
    }
render(){
    const buttons = this.buttons.map(({name, label}) => {
        const active = this.props.filter === name;
        const clazz = active ? 'btn-info' : 'btn-outline-secondary'
        return (
        <button 
        key={name} 
        type="button" 
        className={`btn ${clazz}`}
        onClick={()=> this.props.onFilterSelect(name)}>{label}</button>
        )
    })
    return (
        <div className="btn-group">
        {/* <button type="button" className="btn btn-info">All</button> */}
        {/* <button type="button" className="btn btn-outline-secondary">Likes</button> */}
        {buttons}
        </div> 
        )
}
}











