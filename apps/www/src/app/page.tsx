import Image from 'next/image'
import Logo from '~/../public/logo.svg'

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <Image src={Logo} alt="Logo d'op-ent" quality={100} className="w-36" />
        <h1 className="sr-only">op-ent</h1>
        <p className="text-2xl font-medium text-slate-400">
          L{"'"}ENT open-source
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/op-ent/op-ent"
            className="text-lg text-white underline focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            GitHub
          </a>
          <a
            href="https://docs.op-ent.fr"
            className="text-lg text-white underline focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  )
}
