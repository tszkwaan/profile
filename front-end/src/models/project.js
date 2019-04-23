import ProjectDetail from '../models/projectDetail.js'

export default function Project (project) {
  this.period = ''
  this.title = ''
  this.tagline = ''
  this.image = ''
  this.detail = new ProjectDetail()

  if (project) {
    if (project.period) this.period = project.period
    if (project.title) this.title = project.title
    if (project.tagline) this.tagline = project.tagline
    if (project.image) this.image = project.image
    if (project.detail) this.detail = project.detail
  }
}
