import React, { Component } from 'react'
import {createWorkspace} from '../providers/WorkspaceService'

export default class ModalWorkspace extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         description: ''
      }
    }
    

    postCreateWorkspace(){

        let obj= {
            "name": this.state.name,
            "description": this.state.description
        }
       
        if(this.state.name.trim() != '' && this.state.description.trim() != ''){
            createWorkspace(obj).then(response=>{
                this.props.showModal(true)
            })
        }
      
    }
   
    render() {
        return (
            this.props.show ?
            <div class="containerWorkspace">
                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>Criar Workspace</h4>
                        <div class="row">
                            <div class="input-field col s6">
                                <input onChange={(e)=> this.setState({name: e.target.value})} id="first_name2" type="text" class="validate" />
                                <label class="active" for="first_name2">Nome Workspace</label>
                            </div>
                        </div>
                        <div class="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <textarea onChange={(e)=> this.setState({description: e.target.value})} id="textarea1" class="materialize-textarea"></textarea>
                                        <label for="textarea1">Descrição</label>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                    <div class="modal-footer">
                    <a onClick={()=> this.props.showModal(false)} class="waves-effect waves-light btn">Cancelar</a>
                    <a onClick={()=> this.postCreateWorkspace()} class="waves-effect waves-light btn">Criar Workspace</a>

                    </div>
                </div>
            </div>

            : null
        )
    }
}
