import "./styles.css";
import profile from "./batman.webp";
import discription from "./discription";
import tech from "./tech";

function HeaderImage() {
  return <img className="picture" src={profile} alt="profile pic" />;
}

function Discription(props) {
  return (
    <div className="discription">
      {props.item.map((item) => (
        <h2>{item.name}</h2>
      ))}
      {props.item.map((item) => (
        <p>{item.about}</p>
      ))}
    </div>
  );
}

function FooterIcon(props) {
  return (
    <div className="skill">
      {props.stack.map((item) => (
        <span className={item.exp}>
          {item.name} {item.emoji}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <HeaderImage />
      <Discription item={discription} />
      <FooterIcon stack={tech} />
    </div>
  );
}
