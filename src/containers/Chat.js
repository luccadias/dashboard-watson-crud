import React, { Component } from 'react'
import {messageAssistant} from '../providers/MessageService';
import { timeout } from 'q';

export default class Chat extends Component {

    constructor(props) {
      super(props)
      let params = new URLSearchParams(window.location.search);

      this.state = {
         text:[],
         context: null,
         workspace_id: params.get('id'),
         show: false,
         animation: 'slideInRight'
      }
    }
    

    componentWillReceiveProps(props){
        this.setState({animation: 'slideInRight',show: props.show})
    }
  getAssistant(text){
    let obj = {
      workspace_id: this.state.workspace_id,
      input: {text},
    }
    if(this.state.context !== null) obj.context = this.state.context;
    if(text.trim() !== ''){
      messageAssistant(obj).then(response=>{
        let y = this.state.text
        y.push({status:'output', text:response.data.output.text[0]})
        this.setState({context: response.data.context, text: y})
      }).catch(err=>{
  
      })
    }
  }

  keyPress(e){
    if(e.keyCode == 13){
       let obj = {
           status: 'input',
           text: e.target.value
       }

       let text = this.state.text
       text.push(obj)
       this.setState({text})
       this.getAssistant(e.target.value)
       this.text.value = "";
    }
 }

closeModal(){
    this.setState({animation: 'slideOutRight'})

    let that =this
    setTimeout(function(){ that.setState({show:false}) }, 1000);

}

    render() {
        return (
            this.state.show ?
            <div className={"chat-container " + this.state.animation}>
                <div className="chat-navbar">
                    <p style={{ fontSize: 25 }} className="white-text">Try out</p>
                    <i onClick={()=> this.closeModal()} style={{ cursor: 'pointer' }} class="material-icons small white-text">close</i>
                </div>
                <div className="chat-body">

                {this.state.text.map(element=>{
                    return(
                        <div className={element.status}>
                        <p>{element.text}</p>
                    </div>
                    )
                })}
            
                </div>
                <div className="chat-input">
                    <div class="input-field col s12">
                        <input onKeyDown={(e)=> this.keyPress(e)} class="grey-text" id="assistant" ref={el => this.text = el} type="text"  />
                        <label class="grey-text" for="assistant">Teste o bot</label>
                    </div>
                </div>
            </div>
            :

            null
        )
    }
}
