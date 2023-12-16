import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className="container mx-auto px-[2vw] lg:px-[3vw] h-[91vh] flex justify-center items-center">
        <div>
          <h3 className="text-black-400">Hi,</h3>
          <h3 className="text-black-700 font-bold">I'm Monwer Sadaf.</h3>
          <h3 className="text-black-400">I am a professional Web Developer.</h3>
        </div>
        <div>
          <Image
            src={'/hero_image.jpeg'}
            height={1000}
            width={1000}
            alt="Sadaf Monwer"
          />
        </div>
      </section>
    </>
  )
}
