import "./ExploreContainer.css";

interface ContainerProps {
  msg: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ msg }) => {
  return (
    <div id="container">
      <strong>{msg}</strong>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
