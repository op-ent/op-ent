import Image from 'next/image'
import Logo from '~/../public/logo.svg'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-6">
        <Image src={Logo} alt="Logo d'op-ent" quality={100} className="w-36" />
        <h1 className="sr-only">op-ent</h1>
        <p className="text-slate-400 font-medium text-2xl">
          L{"'"}ENT open-source
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/op-ent/op-ent"
            className="text-white underline text-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            GitHub
          </a>
          <a
            href="https://docs.op-ent.fr"
            className="text-white underline text-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  )
}
