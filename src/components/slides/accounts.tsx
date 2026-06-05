import { Reveal } from "../reveal";
import { ArrowRightIcon } from "../icons";

export function Accounts() {
  return (
    <section id="company" className="slide bg-ink-900 text-white">
      {/* pink top strip */}
      <div className="absolute inset-x-0 top-0 z-10 h-3 bg-pink-200" />

      <img
        src="/images/accounts.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,16,30,0.92) 0%, rgba(8,16,30,0.7) 40%, rgba(8,16,30,0.2) 75%)",
        }}
      />

      {/* floating colour blobs */}
      <Blob className="right-[18%] top-[26%] bg-pink-400" />
      <Blob className="right-[10%] top-[44%] bg-sun-400" />
      <Blob className="right-[26%] top-[58%] bg-emerald-400" />
      <Blob className="right-[14%] top-[68%] bg-[#F0584A]" />

      <div className="container-page relative z-10 pt-20">
        <Reveal>
          <h2 className="display max-w-xl text-4xl text-white sm:text-5xl lg:text-6xl">
            Accounts tailored to your needs
          </h2>
          <p className="mt-5 max-w-md text-white/80">
            We&apos;re making money work for everyone, so we built different
            accounts for different needs — personal, joint, and savings. Choose
            what fits your life abroad.
          </p>
          <a href="#join" className="btn-light mt-7">
            Get the app <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Blob({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute z-10 hidden h-10 w-10 animate-float rounded-2xl opacity-90 blur-[1px] lg:block ${className}`}
    />
  );
}
