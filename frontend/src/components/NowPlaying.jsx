import ProgressBar from "./ProgressBar";
import PlayerController from "./PlayerController";
import lentes from "../assets/lentes.jpg"

export default function NowPlaying(props) {
  return (
    <div
      className={`${
        !props.showProgressBar &&
        `fixed bottom-0 left-0 w-full flex flex-row items-center justify-between p-4 rounded-custom-glass bg-glass-light shadow-custom-glass backdrop-blur-md`
      }`}
    >
      <div
        className={`${
          !props.showProgressBar && "flex flex-row items-center space-x-4"
        }`}
      >
        <img
          className={`${
            props.showProgressBar ? "rounded-3xl w-full mb-4" : "rounded-2xl w-16"
          }`}
          src={lentes}
          alt="Music icon"
        />
        <div>
          <h2
            className={`font-bold ${props.showProgressBar ? "text-xl" : "text-base"}`}
          >
            Memórias
          </h2>
          <h3 className={`${props.showProgressBar ? "text-lg" : "text-sm"}`}>
            Yun Li, Biffe, Hakuro, Liwan
          </h3>
        </div>
      </div>
      {props.showProgressBar && <ProgressBar />}
      <PlayerController showControlButtons={props.showProgressBar} />
    </div>
  );
}
