import ContentLoader from 'react-content-loader'

const CardLoader = () => (
    <div className="card-loader-container">
  <ContentLoader viewBox="0 0 300 475" height={475} width={300}>
    <rect x="0" y="0" rx="5" ry="5" width="400" height="400" />
  </ContentLoader>
  </div>
)
export default CardLoader