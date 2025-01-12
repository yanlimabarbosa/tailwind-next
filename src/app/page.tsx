
export default function Home() {
  return (
    <div className="p-8 bg-slate-50 h-screen text-slate-900 dark:bg-slate-900 dark:text-slate-100 flex justify-center">
      <div className="max-w-2xl flex flex-col items-center">
        <div className="text-4xl font-bold max-w-md text-center">
          Rapidly build modern websites without ever leaving your HTML.
        </div>
        <p className="font-semibold text-center mt-3 dark:text-slate-400">
          A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
        </p>
        <button className="font-semibold bg-sky-500 text-white rounded py-1 px-3 dark:bg-sky-400 dark:text-sky-950 align-middle mt-3">
          Sign In
        </button>
      </div>
    </div>
  );
}
