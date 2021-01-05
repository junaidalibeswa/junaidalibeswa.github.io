import React from 'react';

class CandidateList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            CandidateList:[]
        };
    }

    componentWillMount(){
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
            .then(res => res.json())
            .then((list) => {
                this.setState({
                    CandidateList:list
                })
            },
            (error) => console.log('Error:',error)
            )

            
    }
    handleClick = () => {
        console.log(this.state.CandidateList[0])
    }
    render(){
        const name = this.state.CandidateList
        return (
            <div>   
                <button onClick={this.handleClick} >Click Here</button>
            </div>
        );
    }
}

export default CandidateList;