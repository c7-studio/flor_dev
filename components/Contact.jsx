import React from 'react'
import { useRouter } from 'next/router'


function Contact() {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center h-screen mx-auto' id="contact">
      <section class="text-white body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-semibold">Get in touch</h1>
            <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
            <div class="flex justify-center">
              <button class="text-white bg-[#6D748D] shadow-lg rounded-md text-sm px-2 py-1.5 mr-2 mb-2" onClick={() => router.push('mailto:florencgmz@gmail.com')}>
                <span>Email me!</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact