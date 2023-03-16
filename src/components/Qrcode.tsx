import qrcode from '../assets/images/image-qr-code.png'

const Qrcode = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="bg-white flex flex-col items-center justify-center mt-20 p-4 w-80 rounded-3xl" >
            <img src={qrcode} alt="Qr-code" className="w-72 rounded-xl"/>
            <h2 className="font-bold text-center text-[22px] leading-7 mt-5 mb-3">
                Improve your front-end skills by building projects
            </h2>
            <p className="text-center mb-4 w-64">
                Scan the QR code to visit Frontend 
                Mentor and take your coding skills to the next level
            </p>
        </div>
        <div>
            <p className="text-center mt-8">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://rafaelg-portfolio.netlify.app/">Rafael Guilherme</a>.
            </p>
        </div>
    </div>
  )
}

export default Qrcode