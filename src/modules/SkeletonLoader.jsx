import ContentLoader from "react-content-loader";

export const Skeletonloader = ({ count = 6 }) => (
  <>
    {Array(count)
      .fill()
      .map((_, index) => (
        <div key={index} className="skeleton-wrapper">
          <ContentLoader 
            speed={2} 
            viewBox="0 0 400 600" 
            backgroundColor="#f2f9f7"
            foregroundColor="#6cb9ab"
          >
            <rect x="0" y="0" width="100%" height="70%" />
            <rect x="24" y="calc(70% + 30px)" width="80%" height="30px" />
            <rect x="24" y="0" width="calc(70% + 80px)" height="25px" />
          </ContentLoader>
        </div>
      ))
    }
  </>
)