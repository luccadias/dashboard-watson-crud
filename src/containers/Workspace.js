import React, { Component } from 'react'
import ModalWorkspace from './ModalWorkspace';
import { listWorkspace } from '../providers/WorkspaceService';
import { Link } from "react-router-dom";

export default class Workspace extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showModalWorkspace: false,
      workspaces: [],
      showPage: false
    }
  }

  showModal = (status) => {
    if (status) this.getWorkspace()
    this.setState({ showModalWorkspace: false })
  }

  componentDidMount() {
    this.getWorkspace()
  }

  getWorkspace() {
    this.setState({ workspaces: [] })
    listWorkspace().then(response => {
      console.log(response)
      this.setState({ showPage: true })
      this.setState({ workspaces: response.workspaces })
    }).catch(err => {
      
    })
  }

  render() {
    return (

      <>
        {this.state.showPage ?
          <div class="container">
            <a onClick={() => this.setState({ showModalWorkspace: true })} class="waves-effect waves-light btn-large"><i class="material-icons left">add_circle_outline</i> Criar Workspace</a>
            <div class="row">

              {this.state.workspaces.map(element => {
                return (
                  <div class="col s13 m4">
                    <div class="card">
                      <div class="card-content white-text">
                        <span class="card-title">{element.name}</span>
                        <p>{element.description}</p>
                        <p style={{ fontSize: 10, marginTop: 10 }}>{element.workspace_id}</p>
                      </div>
                      <div class="card-action">
                        <a href="#">Deletar</a>
                        <Link to={{ pathname: '/workspace', search: '?id=' + element.workspace_id }} >Acessar</Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          :
          <div class="containerLoad" >
            <div class="progress">
              <div class="indeterminate blue"></div>
            </div>
            <a onClick={() => window.location.reload()} class="waves-effect waves-light btn-large"> Reload</a>
          </div>
        }
        <ModalWorkspace showModal={(e) => this.showModal(e)} show={this.state.showModalWorkspace} />
      </>
    )
  }
}
