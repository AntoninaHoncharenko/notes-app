import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.wrap}>
        <Oval
          height={80}
          width={80}
          color="#6a5acd"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#89888e"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      </div>
    </div>
  );
};
