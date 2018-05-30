import React, { PureComponent } from 'react'
import { v1 } from 'uuid'
import './style.css'

const loaderTemplate = () => (
  <div key={v1()} className="userCommitsSidebar__item">
    <h5 className="loading__background loader__name" />
    <p className="loading__background loader__status" />
    <p className="loading__background loader__url" />
  </div>
)

class Commit extends PureComponent {
  renderLoaders = () => {
    let i = 5
    const loaders = []
    while (i > 0) {
      loaders.push(loaderTemplate())
      i -= 1
    }
    return loaders
  }

  render() {
    return (
      <div className="userCommits__sidebar">
        <h2>Repos</h2>
        <div className="userCommitsSidebarItem__wrapper">
          {this.renderLoaders()}
        </div>
      </div>
    )
  }
}

export default Commit
