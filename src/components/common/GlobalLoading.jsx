import logo from "@/assets/logos/logo.svg";

const GlobalLoading = () => {
  return (
    <section className="relative h-[100dvh] w-[dvw] bg-surface">
      <div className="absolute left-[50dvw] top-[50dvh] translate-x-[-50%] translate-y-[-50%] text-[220px]">
        <i className="fa-solid fa-circle-notch loading-page text-primary "></i>
        <img
          src={logo}
          alt="TvFlix"
          className="absolute left-[110px] top-[36px] w-[130px] translate-x-[-50%]"
        />
      </div>
    </section>
  );
};

export default GlobalLoading;
