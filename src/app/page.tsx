export default function Home() {
  return (
    <div className="flex h-screen justify-center bg-slate-50 p-8 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="flex max-w-2xl flex-col items-center">
        <div className="max-w-md text-center text-4xl font-bold">
          Rapidly build modern websites without ever leaving your HTML.
        </div>
        <p className="mt-3 text-center font-semibold dark:text-slate-400">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </p>
        <button className="mt-3 rounded bg-sky-500 px-3 py-1 align-middle font-semibold text-white dark:bg-sky-400 dark:text-sky-950">
          Sign In
        </button>
      </div>
    </div>
  );
}
