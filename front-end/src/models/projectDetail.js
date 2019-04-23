export default function ProjectDetail (projectDetail) {
  this.background = []
  this.features = []

  if (projectDetail) {
    if (projectDetail.background) this.background = projectDetail.background
    if (projectDetail.features) this.features = projectDetail.features
  }
}
