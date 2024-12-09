import ErrorBoundary from "../handleErrors/ErrorBoundary";

const withErrorBoundary = (Component) => {
  return (props) => {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    )
  }
}
export default withErrorBoundary;