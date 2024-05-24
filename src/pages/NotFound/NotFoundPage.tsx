import "./index.css";
interface NotFoundPageProps {
  message?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  message = "Page not found!",
}) => {
  return (
    <div className="not-found">
      <h1>404 Error</h1>
      <p>{message}</p>
    </div>
  );
};

export default NotFoundPage;
